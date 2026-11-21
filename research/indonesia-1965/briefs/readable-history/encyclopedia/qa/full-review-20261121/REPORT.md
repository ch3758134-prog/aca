# 印尼历史百科｜177篇正式条目逐篇结构审计（2026-11-21）

审查分支：`research/encyclopedia-rebuild-20261114`；对象范围：`v2/`下84人物、71事件、10组织、12地区，共**177篇**。逐篇解析正文段落、同一页面的重复长段、本地链接与有无外部来源链接。各批次原始JSON见 `qa/full-review-20261121/batch-00.json` 至 `batch-13.json`。

**本次结论是结构/深度指标，不是历史事实逐条审稿结论。**短页判据以抽取的正文段落字符数计（不含大段导航和HTML标签）；含引用链接也不表示引文与论断必然对应。

## 分类覆盖

| 分类 | 页面 | 正文字数不足700 | 不足1200 | 未识别独立外链 | 本地失效文件路径 | 重复长段 |
|---|---:|---:|---:|---:|---:|---:|
| people | 84 | 31 | 61 | 11 | 0 | 0 |
| events | 71 | 13 | 49 | 25 | 0 | 0 |
| organizations | 10 | 5 | 5 | 0 | 0 | 0 |
| regions | 12 | 3 | 3 | 2 | 0 | 0 |

## 优先补写：现存正文不足700字符的正式条目

- `people/person-piet-van-staveren.html`：约219字符；直接可识别外部来源链接0个
- `people/person-jan-djong.html`：约390字符；直接可识别外部来源链接0个
- `people/person-winata.html`：约423字符；直接可识别外部来源链接1个
- `events/event-marsinah-suharto-heroes.html`：约428字符；直接可识别外部来源链接0个
- `events/event-recognition.html`：约435字符；直接可识别外部来源链接0个
- `events/event-malari-nkk.html`：约440字符；直接可识别外部来源链接0个
- `people/person-sri-kayati.html`：约460字符；直接可识别外部来源链接2个
- `people/person-van-roijen.html`：约480字符；直接可识别外部来源链接2个
- `regions/central-java.html`：约493字符；直接可识别外部来源链接2个
- `people/person-putmainah.html`：约501字符；直接可识别外部来源链接1个
- `people/person-darsono.html`：约505字符；直接可识别外部来源链接2个
- `people/person-mansergh.html`：约514字符；直接可识别外部来源链接2个
- `people/person-parman.html`：约514字符；直接可识别外部来源链接2个
- `people/person-tuti-gerwani.html`：约528字符；直接可识别外部来源链接1个
- `events/event-surveillance.html`：约531字符；直接可识别外部来源链接1个
- `regions/north-sumatra.html`：约540字符；直接可识别外部来源链接3个
- `people/person-thamrin.html`：约555字符；直接可识别外部来源链接2个
- `events/event-maumere-1953.html`：约562字符；直接可识别外部来源链接0个
- `organizations/org-pni-partindo.html`：约562字符；直接可识别外部来源链接1个
- `events/event-rebellion.html`：约566字符；直接可识别外部来源链接3个
- `events/event-land.html`：约574字符；直接可识别外部来源链接2个
- `events/event-election.html`：约581字符；直接可识别外部来源链接3个
- `organizations/org-lekra.html`：约590字符；直接可识别外部来源链接3个
- `organizations/org-nu-ansor.html`：约590字符；直接可识别外部来源链接3个
- `people/person-mallaby.html`：约591字符；直接可识别外部来源链接2个
- `people/person-soengkono.html`：约596字符；直接可识别外部来源链接2个
- `people/person-soekemi.html`：约597字符；直接可识别外部来源链接1个
- `events/event-new-order-politics.html`：约607字符；直接可识别外部来源链接0个
- `organizations/org-koti.html`：约609字符；直接可识别外部来源链接1个
- `people/person-roem.html`：约610字符；直接可识别外部来源链接2个
- `people/person-dewi.html`：约613字符；直接可识别外部来源链接2个
- `people/person-oetari.html`：约615字符；直接可识别外部来源链接1个
- `events/event-new-order-economy.html`：约615字符；直接可识别外部来源链接0个
- `people/person-pranoto.html`：约616字符；直接可识别外部来源链接2个
- `people/person-hariman-siregar.html`：约617字符；直接可识别外部来源链接4个
- `people/person-soetardjo.html`：约617字符；直接可识别外部来源链接3个
- `people/person-sultan-hb-ix.html`：约627字符；直接可识别外部来源链接3个
- `regions/jakarta.html`：约634字符；直接可识别外部来源链接3个
- `people/person-sneevliet.html`：约637字符；直接可识别外部来源链接3个
- `people/person-amir.html`：约641字符；直接可识别外部来源链接1个
- `people/person-ki-mas-mansyur.html`：约654字符；直接可识别外部来源链接2个
- `people/person-kahar.html`：约659字符；直接可识别外部来源链接2个
- `events/event-1952.html`：约661字符；直接可识别外部来源链接0个
- `people/person-kartosuwiryo.html`：约668字符；直接可识别外部来源链接2个
- `people/person-allen-pope.html`：约676字符；直接可识别外部来源链接3个
- `events/event-formation.html`：约677字符；直接可识别外部来源链接0个
- `people/person-sudirman.html`：约679字符；直接可识别外部来源链接3个
- `people/person-yamin.html`：约681字符；直接可识别外部来源链接2个
- `organizations/org-army.html`：约684字符；直接可识别外部来源链接3个
- `people/person-maraden-panggabean.html`：约689字符；直接可识别外部来源链接2个
- `people/person-ahmad-yani.html`：约698字符；直接可识别外部来源链接2个
- `events/event-uprising.html`：约698字符；直接可识别外部来源链接0个

## 编辑要求

1. 优先补充真实事件的背景、具体参与者、决定、日期、行动经过、后果及可核查来源；禁止重复原文制造篇幅。
2. 对短人物优先补出生与家庭来源、政治活动阶段、组织职务的实际日期、行动责任边界、最后命运；缺档案应明示，不得杜撰。
3. 来源中有直接文件、新闻转引、回忆或作者判断时应分别注明。没有外部链接不一定意味着没有本地原始研究来源；应人工追查。
4. 史料汇总中拥有355项调查并不等于177篇正式词条已完整读入这些调查；后续需逐篇编辑并更新目录来源状态。
5. 结构检查未覆盖跨页#fragment目标是否存在、外部网址实时可达、实际浏览器运行、全文历史论断逐项核对。

## 已知结果

- 本轮抽取的177篇全部存在、可读取；本文记录的本地路径缺失共0个。
- 本轮检测同一页完全相同且长度超过110字符的段落共0条。此法不会发现改写式重复、跨文件重复或多次指向同一来源的问题。
- 新增的专题 `v2/focus-1965-1968-decision-chain.html` 属于跨实体的历史深入导读，**不加入177个正式对象计数**。
