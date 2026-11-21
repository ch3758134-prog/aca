# 长期缺口总账｜ONGOING / G1—G10 OPEN
更新：2026-11-20。依据 completeness-audit-2026-11-09.md；此表为持续调查入口，不宣称已核实全部历史。来源访问层级：A=直接打开当事机构原件全文；B=直接打开学术研究全文但原始档案未取得；C=搜索摘要/目录；D=未取得。不得把B/C提升为地方原件。
|项|年代、地区与组织|目前可核材料/等级|缺失原件及下一动作|阻碍|
|---|---|---|---|---|
|G1|1910—1950，PKI/ISDV/SI、工会、1948 Madiun|1927流放研究全文B|1927 Sin Jit Po、殖民流放册、1948内阁与FDR命令|原刊未取|
|G2|1946—1965，SOBSI/BTI/Gerwani/青年/LEKRA；港口、种植园、农村|1958 Gerwani、1963 Api Kartini转录B|工会会费账、企业协定、BTI村级土地册、Gerwani原刊|地方原件缺|
|G3|1965年9—11月，总统、KOTI、军区、广播|中央命令的学术引文B|Kep-1146、T-0265、22/KOTI原件及发送回执|跨机关时间未对齐|
|G4|1965—1968，Aceh、苏门答腊、东中西爪哇、巴厘、Flores、加里曼丹、Sulawesi|东爪哇Leksana 2023开放研究全文B；引用1965-10-21 Perintah Operasi No.05 Pantja Sila及11-30 Radiogram T.715/1965；原件未取|Museum Brawijaya Inventaris 316-a原令与收件登记；各省受害者逐人名册|地区不均衡；学术转引不能替代军令|
|G5|1965后妇女、华裔、宗教社群、家属|Komnas HAM调查总结A（官方调查报告非原始证词）|Komnas Perempuan个案、1967西加里曼丹难民名单、地方证词|名册及原笔录缺|
|G6|1966—1998，Buru、Moncongloe、Kemarau、FBSI/SPSI、PRD|国际特赦组织1980年年度报告全文A（该组织同期原始出版）；记录1979年释放和释放后限制|Kopkamtib释放命令、逐人登记、监视文件、组织转换档|释放数字口径不同|
|G7|1998—2026，PRD、Partai Buruh、工会、幸存者|ILO/NATLEX 2001 KEP.16原文A；2026宪法法院报道A（官方报道，非判决全文）|1998/1999登记规定、2024/2026判决全文、县级工会登记|法律文本不能证明执行|
|G8|1920—2026，英美澳中苏、石油与种植园|美国电报馆藏说明C、FRUS官方编辑记录A（编辑说明）|电报原影印、援助批准与交付单、地方收受记录|意图/执行/效果不能混同|
|G9|各年代人物—组织—地点网络|Flores、Aceh、Banyuwangi研究B|统一人物职务日期表、村庄/营地/工厂地名、相互关系原件|现有索引碎片化|
|G10|全部年代；正式台账及中文正文|审计原文A（项目内部审计）；已定位archive/records正式文件|解决claim-ledger.csv及本文件空正文读取问题；按实际CSV最大ID去重；统一chronology与readable-history|API对非空blob返回空文本，严禁覆盖未经读取文件|

## 2026-11-20 两条实际核验链
**东爪哇 G4/G3：** 已打开Grace T. Leksana, *Memory Culture of the Anti-Leftist Violence in Indonesia* (Amsterdam University Press, 2023), DOI 10.5117/9789463723565 的可见开放全文转录，第二章约99—102页：引述1965-10-21「Perintah Operasi No.05 Pantja Sila」第2—5页，涉及东爪哇行动和六小时报告制度；引述同日「Prinmin No.57/1965」第3—4页，涉及使用支持军方行动的当地平民；1965-11-30「Radiogram T.715/1965」馆藏定位Museum Brawijaya, Inventaris 316-a。访问层级B，**没有取得任何一份1965原始军令**；不可从命令直接推出所有地区执行一致。来源 https://doi.org/10.5117/9789463723565 ；可见文本 https://dokumen.pub/memory-culture-of-the-anti-leftist-violence-in-indonesia-embedded-remembering-9789463723565-9789048554522.html 。
**拘押 G6/G5：** 已打开国际特赦组织 *Amnesty International Report 1980* 原始出版PDF（覆盖1979-05-01至1980-04-30），印尼段落记录该组织对1979年B类囚犯释放的跟踪：1979-04-27至11-21释放7,135人；据该组织转述，1975—1979年官方称释放32,989人；最后105人于1979-12-20获释，国际特赦要求提供名单未获答复。7,135与32,989统计时段不同，不能相加；释放不等于公民权恢复。访问层级A（人权组织同期出版），数字中政府说法仍属转述。https://www.amnesty.org/en/wp-content/uploads/2021/05/POL1000031980ENGLISH.pdf 。
**下一动作：** 精确取得东爪哇10-21号命令及其收发名单、11-30电报；索取1979年最后105人名单及监控规则；并轮换G1殖民流放原刊与G7工会登记县级记录。全部G项持续OPEN。

## 2026-11-20｜G6/G4跨地区释放地理分布与G3地方甄别（ONGOING）
**G6/G4（原始同期发布材料）：** 国际特赦组织1977年《Indonesia》报告附录II全文收录印尼驻伦敦使馆1976-12-01新闻稿No.015/Pen/76，宣布第二批B类释放2,500人，分布苏门答腊1,430、爪哇863、加里曼丹83、苏拉威西80、马鲁古44（合计2,500）；另称1975-12-01第一批1,309人。此处A指已读当时官方新闻稿的再版全文，**数字是政府公告，不是独立释放名册或实际自由证明**；地区数字为释放人员地区分布，不是各地拘押/死亡总数。该报告附录I分类条文说明C1/C2/C3限制程度不同，C3仍受监督及灌输，B类可能被指定居住。原件全文：https://www.amnesty.org/en/wp-content/uploads/2021/06/asa210221977en.pdf 。缺件：No.015/Pen/76原版、1975/1976分省释放名册、营地出入登记、居住限制执行记录。下一动作：追查苏门答腊1,430人按Aceh/北苏门答腊/南苏门答腊及具体营地细分，和Moncongloe/Kemarau/布鲁岛名单比对，防止同批重复计数。
**G3/G4（公开学术文章正文）：** Mathias Hammer《The Organisation of the Killings and the Interaction between State and Society in Central Java, 1965》公开文章正文明确引用KOSTRAD Kep-069/10/1965（地方调查队TEPERDA与拘押者处置）、Kep-70/11/1965（证人证言）、1965-11-15 22/KOTI/1965与1965-12-21 Kep-1/Kopkam/12/1965（调查分类扩展）。这是学术引述B，非军令原件，不能从中央命令直接推断各县实际执行。https://journals.sagepub.com/doi/abs/10.1177/186810341303200303 。缺件：Kopkamtib 1970汇编原文、Klaten各Kodim调查表与处置登记。下一动作：与Aceh 10月11日县议会、东爪哇10月21日命令并排建立机关/命令/收件/执行时间线。
**G1—G10均OPEN**；本条不分配S/C编号，正式claim-ledger.csv读取仍为空，禁止覆盖。其余G1、G2、G5、G7、G8、G9、G10继续按上方总账轮换。来源级别不因检索摘要自动升级。


## 2026-11-20 续核：Aceh逐地受害者与2000年工会登记的制度分界（G4/G5/G7/G9）

**Aceh / G4-G5-G9（1965-10-08—18，Baperki、PKI、BTI、Gerwani、军方）：** 重新直接阅读已正式登记 **S612** 的Jess Melvin 2013年开放学术文章全文（https://journals.sagepub.com/doi/full/10.1177/186810341303200304），与既有**S855**军方年报/Chronologis扫描部分核读记录比对。文章引述《Chronologis 1966》第3页：10月8日Banda Aceh的Pelangi商店、Baperki办公室等遭袭；第4页：10月9日Sigli的商店及Baperki、PKI、LEKRA、Pemuda Rakyat、Gerwani办公处遭破坏。第7页：10月14日Kuala Simpang军方年表称约15,000人参与示威并破坏PKI/Baperki办公室；同日Pulo Tiga还记录对BTI成员房屋的攻击。第8页：10月14日南Aceh的Blang Pidie有5人遇害，其中4人被记录为华裔；Sama Dua另记10人遇害，其中4人被记录为华裔，姓名列为Hap Tjok、Min On、Bun Tok Seng、Sio Nam，但原文又称四人“来自Blang Pidie”，**死亡地点与籍贯/住处不可混同，也不能未经逐人核对直接相加为唯一人数**。10月11日Kodim-0104指挥官Iljas/Ilias Mahmud召集Langsa Baperki领导人；10月18日声明所列148名成员宣布退出和组织解散；148是声明成员数而非受害死亡人数。**证据级别B**：学术全文已直接打开，引用的军方Chronologis原始扫描在此前仅部分页图核读（S855），本次未逐页重开原件；Melvin与S855系同一军方记录证据链，不是两份独立印证。**缺件/行动**：优先调取KITLV M m 941 N+ / Commons 404页扫描中Chronologis原页3、4、7、8及Langsa《Pernjataan 1965》签名和148人附件，逐人对照Blang Pidie、Sama Dua的医院/墓地/家属登记。**阻碍**：地方死亡登记与原始签名页尚未取得；军方自述有选择性；族裔与组织归属不能互推。

**工会 / G7-G6（2000—2001，县市劳动机关、独立工会）：** 重新直接打开已登记**S611**对应的印尼劳工部JDIH官方法条说明（https://jdih.kemnaker.go.id/peraturan/detail/32）与BPK法律记录（https://peraturan.bpk.go.id/Details/44988/uu-no-21-tahun-2000）。官方说明明确2000年第21号法第5条10人可组建工会、第18条书面通知取得登记号、第25条已登记工会有集体谈判及争议代表职能，旧组织一年内须调整。此与此前核读的2001年**KEP.16/MEN/2001**第11条重登记要求构成法规链；**证据级别A（官方法规及官方解释；本次未重新打开25页法案PDF）**。这不是任何县市实际发放登记号的证据，更不能证明SOBSI到新工会的人事连续。**缺件/行动**：取1998 PER.05、1999 KEP.201原件，2000—2002至少两个县市劳动局收件/补件/登记簿及工会章程、负责人名单，核一年期限对原组织的实际影响。**阻碍**：法规与实施档案分离，现有官方网页仅说明法律规则。

**横向持续状态**：G1—G10全部OPEN。G1殖民流放原名单、G2组织基层档、G3跨机关原令、G6监禁释放逐人册、G8外交行动执行单、G9地名人物关系、G10正式C台账大文件读取仍待处理；本条仅复核已登记S612/S855/S611，不新增S/C编号，不把同源学术转引升级为独立证据。


## 2026-11-20｜G3/G8中央指挥权与G4地区暴力：同期美国记录互证限制（ONGOING）

**G3/G8（已直接打开官方出版的同期情报原文）：** 美国CIA Office of Current Intelligence 1965-10-06备忘录 OCI No.2330/65，FRUS 1964–1968卷26第149件，https://history.state.gov/historicaldocuments/frus1964-68v26/d149 ，§3、§6–11、§13–18。文中称10月1日晚Suharto通知各军区接掌陆军指挥；10月2日Sukarno召集军方，宣布亲自掌握军队并任命Pranoto负责陆军行政、Suharto负责恢复安全；10月3日KOTI广播仅称Pranoto“协助总统”。这些是当时美国情报部门所掌握的广播与报告，不等于印尼原始任命书。备忘录还记载Medan亲左报刊10月初继续发行，提示北苏门答腊政治信息空间与雅加达不完全同步；但缺报刊名称、原版日期与实际发行记录。**关键反证约束**：同一备忘录§17–18仍对Aidit是否批准杀害将领表示怀疑，§94–108提出多种假设；不得用后来的单一确定叙述覆盖同期未决判断。访问等级A（同期CIA原文经FRUS正式出版；不等于印尼原始命令），美国机构判断与历史事实分开。缺件：1965-10-01至04印尼广播录音/逐字稿、Sukarno任命书、KOTI原令、Medan各报原刊及地方军区回执。下一步对照Pranoto Kep-1146/10/1965和10月21日东爪哇No.05军令，复原命令签发/转达/执行分层。

**G4/G8（已直接打开FRUS官方编辑说明全文，非所引电报全文）：** FRUS同卷第162件 https://history.state.gov/historicaldocuments/frus1964-68v26/d162 ，明确定位1965-10-29雅加达第1269号电报（Aceh路边展示头颅与尸体入河/海的使馆报告）、11-08第1374号电报（北苏门答腊与Aceh军方及IP-KI青年组织参与清洗的报告）、11-13第1438号与泗水第171号电报（东/中爪哇夜间杀戮与Kediri、Paree数字）。这只是**FRUS编辑者对当时电报的引述**，不是地方逐人死亡记录，也不能把“据报”转为核实人数。尤其同一编辑说明指出10月27日第1215号电报无法确定暴力成因，1966-04-15 A-641仍承认死亡总量难以估计；与后来更确定的叙述需并列。访问等级A（官方编辑说明全文），底层外交电报访问等级C/未逐件打开；缺件：RG84 Lot69 F42 POL23/POL23-9第1269、1374电报，RG59第1438及泗水171号全文，Aceh/Kediri县级死亡、拘押及部队出勤记录。下一动作以电报的报告时间、消息源与地方发生时间三列核对，和Melvin的Aceh 10月8–18日年表交叉，而非用电报替代地方军方原件。

**横向G1—G10：** 早期组织原刊、1950—65群众组织基层执行、1966—98监禁/再组织、1998—2026制度执行及人物地点索引仍OPEN。已查正式source-register含上述FRUS链接，沿用既有来源，不新造S/C编号；claim-ledger.csv仍有非空blob却返回零长度正文，禁止覆盖。中文连续正文须在跨机关原令与地方执行链更成熟后整合，不以本段后台证据说明充当历史章节。


## 2026-11-20｜G8军援执行与G2妇女组织刊物原件定位（ONGOING）

**G8（1962—1967，美国军援；直接核读官方公布的同期原始文件A）：** 重新核读已登记S034/S137/S541的1967-03-01 McNamara致Johnson备忘录FRUS XXVI d232（https://history.state.gov/historicaldocuments/frus1964-68v26/d232，§正文第12—24行）。McNamara称1950—1965年MAP总额6320万美元，1959—1965年约5900万美元，其中约4000万美元用于陆军，包含超过10万件轻武器、约2000辆卡车及其他车辆和通信器材；1962—1964年交付约300万美元军方「公民行动」工程设备。1964-09暂停新装备运输、1965-03取消剩余计划（约2300万美元），但保留已在美国人员培训及联络；1966-09恢复训练（FY67约40万美元），1967-02决定FY67增加200万美元、FY68计划600万美元。**注意数额分别是历史累计、交付、取消、当年决定与次年计划，不得相加**。McNamara自评援助影响军方反共取向，属于当事官员因果判断，不是独立证实的特定屠杀责任链。馆藏RG330 OSD Files FRC72 D2468 Indonesia 1967 091.31 MAP；未取得逐批运单、接收单位与使用登记。

**G8反向核验（同一政府但不同发言人，不算独立第三方）：** 重新直接核读已登记S452/S538的1967-02-17 Green向副总统Humphrey汇报，FRUS d229（https://history.state.gov/historicaldocuments/frus1964-68v26/d229，正文第25—26、38—49行）。Green明确称截至当日新的「公民行动」援助物资尚未交付，等待五角大楼评估；但另称此前紧急援助包已送达。**不能把McNamara的1967-02新增拨款决定当成同日实物交付，也不能把1962—64既有工程设备与1967新一轮援助混成一批**。Green对1965事件与Gerwani的说法是其政治叙述，不得当作事实。下一动作：取FY67 MAP逐项批准/采购/装船/入境/受领清单，对照1966紧急援助包及1962—64旧设备清册；逐人核对McNamara所称2100名受训军人、13名苏哈托核心幕僚，而不是由培训关系推断具体杀戮行为。阻碍：现有文件为美方政策评估，缺印尼接收及地方使用原件。

**G2/G5（1960年Gerwani刊物；仅原刊目录C，未读正文）：** 重新打开已登记S1517的Warung Arsip《Api Kartini》1960年3月第II年第3期目录（https://warungarsip.co/produk/kliping/api-kartini-no-3-th-ii-maret-1960/）。目录称由Jajasan Melati Gerwani出版，28页；列出第4页国际妇女节澳大利亚邀请与Nj Arudji Kartawinata、Nj Hurustiati Subandrio、Nj Rusijati，第5页赫鲁晓夫访印，第14页婴儿健康，第17页Maasje Siwi S关于学习与假期，第19页Mapalus。目录仅证明**刊物标示这些文章与页码**，不能据此断言这些人实际参加活动、Gerwani在具体村庄实施医疗/教育或刊文政治立场。需要取得28页合法PDF并逐页转录第4、14、17、19页，核实作者署名、刊文具体内容、地方组织与实践记录；与Perwari等组织的同期刊物交叉。此刊已登记，禁止重复S编号。

**G1—G10状态：全部OPEN。** 本次两链分别推进G8与G2/G5，不改变其他地区原件缺口；Aceh、北苏门答腊、东中西爪哇、巴厘、Flores、西加里曼丹、Sulawesi继续按总账补地方档。正式claim-ledger.csv仍返回零长度正文，未覆盖、未虚构C编号；CSV/统一时间线/中文正文仍待安全并库。下次优先按原件取得能力追1967年MAP交付台账、Api Kartini原刊，以及Aceh/东爪哇军令及县级登记。


## 2026-11-20 续核｜G4/G5/G9 Flores与G8/G4巴厘外交估算（ONGOING）

**Flores/Sikka/Maumere，1966年2月：S456，B级（本次直接重读开放学术论文PDF，原始回忆录和军令未取得）**。John Mansford Prior, *The Silent Scream... Part One*，2011，https://repository.divinity.edu.au/divinityserver/api/core/bitstreams/662d52ff-005b-4845-918c-959a06ea50d0/content ，刊页125—127、129及脚注28—33。论文转引Jozef Boumans 2005年回忆录：1966-02-09 Kewapante地区负责人Jan Djong据称遭酷刑死亡；02-16 KOMOP负责人Major Soemarno与LtCol Suherman在Ledalero神学院讲话；另转引一名参与者约1973年未刊回忆录：02-20夜Wair-ita首轮所谓“pacification”，02-27 Sikka DPRD-GR会议有KOMOP、调查组、政党及群众组织参加。论文描述KOMOP吸纳Pemuda Katolik、GAMKI、PNI青年及Ansor等，不可据此推定这些组织全体成员或教会整体有相同行动。作者给出的800—2,000死亡估计指Maumere 1966年2—4月，**不是Flores全岛已核死亡总数**；其中具体日期来自回忆录转引，尚需同期监狱簿、死亡登记、KOMOP命令及DPRD-GR会议原件核实。下一步按人核Jan Djong与02-20 Wair-ita被害者，取1970年代未刊参与者记录、Boumans回忆录第81—82页和Sikka会议纪要；与Ende/Bajawa/Adonara分开建地点索引。

**Bali/全国外交统计，1965-12至1966-04：S401及既有FRUS来源，A（外交机关当时文书的公开档案说明）/B（编辑说明）**。美国国家安全档案馆 https://nsarchive.gwu.edu/document/15720-document-24-airgram-408-joint-weeka-no-48 明确定位1965-12-21使馆A-408，档案RG84 Entry P339 Box10 Folder12，馆方说明当时报告全国至少100,000、巴厘至少10,000人死亡。FRUS编辑说明 https://history.state.gov/historicaldocuments/frus1964-68v26/d162 则记1966-02-25 A-527对巴厘估计80,000，并记1966-04-15 A-641承认全国估算在100,000与1,000,000间极不确定。**不能把不同时间/来源口径相加，也不能将使馆估算等同地方死亡名册**；1965-12的10,000与1966-02的80,000是报告时间不同的估算，不自动证明逐月精确增加70,000。A-408 OCR可访问但质量差，待逐页影印核实数字、地理定义及信息来源；A-527、A-641原始电报待取。地方验证须结合巴厘县村埋葬记录、军区部署时间、PNI/PKI组织及幸存者口述，不能将宗教/家族冲突的使馆解释视为事实。

**跨项继续**：G1殖民组织与流放、G2 SOBSI/BTI/Gerwani基层账册、G3总统/军区命令、G6拘押流亡、G7当代工会与幸存者、G8英美澳中苏、G9人物地点组织关联、G10正式CSV与连续中文历史仍OPEN。此次未覆盖零正文的claim-ledger.csv，未新增C/S编号；上述均沿用S456/S401。下一执行首先读取本总账与G1—G10审计，再优先取得Sikka DPRD-GR 1966-02-27会议原件及巴厘A-527全文，同时切换不同地区/年代高价值缺口。


## 2026-11-20｜G4/G6/G9 南苏拉威西拘押与 G2/G5 地方组织遭袭（ONGOING）

**本次复核来源与层级**：直接打开印尼国家人权委员会Komnas HAM《1965—1966严重人权侵害调查结果声明》公开PDF（调查机构正式总结，A：委员会报告本身；不是证人原始笔录），https://www.stopimpunity.org/content/stopimpunity/eksekutif_summary_peristiwa_1965_4.pdf 。第II节列出Maumere、Denpasar Pekambingan、南苏门答腊Kemarau、南苏拉威西Moncongloe、Buru及北苏门答腊Medan Jalan Gandhi等调查地点。委员会称2008-06至2012-04共访谈349名证人/受害者；349是调查取证样本数，绝非死亡人数。Maumere Wairita至少15名被害者、Flores Timur事件约84名被押至现场者、Gelinting证人估计约500死者，**分别是不同地点/不同性质的证词数字，不能相加，84也不能未经原证词核定即视为死亡人数**。委员会的法律判断与个别证词须分开记录；缺件为349份原始证词、地点照片、死亡登记、执行机关文书。此项与前一续查S456 Flores回忆录形成交叉检查，但不能当作对全部数字的独立确认。

**南苏拉威西（1965—1979）**：直接打开Taufik Ahmad 2010年《Survival through slavery》全文 https://www.insideindonesia.org/editions/edition-998/survival-through-slavery （B：研究者访谈/叙事，非营地原始登记）。文中称1965-10-05 Makassar医生Soenarso诊所遭袭，Bone、Wajo、Luwu、Bantaeng等地PKI、SOBSI、BTI及青年组织成员和被指控者遇害；1966年3月省内各拘押点有9,765人，**省级同时在押数不等于Moncongloe营内数、累计逮捕数或死亡数**。作者称1969年底Moncongloe收容859男、52女，共911人，其中846人居营，其余被派往军人住处劳动；数字属于同一作者描述，未由营册独立核验。文章称囚犯开垦土地、修Daya—Moncongloe道路，1978年前多数释放、42人转往Nanga-Nanga。具体可追人物Soenarso、Andi Mappa、Igo Garnida Heri Erianto、Anwar Abbas及兽医Untung；须核身份、职务、事件日期，避免仅凭同名建立关系。

**新取件入口**：直接打开Hasanuddin大学2024年Hendrawan Rahmat Wijaya学位论文馆藏 https://repository.unhas.ac.id/id/eprint/49383/ （C：目录和摘要已读，章节PDF可下载但本次未读；全文链接标注限馆员访问）。作者声称结合政府档案和幸存者访谈研究1969—1977 Moncongloe劳动及隐性抵抗。需进一步打开第1—2章PDF，逐条检查注释所列原始档案/受访者访谈日期，申请全文及口述授权。**不可将馆藏摘要作为独立证明具体营地人数或劳动条件**。

**跨项核验与缺口**：G2/G5追Bone的SOBSI地方负责人、Wajo/Sidrap BTI农民及Makassar被袭诊所，分别查工会干部名册、糖厂Arasoe雇员名册、地方报刊和Kodim档；G4查Bone/Watampone及Bantaeng受害者名册；G6查1969年911人入营、1977年12月20日释放与1978/1979转押批次是否同一统计口径，特别索取SPRIN/802/TPD/XII/1977原件和Moncongloe—Nanga-Nanga转押册；G9对人物/工厂/营地建立稳定地名映射。Komnas HAM摘要另提到Moncongloe证人B的1977-12-20释放令将全面拘押改为居家拘押，**释放并非自动恢复自由**。所有未读原始证词、命令、营册保持D级。

**G1—G10均OPEN**；其余G1殖民组织、G3跨机关命令、G7现代工会、G8外部介入、G10 CSV/中文连续正文仍按上表保留。正式claim-ledger.csv读取仍为空文本（Git blob非空），不覆盖、不造C编号。本次不声称正式CSV、统一时间线或中文正文已同步。下次直接核2024论文公开章节、1977释放命令、1965 Bone/Arasoe糖厂地方记录，随后切换另一地区或G1/G7/G8高价值原件。


## 2026-11-20｜G4/G9西加里曼丹1967地方行动与G6/G7 1996—1997后续暴力（ONGOING）

**1967年西加里曼丹，G4/G5/G9（B：学术专著开放全文转录，非省长档案原件）：** Taufiq Tanasaldy, *Regime Change and Ethnic Politics in Indonesia: Dayak Politics of West Kalimantan* (KITLV Press, 2012), https://www.academia.edu/15049509/Regime_change_and_ethnic_politics_in_Indonesia_Dayak_politics_of_West_Kalimantan 。作者引述省长办公室机密报告《Pengungsian orang2 Tjina sebagai akibat gerakan2 orang Daya dalam daerah Kabupaten Pontianak dan Kabupaten Sambas》(1967，西加里曼丹省长办公室图书馆)：10月5—7日Landak/Air Besar的Tepo村已有华人住宅遭焚毁掠夺，早于常被引用的10月14日；10月13日起Bengkayang周边出现事件，10月18日Bengkayang城约收容1000名难民，10月19日Samalantan传递mangkok merah；11月上旬Senakin、Darit、Sebadu三地据作者引述合计210人死亡，11月17日地方军事指挥官下令停止示威。**全部日期及210人是作者对档案的转述，尚未直接读取原始省长报告，不得认定逐人核定数字。** 缺件：上述1967省长办公室原报告、10月5—7日警察/县政府日志、Senakin/Darit/Sebadu逐人名册、11月17日军令与送达登记。障碍：地点旧行政区划及难民人数与死亡人数混用风险；需要比较不同作者对军方动员与地方政治利益的解释。

**1996—1997年后续冲突，G6/G7/G9（A：HRW 1997-12-01同期公开调查报告全文；其历史回顾不是1967原件）：** Human Rights Watch, *Communal Violence in West Kalimantan*, https://www.refworld.org/reference/countryrep/hrw/1997/en/23874 ，Summary与Background。该报告以1997年1月、7月实地访谈为基础，估计1996年12月至1997年初Dayak—Madurese冲突约500人死亡、约20000名Madurese流离失所；这是HRW当时估计，不是官方逐人核定。HRW回顾1967年约300人死亡、超过55000名华人流离失所，属于其历史综合，不是1967年现场原件；**1967年300与Tanasaldy提及的三个村210不是同一统计范围，绝不能相加。** 报告还要求公开1979年Samalantan和平协议原文，提供跨年代制度连续性取件目标。缺件：1979年协议原文、1996—1997县级死亡及迁徙登记、1997军警出勤和拘押记录；须将两场不同对象的冲突分开建表，不能简单认定同一动因或相同实施者。

**下次精确续接：** (1) 搜索并取得1967年《Pengungsian orang2 Tjina...》省长办公室报告影印，逐条核Tepo/Bengkayang/Samalantan日期；(2) 寻找1967-11-17军令及Senakin/Darit/Sebadu死亡登记；(3) 取得1979 Samalantan和平协议；(4) 转向不同G项，继续核Moncongloe 1977 SPRIN/802/TPD/XII/1977释放令及名册、或G2 Gerwani《Api Kartini》1960原刊。G1—G10仍全部OPEN。本次不分配S/C/Q编号，正式CSV尚未安全并库；不能以学术转引充当原件。


## 2026-11-20｜ONGOING：西加里曼丹边境反叛连续性与1979年Samalantan和平协议（G4/G6/G7/G9，跨年代核验）

**G4/G6/G9，1966—1990西加里曼丹—砂拉越边境：** 直接打开Michael Eilenberg, “Straddling the Border: A Marginal History of Guerrilla Warfare and ‘Counter-Insurgency’ in the Indonesian Borderlands, 1960s–1970s”, *Modern Asian Studies* 45(6), 2011, pp.1423–1463, DOI 10.1017/S0026749X11000230，公开全文PDF https://www.eilenberg.dk/onewebmedia/straddling_the_border_a_marginal_history_of_guerrilla_warfare_and_counterinsurgency_in_the_indonesian_borderlands_1960s1970s.pdf （访问B：学术全文，含2002—2007年田野访谈和引述军史；不是原军令）。作者引军史说明Operasi Sapu Bersih I (1967)、II (1967—1969)、III (1969—1970)，并引1968年东部区Operasi Penghantjuran；军史原件目标：Rachman et al., *Tanjungpura Berdjuang* (1970), pp.239, 295—297、Soemadi (1974) p.93。论文pp.1460—1461进一步指出1973年10月Bong Kee Chok在Simanggang签Sri Aman协议，但派系分歧及边境残存组织不能以该签字一概视为消失；地方回忆及作者引文记1982年Lanjak逮捕、1986年Embaloh投降，需取得拘押卷宗和1982军方劝降传单原件。1968年苏哈托对中国支持的指控仅属当时官方主张，不能直接作为中国实际指挥的证据。注意该论文将TNKU志愿兵回忆中的“1965年解散”与后文政权更替叙述并置，具体日期应以原始军令复核，不能机械固定为1965年政权更替后。下一动作：取1970/1974军史指定页、1968行动命令、1973 Sri Aman签字原件、1982 Lanjak案卷及1986地方口述原始访谈；与1967年华人驱逐事件按地点及组织逐项交叉，不把PARAKU/PGRS、普通华人及Iban混作单一行动者。

**G7/G9，1979年Samalantan—Monterado：** 直接打开印尼语论文第四章公开可见页（Scribd转载，作者完整身份与论文馆藏待核，证据B-/C：二手论文可见章节，部分2013年访谈脚注，非1979年协议原件）：https://id.scribd.com/document/682289716/UPAYA-PENYELESAIAN-PERISTIWA-SENDORENG-DI-KECAMATAN-MONTERADO-DAN-KECAMATAN-SAMALANTAN-KABUPATEN-BENGKAYANG-PROVINSI-KALIMANTAN-BARAT-TAHUN-1979-ol ，印刷页77—80。文中引1979年《Tempo》No.41 p.34称11月13日局势被控制，提及641营、Brimob、Sambas警察、Kodim 1202、Hansip-Wanra；并依据2013-08-22/23口述称县、区两级调解，县级协议在Sambas签署，Samalantan与Monterado后来建纪念碑。与直接核读的Human Rights Watch 1997年报告 https://www.hrw.org/reports/pdfs/i/indonesa/brneo97d.pdf （访问A：1997人权组织原始报告，1979年内容属回顾与访谈）比对：HRW明确当时未找到1979年协议文本，报告关于禁止回迁的条款只是访谈转述；论文的“不得再次伤害双方及其他族群”也只属二手引述。**因此本次找到协议的签署场所和可能签字机关线索，并未找到协议原件，不能宣布取件完成。** 精确追索：1979年Sambas县政府会议记录/签字协议、Tempo No.41 Th.IX p.34、2013年原访谈记录、两处纪念碑铭文；核实双方代表、签署日期、回迁条款有无冲突。1979年达雅克—马都拉冲突与1967年针对华人的驱逐分列，不能合并人数或责任。

**跨G轮换状态：** G1殖民期工会/流放报纸原刊、G2 Gerwani原刊与SOBSI/BTI基层档案、G3中央命令、G4 Aceh/爪哇/巴厘/Flores/苏拉威西、G5受害者名册、G6监禁释放、G7改革后工会、G8英美澳中苏介入、G9人物地方组织与G10可读中文连续正文均保持OPEN。此处不创建S/C编号：正式source-register.csv须逐行去重，claim-ledger.csv API读取空正文而SHA非空，禁止覆盖；正式时间线及中文正文尚待同步。本条仅证据进展与续接，非完成声明。


## 2026-11-20｜G4/G5/G9西加里曼丹难民统计原始出处再定位；G8跨境军事转换（ONGOING）
**G4/G5/G9：** 本次直接打开Davidson与Kammen《Indonesia's Unknown War and the Lineages of Violence in West Kalimantan》（*Indonesia* 73, 2002）康奈尔原刊PDF，既有正式来源[S232]，未重复登记。其难民表格明确转引西加里曼丹省政府供1968年10月17—18日总统访问准备的《Progress Report, Propinsi Kalimantan Barat》**附录VI**：1967年11月营内32,347、亲属寄居27,503、合计59,850；1968年5月24,936+19,005=43,941；8月15,547+12,481=28,028。表格的三次数字是**不同日期的在册存量**，不是新发生的流离失所人数或死亡数，差额不能证明安全返乡。已读B级学术原刊全文；原始省政府附录VI仍未取得，故不能升级为A。原刊 https://ecommons.cornell.edu/bitstreams/4131215c-454f-47f2-8576-71f7abce9e52/download 。既有chronology已经记录此数字与[S232]，本次避免重复追加同一事实。
**G8（与地方暴力不同的跨境机制）：** 同一原刊第56—57页详细区分1963—1965年印尼对马来西亚Konfrontasi下的志愿者训练、Sarawak PGRS与北加里曼丹Paraku、印尼军方部队及PKI支持者；1965年后国家军事目标转向反游击，不能把所有华裔居民视为这些武装的成员。此为学者综合B级，尚缺1963—1967 Kolaga/Koanda/Kodam XII部队调动命令、志愿者名册、英国与马来西亚边境战报、Sarawak组织内部文书。下一动作以**原始省政府1968访总统报告附录VI**与1963—67军令交叉核对，查1967年底营地名单的地名、统计口径、强制迁移和救济死亡记录；并轮换G1殖民组织、G2基层劳工和G6政治犯，不将单省研究代替全国。
**去重/阻碍：** S232已有登记，chronology已有59,850/43,941/28,028，不新增S/C；claim-ledger.csv非空blob仍经内容接口读得0字符，禁止覆盖。G1—G10全部OPEN。


## 2026-11-21｜北苏门答腊棉兰原始外交电报与华盛顿政策判断（G4/G8，持续OPEN）
**G4/G5/G9 北苏门答腊，1965-11-02—16：** 直接打开美国国务院FRUS XXVI **文件174**，1965-11-16 0115Z棉兰领事馆Heavner电报65号，原件馆藏定位NARA RG59 Central Files 1964–66 POL 23–9 INDON；官方出版电报全文可见，**A（美国同期外交报告本身），但其所述当地事件仍是官员所闻与当事人表述，不能当作独立核实的杀戮名册**。电报第1段记述两名Pemuda Pantjasila干部分别向领事官员表态要杀死所抓PKI成员；11月14日棉兰市组织书记称将无视苏加诺等人要求克制的呼吁，并拒绝在被拘者死亡或濒死前移交。第2段转述11月10日报纸刊载一名北苏门答腊议员遭殴打致死的报道；第4段记述针对PNI的敌意；第6段分析还记载11月2日Pemuda Pantjasila与PNI青年短暂冲突、11月9—10日PNI公开活动。电报作者明确承认大规模杀戮报告**可能被严重夸大**，且部分线人身份未公开。不可把暴力威胁、报纸消息和领事判断都写成已独立证实的行为。全文 https://history.state.gov/historicaldocuments/frus1964-68v26/d174 。
**G8/G3 华盛顿，1965-10-22：** 同卷**文件160**为Bundy致Johnson备忘录（10:30 AM华盛顿时间），公开全文将印尼政局变化称作美国长期政策的有利迹象；这是美国高级官员当时的政策评估，**不能单凭此文证明美方指挥棉兰青年组织或当地具体暴力**。全文 https://history.state.gov/historicaldocuments/frus1964-68v26/d160 。两份文书的不同机构、不同日期与证据对象必须分别保留。
**待取原件/核验动作：** 棉兰1965-11-10当地报纸版面、被杀省议员姓名与民事死亡登记、Pemuda Pantjasila棉兰市及北苏门答腊干部名单/会议记录、11月2日与PNI青年冲突警察报告、NARA RG59原影印及FNM-1515/1516；并将1965年11月地区政治暴力与此前种植园土地、工会/BTI组织网络逐县连接，避免只看全国政治。下一跨项优先G1殖民工会与1926—27地方流放原件、G2工会企业档案、G6拘押名单。**正式来源登记中已含d174 URL，禁止重复S编号；正式claim-ledger.csv返回空正文但SHA非空，禁止覆盖或虚构C编号。**
**G1—G10状态：** 仍全部OPEN；本条是新核读与原件缺口，尚未并入正式CSV、统一时间线和中文连续正文。


## 2026-11-21 UTC｜北苏门答腊与1927殖民流放跨G核验（ONGOING）

**G4/G5/G8/G9｜棉兰证据交叉：** 直接复读1965-11-16美国棉兰领馆电报65号，FRUS第174件（https://history.state.gov/historicaldocuments/frus1964-68v26/d174，原始同期电报之官方刊印全文，A级证明“领馆收到这些陈述”，不能独立证明每项指控）。电报称11月14日Pemuda Pantjasila棉兰市书记对领事表示拒绝停止暴力；11月10日报刊称一名北苏门答腊议员遭殴打死亡；另称五具残缺尸体被发现，但媒体将责任归于“PKI恐怖分子”，领馆消息来源则质疑这种宣传。**新增独立核验维度**：直接打开Komnas HAM《Ringkasan Eksekutif Tim Ad Hoc Peristiwa 1965–1966》印尼文全文（https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf），其棉兰证人段落记述证人及Lim Ceng Siang被指Pemuda Pancasila成员拘禁殴打，随后出现Kodim Kota Medan Seksi I Kapten Muhammad Ginting；这是2012年官方调查对证词的整理，不是1965年警局原笔录，且不可把这名证人与11月10日议员或五具尸体擅自合并。下一步对照报告该段前后页的证人身份、日期与案件编号，查11月10日报刊及警方、Kodim登记，定位FNM-1515/1516原文。

**不同G项G1｜1927 Boven Digoel行政流放机制：** 直接打开Boven Digoel县政府历史页（https://mail.bovendigoelkab.go.id/halaman/sejarah/，政府后出回顾全文，B级叙述，不是1927原令）。该页具体记载1927-01-27由L.Th. Becking上尉在Tanah Merah建营、最初14座简易营房、后按A—G营区扩展，并列Sayuti Melik、Hatta、Sjahrir、Mas Marco等不同政治背景流放者。与2021年UIN Sunan Gunung Djati学位论文馆藏摘要（https://digilib.uinsgd.ac.id/46862/，仅摘要C级）比较，可确认后者提出PKI/PARI/PNI等不同组织的流放问题，但不能以摘要证明个人流放时间。政府页面内部含1927首批建设与1927到达顺序含混，1943关闭与后段年份也需复核。**缺件**：1927-01-05总督原令、1927-01-27建营军方日志、船舶Fomalhout/Segah/Reteh乘客表、1927—1935逐人行政流放令及Tanah Merah登记册；核1926起义参与者与其他民族主义流放者的不同法律身份。不得以回顾页代替殖民原件。

**跨G覆盖未闭合**：G2基层SOBSI/BTI/Gerwani，G3军政逐时，G4各省受害名册，G5族群妇女与家属，G6营地及释放，G7当代组织，G8英澳中苏具体行为，G9人物地名，G10正式CSV/中文连续正文仍OPEN。两链本次均未取得新的地方原件；未将二手叙述升级为事实定论。正式claim-ledger.csv接口仍返回0字符而非可靠正文，未触碰正式CSV或自造C/S编号。


## 2026-11-21 UTC｜G8 1965年1月英美首脑通信与G3 10月情报分歧（ONGOING）
**G8（原始外交文书全文A，政策提议≠执行）：** 直接核读FRUS 1964–1968 XXVI, d102，1965-01-25华盛顿国务院电报4596，转发约翰逊拟致英国首相威尔逊信件（NARA RG59 POL 7 INDON；Top Secret/Nodis；Bundy起草、Rusk批准）。美国总统在1月即提出两种外交构想：通过日本等推动马来西亚争端斡旋；或邀请苏加诺访美，借私人会谈影响其政策并试图拉开苏加诺与PKI的关系。这只证实美方形成并发出给伦敦的建议，不证明英国接受、访美邀请实施或产生效果。全文 https://history.state.gov/historicaldocuments/frus1964-68v26/d102 。待取英国外交部收件回电、首相办公室档案、日本外务省接洽及印尼方面会议记录。
**G3/G8（同期外交报告全文A；报告内指控并非独立事实）：** 直接核读FRUS d161，1965-10-26美国大使馆1184号电报。大使Green将苏加诺、Subandrio、Aidit等列为其推断的核心参与者，同时承认中国参与策划“尚未确立”；编辑脚注另引CIA 1965-10-28 OCI No.2342/65，称PKI部分成员参与但领导层角色仍不清楚。两机关几乎同期判断有显著差别，不能选其中一个推论当定论。原文 https://history.state.gov/historicaldocuments/frus1964-68v26/d161 ，尤其正文2、6、7段及脚注2、3。待取10-22 Airgram 300、OCI No.2342/65原件及印尼军方/广播档案；按形成日期区分事发时点、报告时点、后世编辑时点。**本次未取得地方原件，不能用这些美国文件填平G4地方暴力缺口。**
**下一交接：**（1）英国对1965-01-25信件回函与FCO/PREM案卷；（2）OCI No.2342/65全文与10-22 Airgram 300；（3）转回Aceh、北苏门答腊原始Kodim/地方报刊；（4）1927 Boven Digoel流放名册；（5）Gerwani《Api Kartini》1960年3月28页正文。G1—G10均OPEN；正式CSV/chronology/readable-history仍待安全并库，claim-ledger接口空正文障碍未解决。


## 2026-11-21 UTC｜跨地区与外国援助的原始电报核验（G4/G8；OPEN）

**G8／1965-11-05曼谷，FRUS XXVI doc.171，电报920（A，直接打开外交电报全文）：** https://history.state.gov/historicaldocuments/frus1964-68v26/d171 。美国驻曼谷人员向印尼将领Sukendro传达美国愿提供医疗用品的答复；讨论以表面购买方式秘密安排医疗物资，Sukendro医生Achmad Soemantri审阅清单。Sukendro要求继续商议小武器和通信设备，称Firmansjah与Soebianto将赴曼谷提交需求。电报第5段明确称潜在用途是武装中爪哇反PKI的穆斯林与民族主义青年；**这是对用途的外交报告，不是已证明美国交付武器或当地青年收货**。脚注所述11月6日国务院762号电报仅授权听取进一步要求、不暗示超过已批准的医疗用品；仍未获得医疗用品实际装运/交付收据、CAS内部实施文件、青年组织收货记录。必须分离：请求→医疗用品原则批准→安排讨论→实际交付（未证）→地方使用（未证）。

**G4／1965-11-16棉兰，FRUS XXVI doc.174，领事电报65（A，直接打开原始领事电报全文）：** https://history.state.gov/historicaldocuments/frus1964-68v26/d174 。11月14日Pemuda Pantjasila棉兰市书记对领事人员作出针对被捕PKI成员的杀害威胁；电报另称11月10日当地报纸报道一名北苏门答腊议员遭青年殴打致死，领事还报告11月2日Pemuda Pantjasila与PNI青年冲突。**直接证实领事记录了这些言论及消息，不等于地方每项杀戮已经独立证实**；电报引用的FNM-1515/1516未能识别，11月10日报纸、议员姓名、尸检/警察卷宗和组织内部命令未取。地区为北苏门答腊，勿将中爪哇请求与棉兰行动拼接为同一命令链。

**G10实际仓库路径纠正：** 递归Git tree main HEAD 9e424fbd268f23674257e43746c85566eeee3f7f 已确认正式CSV和chronology均在 `research/indonesia-1965/archive/records/`，`project/research-status.md`存在。根路径404不是文件不存在。直接读取`claim-ledger.csv`仍返回空正文而提供blob SHA 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a；禁止覆盖。其余正式CSV读取到的文本为部分内容，未能安全判断当前最大S/C/Q/CV编号，故此次不增正式编号。下一步用Git blob/raw或可靠本地git克隆获取完整台账、确认HEAD及最大编号，再做去重并库；在此之前此条为明确未并库的已核实研究记录。

**精确续接：** 追11月4日Deptel 750、11月6日Deptel 762、11月7日Green 1353和CAS装运账，核验医药品实际交付；另一条独立追棉兰11月10日报纸、FNM-1515/1516、地方警察与受害者身份。轮换G1殖民流放原件、G2工会财务及G6/G7后期组织。G1—G10保持OPEN，未完成。


## 2026-11-21 UTC｜G8通信器材决策链 × G7工会结社及司法挑战（ONGOING）

**G8／1965-11-09—12-17，美国援助的请求—审查—采购链（A级：FRUS刊印同期原始备忘录/电报全文；编辑脚注引用会议纪要属于转引，不是纪要原件）**：直接核读 FRUS XXVI d172 (1965-11-09 CIA memorandum, https://history.state.gov/historicaldocuments/frus1964-68v26/d172)、d173 (1965-11-11 Bangkok telegram 951, https://history.state.gov/historicaldocuments/frus1964-68v26/d173)、d175 (1965-11-17 303 Committee proposal, https://history.state.gov/historicaldocuments/frus1964-68v26/d175)。CIA 11-09备忘录第7—8段认为可以建立秘密资金/物资渠道，却明确当时**不建议立即向印尼军方提供所讨论武器**，要求先查清分发对象、登记和控制办法。11-10 Sukendro与美方会面，11-11电报称其提出雅加达领导人约12套便携电台、从雅加达连至Medan/Palembang/Bandung/Semarang/Surabaya/Makassar/Banjarmasin的语音网，并提及中爪哇战术通信；这些是印尼将领的请求，**不能证明这些地区实际安装设备**。11-17秘密通信方案拟供高层联络及保护，文中第3节称10-13曾从被删节来源提供少量通信器材用于Nasution等警卫；这与11-17新方案不是同一批次。d175脚注引用303委员会11-19纪要称委员会强调不可归属来源并要求寻找旧设备；12-17纪要转述Colby称CIA已找到并购买类似设备，**采购不等于运抵、签收、实际使用**。需取11-19和12-17 303会议纪要原件、采购发票、运输与收货凭证、1965年各军区通信台账。不得把秘密通信网直接写成各省杀戮命令传递网；后者必须用G3/G4地方命令及收发回执独立核验。

**G7／2000—2024工会组织法与诉讼主体（A级仅限政府法令馆藏及法院官方公布的存在/文本说明；判决687页正文尚未逐条核读）**：印尼劳工部JDIH原始法律目录 https://jdih.kemnaker.go.id/peraturan/detail/32/undang-undang-nomor-21-tahun-2000 确认《2000年第21号工会法》2000-08-04颁布并生效，官方摘要指第5条至少10名工人可组建工会、第18条向地方劳工机关书面通知登记、第25条登记工会的集体谈判等权利。原文PDF https://www.peraturan.go.id/files/uu21-2000.pdf 已定位，尚须逐条复核。宪法法院官方2024-10-31新闻 https://www.mkri.id/berita/-21782 与劳工部判决目录 https://jdih.kemnaker.go.id/putusan/detail/149/putusan-mahkamah-konstitusi-nomor-168-tahun-2023 确认168/PUU-XXI/2023案申请方含Partai Buruh、FSPMI、KSPSI、KPBI、KSPI及两名工人；法院部分支持申请并要求单独制定劳动法。法院判决全文可定位 https://peraturan.go.id/files3/putusan-mahkamah-konstitusi-no-168-puu-xxi-2023-tahun-2024.pdf ，本次尚未逐页核对判项、执行进度或县级组织登记。**不得由法律赋权推出地方工会实际成立、存续或获得谈判权**；下一步取地方工会登记号、成员名册、集体合同及2024判决执行法规，对照1998后PRD/Partai Buruh组织网络。

**G1—G10横向审视**：G1殖民流放/工会原件、G2群众组织基层账册、G3军令收发、G4全国各省地方杀戮名册、G5家属及族群证词、G6拘押与释放、G7法律实际执行、G8援助交付、G9人物地点、G10正式台账与中文连续正文仍未闭合。本次两链跨1965及2000—2024年代，G8核验未补足Aceh/爪哇等地方原始命令；继续将其列为高优先级。正式claim-ledger.csv GitHub读取仍空正文，未触碰或虚构C编号；新材料目前仅在本滚动总账，**正式CSV、chronology和中文正文尚未并库**。精准续接：①303委员会1965-11-19/12-17原纪要和通信器材交付；②11-11列出各军区实际通信台账及1965地方命令；③2000工会法第5/18/25条原PDF；④2024判决全文判项与2025—26实施文件；⑤Aceh与北苏门答腊Kodim/受害者地方原件。GOAL持续OPEN。


## 2026-11-21｜G8跨机关通信援助链的关键反证与G4地区执行界限（ONGOING）

**G8（1965-07—1966-06；美、英、印尼军方）：** 直接核读美国国务院官方FRUS第127、128、141、175、211件公开全文，分别为1965-07-20、07-28、09月、11-17及1966-06-17。第127件显示1965年7月美国国务卿腊斯克向英国大使说明准许商业出售约300万美元的固定通信设备；第128件记录英国政府反对；第141件记载截至9月美国公司Philco的三站设备采购提议遭印尼军方拒绝。**这与11月秘密通信援助是不同项目，不得合并为已交付。** 第175件是11月17日秘密通信设备提案；脚注记录12月17日CIA已购得类似设备。**新发现的决定性反证：1966-06-17第211件明确称此前提议的设备并未按原建议交给印尼方（“was not provided ... as originally recommended”），并说明紧急通信系统规模被缩小；同时记载1966-02-26纳苏蒂安相关情报机关请求HF通信设备，已有雅加达库存设备被转用于这一目的。** 因此必须区分批准、购买、库存、转用、最终交付与部署；不能再把1965年12月采购写成1965年原方案全额交付。第211件脚注还记载1966-01-14方案遭否决、1966-06-24另一追加方案获批。来源访问层级A：公开官方文书全文及编者脚注，**303委员会原始会议记录和印尼收货/台站日志仍未取得**。原文：https://history.state.gov/historicaldocuments/frus1964-68v26/d127 ; https://history.state.gov/historicaldocuments/frus1964-68v26/d128 ; https://history.state.gov/historicaldocuments/frus1964-68v26/d141 ; https://history.state.gov/historicaldocuments/frus1964-68v26/d175 ; https://history.state.gov/historicaldocuments/frus1964-68v26/d211 。

**G4/G3（地方机制核验边界）：** 第211件所述通信网络的政策目的涉及军区与下属总部联络，但没有具体Aceh、北苏门答腊、爪哇、巴厘或Flores收发台清单；不能据此推断设备参与某县镇压。缺件：1965-11-19、12-17、1966-01-20、06-24的303委员会会议纪要原件；通信设备采购、库存调拨、签收、安装、台站频率与军区通信日志；地方军令收件回执。下一动作：以第211件脚注档号National Security Council Special Group/303 Committee Files, Minutes定位会议原件；按1966-02-26请求查SAB、Nasution/Suhardjono通信机关台账；同时独立核验Aceh Kodim-0104和东爪哇Museum Brawijaya Inventaris 316-a，不把美方项目替代地方暴力原件。

**G1—G10全部OPEN。** 本条只增补既有缺口总账；正式S/C台账未读到完整正文，不分配新编号，不冒充正式并库。


## 2026-11-21｜G6南苏拉威西新开放章节与G7 2026宪法法院判决（ONGOING）

**G6/G4/G9｜Moncongloe、Makassar、Parepare（1965—1971；访问B：2024年大学论文第1—2章57页及参考文献8页已直接打开；论文其余章节未读）**：Hendrawan Rahmat Wijaya (2024), *Daily Politics Tahanan Politik PKI Dalam Kamp Pengasingan Moncongloe*，哈桑努丁大学馆藏 https://repository.unhas.ac.id/id/eprint/49383/ ，开放章节 https://repository.unhas.ac.id/id/eprint/49383/2/F061181318-1-2(FILEminimizer).pdf ，参考文献 https://repository.unhas.ac.id/id/eprint/49383/3/F061181318-dp(FILEminimizer).pdf 。论文第44—45印刷页脚注39/41记作者于**2023-08-22在Makassar采访Cak Gun**：受访者回忆1965年10月中旬被军人及反共组织成员拘押、先至Kodim 1408，后来转监狱，1969年7月送Moncongloe；其对讯问军人姓氏Lubis/Siregar的记忆明确不确定，不可定为已证实指挥者。第47—48页脚注45/46记作者**2023-08-10在Barru采访A.M. Hustin**：其回忆参加1965-09-28 CGMI第三次大会后遭调查，曾在Barru被拘约一周、获释后每周一到Polres报到；同章第53页脚注65记其叙述Parepare港口、Lakessi墓地、Bojo河采石与道路等强制劳动。第54—55页脚注67—69记**2022-09-15 Parepare匿名受访者“Pasrah”**叙述约1970年代被传唤、1971选举前后转送Moncongloe。**匿名者真实身份不可推测**。这些是作者公开的采访摘录，尚未取得录音/原始笔录、Kodim收押、Barru每周报到册或营地入营册。论文第43页引 **Arsip Kotamadya Ujung Pandang Reg.853（1965-10-07）**、第48页引**Reg.937**，参考文献还列**Arsip Muhammad Saleh Lahade Reg.441**及A.M. Hustin私人日记；这些是原件定位线索，**并非本次直接读到的档案**。与此前S1521 Ahmad 2013、S1522 Rusdianto 2020比较，新采访人名及2022/2023采访日期有独立追查价值，但论文重复引用Ahmad的营地规模、其他军方叙述，不能当作第二份独立原始统计。2024论文全文附件页面仍标“Restricted ... until 8 May 2026”，本次只打开开放第1—2章与参考文献，不称已读全文。缺件：2023 Cak Gun/A.M. Hustin录音与采访授权、Pasrah匿名证词原记录、Reg.441/853/937、1965 Kodim 1408与Barru Polres登记、1969 Moncongloe转押名单。行动：按印刷页44、47、53—55脚注逐项向UNHAS及地方档案索取，并与既有Jufri Buape/P.L. Payung/Waris Thahir/Rasjidi Amrah路径去重。阻碍：证词形成距事件数十年、部分姓名模糊、地方档案尚未取得。

**G7｜2024—2026工会立法与司法（访问A：2026年宪法法院192/PUU-XXIV/2026号判决官方全文已打开）**：原件 https://www.mkri.id/public/content/persidangan/putusan/putusan_mkri_14633_1784188576.pdf ，判决首页及第42—45印刷页。该判决于**2026-07-16宣读**，驳回个人申请人针对《2023年第6号法》第156条第1款中雇主支付遣散补偿“wajib”（必须）一词的全部请求；法院明确不能通过本案将雇主的付款责任转移为由BPJS承担的新补偿保障计划。第43页[3.12]重申2024-10-31第168/PUU-XXI/2023号判决要求两年内形成独立劳动法，期限**2026-10-31**；同时引用2026年第167号判决。**法院引用期限及法律后果，不等于本次已核实截至2026-11-20议会是否实际立法或基层工人获得补偿**。与2024年第168号案多家工会/Partai Buruh集体申请不同，2026年第192号案申请人为个人，不得拼接为同一组织诉讼。下一步核印尼国家法律公报2026-10-31后是否公布独立劳动法、DPR议事记录、MK 167/PUU-XXIV/2026全文、地方PHI执行判决及产业工会实际救济；不得将本判决直接推为左翼组织连续性证据。

**G1—G10横向保持OPEN**：G1殖民流放和1948组织原件、G2群众组织基层财务、G3逐时命令、G4 Aceh/北苏门答腊/爪哇/巴厘/Flores地方受害者与军令、G5妇女家属证词、G6营地/释放、G7基层组织实际执行、G8英美澳中苏交付链、G9人名地名、G10正式CSV与连续中文正文仍需核验。本次新增两项分别为地方监禁证词链与当代司法链；**未取得1965地方军令原件**。正式claim-ledger.csv接口返回非空blob SHA但空正文，不覆盖或伪造C号；本次尚未并入正式CSV、chronology或readable-history，属明确归档欠账。下一接力：先调Reg.853/937与A.M.Hustin日记/访谈底稿；核2026-10-31后新劳动法公报；再轮换Aceh Langsa Baperki 148人原件与Gerwani县级学校/BTI土地登记。长期GOAL未完成。


## 2026-11-21｜G2/G5/G4：1963年《Api Kartini》原刊与西爪哇反华骚乱（ONGOING）

**直接打开的同时代原刊（A，OCR全文；扫描原页尚待逐页校对）：** 《Api Kartini》1963年第5—6期，Jajasan Melati，数字馆藏 https://pustaka.taratsa.id/book/api-kartini-1963-no-5-6-majalah-api-kartini/ ，36页OCR https://pustaka.taratsa.id/read/1390/ocr/pdf/ 。本次实际阅读OCR的刊头、目录及文章《Rasialisme harus ditentang》与苏加诺1963-05-19讲话摘录（网页行82—120、151—198）。刊头显示编辑负责人Maasje Siwi，编辑S. Asijah、Darmini、Parjani Pradono；发行地址Matraman Raya 51，Djakarta，另列1963-02-03许可证及“oplah 5000 ex.”，该5000为刊物自报印数，**不是独立审计发行量**。这一原刊能直接证明妇女运动刊物的编辑网络和当时表达的政治议程，不能仅凭刊头证明每位协作者的Gerwani正式职务。

**跨地区反华暴力的当事刊物表述（A仅证明刊物当时如此报道）：** 《Rasialisme harus ditentang》称1963年5月5日Cirebon出现反华骚乱，并列Tegal、Slawi、Bandung、Tasikmalaya、Garut、Sukabumi、Cianjur、Cipanas、Bogor等扩散地点；同时指控前Masyumi/PSI/DI及外国颠覆势力，并提及教师、学生、KOPEM车辆。这些责任归属属于该刊的政治指控，**未经警察、法院、地方报纸独立核实，不得写成已证明的实施者网络**。刊物转录苏加诺1963-05-19 WANI大会讲话，批评反华种族主义并呼吁团结；目前只读到刊物转载，尚非总统讲话原始录音/官方逐字稿。1963年事件与1965—1967暴力属于不同时间机制，不能直接合并。

**G2的基层社会线索：** 同一期目录有“Wanita dan Hari Kebangkitan Nasional”“Apa Tugas Kita Untuk Anak-anak?”及“Kumikijah Buruh Wanita”，后者明确给出女工题材原刊页码15；已定位但尚未核验文章完整语境，不能从标题推断厂名或工会组织。下一步打开扫描第15页，核人名、职业、工厂/地区、是否报道实际工会活动；再与SOBSI、Gerwani基层记录对照。

**G4地区失衡的延伸动作：** 追1963年5月Cirebon/Tegal/Bandung警方原始事件报告、地方报纸逐日报导、伤亡/财产损失登记，区分1963反华骚乱与1965后镇压；另独立追Aceh Langsa 1965年Baperki 148人声明附件、东爪哇Perintah Operasi No.05原令，不把同一期妇女刊物当作后续地方军令的独立印证。

**去重与访问级别：** 正式台账此前已有1963年《Api Kartini》转录候选，须先按刊号/数字馆藏URL检查同源；本次是明确直接打开**第5—6期36页OCR**，不是直接核验扫描页全部文字。G1—G10保持OPEN。


**进一步直接核读G2原刊第15页《Kunikijah, buruh wanita》（OCR行约460—488）：** 受访者Kunikijah被刊物称为Malang的SBRI（Serikat Buruh Rokok Indonesia，印尼卷烟工人工会）领导人及全国领导机构成员。她自述工会约有45,000名女工，占其所称卷烟工人约70%；这是**受访者的组织估算，不是独立会员登记**。报道明确指出Malang的Faroka卷烟厂：1961-07-04工人会议决定罢工，文章称1600人参加、其中776人为女性，工厂关闭10天、约10人被拘，最终要求支付停工期间全额工资；25%涨薪要求与企业所有权问题分别处理。1963年受访者仍称厂方为外国资本、接管要求未解决。另提供小厂卷烟工每千支计件工资Rp23、剪切费用Rp6及日做3000支的工资算例（Rp51），应与当地物价和实际工资单核对。该原刊将女工、SBRI、Faroka企业、1961罢工、1963工资/所有权冲突连接起来，填补G2厂级组织行动缺口。**证据等级A仅指当事刊物OCR已读；事件、人数、拘押和薪资是受访者/刊物的陈述，非独立核定。** 原件扫描第15—16页、1961年7月地方报纸、工会会议决议、Faroka工资账与警局拘押记录仍缺；还须核SBRI与SOBSI的正式组织关系，不凭名称推断。来源同上 https://pustaka.taratsa.id/read/1390/ocr/pdf/ 。


## 2026-11-21｜G2原刊日期内在矛盾与G4 Aceh 1966年4月地方拘押链（ONGOING）

**G2/G5（Malang、1961—1963；直接阅读同期刊物OCR，A仅指刊物表述）：** 复核《Api Kartini》1963年第5—6期《Kunikijah Buruh Wanita》，https://pustaka.taratsa.id/read/1390/ocr/pdf/ ，OCR第463—487行。补充前次未标出的**日期校勘风险**：该期网页与目录标“Mei 1963”，但报道开头称妇女工人会议在“21 s/d 23 Djuli”（7月21—23日）举行，并称“pekan ini”（本周）；**五月刊与七月已发生会议在字面上冲突**，可能是合刊实际发行延迟、刊物误植或OCR误读，不能据此确定会议年份与实际日期。须对照原扫描封面、会议通知、其他同期刊物；不把该会议写进确定日序。另文中写工厂10天关闭、约10人被捕、其中“两人被拘15天后释放”，OCR“sedang 2 buah dilepaskan”可能存在识别/排版错位，须先扫描校勘再写准确释放人数。罢工要求企业接管、25%工资增长及工厂仍属外资三个不同命题，不能把薪资让步当成企业国有化。未见SBRI与SOBSI组织隶属原始章程。该来源已在此前总账登记，本次不重复S编号。

**G4/G5/G9（Aceh北部，1965—1966；B：2013年Jess Melvin开放学术论文全文直接读到，论文转引的军方原件未独立打开）：** Jess Melvin, “Why Not Genocide? Anti-Chinese Violence in Aceh, 1965–1966”, *Journal of Current Southeast Asian Affairs* 32(3), https://journals.sagepub.com/doi/full/10.1177/186810341303200304 ，正文“Third Wave”与“Flight from Banda Aceh”段。论文依据1966年军方《Perkembangan》记录：**1966-04-18** Lhokseumawe/Bireuen学生代表与北Aceh Pantja Tunggal协商后，学生获准拘集所谓“RRT Chinese”，将**304人**集中至县长办公室院内并移交北Aceh军区指挥官；**304是该文献所载移交人数，不是死亡人数**，作者明确称其后命运未知。论文还记录**04-22**骚乱延及Lhoksukon，**04-23**Aceh军区指挥官Ishak Djuarsa赴Bireuen、Lhokseumawe，**04-24**其要求调查，**05-08**下令所谓“外籍华人”离开该省。文章描述学生Rusli AD受军官棍击、学生Iskandar遭警告射击致死的冲突链，但均为作者转引《Perkembangan》；需原始记录及医院死亡登记交叉。作者引用Coppel称约1万人离开Aceh、约4000人乘Kuang Hua船转移；两数分属不同统计口径，不可视为逐人核定。重要的是军方在部分时刻制止攻击、同时又授权拘集，说明不能将“军方”“学生”视为行动始终一致的单一主体。**缺件**：《Perkembangan》1966年原件第2—5页、304人移交/拘押与释放登记、Pantja Tunggal 4月18—19日会议纪要、04-24指令、05-08驱逐令、医院登记、Kuang Hua乘船名册。**下一动作**：从论文参考书目追《Perkembangan》馆藏及原件影像；分别核对304人名单与Langsa 1965年Baperki 148人声明，禁止混为同一批人；沿Lhokseumawe—Medan—Belawan转运路径核对1966年船舶/出境档。此链独立于G2厂级工会链，改善地区失衡，但不构成地方原件已核实。

**G1—G10继续OPEN；正式CSV与中文历史正文尚未并库。** claim-ledger.csv经本次main读取仍为非空SHA却空正文，不覆盖、不虚构C号；下次优先排查通过Git对象原始内容下载恢复CSV，再按正式编号去重写入chronology/source/search/coverage与连续中文叙事。以上均为可续查事实及证据边界，不宣称历史全量完成。


## 2026-11-21｜G4/G5 Aceh 1966年4月18—24日行动分叉 × G1殖民流放决策链（ONGOING）

**G4/G5/G9（Aceh，Bireuen—Lhokseumawe—Lhoksukon，1966-04-15—05-08；B）**：重新直接打开Jess Melvin 2013论文全文 https://journals.sagepub.com/doi/full/10.1177/186810341303200304 ，特别核对“Escalation of Violence in North Aceh”及其引用的《Perkembangan 1966》页1—5。新增逐地拆分：04-15 Bireuen/Reuleut有华裔印尼公民效忠集会，随后发生反中国游行；04-18 Bireuen示威者拘集被称为“RRT Chinese”者，报道提及被殴打者Jun Sin；04-19 Samalanga、Matangglumpangdua、Geurugok发生40家华人商店被占与人员被集中（40是店铺数，不是死者数）。Lhokseumawe另有约300名华裔印尼公民效忠集会；其后学生与北Aceh军事指挥官Mohd. Sjakur冲突，学生Rusli AD据记被军官打伤，学生Iskandar据记在军方警告射击中死亡；须查医院/警方原件。04-18夜Bireuen KAPPI代表团曾被Pantja Tunggal拦下，随后整夜协商并获准拘集所谓RRT人员；随后**304人**被集中于县长办公室院内移交军方，人数性质为**被移交者**，去向未明，不能等同遇害人数；原文未提供逐人身份。04-22 Lhoksukon事态扩大，04-23军区指挥官Ishak Djuarsa到场，04-24要求调查并有学生被带至Banda Aceh审讯；05-08又颁布针对所谓外籍华人的驱逐命令。**核心新辨析**：当地军方既曾制止袭击、与学生发生流血冲突，又在后续协商中许可拘集，不能简单认定同一指挥机关在整个事件中态度不变；论文关于军方转移示威者怒火的动机属于作者解释，不是会议原文证明。该篇与先前304人记录**同源重复深读，不增加独立来源计数**。缺原件：《Perkembangan》1—5页扫描、04-18/19 Pantja Tunggal会议记录、304人签收及后续去向、Rusli AD/Iskandar医院登记、04-24调查案卷、05-08驱逐令、当地华裔与KAPPI口述交叉。

**G1（1926—1928，Boven Digoel，殖民行政流放；B）**：新增核读莱顿大学图书馆馆刊 *De Boekenwereld* 35(4) 2019，Anouk Mansfield “Boven-Digoel: Koloniaal verbanningsoord, 1927–1943”开放PDF https://www.bibliotheek.universiteitleiden.nl/binaries/content/assets/ul2ub/bijzondere-collecties/de-boekenwereld/de-boekenwereld-35_4-2019compressed.pdf 。文章记**1926-12-10殖民政府作出设立流放地决定**、1927年3月底首批流放者抵达；介绍Tanah Merah与Tanah Tinggi的区别，指出行政拘禁不以刑事定罪为必要。与此前地方政府回顾所称1927-01-27 Becking建营日并不必然冲突：决定、建营、首批人员到达是不同事件。**但馆刊文章为后出研究/馆藏阐释，并非1926政府决定或1927船舶名册原件**；不可由文中约13,000名被捕者推为13,000名Digoel流放者。进一步核到京都大学 *Southeast Asian Studies* 2025年Yamamoto Nobuto论文全文入口 https://englishkyoto-seas.org/2025/04/vol-14-no-1-yamamoto-nobuto/ ，其中概述殖民当局约13,000名被怀疑者、逾5,000临时羁押、约4,500受审判刑：各类别可能重叠，不能相加，且为学者依据史料的叙述，仍须原始殖民统计表。缺原件：1926-12-10 Gouvernementsbesluit、1927年3月航运/抵达名单、殖民警察个人行政流放决定、Tanah Tinggi转移册。下一步按决定日期在荷兰国家档案/Delpher查公报及船名，再与营地登记交叉。

**G1—G10仍OPEN**：G2企业/妇女基层、G3跨机关时间、G4其他省、G5家庭证词、G6监禁释放、G7当代劳工执行、G8外部交付、G9地点人名、G10正式CSV和中文连续正文仍有实质缺口。此次没有获得地方原始《Perkembangan》或殖民总督决定；正式claim-ledger.csv接口非空blob但正文空，未分配S/C编号，也未改写正式CSV。下一精确动作：①追《Perkembangan 1966》页1—5及Pantja Tunggal夜会记录；②304人移交签收与Lhokseumawe拘押/出境名单；③1926-12-10殖民决定与1927年3月首批船舶名册；④转向Flores/Bali地方军令；⑤恢复正式claim-ledger.csv原始Git blob以便并库、编写chronology与中文正文。GOAL未完成。


## 2026-11-21｜G4巴厘估计口径与G6/G7幸存者证言保存（ONGOING）

**G4/G8（巴厘，1965-12至1966-04，A：官方出版编辑说明全文，非所引电报全文）：** 直接阅读FRUS卷26第162件编辑说明 https://history.state.gov/historicaldocuments/frus1964-68v26/d162 。说明引用1966-02-25雅加达A-527电报，记载巴厘死亡估计80,000且当时仍持续；1966-04-15 A-641电报承认印尼全国死亡人数可能在100,000至1,000,000之间、使馆无法可靠确定。该80,000是**1966-02-25外交报告的当时估计**，不是已核实逐人死亡名单。编辑说明还引用1970年Howland回顾中一名印尼军官给出的巴厘6,000，二者来源/时点/统计方法不同，不可简单平均或任选一数。另一档案线索：美国国家安全档案馆已公开1965-12-21 A-408（Joint Weeka 48）文件页面 https://nsarchive.gwu.edu/document/15720-document-24-airgram-408-joint-weeka-no-48 ，页面说明当时报告巴厘至少10,000人；本次仅阅读档案页面的编辑摘要，**未打开所附原始PDF或OCR**，该数不能升格为直接读过电报全文。下一动作：打开A-408原件PDF/OCR、调取A-527与A-641原件，建立1965-12-21/1966-02-25/1966-04-15的报告时间、消息来源和统计定义三栏；追取巴厘Negara、Jembrana、Denpasar县村登记与军警出勤记录。阻碍：美国使馆远距估计、地方登记缺失，学术概述不替代地方原件。

**G6/G7/G9（1965幸存者至2013公民社会真相工作，A：2014年KKPK组织自刊报告全文；证言属于后期口述而非1965原始拘押档）：** 直接打开KKPK《Menemukan Kembali Indonesia: Memahami Empat Puluh Tahun Kekerasan demi Memutus Rantai Impunitas》2014年报告PDF https://www.asia-ajar.org/files/MENEMUKAN%20KEMBALI%20INDONESIA%20-%20BUKU%201.compressed.pdf ，前言v—vi页明确KKPK自述其成员组织从2008年推动真相委员会，组织2013年「真相之年」；报告称其数据库记录930起暴力事件、3,396名受害者（2,706男、529女、161性别资料缺失），140份案件叙述及72次公开证言，听证城市包括Jakarta、Solo、Palu、Kupang、Papua和Aceh。**这些是KKPK跨不同历史事件的文献整理规模，绝不是1965年死亡/被拘押人数，也不等于930份互相独立的原始档案。** 报告目录明确有1965—66女性暴力、意识形态清洗、1998后司法困境等章节；本次仅核对前言与目录，不声称逐页读完全部章节。缺件：930案数据库字段与去重规则、72次原始听证录音及逐字稿、140案逐案来源、地方组织的原始采集表。下一动作：精读报告第62—95、285—294、339—355页；对照2013听证地Palu/Kupang具体受访者与既有Moncongloe/Flores线索；将听证地点、事件发生地与证人籍贯严格分开。阻碍：综合报告与原始证言之间存在来源层级，跨年代事件统计不能用作1965规模推断。

**G1—G10全部OPEN。** 本次继续复核G1—G10审计；两条链分别补巴厘地方暴力的统计冲突与1998后幸存者公民社会取证。正式CSV/chronology/readable-history尚未并库，须优先解决大文件读取与编号冲突；不在缺口总账内伪造S/C编号。


## 2026-11-21｜G4/G9 巴厘Jembrana军政原件定位；G4/G3 Flores Sikka名单决策（ONGOING）

**G4/G9（巴厘，1959—1966；B：印尼语同行期刊全文，非原件）：** 直接打开Slamat Trisila, “A.A.B. Sutedja File: Gubernur Bali Pertama dalam Lipatan Sejarah,” *Jurnal Kajian Bali* 3(1), 2013, pp.115—137, https://ojs.unud.ac.id/index.php/kajianbali/article/download/15698/10480 。第127页脚注12给出**1965-11-03 Peperlada 决定 KEP-PPD.2/1/234**，称暂时冻结PKI及其附属组织活动，执行监督交Pangdam XV Udayana；文章称文件由Jembrana的Puri Negara家族档案保存。第127页还记1965-12-02 Jembrana Puri Agung Negara遭袭及六名家族成员被带走杀害，其中包括Pemuda Rakyat地方负责人A.A.N. Denia；这是作者后出研究叙述，未核原始死者登记。第136页原始文献目录还精确列出1965-12-03总统秘书处召见Sutedja备忘录、1965-12-10与苏加诺会见纪要、1965-12-18总统决定380/1965、1966-07-26绑架书面报告、1989-09-01地方议会说明书351/1372/DPRD，均称存Puri Negara。该文所引Jembrana约6,000人死亡仍是二手估计，不等于逐人核实；不能与FRUS巴厘全岛数字相加。**缺原件**：KEP-PPD.2/1/234影印和签发/送达登记、Sutedja家族档案上述六件、1965-12-02医院及警方登记、村级遇害者名单。**下一动作**：按编号向Puri Negara/Jembrana、Bali ANRI馆藏和期刊作者核实影印及权限；比对1965-11-03行政禁令、1965-12-02暴力与12月后军方行动的具体执行关系，绝不凭后出文章推定所有地方服从命令。

**G4/G3（Flores Sikka，1966-02-27；B：学术开放专著全文所译1974匿名地方叙述，原件未读）：** 直接核读Gerry van Klinken, *The Making of Middle Indonesia* (Brill, 2014), 第十章第240—241页，UvA正式开放全文 https://pure.uva.nl/ws/files/2526919/166060_488108.pdf 。作者引“Anonymous 1974:75–76”记1966-02-27 Sikka县议会会议：调查组负责人Karel Elkel与军方代表Jos. U. Tokoh主持，宗教/政党/社会组织代表被要求对第二轮被捕者作“secured”分类。天主教代表E.P. da Gomez、Herman Joseph初称无权裁定，应由有权机关处理；随后在Komop负责人Soemarno少校住所继续开会，记录称军人持枪施压。PNI代表Th.M. Sogo主张彻底清除；叙述称当夜24名被归为A类者分别在Lela/Kuarwang、Nita、Koting各8人遭“secured”，列Sukasno、Suprapto、M. Said、Ignasius Ila、B. Tasi、Tua Buar、Karang Betel、Viator Nurak等姓名。**“secured”是叙述中的政治/军事委婉语，具体死亡、拘押与转押必须逐人核实；不可把24自动写成已核实死亡数。** 此处2014学者对1974匿名文献的译文是有明确中介的二手呈现，不是1966会议原始纪要或1974原稿直接核读。**缺原件**：Anonymous 1974第75—76页及来源信息、1966-02-27 Komop会议记录、24人名单及Lela/Nita/Koting拘押/埋葬登记、地方教会当时通信。**下一动作**：按书后参考文献追Anonymous 1974书目信息，追Sikka县Komop/教区档与具名家庭口述，核对名单中PKI和PNI身份及1974作者证词的独立性。

**G1—G10继续OPEN**。本次直接核读两个开放全文，覆盖巴厘和Flores两条不同地区链，新增的只是可追原件编号与具名地方行动者，绝不将学术转引升级为地方原件。正式source-register.csv已包含Flores相关2014文献URL（避免重复登记）；claim-ledger.csv仍是非空blob但API空正文，未分配C编号，正式CSV/chronology/中文正文仍待安全并库。下次优先①Puri Negara的KEP-PPD.2/1/234及Sutedja 1965-12文件②Anonymous 1974:75—76原件③Sikka 24人名单④Bali A-408原始影印⑤解决claim-ledger读取与正式台账整合。


## 2026-11-21｜Flores原稿正式书目与西帝汶Oesao甄别机制；巴厘档案保管线索（ONGOING）

**G4/G9，Flores Sikka，B（已打开2014年开放专著全文及参考文献，1974原稿仍未取得）：** Gerry van Klinken, *The Making of Middle Indonesia* (2014), chapter 10 pp.240–241、chapter 11 p.273及书后参考文献，**明确给出此前“Anonymous 1974”完整题名**：*Menjaring Angin: Kronik Percaturan Politik Di Maumere, Ntt, Jelang, Selama Dan Pasca Pembantaian 20 Pebruari – 29 April 1966*，出版地Ende，状态“[unpublished mss]”。书中说明1974年一名参与过地方政治精英网络的人撰写，手稿曾以复印件流传，作者2010年与John Prior（Maumere）通信并称拟出版；这不是已经核实出版或作者身份的证据。2014年书所译1966-02-27会议叙述来自该手稿第75—76页，不能当作原始1966会议纪要。**新可执行动作**：以完整书名检索Ende、Maumere、SVD/教区馆藏及John Prior相关学术捐赠目录，要求第75—76页及书目/作者来源说明；核是否后来出版及有无文本改动。来源全文 https://www.academia.edu/73203436/The_Making_of_Middle_Indonesia ，正文与书后参考文献可见。此前只有Anonymous 1974:75–76，现已明确书名与手稿性质。

**G4/G2/G9，西帝汶Oesao（Kupang以东约30公里），B（2014学术全文引述2012研究，地方原件未读）：** 同书chapter 10 pp.241–242记述1965年12月当地成立“Tim Pembasmi PKI”，成员包括Parkindo、PNI代表及地方警员，办公室在村公所；被审查的农民名单可能取自1964—65旱灾期间Mekatani政府救助受益人记录，并召其他党派/地方官员参与。这是学者根据Kolimon与Wetangterah 2012 pp.222–223的转述，**不是已取得的村公所名册、原始甄别会议记录，也不能断定全部受援农民均为PKI成员或受害者**。具体下一动作：核Kolimon/Wetangterah 2012原文pp.222–223，追Oesao村政府1964—65 Mekatani发放册与1965-12甄别/拘押清单，分别核受援、政治归属、拘押和死亡结果；将Kupang/Oesao与Sikka分成两个地方机制，不以同一本书当独立佐证。来源同上。

**G4/G9，巴厘Jembrana，B/C（地方档案保管线索，不是军令影印）：** 2013年Slamat Trisila期刊原文明确列Puri Negara所藏1965-11-03 Peperlada KEP-PPD.2/1/234、12-03总统秘书处备忘录、12-10会见纪要及12-18 Keppres 380/1965；2023年Radar Bali有关Puri Agung Negara历史建筑报道又称家族保留大量历史照片/资料，提及家族管理者Anak Agung Bagus Gde Hari Sutedja。后者仅属地方媒体报道，**不能据此断定特定1965文件仍在、可公开或家族成员持有该文件**。下一动作：通过Jembrana官方档案机关/家族公开联络渠道请求上述具体文件扫描及出处，先核原件保管现状。2013原文 https://ojs.unud.ac.id/index.php/kajianbali/article/download/15698/10480 ；地方报道 https://radarbali.jawapos.com/jembrana/2301300031/bersejarah-rumah-gubernur-bali-pertama-zaman-bung-karno-masuk-daftar-cagar-budaya 。

**跨G项状态**：本次重新读取G1—G10完整性审计及AGENTS/授权/GOAL/正式台账/chronology/continuity，研究从Flores延伸至不同地方Oesao，并补巴厘档案取得路径。既有2014年专著应先在正式source-register去重，未取得原稿及村级登记前不新增事实C编号；claim-ledger.csv依然是非空blob但API正文长度0，禁止覆盖。G1—G10均OPEN；后续还须轮换G1殖民流放、G2基层组织、G6监禁与G7后改革，尤其优先补各地原件。


## 2026-11-21｜西加里曼丹跨年代地方暴力与1997年原始调查（ONGOING）

**G4/G5/G9，1965—1976 西加里曼丹：** 直接打开 Davidson 与 Kammen, “Indonesia's Unknown War and the Lineages of Violence in West Kalimantan”, *Indonesia* 73 (2002) 的公开可读全文转录（https://www.academia.edu/103702836/Indonesias_Unknown_War_and_the_Lineages_of_Violence_in_West_Kalimantan），**B级：研究论文全文可见，所引军区档案未取**。论文将1963—1966年印尼对马来西亚的Konfrontasi与1966—1976年西加里曼丹叛乱、军方清剿和人口迁移相连。其第57—58页明确区分PGRS、Paraku、印尼志愿者与西加里曼丹PKI，不能将四者视为同一组织。论文记载1965-10-16省政府冻结PKI及关联组织，10-18坤甸示威，并称Ryacudu将Said Achmad Sofyan暂时庇护；均须用省政府原令和军方记录复核。论文引出**具体地方原件**：西加里曼丹省长办公室图书馆《Pengungsian orang2 Tjina sebagai akibat gerakan2 orang Daya dalam daerah Kabupaten Pontianak dan Kabupaten Sambas》（1967），以及Kodam XII/Tanjungpura 1970年军区史、1975年《Pelita》、1967-11-01《Kompas》；须分别追原件，不将其数字作为独立核定。

**G6/G7/G4，1996—1997同地区长期后果：** 直接阅读Human Rights Watch, *Communal Violence in West Kalimantan*, 1997-12-01，完整公开调查报告（https://www.refworld.org/reference/countryrep/hrw/1997/en/23874），**A级：调查组织1997年原始出版的报告全文；其采访和估计仍需逐条核对**。报告说明调查员1997年1月和7月两次赴当地采访，区分1967年针对华人的驱逐与1996-1997年针对马都拉人的暴力，后者发生在Sanggau Ledo冲突后。报告对1996—1997年估计约500人死亡、约20,000名马都拉人流离失所，属于HRW估算，不能误作1967年统计。对1967年则引述约300人死亡、55,000华人流离失所的既有说法；必须保留**不同事件、不同年代、不同数字口径**。报告还记载1997年军警使用1951年第12号紧急条例搜查刀具并拘押100余人、部分军人涉嫌处决投降或被拘押者；前者是HRW调查记录，后者仍为待查指控。报告建议公开1979年Samalantan和解协议原文，构成连接1967、1979、1997的具体制度史取件目标。

**跨来源判断及反证：** HRW报告直接警告，1997年暴力的煽动者说法尚无硬证据，不能因为1967年军方煽动历史而推断1997年也由同一机关策划。Davidson/Kammen的长时段解释是学术论证，不等于已获得地方军令或逐人受害者证据。两文在1967年人口驱逐上有研究关联，不能当成两份互相独立的1967年现场统计。

**缺失原件与可执行续查：** (1) 定位1967年省长办公室《Pengungsian orang2 Tjina...》原件及Pontianak/Sambas分县名单；(2) 核查1965-10-16省政府冻结令、Kodam XII 1970军史和1975《Pelita》原页；(3) 查1967年10—11月地方报纸及救济/安置名册，按村和个体分辨死者、迁移者、返回者；(4) 追1979年Samalantan协议全文和1997年HRW引用的军警拘押案卷；(5) 与不同G项轮换：G2的Faroka 1961年工会罢工原刊/企业记录及G1殖民流放行政原件。**正式CSV与chronology仍未同步，未使用或虚构新S/C/Q/CV编号；claim-ledger.csv本次读取为空正文，不能覆盖。G1—G10全部OPEN。**


## 2026-11-21｜G4/G9西加里曼丹安置统计与G1殖民流放档案原件定位（ONGOING）

**G4/G5/G9（1967—1968，西加里曼丹，华人流离失所；访问B）：** 直接核读Davidson与Kammen 2002年《Indonesia's Unknown War and the Lineages of Violence in West Kalimantan》公开全文的安置统计表（https://www.academia.edu/103702836/Indonesias_Unknown_War_and_the_Lineages_of_Violence_in_West_Kalimantan）。表格明确标出底层原件为西加里曼丹省《Progress Report, Propinsi Kalimantan Barat》，1968年10月17—18日总统视察材料附录VI。**1967年11月**安置登记合计59,850人（营地32,347、亲属家庭27,503）；**1968年5月**重新登记43,941人（营地24,936、亲属家庭19,005）；**1968年8月**安置后28,028人（营地15,547、亲属家庭12,481）。地域分为Singkawang及周边、Pontianak、Mempawah及周边。三期是不同时间的存量登记，**绝不可相加作为迁移总人数，也不可将减少人数直接推为死亡或回乡**。表中营地与寄住家庭为不同类别；各地区迁移、死亡、再安置、重复登记机制尚未厘清。论文引述1968年1月Pontianak营地508人死亡、4月约1,500名儿童饥饿死亡的报道，但仍未核底层同期医疗/死亡登记，禁止作为独立确认的死亡数字。缺件：1968年省政府进度报告附录VI原页、1967省长办公室《Pengungsian orang2 Tjina...》及各营地名册；优先联系西加里曼丹省档案馆，现有官方数字档案入口 https://arsipkalbar.id/home （已打开网站，未找到上述具体档案全文）。行动：按三地与三期分别追行政登记和迁入迁出、死亡、营地关闭记录，核对同一人跨期去重；与1967军事行动日表关联但不预设因果。

**G1/G9（1927—1939，Boven Digoel，行政流放；访问A仅限ANRI官方档案选编目录/说明，底层影印尚未逐页核读）：** 直接打开印尼国家档案馆2004年《Citra Papua dalam Arsip》官方PDF全文（https://www.anri.go.id/download/naskah-sumber-arsip-citra-daerah-provinsi-papua-dalam-arsip-1586333524），其第36—40页图版说明及第132页馆藏清单精确列出：(1) **Boven Digoel no.200**：1927-03-12由Semarang乘H.M. Kruisser “Java”运送人员名单，4页；(2) **Boven Digoel no.1**：1927-04-15总督De Graeff流放命令副本，3页；(3) **Boven Digoel no.102**：包括Hatta、Sjahrir及家属的释放名单，2页；(4) **Binnenlandsbestuur no.1308**：1930年Hillen营地调查报告，37页；(5) **Boven Digoel no.210**：1934-08-23营地劳动任务日记，106页；(6) **Boven Digoel no.295**：1933-02-19返回Tanah Merah的人员及家属名单，9页；(7) **Boven Digoel no.317**：1939年学生及教师名单，10页。**重要馆藏矛盾**：同一选编第131页“地理”栏将1927-04-15命令标作“Boven Digoel no.84”，第132页“政治”栏却标“no.1”；no.84在第25页又是1928-03-17 Tanah Merah行政边界决定。暂按no.1作为命令候选，不在原件调阅前擅自消除目录冲突。选编刊有原件影像页，但本次只核读可检索图版说明与目录，**不冒充已经转录名单姓名或原令条款**。下一动作：核对PDF第36—40页影印，取得no.200名单逐人记录、no.1原令正文并与no.84的档号差错向ANRI核对；再查1933回营名单和1939学校记录以复原家属及社会生活，不把被捕、判刑、行政流放及随行家属混成一个人数。

**横向G1—G10全部OPEN**：本次两链分属G4/G9和G1；G2基层工农妇女组织、G3跨机关命令、G6拘押/再组织、G7当代劳动政治、G8外援执行链及G10正式并库继续待办。已核实证据严格区分学术转引的省级统计（B）与ANRI官方档案选编目录（A作为馆藏定位，不等于原件全文）。正式CSV及chronology仍未定位可靠路径，禁止伪造S/C/Q/CV编号或覆盖；优先恢复正式台账定位和去重，再同步历史正文。