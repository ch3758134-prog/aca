# 印度尼西亚共产主义运动历史百科｜V2关系史重构

**工作分支：** `research/encyclopedia-v2-rebuild-20261124`  
**审查更新：** 2026-11-24｜**状态：可持续研究的审阅版；ONGOING，未学术验收**。

## 当前已核数据规模（第十轮以后）

| 研究对象 | 当前数量 | 定义与限制 |
| --- | ---: | --- |
| 正式事实/主张 `claim-ledger.csv` | **2,891** | 有事实或带出处的主张，不是2,891个已独立核实的历史事实 |
| 登记来源 `source-register.csv` | **1,532** | 访问程度不一；部分只有馆藏目录/摘要，非全文已读 |
| 主阅读的连续历史过程 | **58** | 不预设结局；每项标明实际组织、人员、行动和证据边界 |
| 人物档案 | **147** | 名字/身份有些仅为后出记载；并非完备传记或成员名单 |
| 组织及机构 | **79** | 政党、中央/地方、工会、学校、报刊、妇女与农民团体分别建模 |
| 任职/参会/参与关系 | **94** | 其中**90条**有经适当消歧的人物ID；未确认的人不强行合并 |
| 有性质与时间限制的组织联系 | **68** | 人员交叉不自动等于法定隶属或统一命令 |
| 旧事件档案／研究覆盖记录 | **53／664** | 继承已有资料，不将“建索引”当作课题完成 |

## 阅读方式

- **[独立离线阅读版 standalone.html](standalone.html)**：单个HTML文件，可下载后离线打开；目前包含上述58段过程、147个人物、79组织、94任职、68关系、664覆盖事项及**精选122条正式事实、103份来源**。所有当前正文、任职、组织关系所引用的正式C及S编号已经在该精选包内，其他2,769条事实仍在全库。
- **[全资料可维护版 index.html](index.html)**：保留 `data/`、`app.js`、`style.css` 和所有引用文件后离线打开，可搜索完整**2,891条事实和1,532条来源**；外部档案链接需要联网。此版是当前资料最完整的阅读入口。
- **[生成完整单文件的程序](build_standalone.py)**：在取得仓库完整文件后执行 `python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/build_standalone.py`，将 `index.html` 中所有JS/CSS及全量C/S编入**standalone-full.html**。这是**已提交的生成工具，完整HTML产物尚未成功上传和验收**；请勿将其与已经存在的精选 standalone.html 混同。

## 再生成与校验

仓库根目录可依次使用：

```bash
python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/generate.py
python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/validate_v2.py
python research/indonesia-1965/briefs/readable-history/encyclopedia-v2/build_standalone.py
```

`generate.py` 只从 `../../../archive/records/claim-ledger.csv`、`source-register.csv`、`coverage-matrix.csv` 重新生成专门的数据脚本；**不覆盖人工审校**的 `people-extra*.js`、`organizations*.js`、`roles*.js`、`relations*.js`、`processes-*.js`。其他史料和旧版网页保留。

`validate_v2.py` 以标准库检查正式CSV与JS内容、实体ID及连接、文章C/S引文、精选版与全版数据一致性；命令退出非零表示校验失败。**校验代码已提交，尚未通过仓库文件在Python环境中实跑**；2026-11-24已使用GitHub连接回读资料并独立执行等价的JS静态校验：零缺失关键引用、零重复关键ID、精选单HTML内联脚本21/21可解析。**这不是浏览器端读者验收，也不是史学正确性证明。**

## 最近十轮研究与纠错

1. 原始1921年《Soeara Ra'jat》报刊的两篇文章曾被旧C1583混同：已**原位修正正式C1583并新增C2891**，区分Boedisoetjitro的党纪署名与Semaun、Boedisoetjitro的学校募款文告。
2. 重建1915—1923年铁路工会、ISDV、SI地方机构、编辑/印刷、学校、语言翻译及人员跨组织实践。
3. 为绝大多数可消歧任职记录增稳定人物ID，人物与组织页面可双向跳转。
4. 用1928年殖民西苏门答腊调查资料对照1925年Prambanan不同会议名单及1926年Solok/Sawahlunto/Silungkang地方干部越级求证中央指令；保留原始签字原件缺口。
5. 1966年亚齐记录区分304名被交军方者、约一万名迁离者及其中约四千人的乘船记载，不将其相加或视为已核死者。
6. 正式事实C1583/C2891的更新同步到阅读系统，旧展示覆盖仅留过时数据的守卫提示。
7. 重建1945—1955年BBI、GASBI、GSBV、SOBSI与不同独立工会/WFTU的形成和竞争，新增C2892—C2895。
8. 重建1950年Gerwis六个妇女前身、1954年更名和章程、1961年Djenab带婴儿参会的活动；1951与1954更名时间线冲突登记C2900，新增C2896—C2900。
9. 建立 `validate_v2.py` 与 `build_standalone.py`，对来源和阅读版实施一致性检查；完整单文件仍待成功生成/上传/浏览器验收。
10. 重建1945年BTI发起人、1953年BTI/RTI合并异议（中央人员及五县代表）、1955年STI合并日期与农民互助队的具体农业服务，新增S1540/C2901—C2904。

### 专题证据与审计

- [1914—1924早期人物与报刊原件](notes/1914-1924-early-organization-evidence-20261124.md)
- [1915—1923报刊、铁路、学校与政治翻译](notes/press-labor-school-language-relations-1915-1923.md)
- [1925—1926会议名单冲突与地方通讯](notes/1925-1926-prambanan-participants-local-orders-evidence.md)
- [1945—1955工会的实际形成与多元并存](notes/1945-1955-sobsi-union-formation-and-pluralism-20261124.md)
- [1945—1965 BTI发起者、合并异议和农民互助](notes/1945-1965-bti-founder-dissent-mutual-help-evidence-20261124.md)
- [1950—1961妇女组织与Djenab个案](notes/1950-1961-gerwis-six-groups-organization-and-djenab-20261124.md)
- [1965—1966亚齐地区拘押与迁离](notes/1965-1966-aceh-local-detention-expulsion-evidence.md)
- [自评分、质量缺陷、静态审查与仍待核原件](REBUILD_AUDIT.md)

## 方法及重大缺口

历史的叙述单元须从人的生计、组织选择和实际行动中形成，时间仅是这些行动的证据坐标；拒绝从已知起义、政府更替、镇压结果倒推一切先前动机。正式党员、普通工会会员、同情者、选举职务、会议参与、机关署名与军事指挥权要分开。殖民报告、党派自己回忆、公开报刊、后出学术研究、口述与档案目录必须注明来源形成条件。

**最大的研究缺口仍在：** 1920—1927原始会议签到与逐地会员；1945—1955农工妇组织真实会费、选举、普通劳动者生活；1955—1965各地区党支部、乡村土地登记、宗教及民族主义团体的独立历史；1965后分地区军令、拘押、幸存者家庭、地下与海外联系；1970年后土地与劳工政治延续。真实浏览器可用性、完整单HTML生成产物及原文对照校勘仍未通过验收。

**自评历史研究整体仍未达到成熟交付标准，详见审计；不得以页面、关系或来源数量替代史料充分性。**
