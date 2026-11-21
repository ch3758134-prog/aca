function buildCanonical(group,name,html){
 const esc=x=>String(x||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
 const clear=s=>String(s||"").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/\s+/g," ").trim();
 const singular={people:"人物",events:"事件",organizations:"组织",regions:"地区"};
 const idPrefix={people:"P",events:"E",organizations:"O",regions:"R"};
 const prefix=group==="people"?"person-":group==="events"?"event-":group==="organizations"?"org-":"";
 const nameID=name.replace(prefix,"").replace(/\.html$/,"");
 const title=clear((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]||name);
 const raw=(html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)||[])[1]||"";
 let body=raw.replace(/(href|src)="([^"]+)"/g,(_,key,url)=>{
   if(/^(?:https?:|mailto:|#|data:|javascript:)/i.test(url))return `${key}="${url}"`;
   if(url.startsWith("../../"))return `${key}="../${url}"`;
   if(url.startsWith("../research-hub/")||url.startsWith("../1965-focus.html")||url.startsWith("../atlas.html")||url.startsWith("../style.css")||url.startsWith("../sukarno-era-left-mainline"))return `${key}="../${url}"`;
   return `${key}="${url}"`;
 });
 let toc=[],counter=0;
 body=body.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi,(_,attrs,label)=>{
   let id=(attrs.match(/\bid=["']([^"']+)/)||[])[1]||`section-${++counter}`;
   toc.push({id,label:clear(label)});
   return `<h2${attrs.includes("id=")?attrs:attrs+` id="${id}"`}>${label}</h2>`;
 });
 const links=[...raw.matchAll(/href=["']([^"']+)["']/g)].map(x=>x[1]);
 function resolve(h){
   if(/^(?:https?:|mailto:|#|data:)/.test(h))return"";
   const parts=[group];for(const s of h.split("#")[0].split("?")[0].split("/")){if(s==="..")parts.pop();else if(s&&s!==".")parts.push(s)}return parts.join("/");
 }
 const related=[...new Set(links.map(resolve).filter(x=>/^(people|events|organizations|regions)\/.+\.html$/.test(x)&&x!==group+"/"+name))].slice(0,50);
 const lede=clear((raw.match(/<p[^>]*>([\s\S]*?)<\/p>/i)||[])[1]).slice(0,230);
 const paragraphs=(raw.match(/<p\b/gi)||[]).length;
 const references=links.filter(x=>/^(?:https?:|.*research-hub\/(?:sources|claims)\/)/.test(x)).length;
 const mid=idPrefix[group]+"-"+nameID;
 const data={id:mid,group,path:group+"/"+name,source_path:group+"/"+name,title,name:title,aliases:[...title.matchAll(/[（(]([^）)]+)[）)]/g)].map(x=>x[1]),summary:lede,period:"待标准化",status:"imported",review_level:paragraphs>=8&&references>=5?"expanded_unreviewed":paragraphs>=4?"medium_unreviewed":"brief_unreviewed",paragraphs,headings:toc.length,reference_links:references,related,issues:raw?[]:["Missing source article"]};
 const tocHtml=toc.map(x=>`<a href="#${esc(x.id)}">${esc(x.label)}</a>`).join("");
 const type=singular[group],id=mid;
 const page=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}｜印尼历史百科</title><link rel="stylesheet" href="../style.css"><meta name="description" content="${esc(lede.slice(0,150))}"></head><body><header class="site"><div class="mast"><a class="wordmark" href="../index.html">印度尼西亚历史百科<small>INDONESIAN HISTORY ENCYCLOPEDIA</small></a><nav class="topnav"><a href="../timeline.html">历史主线</a><a href="../people.html"${group==="people"?' aria-current="page"':""}>人物</a><a href="../events.html"${group==="events"?' aria-current="page"':""}>事件</a><a href="../organizations/index.html"${group==="organizations"?' aria-current="page"':""}>组织</a><a href="../regions/index.html"${group==="regions"?' aria-current="page"':""}>地区</a><a href="../research.html">研究资料</a></nav></div></header><main class="shell"><div class="breadcrumb"><a href="../index.html">首页</a> / <a href="../${group==="people"?"people.html":group==="events"?"events.html":group+"/index.html"}">${type}百科</a> / ${esc(title)}</div><div class="stack"><article class="article"><div class="eyebrow">独立${type}条目 · ${id}</div><h1>${esc(title)}</h1><div class="meta"><span class="pill">原文无损整编</span><span class="pill">${paragraphs}段历史文字</span><span class="pill">${references}个可识别引用</span></div><div class="notice">本页保留既有文章的原始历史叙述，统一为正式百科阅读结构，但尚不能代替每一条历史事实的人工证据复核。引用与争议仍按正文限定条件阅读。</div>${body||`<p>${esc(lede)}</p>`}<hr class="rule"><h2>进一步阅读与史料核查</h2><p><a href="../../${group}/${name}">旧版原始条目</a>　<a href="../research.html">研究报告与正式来源库</a></p></article><aside class="sidebar"><div class="panel"><h2>本文目录</h2>${tocHtml||'<p class="muted tiny">当前稿件尚未建立章节。</p>'}</div><div class="panel"><h2>相关入口</h2><a href="../timeline.html">历史时期</a><a href="../${group==="people"?"people.html":group==="events"?"events.html":group+"/index.html"}">分类索引</a><a href="../relationships.html">历史实体关系</a><a href="../quality.html">内容完成度</a></div></aside></div></main><footer class="footer">原研究卷保留 · 具体事实请按来源核验</footer></body></html>`;
 return {path:group+"/"+name,meta:data,html:page}
}