(function(){
"use strict";
var db=window.HIST, main=document.getElementById("main"), menu=document.getElementById("menu");
var state={view:"read",id:"chapter-01",q:"",from:"",to:"",page:0};
var PAGE=35;
var labels={read:"连续历史",legacy:"旧正文备查",chrono:"同期事实记录",organizations:"组织与成员",people:"人物档案",events:"事件与会议",sources:"史料出处",coverage:"研究缺口"};
var smap=new Map(db.sources.map(function(x){return [x.id,x]}));
var cmap=new Map(db.claims.map(function(x){return [x.id,x]}));
var omap=new Map(db.organizations.map(function(x){return [x.id,x]}));
function E(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function low(s){return String(s||"").toLowerCase()}
function safe(u){return /^https?:\/\/[^\s]+$/.test(u||"")?u:""}
function qterms(){return low(state.q).trim().split(/\s+/).filter(Boolean)}
function hits(v){var t=low(v);return qterms().every(function(x){return t.includes(x)})}
function urlFor(view,id){return "#"+view+(id?"/"+encodeURIComponent(id):"")}
function button(txt,view,id){return '<button class="linkbtn" data-go="'+E(view)+'" data-id="'+E(id||"")+'">'+E(txt)+'</button>'}
function tag(txt,cls){return '<span class="tag '+(cls||"")+'">'+E(txt)+'</span>'}
function title(t,d){return '<div class="head"><h2>'+E(t)+'</h2><p>'+E(d)+'</p></div>'}
function stats(){return '<div class="stats">'+[['研究事实',db.claims.length],['来源记录',db.sources.length],['组织档案',db.organizations.length],['人员档案',db.people.length],['事件条目',db.events.length],['覆盖事项',db.coverage.length]].map(function(a){return '<span class="stat"><b>'+a[1]+'</b> '+a[0]+'</span>'}).join("")+'</div>'}
function tools(extra){return '<div class="tools"><input type="search" id="q" placeholder="检索姓名、组织、史实、出处（Enter确认）" value="'+E(state.q)+'" autocomplete="off">'+(extra||"")+'</div>'}
function citeButtons(ids){if(!ids||!ids.length)return tag("本条暂无来源ID","warn");return ids.map(function(id){return button(id,"sources",id)}).join(" &nbsp; ")}
function fact(c){return '<section class="panel fact" id="f'+E(c.id)+'"><div class="kicker">'+E(c.id)+'　·　'+E(c.period||"时间尚待核查")+'</div><div class="fact-text">'+E(c.text)+'</div><div>'+tag(c.type||"事实性质未分类")+tag(c.confidence||"信度待核",/high/i.test(c.confidence||"")?"good":"warn")+'</div><div class="fact-refs">'+citeButtons(c.source_ids)+' &nbsp; <button class="linkbtn" data-expand="'+E(c.id)+'">依据／限制／待查</button></div><div class="detail"><b>依据与限制</b><p>'+E(c.basis||"未记录")+'</p><b>下一步核查</b><p>'+E(c.next||"未记录")+'</p></div></section>'}
function pages(rows,make){var count=rows.length,p=state.page;var subset=rows.slice(p*PAGE,(p+1)*PAGE);return '<div class="count">'+count+' 条匹配 · 当前显示 '+(count?p*PAGE+1:0)+'—'+Math.min(count,(p+1)*PAGE)+'</div><div class="facts">'+(subset.length?subset.map(make).join(""):'<div class="empty">没有符合条件的记录；可尝试减少关键词。</div>')+'</div><div class="pager"><button class="btn" data-page="-1" '+(p?"":"disabled")+'>上一页</button><span class="micro">'+(p+1)+' / '+Math.max(1,Math.ceil(count/PAGE))+' 页</span><button class="btn" data-page="1" '+((p+1)*PAGE<count?"":"disabled")+'>下一页</button></div>'}
function roleList(arr){
 if(!arr.length)return '<p class="micro">尚无已整理的逐人任职或会议身份；不能据此判定当时组织不存在成员。</p>';
 return arr.map(function(r){
   var p=r.person_id&&db.people.find(function(x){return x.id===r.person_id});
   var who=p?button(r.person,"people",r.person_id):'<b>'+E(r.person)+'</b>';
   var org=omap.get(r.organization);
   var where=org?button(org.name,"organizations",org.id):tag(r.organization||"所属机构未核","warn");
   return '<div class="role">'+who+' '+tag(r.date)+tag(r.role)+'<p><b>对应机构：</b>'+where+'</p><p>'+E(r.type)+'。'+E(r.evidence)+'</p><div>'+((r.claims||[]).length?r.claims.map(function(id){return button(id,"chrono",id)}).join(" &nbsp; "):tag("未配到现行事实编号","warn"))+'</div></div>';
 }).join("");
}

function processItem(x,idx){
  var persons=(x.people||[]).map(function(id){var p=db.people.find(function(z){return z.id===id});return p?button(p.title.split(/[（(]/)[0],"people",id):tag(id,"warn")}).join("　");
  var orgs=(x.orgs||[]).map(function(id){var o=omap.get(id);return o?button(o.name,"organizations",id):tag(id,"warn")}).join("　");
  var refs=(x.claims||[]).map(function(id){return '<button class="linkbtn" data-go="chrono" data-id="'+E(id)+'">'+E(id)+'</button>'}).join(" &nbsp; ");
  var ext=(x.evidence_urls||[]).filter(function(z){return z&&safe(z.url)}).map(function(z){return '<a href="'+E(z.url)+'" target="_blank" rel="noopener noreferrer">'+E(z.label||"已定位的外部史料")+'</a>'}).join('；');
  return '<article class="panel process" id="'+E(x.id)+'"><div class="kicker">历史过程 '+String(idx+1).padStart(2,"0")+'　'+E(x.period)+'</div><h3 class="process-title">'+E(x.title)+'</h3><div class="reader"><p>'+E(x.body)+'</p></div>'+
  '<div class="process-related"><div><b>涉及的历史组织：</b> '+(orgs||'<span class="micro">本段不预设某组织为唯一主体</span>')+'</div>'+
  '<div><b>可继续调查的人物：</b> '+(persons||'<span class="micro">具体参与人尚未逐名整理</span>')+'</div>'+
  '<div><b>研究事实：</b> '+(refs||tag("该段尚未挂接单项事实编号","warn"))+'</div>'+(ext?'<div><b>可核查史料：</b>'+ext+'</div>':'')+'</div>'+
  (x.note?'<div class="process-limit"><b>证据边界：</b>'+E(x.note)+'</div>':'')+'</article>'
}
function renderProcesses(){
  var items=db.processes||[], selected=items.find(function(x){return x.id===state.id});
  var toc='<details class="panel process-toc" open><summary>浏览具体历史过程（'+items.length+'项）</summary><div class="process-items">'+items.map(function(x,i){return '<button class="process-tab '+(selected&&x.id===selected.id?"selected":"")+'" data-go="read" data-id="'+E(x.id)+'"><span>'+String(i+1).padStart(2,"0")+'</span><span>'+E(x.title)+'</span></button>'}).join("")+'</div></details>';
  var header=title("印度尼西亚共产主义运动及其社会世界","沿具体组织活动、社会生产、人员联系和制度变化阅读。日期是事件发生时的证据坐标，不预设某一次政治危机是此前历史必然要抵达的终点。")+stats();
  var buttons='<div class="process-actions"><button class="btn '+(!selected?"active":"")+'" data-go="read">顺读全部过程</button>　'+button("查某一时期发生的事实","chrono",selected?(selected.period.match(/1[6789]\d{2}|20\d{2}/)||[])[0]||"":"")+'　'+button("对照原有14章","legacy","")+'</div>';
  var caution='<div class="notice">这是以已有史料为基础的重新串联，不宣称所有成员、会议和地方事实已经穷尽。具体任职、报告来源和地区执行有不确定处，均保留证据边界。新增过程是研究目录，不是把社会历史切成预先注定的“阶段”。</div>';
  if(selected){
    var i=items.indexOf(selected);
    return header+buttons+caution+'<div class="process-layout">'+toc+'<div class="process-body">'+processItem(selected,i)+'<div class="pager"><button class="btn" data-go="read" data-id="'+E(items[Math.max(i-1,0)].id)+'" '+(i===0?"disabled":"")+'>上一过程</button><span class="micro">'+(i+1)+" / "+items.length+'</span><button class="btn" data-go="read" data-id="'+E(items[Math.min(i+1,items.length-1)].id)+'" '+(i===items.length-1?"disabled":"")+'>下一过程</button></div></div></div>';
  }
  return header+buttons+caution+toc+'<div class="process-body full">'+items.map(processItem).join("")+'</div><div class="panel"><h3>继续查阅历史关联</h3><p>以上只是已找到事实的连续重组。仍需沿不同组织具体成员、地区机关、工厂和村庄延伸。</p>'+button("组织及当时成员","organizations","")+'　'+button("逐项核查事实来源","chrono","")+'　'+button("查看研究缺口","coverage","")+'</div>';
}

function renderRead(){var cc=db.chapters,cur=cc.find(function(x){return x.id===state.id})||cc[0];state.id=cur.id;return title("印度尼西亚共产主义运动：连续历史阅读","先读实际历史叙事，再沿人物、组织、事件和同期证据继续深入。旧版14章正文已完整迁入；其尚未充分展开的环节会在组织和事实记录中继续校勘。")+stats()+'<div class="notice">当前是百科结构重构版，并非声称14章历史研究已经穷尽。日期不等于预设结局，人物任职与事件参加者必须依据各时期材料认定。</div><div class="panel"><div class="kicker">选择阅读段落</div><div class="chapter-nav">'+cc.map(function(c,i){return '<button class="btn '+(cur.id===c.id?"active":"")+'" data-go="read" data-id="'+E(c.id)+'">'+String(i+1).padStart(2,"0")+'</button>'}).join("")+'</div><div class="line"></div><p class="micro">当前：'+E(cur.title)+'</p><div>'+button("查询该时期的事实","chrono",cur.years[0]||"")+'　'+button("查看组织与成员","organizations","")+'　'+button("查看人物档案","people","")+'</div></div><article class="panel reader">'+cur.html+'</article><div class="panel"><h3>继续查阅</h3><p class="micro">文中旧链接连接到原有完整人物、事件及来源注释；新组织与同期事实记录可按照具体姓名、日期和机关检索。</p>'+button("同期事实记录","chrono",cur.years[0]||"")+'　'+button("来源台账","sources","")+'　<a href="../indonesia-left-history-detailed-archive-1830-2026.html">较详细的既有档案阅读版</a></div>'}
function datePass(c){if(state.from&&(!c.year||c.year<Number(state.from)))return false;if(state.to&&(!c.year||c.year>Number(state.to)))return false;return true}
function renderChrono(){if(/^(\d{4})$/.test(state.id||"")&&!state.from){state.from=state.id;state.to=state.id}var a=db.claims.filter(function(c){return datePass(c)&&(!/^C\d+$/.test(state.id||"")||c.id===state.id)&&hits([c.id,c.text,c.period,c.type,c.basis,c.source_ids.join(" ")].join(" "))}).sort(function(a,b){return (a.year||9999)-(b.year||9999)||a.period.localeCompare(b.period)||a.id.localeCompare(b.id)});return title("同期事实与组织行动记录","研究主张按照材料注明的时期排序，保留原文与证据边界。注意：不同条目使用的日期精度不一致；“1920年代”的记录不是1920年当天发生。")+tools('<input class="year" id="from" type="number" placeholder="起始年" value="'+E(state.from)+'"><input class="year" id="to" type="number" placeholder="截止年" value="'+E(state.to)+'"><button class="btn" data-clear>清空</button>')+'<div class="info">这是原始事实台账的浏览视图，不将后来形成的历史解释伪装成同期行动。部分底稿仍为英文；点来源编号可查看文献名称、访问层级和可靠性限制。</div>'+pages(a,fact)}
function orgSearch(o,c){var t=low(c.text+" "+c.type),aliases=[o.name].concat(o.aliases||[]);return aliases.some(function(a){a=low(a);if(a.length<3)return false;if(/^[a-z0-9]+$/.test(a))return new RegExp("(^|[^a-z0-9])"+a+"(?=$|[^a-z0-9])").test(t);return t.includes(a)})}
function orgRelations(o){var a=(db.relations||[]).filter(function(r){return r.from===o.id||r.to===o.id});if(!a.length)return '';return '<div class="panel"><h3>与其他组织的实际联系、分化或区别</h3><p class="micro">明确关系性质，不将人员往来直接改写成组织隶属或统一指挥。</p>'+a.map(function(r){var other=omap.get(r.from===o.id?r.to:r.from);return '<div class="role"><b>'+E(r.type)+'</b> '+(other?button(other.name,'organizations',other.id):tag('关联机构待补'))+tag(r.period)+'<p>'+E(r.note)+'</p><p>'+citeButtons(r.claims)+'</p></div>'}).join('')+'</div>'}
function orgDetail(o){var rr=db.roles.filter(function(x){return x.organization===o.id}).sort(function(a,b){return a.date.localeCompare(b.date)});var ff=db.claims.filter(function(c){return orgSearch(o,c)}).sort(function(a,b){return (a.year||9999)-(b.year||9999)});return title(o.name,"组织档案，所示期间和成员关系按目前能够核对的材料编排；同名或相关组织并不自动属于统一领导机构。")+'<div class="panel">'+tag(o.kind)+tag(o.period)+'<p class="org-intro">'+E(o.description)+'</p><div>'+o.aliases.map(function(x){return tag(x)}).join("")+'</div></div><div class="panel"><h3>已整理的成员、职务及参会身份</h3><div class="notice">同一人可在不同组织同时活动；参加某次会议不等于成为该组织中央委员。本表不是完整成员名册。</div>'+roleList(rr)+'</div>'+orgRelations(o)+'<div class="panel"><h3>涉及该组织的研究记录</h3><p class="micro">按照组织名称与别名在现有事实记录中匹配；命中仅证明文字提及，不代表该组织统一批准或指挥相关事件。</p></div>'+pages(ff,fact)}
function renderOrgs(){var o=db.organizations.find(function(x){return x.id===state.id});if(o)return orgDetail(o);var a=db.organizations.filter(function(x){return hits(x.name+" "+x.kind+" "+x.period+" "+x.description+" "+x.aliases.join(" "))});return title("组织、派系与历次成员","目前已纳入的组织对象；不同组织的机关、个人成员、附属关系及同盟关系分开记录。")+tools()+stats()+pages(a,function(x){var rr=db.roles.filter(function(r){return r.organization===x.id});return '<div class="panel"><div class="kicker">'+E(x.kind)+' · '+E(x.period)+'</div><h3>'+button(x.name,"organizations",x.id)+'</h3><p>'+E(x.description)+'</p><div>'+tag("已整理 "+rr.length+" 条成员／身份记录")+'</div></div>'})}
function personRoles(p){
 // A source claim with only a surname/alias may not be attached to a person page.
 // Unresolved officers remain visible on the organization page without a false identity link.
 return db.roles.filter(function(r){return r.person_id===p.id;});
}
function personClaims(p){var cn=p.title.split(/[（(]/)[0].trim(),en=(p.title.match(/\(([^)]+)\)/)||[])[1]||"";return db.claims.filter(function(c){return (cn.length>=3&&c.text.includes(cn))||(en.length>=5&&low(c.text).includes(low(en)))}).sort(function(a,b){return (a.year||9999)-(b.year||9999)})}
function renderPeople(){var p=db.people.find(function(x){return x.id===state.id});if(p)return title(p.title,"人物在当时的身份、行动与组织联系应逐条核对。后来的职务不得前移到早年的事件。")+'<div class="panel"><p>'+E(p.description)+'</p>'+(p.legacy_url?'<a href="'+E(p.legacy_url)+'">阅读原有完整人物说明</a>':'<span class="micro">此人已建立索引；原始传记、任职及组织名册仍待继续扩充。</span>')+'</div><div class="panel"><h3>现有任职或参与记录</h3>'+roleList(personRoles(p))+'</div><div class="panel"><h3>史料台账涉及此人的记录</h3><p class="micro">按照中文或拉丁拼写作文本检索，异名可能遗漏，同名可能误命中；不能自动认定成员资格。</p></div>'+pages(personClaims(p),fact);var a=db.people.filter(function(x){return hits(x.title+" "+x.description)});return title("人物档案","现有资料已接入并补充早期关键干部，仍需进一步补充基层干部、工会代表、地方官员及组织成员。")+tools()+pages(a,function(x){return '<div class="panel"><h3>'+button(x.title,"people",x.id)+'</h3><p>'+E(x.description)+'</p></div>'})}
function renderEvents(){
 var e=db.events.find(function(x){return x.id===state.id});
 if(e){
  var where=(e.orgs||[]).map(function(id){var o=omap.get(id);return o?button(o.name,"organizations",id):tag(id,"warn")}).join("　");
  var who=(e.people||[]).map(function(id){var p=db.people.find(function(x){return x.id===id});return p?button(p.title.split(/[（(]/)[0],"people",id):tag(id,"warn")}).join("　");
  var formal=(e.claims||[]).map(function(cid){return button(cid,"chrono",cid)}).join(" &nbsp; ");
  var documents=(e.evidence_urls||[]).filter(function(z){return z&&safe(z.url)}).map(function(z){return '<a class="source-url" target="_blank" rel="noopener noreferrer" href="'+E(z.url)+'">'+E(z.label||"查阅原始资料")+'</a>'}).join("；");
  var previous=e.legacy_url?'<a href="'+E(e.legacy_url)+'">原有事件说明与关联注释</a>':"";
  var connected=e.process_id?'<p><b>连续历史：</b>'+button("查看有关历史过程","read",e.process_id)+'</p>':"";
  return title(e.title,"独立事件档案：史实、行动者与原始来源分层阅读。")+
   '<article class="panel reader"><div class="kicker">'+E(e.period||"日期参见正文")+'</div><p>'+E(e.description).replace(/\n/g,"</p><p>")+'</p>'+
   (e.limitations?'<p class="process-limit"><b>核验边界：</b>'+E(e.limitations)+'</p>':"")+
   (where?'<p><b>涉及组织：</b>'+where+'</p>':"")+(who?'<p><b>相关人物：</b>'+who+'</p>':"")+connected+
   (formal?'<p><b>可追溯的正式事实记录：</b>'+formal+'</p>':"")+
   (documents?'<p><b>证据定位：</b>'+documents+'</p>':"")+
   (previous?'<p>'+previous+'</p>':"")+'</article>';
 }
 var a=db.events.filter(function(x){return hits(x.title+" "+x.description+" "+(x.period||""))});
 return title("事件与会议",db.events.length+"项独立历史事件与会议。组织、参加者、原始文献及其局限需逐项核实。")+
  tools()+pages(a,function(x){return '<div class="panel"><div class="kicker">'+E(x.period||"")+'</div><h3>'+button(x.title,"events",x.id)+'</h3><p>'+E(x.description.slice(0,330))+(x.description.length>330?"…":"")+'</p></div>'});
}
function sharedUrlKey(u){return String(u||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/#.*$/,"").replace(/\/+$/,"")}
function sharedUrlCards(s){var key=sharedUrlKey(s.url);if(!key)return "";var matching=db.sources.filter(function(x){return x.id!==s.id&&sharedUrlKey(x.url)===key});if(!matching.length)return "";return '<div class="panel"><h3>共享来源网址（'+(matching.length+1)+'张登记卡）</h3><p class="micro">这些卡片使用同一网页地址，可能是同一原件的重复登记，也可能分别记录一份汇编中的不同卷项。<b>卡片数不等于独立证据数</b>，应核查具体文书、文件号和来源形成者。</p>'+matching.map(function(x){return '<div>'+button(x.id+" · "+x.title,"sources",x.id)+'</div>'}).join("")+'</div>'}
function renderSources(){var s=smap.get(state.id);if(s){var a=db.claims.filter(function(c){return c.source_ids.includes(s.id)});return title(s.id+" · "+s.title,"来源登记卡：作者、访问程度、局限与所引用的具体主张。")+'<div class="panel"><h3>'+E(s.title)+'</h3><p>'+E(s.creator)+' · '+E(s.date)+'</p>'+tag(s.kind)+tag(s.access)+'<p>'+E(s.note)+'</p>'+(safe(s.url)?'<a class="source-url" target="_blank" rel="noopener noreferrer" href="'+E(s.url)+'">打开原来源网页</a>':'<span class="micro">没有已确认的外部链接</span>')+'</div>'+sharedUrlCards(s)+'<div class="panel"><h3>引用此来源的事实记录（'+a.length+'）</h3></div>'+pages(a,fact)}var a=db.sources.filter(function(x){return hits([x.id,x.title,x.creator,x.date,x.kind,x.access,x.note].join(" "))});return title("史料与出处",db.sources.length+"条史料登记，始终区分原件已读、学术全文、摘要、目录、搜索片段与尚未取得的文件。")+tools()+pages(a,function(x){return '<div class="panel"><div class="kicker">'+E(x.id)+'</div><h3>'+button(x.title,"sources",x.id)+'</h3><p class="micro">'+E(x.creator)+' · '+E(x.date)+'</p>'+tag(x.kind)+tag(x.access)+'<p class="micro">'+E(x.note.slice(0,350))+'</p></div>'})}
function renderCoverage(){var a=db.coverage.filter(function(x){return hits([x.id,x.period,x.topic,x.status,x.note,x.priority].join(" "))});return title("证据范围与调查缺口",db.coverage.length+"项覆盖记录。这些不代表相同数量的已完成专题；不因已写出HTML或已有材料摘要而视为原始事实全部核实。")+tools()+pages(a,function(x){return '<div class="panel"><div class="kicker">'+E(x.id)+' · '+E(x.period)+'</div><h3>'+E(x.topic)+'</h3>'+tag(x.status,"warn")+tag(x.priority)+'<p>'+E(x.note)+'</p><p class="micro">'+E(x.path)+'</p></div>'})}
function draw(){document.getElementById("page-title").textContent=labels[state.view]||"连续阅读";document.getElementById("counts").textContent=db.claims.length+"条事实 · "+db.sources.length+"条来源";menu.querySelectorAll("[data-view]").forEach(function(b){b.classList.toggle("active",b.dataset.view===state.view)});
var f={read:renderProcesses,legacy:renderRead,chrono:renderChrono,organizations:renderOrgs,people:renderPeople,events:renderEvents,sources:renderSources,coverage:renderCoverage}[state.view]||renderRead;main.innerHTML=f();var input=document.getElementById("q");if(input){input.onkeydown=function(e){if(e.key==="Enter"){state.q=input.value;state.page=0;draw()}};input.onchange=function(){state.q=input.value;state.page=0;draw()}}["from","to"].forEach(function(id){var el=document.getElementById(id);if(el)el.onchange=function(){state[id]=el.value;state.page=0;draw()}})}
function go(view,id){state.view=view;state.id=id||"";state.q="";state.from="";state.to="";state.page=0;location.hash="#"+view+(id?"/"+encodeURIComponent(id):"");draw();window.scrollTo(0,0)}
function syncHash(){var m=decodeURIComponent(location.hash.slice(1)).split("/");if(labels[m[0]]){state.view=m[0];state.id=m[1]||"";state.page=0}}
document.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;if(b.dataset.view){go(b.dataset.view,"");return}if(b.dataset.go){go(b.dataset.go,b.dataset.id||"");return}if(b.dataset.expand){var x=document.getElementById("f"+b.dataset.expand);if(x)x.classList.toggle("expanded");return}if(b.dataset.page){state.page=Math.max(0,state.page+Number(b.dataset.page));draw();window.scrollTo(0,0);return}if(b.hasAttribute("data-clear")){state.q="";state.from="";state.to="";state.id="";state.page=0;draw()}})
window.addEventListener("hashchange",function(){syncHash();draw()});
syncHash();
if(!db.claims.length||!db.sources.length||!db.chapters.length||!db.organizations.length){main.innerHTML='<div class="empty">研究数据未全部载入：请下载并保留整个 encyclopedia-v2 目录，不要仅保存 index.html。</div>';return}
draw();
})();