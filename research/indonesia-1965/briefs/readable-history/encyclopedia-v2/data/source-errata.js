// Retained defensive display guard for old snapshots only.
// Canonical C1583 and C2891 were corrected in research/indonesia-1965/archive/records/claim-ledger.csv.
// New builds with corrected canonical records are left untouched.
(function(){
"use strict";
var db=window.HIST||{}, claims=db.claims||[];
var c=claims.find(function(x){return x.id==="C1583"});
if(!c)return;
if(/signed by Semaun as chairman and Boedisoetjitro as secretary/i.test(c.text||"")){
 c.text="1921-04-30《Soeara Ra'jat》第8号p.4—5党纪文章文末署名BOEDISOETJITRO；另p.5—6学校筹设/募款通告由SEMAOEN（主席）、BOEDISOETJITRO（书记）署名，两份文章不得混合。更新版正式事实台账按C1583/C2891独立登记。";
 c.basis="此页面仍装载纠正前的旧数据片段；请更新到含C1583与C2891的正式生成数据。同期来源S891。";
 c.confidence="展示层提示：检测到过时的C1583原始文本，请升级数据文件。";
}
})();