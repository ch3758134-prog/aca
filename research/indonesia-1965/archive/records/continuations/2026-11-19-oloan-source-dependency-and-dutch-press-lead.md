# ONGOING / GOAL仍进行｜Oloan死亡日期与来源依赖复核（2026-11-19）

## 本次实际核读
- Vannessa Hearman, “Guerrillas, Guns, and Knives? Debating Insurgency in South Blitar, East Java, 1967–68”, *Indonesia* 89 (2010), DOI 10.2307/20798215，作者公开全文：https://www.researchgate.net/publication/259855251_Guerrillas_Guns_and_Knives_Debating_Insurgency_in_South_Blitar_East_Java_1967-68 。核读正文第61—65页及注释：第61页引1973-03-02 Munir辩护陈述，第63页引1971年儿童寄养调查第35—36页与1969年军区史第30页；全文涉及Oloan死亡后军方庆祝仪式照片，须再定位照片和原始拍摄日期。该研究是后出学术解释及访谈，不等于1968年军方战报原件。
- Solichan Arif, “Taktik Ublek Telur Kodam Brawijaya Hancurkan PKI Blitar Selatan yang Hendak Bangkit”, *SINDOnews*, 2021-10-01：https://daerah.sindonews.com/newsread/556556/704/taktik-ublek-telur-kodam-brawijaya-hancurkan-pki-blitar-selatan-yang-hendak-bangkit-1633083047 。搜索检索全文可见，直接打开返回403。该文称1968-07-21 Gunung Asem死亡。
- Solichan Arif, *Okezone*, 2023-07-07，全文已打开：https://news.okezone.com/read/2023/07/07/337/2842501/kisah-pki-blitar-selatan-diberangus-pakai-taktik-ublek-telur-kodam-brawijaya?page=all 。同作者同一叙述，不能与2021 SINDOnews当作两份独立佐证；文内提到《Operasi Trisula Kodam VIII/Brawidjaja》军方著作，尚未核读所涉原页。
- STEKOM百科：https://p2k.stekom.ac.id/ensiklopedia/Oloan_Hutapea ，已见其1968-06-30说法，注释指John Roosa (2008)第106页与1968年《Mimbar Penerangan》第67页；百科转录链条非独立原件。
- 新发现待查同期荷兰报纸线索：*Tubantia*, 1968-07-11, “Indonesische communist gedood”，目前仅由英文百科参考书目提供题名日期，**未打开报纸原页**。如果确实报道Oloan死亡，则会对“7月21日才死亡”构成直接时间先后反证；必须先确认报道对象、报纸刊期与正文，不能预设。
- *Koran Sulindo*, 2018-08-07，https://koransulindo.com/blitar-selatan-babak-terakhir-tripanji-vs-trisula/ ，已检索正文，记录Rewang的回顾性叙述；须进一步查采访源头。

## 判断
1968-06-30、1968-07-21和文化部百科“被捕名单”暂保留冲突。2021 SINDOnews、2023 Okezone及其他转载共享作者/叙述，不能累计为独立来源。百科的Roosa与《Mimbar Penerangan》尚未逐页打开。新的1968-07-11荷兰报纸题名仅是**原件定位线索**，尚不是已证实反证。与1968-07-13 Ruslan被捕、07-14 Munir被捕、07-20 Rewang被捕有关的日期也仍需军区战报原页核对。

## 精准未完事项（下一轮直接执行）
1. 查Delpher/荷兰国家图书馆1968-07-11 *Tubantia* “Indonesische communist gedood” 原页，记录版次、页码、通讯社、具体人物及所述事件日期；再查1968-06-30至07-25其他荷文报道。
2. 取得Roosa *Dalih Pembunuhan Massal* (2008) 第106页及《Mimbar Penerangan》1968年第67页，核对“6月30日”究竟是死亡日、报道日还是其他事件日。
3. 取得1969年 *Operasi Trisula Kodam VIII Brawidjaja* 关于Gunung Asem、Oloan及军方庆祝照片的原页，核对日期、人员和死亡方式；并查Hearman 2010全文照片说明。
4. 恢复正式claim-ledger.csv与continuity-status.md的非空内容读取；两者Git blob SHA存在而连接器返回空内容，严禁覆盖。恢复后按正式最大ID及URL/内容去重，合并source-register、claim-ledger、search-log、coverage-matrix和chronology，最后整理成熟中文连续正文。
5. 交替推进1971年南勿里达儿童调查、SOBSI/BTI/Gerwani基层组织及1998年后劳工组织资料，避免持续只追单一人物。

## 技术与提交说明
本次已读AGENTS.md、goal-continuity.md、stage-access.md，source-register.csv、search-log.csv、coverage-matrix.csv及chronology.md前段；claim-ledger.csv与统一continuity-status.md通过utf-8及base64均返回空内容，且SHA非空，故未覆盖；正式四表/chronology/阅读正文**本次未完成并库**。该文件为安全的增量续接记录，非正式S/C/Q/CV注册。GOAL永久OPEN，直到用户明确停止。提交SHA由GitHub返回后在运行报告核实，不在提交前虚构。
