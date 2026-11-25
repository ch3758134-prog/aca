// V2 reviewed corrections. Canonical CSV remains unchanged until safe row-level edit is available.
// These are attributable source-corrections, not new S/C identifiers.
(function(){
"use strict";
var db=window.HIST||{}, claims=db.claims||[];
var row=claims.find(function(x){return x.id==="C1583"});
if(!row)return;
row.text="1921年4月30日《Soeara Ra'jat》第8号第4—5页刊载三宝垄SI关于党纪的文章，文章结束处署名BOEDISOETJITRO。另有独立的学校筹办和募款文告从第5页下半开始、延续至第6页，结尾署名‘A.n. Bestuur S.I. Semarang’，列SEMAOEN为主席、BOEDISOETJITRO为书记。两组署名不能合并为同一篇党纪文章的共同署名；原刊本身不证明全国SI各分会已执行统一处分。";
row.confidence="高：两篇文章的题目、文章边界和署名均可在1921年4月30日同期第8号原扫描第4—6页核对；对其他支部的实际执行仍未查清";
row.basis="V2阅读纠错：原始S891（https://www.marxists.org/indonesia/indones/Suara%20Rakyat/19210430%20Suara%20Rakyat.pdf），扫描p.4—5党纪文末BOEDISOETJITRO；p.5—6另一篇学校文告末SEMAOEN和BOEDISOETJITRO。源CSV C1583尚未安全修订，故展示层明确标注该审校纠正。";
row.next="安全回写正式claim-ledger.csv的C1583，拆为党纪作者、学校募款签署两条不同事实；取得SI分会簿、1921年3月会议记录与全国中央决议，核对不同支部的收文与执行。";
})();
