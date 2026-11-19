# ONGOING / GOAL仍进行 — C87法令索引日期与台账访问审计（2026-11-19）

执行前 main HEAD: `650371b41515996ada942a8634e1d51bf67f0005`。GOAL继续OPEN。本记录为补充证据/访问故障交接，不是正式S/C注册，不替代正式台账。

## 本次直接核读及反证

1. 印尼审计署BPK法规页（直接打开全文元数据）：Keppres 83/1998于**1998-06-05**制定、公布、生效，国家公报LN 1998 No.98。https://peraturan.bpk.go.id/Details/59198/keppres-no-83-tahun-1998 。
2. ILO 1998-06-10当时新闻稿（直接打开正文）称印尼**1998-06-05在雅加达批准**C87，6月10日劳动部长Fahmi Idris向ILO总干事通报。https://www.ilo.org/resource/news/indonesia-pledges-respect-trade-union-rights-ratifies-key-ilo-convention-no 。这不等同ILO正式登记日。
3. ILO NORMLEX搜索索引显示C87正式批准登记为**1998-06-09**，但直接打开动态页重定向失败；既有正式chronology已用ILO GB.273/14及UN Treaty Series区分1998-06-09登记与1999-06-09对印尼生效，故本次**不重复创建**该主张。https://www.ilo.org/dyn/normlex/en/f?p=1000:11200:0::NO:11200:P11200_COUNTRY_ID:102938 。
4. 一份地方政府法规索引（非原签署文本）把Keppres 83/1998列为**1998-06-22**，与BPK法令元数据、ILO同期新闻和转录的法令签署行不一致。https://www.jdih.lebongkab.go.id/public/peraturan_file/PERPRES-KEPPRES-INPRES_%281993-2015%29.pdf 。该索引日期**不应**代替法令签署/生效日；其字段含义和编纂错误原因仍待查。
5. 非官方法令转录含签署人Habibie及国务秘书Akbar Tanjung，署日1998-06-05，并呈现C87第2—5条的工会组织、内部治理、禁止行政解散及国际联合权利。转录存在明显OCR拼写错误，不代替BPK官方扫描。https://law.crpg.info/peraturan/keppres/83/1998 。

## 正式档案状态及去重

已读取AGENTS.md、goal-continuity.md、stage-access.md、正式source-register.csv、search-log.csv、coverage-matrix.csv、archive/records/chronology.md；正式CV400与chronology已有S854/C1520和S483/C827等日期区分，故不重复追加来源或事实。**claim-ledger.csv及continuity-status.md的GitHub读取返回空字符串但blob SHA非空**，无法可靠取得原正文，禁止整文件覆盖；未更改正式四表、chronology或中文阅读正文。此处的新增是6月22日地方索引矛盾及其访问层级核验，未形成足以改变现有连续正文的新结论。

## 精准未完事项

- 取得BPK原始14页PDF的可检索/页图文本，逐页核对法令签署、附录、印刷信息；避免以非官方OCR代替原件。
- 查Lebong地方政府索引第247页表头和编纂规则，确认“22 Juni 1998”究竟是编录错误、文书接收日期或其他字段；不要将其冒充签署日期。
- 获取1998-05-27 PER-05/MEN/1998原文与地方工会登记簿，核对SBSI、PPBI等具体登记/执行，而非从批准C87直接推断实际结社自由。
- 修复claim-ledger.csv与continuity-status.md的读取异常：优先Git对象blob原字节或其他受控读取渠道，核验大小、编码及完整内容，保留历史后再合并。
- 在可完整读取正式台账后按最大现有ID及URL/命题去重，补search-log和coverage-matrix；轮换调查1965—68地方命令、SOBSI/BTI/Gerwani与1970—98组织延续。

本记录写入时不能预知最终提交SHA；提交SHA须通过远程HEAD核验并在后续安全更新统一续接状态。禁止将此记录的前置HEAD误称最终提交。
