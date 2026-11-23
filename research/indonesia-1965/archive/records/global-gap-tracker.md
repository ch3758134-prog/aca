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

## 2026-11-21｜西加里曼丹强制劳动、地方行政反证与原件档号（G4/G5/G9，ONGOING）

**核读等级B（学术专著开放全文，非1967年原始档案）**：Taufiq Tanasaldy, *Regime Change and Ethnic Politics in Indonesia: Dayak Politics of West Kalimantan* (KITLV Press, 2012), ch.5 pp.140–145，直接打开美国国会图书馆所存完整PDF https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/82/94/2020718294/2020718294.pdf 。与既有Davidson/Kammen 2002研究对读：后者已登记1967年11月—1968年8月营地/寄住家庭三次存量，不能把同一政府报告的再引当独立人口登记。

**具体新取证节点**：（1）该书第142页转引Davidson 2008 p.61：1967年初约8,000名华人被迫修Singkawang–Seluas公路，约3,000人开垦Sanggau稻田，约600人修建Kapuas Hulu的Semitau军营；这些是作者转引的劳役估算，尚无工地人员名册，不可相加为独立受害人数。（2）第142页记载1967-02-17约545名被归类为外籍华人的人员被集中于Pontianak准备遣返，因无运输工具而返回村庄；不可写为已经遣返。（3）第144—145页给出**反证与争议**：作者认为军方鼓动达雅克人打击游击队有证据，但尚无足够证据证明1967年排华暴力由雅加达高层统一预先策划；引1967-11-09《Pembangunan》报道称Pontianak县长、现役军官Major Usman Idris要求乡镇官员让华人农民返家照料庄稼。这是当时地方行政行动的报道，与简单的单一军方命令叙事不合；但也不排除其他军事单位参与驱逐。作者特别指出部分所谓鼓励杀戮做法的依据实际指1969—1973年，不可倒推为1967年已实施。（4）第141页注125精确指向西加里曼丹省长办公室图书馆收藏的 **Staf Chusus Urusan Tjina, ‘Laporan tahun 1968’, pp.26–39**；第140页注120及第144页注135另列 **‘Pengungsian orang2 Tjina sebagai akibat gerakan2 orang Daya dalam daerah Kabupaten Pontianak dan Kabupaten Sambas’ (1967)**；第142页注129列 **1981-12-14 Pangdam XII/TPR briefing**。这些均只核到学者书目，未取得原件。

**独立G1补核（馆藏取件路径，目录/服务级C）**：直接打开印尼国家档案馆ANRI官方阅读室服务说明 https://anri.go.id/en/public-services/archives-and-reading-room-services ，确认静态档案可申请阅读、复制与在线检索；此页只证明取件渠道，不证明此前定位的Boven Digoel no.200（1927-03-12船运名单）或no.1/no.84（1927-04-15总督令）已经取得。下一步须带精确档号请求原件影印，核对no.1/no.84冲突，逐人登记。

**缺失/阻碍**：1967省长办公室原始报告、1968华人事务专员年报、1967-11-09《Pembangunan》报纸原版、强制劳动工地名单、545人集结/返村登记均未打开；地方官员的返村命令须核报纸原版与行政收发文。不要把Tanasaldy与Davidson对同一来源的引述计作两份独立证据。G1—G10均OPEN；正式CSV与中文历史正文尚待安全去重并库。


## 2026-11-21｜G4西加里曼丹原始档案定位与G1流放家庭证言（ONGOING）

**G4/G5/G9，西加里曼丹1967：** 直接核读Taufiq Tanasaldy《Regime Change and Ethnic Politics in Indonesia》2012年开放全文（美国国会图书馆托管PDF：https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/82/94/2020718294/2020718294.pdf ），第141—142页及脚注：1967年1月军方将首批约5,000名华人从砂拉越边境迁离，边境五英里内居住限制；2月17日约545人在Pontianak被集中准备遣返，但因运输不足返回村庄；1967年4月政府提出遣返350,000人的**计划**，不得写为已执行。书中还列明西加里曼丹省长办公室图书馆1967年原始报告《Pengungsian orang2 Tjina sebagai akibat gerakan2 orang Daya dalam daerah Kabupaten Pontianak dan Kabupaten Sambas》p.82；这是**精确书目定位而非已打开原件**。与既有强制劳动、1968难民存量链保持相连，但不把计划人数、实际迁移存量、死亡人数相加。访问等级B（学术全文），原报告D。下一步按报告原题向省档案馆请求影印，核对p.82对边境武装人员与平民的分类，并逐县核对强制迁移/返乡名册。

**G1，1927—1928 Boven Digoel：** 直接打开山本信人2025年京都大学《Southeast Asian Studies》开放研究全文 https://englishkyoto-seas.org/2025/04/vol-14-no-1-yamamoto-nobuto/ ，研究转述《Pewarta Deli》1928-04-19报载对Soerodjojo、Mohamad Ashari两位已故流放者妻子的访谈，访谈于1928-03-26在Semarang进行；两人据报道因高热与象皮病去世。学术文章亦引《Sin Jit Po》1927年报道，营地日补助ƒ0.72，其中ƒ0.32食物、ƒ0.40其他开支。**不能把研究转引的报纸访谈当作已读1928报纸原件**；疾病死亡归于被采访家属陈述，需原报及营地医疗/死亡登记交叉核对。访问等级B；原报D。研究另讨论1933年苏加诺致检察总长信的学术转引，勿误写为本人进入Digoel。下一步检索《Pewarta Deli》1928-04-19版影印及《Sin Jit Po》1927年具体期号，对照ANRI Boven Digoel no.200航运名册和营地死亡登记。

**G10归档约束：** 本次已重读2026-11-09 G1—G10审计、AGENTS、stage-access、goal-continuity及正式档案所在的archive/records目录；正式claim-ledger.csv仍返回空正文（blob SHA非空），禁止覆盖或伪造C编号。以上先在同一长期总账保存来源级别和精准原件追索；正式CSV、chronology、readable-history仍需去重并库，不能声称已同步。G1—G10全部OPEN。


## 2026-11-21｜北苏门答腊1966—1975拘押劳役与1965年BTI基层调查原件线索（ONGOING）

**G4/G5/G6/G9 北苏门答腊（直接打开2025年采访发表全文；证词非军方档案）**：Quadi Azam, “Forced labour and detention sites,” *Inside Indonesia* 161, 2025-09-23, https://www.insideindonesia.org/editions/edition-161-jul-sep-2025/forced-labour-and-detention-sites 。文章作者为IKOHI北苏门答腊相关研究者，记述三位1965年后幸存者的采访；受访者自述1966—1975年间曾遭拘押和强制劳动，地点包括Deli Serdang、Labuhan Batu种植园开发与道路/稻田劳动；称村长传唤、军官监管、TPU（Tempat Penahanan Umum）拘押场所，部分人员在私人企业工作。尤应追查受访者所称KRPT（Kartu Tanda Pendaftaran Pendudukan Tanah）土地登记卡被收走、转交企业或销毁，造成土地权属争议的具体行政机制。**访问等级A仅指已打开采访者亲自发表的证词报道全文，不代表证言经独立核实，更非同时代军方/土地原件**。匿名企业PT P___及承包人A____等不得擅自补全；“大规模墓地”“饿死”等属幸存者报告，不能未经逐人死亡记录变成确定死亡数。此项补强此前全国暴力研究严重不足的北苏门答腊劳动—土地剥夺链；需要原始采访录音/逐字稿（经当事人同意）、村级KRPT登记簿、土地转让卷宗、TPU/军方派工名册、企业用工账、法庭土地案号，逐地比对Deli Serdang与Labuhan Batu，不得把受访者叙述自动外推整个省。

**G2/G9 1945—1966 BTI/SARBUPRI基层组织（学术论文摘要与书目级C，未取得论文全文/1965基层原报告）**：Ben White, “Remembering the Indonesian Peasants’ Front and Plantation Workers’ Union (1945–1966),” *Journal of Peasant Studies* 43(1), 2016, pp.1–16, DOI https://doi.org/10.1080/03066150.2015.1101069 。出版页面公开摘要明确指出作者利用BTI在1965年最后一轮地方“参与式行动研究”的**未出版报告**，致谢Ina Slamet提供报告。此次出版页面可见摘要/脚注但全文打开遭403，不能标记为全文已读；原始BTI报告更未取得。此线索可以直接转化为追索：确定报告的村/县、调查干部、原稿标题与保管人、访问限制，再核对农民诉求、土地登记、SARBUPRI种植园工会与1965年后拘押劳役之间的个人/地点重合，禁止仅凭摘要断言具体调查结果。

**G1 1927—1933 Digoel口径补核（开放学术全文B，原殖民登记D）**：山本信人2025年论文 https://englishkyoto-seas.org/2025/04/vol-14-no-1-yamamoto-nobuto/ 第65—71、93—98段区分1926—1927逮捕约13,000、预防性拘押超过5,000、审判判刑4,500及1930年5月Digoel营地人数峰值1,308；论文另有“下令流放1,308”表述，须查原始统计是否同一口径、是否含随行家属，不可直接合并。文章引用1927年《Sin Jit Po》及1928年《Pewarta Deli》所记**营地通信需用马来文便于审查**，但原报未读，属于学术转引；下一步索原报与殖民审查条例，对照1927年航运名册。

**G10正式归档**：本次已定位并直接读取archive/records下source-register.csv、search-log.csv、coverage-matrix.csv、chronology.md的前段及blob SHA；claim-ledger.csv的blob SHA为362dbb150c296fd2a5f9e2b4d34db64c6a8f414a但接口返回空正文，仍不得覆盖。因尚未全表去重核对，本次不分配S/C/Q/CV编号，不把候选材料伪装成已正式登记。应按最新HEAD和文件SHA安全追加正式台账、chronology及中文正文。所有G1—G10持续OPEN。


## 2026-11-21｜G6南苏拉威西Moncongloe释放文件与G2 BTI基层调查方法（ONGOING）

**G6/G4/G5/G9（1970—1978，南苏拉威西Moncongloe；直接核读Komnas HAM 2012调查报告公开执行摘要全文，机构原始调查总结A级；证人原始BAP与1977释放令仍未取得）**：Komnas HAM《Ringkasan Eksekutif Hasil Penyelidikan Tim Ad Hoc Peristiwa 1965–1966》，公开PDF https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf ，印刷页143—155，特别是页143—144、150—151、153—155。报告记述从Makassar、Palopo、Sengkang、Pangkajene、Kendari、Buton等地分批移送Moncongloe；首批40人修营房；4男营房1女营房；证人描述修路、Kodam XIV Hasanuddin军营及住宅、军官私人耕地的无偿劳动。报告记载1972年7名囚犯被送往Kodim 1409/Gowa建住房，另有20人及被强制报到者参与；这些是调查报告转述的证言，不等于逐项工程验收记录。报告第150页脚注列出BAP **266/BAP_TPPH65/III/2009、267、268、269**（具体后缀格式须对原扫描核），为取证人原始笔录的精确入口。报告记载1977-12-20 **SPRIN/802/TPD/XII/1977** 将部分囚犯由完全拘押改为居家拘押，签署人Major CPM Idham Alam；这不是无条件释放。第144页存在明显内在日期矛盾：前文叙述1977-12-20释放，随后一句误写“1970-12-20”完全释放；不得据孤立“1970”建立释放节点。报告提及1974-08-08和1977/1978分期释放；约1000 Moncongloe与9000 Buru的数字是报告叙述口径，不是已取得独立逐人释放名单。**新增实质性核验：从泛泛拘押研究推进到具体SPRIN号、签署人、2009年BAP号及释放后监管法律状态。** 对照Taufik Ahmad 2010采访报道 https://www.insideindonesia.org/editions/edition-998/survival-through-slavery ，其Moncongloe—Daya修路为15公里，Komnas HAM摘要记23公里；两者距离口径/路线未核，不能择一作确定工程长度。采访与Komnas HAM可能使用重叠证人，不能直接视作独立证实。缺件：SPRIN/802原影印、1974/1977/1978逐人名册、上述BAP原件、Kodam XIV工地账与Gowa住宅工程记录；阻碍为原始证人卷宗访问限制及年代/里程文本冲突。

**G2/G1/G9（1959—1965，BTI/SARBUPRI，农民与种植园工人；Ben White论文作者公开上传全文，学术解释B，1965年BTI手稿原件仍未取得）**：此前只读出版摘要，本次直接打开Ben White, “Remembering the Indonesian Peasants’ Front and Plantation Workers’ Union (1945–1966),” *Journal of Peasant Studies* 43(1), 2016，作者公开上传可见全文 https://www.researchgate.net/publication/285747346_Remembering_the_Indonesian_Peasants%27_Front_and_Plantation_Workers%27_Union_1945-1966 ，印刷页8—11。论文明确援引1964年Aidit著作所述“三同”（同劳动、同吃、同住）、“四不”“四要”的村庄调查规程；描述1959年15村调查及1965年调查者**Sujati/Suyati（拼写待核）**和Sulasto在匿名T村/G村的居住、劳动、饮食与家庭财产观察；论文脚注5说明油印村庄报告含每日活动、土地阶级关系、工资、富中贫户预算、村内权力关系等字段。这是作者对所见未刊原稿的转述，不是本次直接核读原稿；村名匿名，不得自行匹配县村。论文致谢Ina Slamet提供未刊BTI报告，说明下一步应向作者/保管方核原稿题名、县村、研究者身份及允许引用范围。**新进展：将先前“只有摘要”的访问级别升级为学术全文，明确原报告的字段结构与具体参与者，便于后续追档；不能把White与原稿当两份独立来源。** 与2025北苏门答腊KRPT证言是不同地区/年代的链，暂不宣称同一农户或组织的连续性。

**G1—G10横向状态：全部OPEN。** G1 Digoel no.200航运名册与Tjomal 2.20.39/135仍目录级；G3中央/军区命令原件未闭合；G4 Aceh、北苏门答腊、东中西爪哇、巴厘、Flores、西加里曼丹及Sulawesi地方名册不均衡；G5性别/族群原始证词不足；G6本条已追到1977文件号但未取原件；G7县级工会登记与当代组织名册缺；G8外国援助实际交付证据缺；G9人物/地点/机关交叉索引未完；G10正式CSV仍需全量去重。当前GitHub API可定位正式台账在 `archive/records/`，但读取超大正式CSV只返回开头截断，claim-ledger.csv非空blob却返回空正文；禁止假定当前最大S/C/Q/CV编号并覆盖。正式chronology与中文连续HTML未在本次安全并库，属未结归档欠账。精准续接：（1）取SPRIN/802/TPD/XII/1977原令及1977-12-20释放/居家监管名册；（2）申请BAP 266—269/2009匿名可披露部分并核证人来源独立性；（3）核15/23公里道路起止点及1972 Gowa住房工程簿；（4）取White所用1965 BTI油印报告及Aidit 1964原书第18页，逐人/村复核；（5）轮换Aceh原始军令、北苏门答腊KRPT土地簿与1998后工会登记，先解决正式CSV大文件读取再入账。


### 2026-11-21｜跨G项核验：Moncongloe拘押制度与1945—1950 BTI建构（ONGOING）

**G6/G4，南苏拉威西Moncongloe，1970—1977：A级，直接打开Komnas HAM调查机构公开《Ringkasan Eksekutif Tim Ad Hoc Peristiwa 1965-1966》全文，https://www.tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf ，约第150页。** 证人A称1970年9月至1977年12月20日被拘押，第三批44人；营房6×20米，每栋80—100人（证人报告数字，不能当全营人数）。证人B称1972年由Majene监狱转入，C称1970—1974年8月拘押，D称1971—1977年拘押。报告载A的1977-12-20 SPRIN/802/TPD/XII/1977将“penahanan penuh”转为“tahanan rumah”，即完全拘押改为居家拘押，而非自由释放；另有C3、B2不同分类，不得合并。报告脚注对应BAP 266—269/BAP_TPPH65/III/2009。此处**直接阅读的是调查机关报告，不是释放命令、原始证人笔录或司法判决**。本次增量：同一营地四名匿名证人的进入年份、转移起点和行政类别被明确拆开；需进一步查1974年8月8日Teperda Sulselra C3释放文件、1977年原令、Majene移送簿及证人笔录可公开部分，防止把不同拘押类别混同。调查机关2008-06-01至2012-04-30访问349名证人，报告明确承认地理范围、预算和记忆局限；349不是1965年受害者总数。

**G1/G2，1945—1950 BTI与农业现代化：C级（印尼加查马达大学《Lembaran Sejarah》2023年Willy Alfarius文章的公开摘要及书目已直接打开，PDF阅读器入口打开但未获得PDF正文），https://journal.ugm.ac.id/lembaran-sejarah/article/view/90299/0 。** 作者的研究结论为BTI在1945年形成、1945—1949年将农业现代化视作重要议程，但战争条件妨碍许多项目实施；1950年第三次代表大会被其视作组织重整节点。这是作者解释，不能直接写成BTI当时已经执行全部现代化计划。**高价值同期原刊定位**：*Berita Indonesia* 1945-11-09/11-28；*Kedaulatan Rakjat* 1945-10-19/10-29/11-27/12-05；*Api Rakjat* 1946-07-22；*Soeara Tani* 1947-06-15；*Antara* 1947-04-01；*Suara Ibu Kota* 1948-07-30；*Suara Tani* 1950-11-25及1951年多期。此为作者书目**原报尚未读取**，不得以报纸日期冒充已经验证报道内容。下一步先取得文章PDF正文以查各报对应的具体主张、页码，再申请原报影印并对照1950大会决议；特别区分1945成立时独立的BTI、1953 RTI合并和1955 STI合并，避免将后来PKI关联倒灌到1945。

**跨项续接：** G1/G2先逐期核原报与1950大会材料，G6/G4追1974与1977命令及Majene移送记录；下一地区转向Aceh或东爪哇军区原始命令，下一时代转向1998后工会登记及生存者诉讼。G1—G10全部OPEN。正式CSV及chronology尚未安全并库，须读取完整当前内容并去重后再写，不能将本段候选记录虚构为正式S/C编号。


## 2026-11-21｜跨G2/G3/G4/G5：ANRI KOTI原始档案目录与亚齐军区文书追索（ONGOING）

**核验范围与访问等级。** 本次重新直接读取 `archive/records/completeness-audit-2026-11-09.md` 全文，逐项检查G1—G10；直接打开印尼国家档案馆ANRI公开《Inventaris Arsip Tekstual Komando Operasi Tertinggi 1963–1967》PDF目录（**官方原始馆藏目录A级，仅证明馆藏编目，所列卷宗原件仍为D级未读**）：https://anri.go.id/download/inventaris-arsip-tekstual-komando-operasi-tertinggi-19631967-1586226436 。不能将目录中的文件题名转述为文件内容已获证实。与前次Moncongloe拘押/BTI研究不同，本次选择Gerwani组织原始文书和1965跨机关处置作为新证据链。

**G2/G5/G9（1964—1965，雅加达—Tangerang；Gerwani、SOBSI及妇女地方组织）：** ANRI KOTI目录**馆藏条目746**为1964-09-10雅加达Gerwani地区领导机关给成员的指示，题名明确涉及协助1964-09-17至27日SOBSI第四次代表大会，编目为**原件1页**；**747**为1964-10-05 S. Soedjinah关于担任Gerwani Tangerang分会助产士负责人的声明，**原件1页**；**748**为1965-01-15 Gerwani章程修订计划前言，**复本2页**；**749**为1965-01-18及21日中央领导机关第四次全会决议实施指示，**复本1封套**；**751**为1965-02-22中央机关向全国地方机关寄送有关Sri Panggih教育机构、成立15周年和第五次全国代表大会三个项目材料的函件，**原件1封套**；**752**为1965-04-26 Pisangan支部Kartini节庆典向Nj. Tasmjardja募捐的信函，**原件1页**。这是少见的可从中央—省级—分会—支部同时追索的组织网络，涉及工会协作、医疗教育、会务与地方筹资；但尚不能据题名断定具体执行成效、成员人数、财务来源或对PKI的组织隶属。下一步向ANRI逐号申请影印746/747/748/749/751/752，核签署人、收件人、决议文本、预算与实际活动；并核SOBSI大会独立记录，避免同源重复。

**G3/G4/G8（1965年9—12月，中央—地方命令链）：** 同一ANRI KOTI官方目录**条目14**为1965年AURI内部G30S调查卷宗，**16**为1965—66军人与平民处置协调卷宗，编目明确提及陆军部长/司令1965-10-26对总参谋部的指示及部门/地区已采取措施，**31**为1965-11有关无荣誉解职、停职、解除职务及生产影响的卷宗，**32**为1965-12南/东南苏拉威西Palopo胶合板项目在安全恢复行动后置于KOTI第五联合参谋部直接监督下的卷宗，**55**为1965-11-03要求在Surakarta/Semarang/Pati散发传单、涉及RPKAD进入的无线电报，**56**为同日请求三辆宣传车支援中爪哇Diponegoro军区的无线电报，**57**为1965-11-18被暂时冻结活动的政党、群众组织和教育机构清单。条目均为**馆藏目录而非原文**；不能从题名推导某人有罪、命令已执行或Palopo具体受害人数。优先取16/55/56/57逐日对照中爪哇军区日志、RPKAD行动及地方报刊；取31/32对照Sulawesi企业劳工名单、资产和职业变更；取14与总统办公室/空军当日记录建立跨机关时间线。

**G4/G5（亚齐，1965—1966，军区/地方政府/华人社区）：** 直接打开Jess Melvin 2013年 *Journal of Current Southeast Asian Affairs* 32(3):63–91出版页面与摘要、书目，https://journals.sagepub.com/doi/abs/10.1177/186810341303200304 （**此页面本次可读摘要与参考文献，非文章全文；C级**）。书目精确定位亚齐军区1966年《Laporan Tahunan Lengkap: Tahun 1965》所含《Chronologis Kedjadian2 Jang Berhubungan Dengan Gerakan 30 September Didaerah Kodam-I/Atjeh》、1965-10-06 **Keputusan Bersama No. Ist-I/Kpts/1965**、1965-10-29 **Surat Keputusan No. Kep/Pepelrada-29/10/1965**，以及北亚齐县长T. Ramli Angkasah于1966-06-15向DPRD-GR提交的1965-04至1966-05施政报告（含1966年4月华人公民集会及学生抗议事项）。**本次仅核书目存在，尚未打开上述原件；不可把论文或检索摘要中对Blang Pidie、Sama Dua伤亡的描述当作已独立核实的军区登记。** 需对照原军区年报与县议会会议记录，拆分1965年政治镇压与1966年族群迫害，核日期、姓名、报告者与统计定义。另Melvin开放专著（https://www.staibabussalamsula.ac.id/wp-content/uploads/2024/03/Jess_Melvin_The_Army_and_the_Indonesian_Genocide_Mechanics_of_Mass-staibabussalamsula.ac_.id_.pdf）提供可进一步核查的原件引用，但其转引不等于本次直接读到军区原件。

**G1/G6/G7/G8/G9/G10状态检查：** G1殖民流放/早期BTI原报未闭合；G6 Moncongloe 1977 SPRIN与逐人名册仍缺；G7 1998—2026基层工会会员/选举/幸存者补偿原始记录仍缺；G8外部援助提案—批准—交付—效果未成闭环；G9本次定位的S. Soedjinah、Nj. Tasmjardja、T. Ramli Angkasah及Pisangan/Tangerang/Palopo须进入统一人物/地名索引，但题名不证明决策权；G10正式CSV与严格时间排序chronology及连续中文正文仍欠账。此前 `claim-ledger.csv` 非空blob读取正文为空，禁止猜测最大编号或覆盖。此处未将候选馆藏号冒充S/C编号。**G1—G10均OPEN；来源级别、缺失原件、行动与阻碍如上。**

## 2026-11-21 跨项续查：Aceh行政清洗与ANRI取件链

**G4/G5/G9 Aceh，1965年10—12月（等级B，书籍全文公开PDF，原始地方命令未取）：** 直接查阅Jess Melvin, *The Army and the Indonesian Genocide: Mechanics of Mass Murder*（2018）公开PDF所列脚注167—170，定位：①Djuarsa以Peperlada身份签发的1965-10-29决定 `Kep/Peplrada-29/10/1965`，可从Aceh林业部门1965-11-20由C. Silitonga签署的决定清单副本交叉追索；②Aceh省长1965-11-11决定摘录 `621/UPO/1965`；③教育部门1965-12-06文件 `28/Rhs/A`，涉及被指涉G30S的小学雇员/教师；④中亚齐县长1965-10-20在Takengon签署的地方决定摘录。以上均为作者脚注中精确列出的原始文书，不等于本次直接阅读了这些文书。研究价值在于从军区命令追到林业、教育与县级行政的岗位处置，必须逐一查对象姓名、处分法律依据、送达、申诉、执行。https://staibabussalamsula.ac.id/wp-content/uploads/2024/03/Jess_Melvin_The_Army_and_the_Indonesian_Genocide_Mechanics_of_Mass-staibabussalamsula_ac_.id_.pdf （另一可见PDF https://www.staibabussalamsula.ac.id/wp-content/uploads/2024/03/Jess_Melvin_The_Army_and_the_Indonesian_Genocide_Mechanics_of_Mass-staibabussalamsula.ac_.id_.pdf ）

**G2/G3/G10 Gerwani—KOTI（等级A：ANRI官方服务/馆藏制度网页，等级C：先前KOTI目录条目，非卷宗原文）：** ANRI 2013-12-02官方公告证实其已整理1963—1967年KOTI档案目录，并明确静态档案按来源机关和原始顺序管理。ANRI现行服务页面明确允许申请静态档案阅读与复制，说明目录746—752及1965年10—11月军令的下一步不应仅反复搜索摘要，而应按“全宗KOTI + 条目号 + 日期 + 题名”申请影印、核封面与签发机关、页码及收发登记。https://anri.go.id/publikasi/berita/ekspose-inventaris-arsip-komando-operasi-tertinggi-tahun-1963-1967 ; https://www.anri.go.id/en/public-services/archives-and-reading-room-services 。不能由馆藏目录推断Gerwani 1964年协助SOBSI代表大会的指示已经执行。

**证据依赖与反证：** Melvin 2013文章、2015报道和2018书籍可能共享同一批Aceh档案，不能计为三份独立原件；行政清洗不能从文书题名直接推出所有涉案人被捕或遇害。下步以各文件签署、接收和实施档案对照幸存者证词，并轮换G1殖民流放与G7工会后续。正式CSV与时间线若未安全读取完整文件，不得覆盖；G1—G10保持OPEN。


## 2026-11-21｜G4 Aceh军方卷宗的独立性核对 × G7 2000年工会法原件（OPEN）

**执行前检查：** 已重新读取2026-11-09完整性审计（G1—G10）与AGENTS、授权、GOAL、continuity、research-status、正式台账开头及本总账；本段不使用预登记S/C编号。此次并非新的一轮终点。G1早期组织、G2基层工农妇女、G3跨机关逐时、G4地区暴力、G5幸存者、G6拘押/重组、G7改革后工会、G8外部介入、G9关系空间索引、G10并库/正文均继续OPEN。

**G4/G3/G9：Aceh，1965年10月（等级B：研究者本人公开叙述/著作全文；军区原件未直接取得）。** 直接阅读Jess Melvin 2015-10-01发表于Inside Indonesia的《Documenting genocide》全文（https://www.insideindonesia.org/editions/edition-122-oct-dec-2015/documenting-genocide）。作者陈述其2010年在Banda Aceh旧情报机关档案中获得约3000页复印材料；据其研究分期，10月1—5日为初始动员、10月6日起出现公开杀害、10月14日起出现军事控制场所系统性杀害、12月以后为政权巩固。**这些是作者对档案的分期和解释，不能直接视为本项目已核原始逐日军令。** 另直接打开2018年Routledge出版商的著作目录（https://www.routledge.com/the-Army-and-the-Indonesian-Genocide-Mechanics-of-Mass-Murder/Melvin/p/book/9781138574694），确认第3章“1—6 October”、第4章Djuarsa 1—11 October、第5章7 October—November、第6章14 October—December及第7章1966年反华暴力/行政清洗的研究组织。章节划分**不是**独立佐证。Melvin 2015报道、2018著作与此前引用的2013论文共用Aceh档案，应归为**同源证据家族**，不能三篇计三证。须索取West Aceh 1965-10-11特别会议21页八件命令包、East Aceh Pantja Sila Defence Front成立/政府支持文件、军区年度报告及原始地图，按签署人—收件机关—执行记录—受害者姓名交叉核验。公开报道中“10月6日开始公开杀害”属研究者地区分期，不可外推为全国统一起点。

**G7/G6/G2：2000年8月4日工会法，印尼全国（等级A：政府官方法律PDF全文可访问及劳动部JDIH法条摘要；法律施行效果尚未验证）。** 直接打开官方法源《Undang-Undang No.21 Tahun 2000 tentang Serikat Pekerja/Serikat Buruh》PDF：https://www.peraturan.go.id/files/uu21-2000.pdf ；对照劳动部JDIH登记页：https://jdih.kemnaker.go.id/peraturan/detail/32/undang-undang-nomor-21-tahun-2000 。法律于2000-08-04公布，2000年法律公报131号，补充公报3989号，签署人为Abdurrahman Wahid；JDIH明确列工人至少10人可成立工会、向当地劳动主管部门书面通知登记（第18条）、登记后代表集体协议和工业争议（第25条）。这证明**法定结社与登记规则**，不证明某地实际登记、会员分布、企业承认或SOBSI与改革后工会存在组织继承。PDF前言明确追溯1956年批准ILO第98号公约及1999年人权法，提示须区分先前规范权利与2000年具体组织登记机制。下一步取2000—2004年县市登记簿、SBSI/KSPI/KSPSI等组织自身章程与干部名单、工厂集体合同、劳工部年度统计；逐个行业和省份追工会自由的执行差异，并与1998年后政治组织、2021年Partai Buruh支持结构相互核对。2026年适用文本还须复核最新官方修法，不能以2000年原版推断现行每条内容。

**G10行动/阻碍：** 本次正式CSV及chronology仅读取了开头，不能确认最新S/C/Q/CV编号及全部重复项，故暂未将这两条写入正式台账，未伪造编号或覆盖。优先通过分段读取/本地git完整取回解决大文件空正文，再进行原子并库、时间线与连续中文历史正文更新。原始Aceh命令包和基层工会登记簿仍未取得。**全部G项保持OPEN。**


## 2026-11-21 续查｜G4/G8巴厘统计口径；G5/G7女性证词与改革后幸存者组织（ONGOING）

已重读2026-11-09 G1—G10完整性审计；G1早期组织、G2群众组织、G3跨机关逐时、G4各省暴力、G5性别与族群、G6拘押流亡与再组织、G7改革后劳工与幸存者、G8外国行动、G9空间人物、G10正式台账/正文均OPEN。以下两条为不同G项/年代的实质核验，不以本节作为结项。

**G4/G8：巴厘，1965—1966（等级A-编辑原件：FRUS官方外交文献编辑注，非1966年原电报全文）。** 直接打开美国国务院FRUS 1964–1968卷26第162号编辑注：https://history.state.gov/historicaldocuments/frus1964-68v26/d162 。该注具体引1966-02-25驻雅加达使馆航空函A-527（NARA RG59, POL 23-9 INDON），称使馆当时收到巴厘死亡约80,000人的估计且杀害尚未停止；另引1970年Howland回顾，其从KOTI一名中校得到的数字是巴厘6,000、爪哇50,000、北苏门答腊3,000，并对统计方法持怀疑。**80,000与6,000均是不同来源/时间/统计方法的当事报告，绝非本项目已确定的巴厘死亡总数；不能把使馆关于家族仇杀的解释当作无争议的独立因果事实。** 编辑注还引用1965-11-13有关东/中爪哇夜间杀害和Kediri/Paree的传闻报告，未获地方名册核验。缺件：A-527原函、1970 Howland原文、巴厘军区/县镇死亡及拘押名册、地方PNI/PKI组织档案；下一步比较同一地区、同一时段、同一定义的独立材料，防止美方编辑注与所引使馆材料被重复计证。

**G5/G7：女性幸存者与公共申诉，2006—2007、1998后社会组织（等级A-机构官方报告发布页及其原文摘录；报告PDF未逐页打开）。** 直接打开Komnas Perempuan 2007-09-03报告官方页：https://komnasperempuan.go.id/laporan-pemantauan-ham-detail/laporan-pemantauan-ham-perempuan-kejahatan-terhadap-kemanusiaan-berbasis-jender-mendengarkan-suara-perempuan-korban-peristiwa-1965 。机构明确称Gerwani成员和被认定与PKI相关女性遭受杀害、失踪、任意拘押、酷刑和性暴力，并把对Gerwani的污名宣传视为组织遭摧毁的重要机制；这是**机构调查结论**，不是已逐案核读原始证词。对照直接打开Nelly van Doorn-Harder 2019开放论文：https://onlinelibrary.wiley.com/doi/full/10.1111/cros.12380 （等级B，研究全文），论文记载2006-05-29有19名女性幸存者代表提出申诉，机构调查联系122名受害者；这两组数字分别是代表团与调查样本，不是全体受害人数。需取得2007报告PDF、方法/地区分布、匿名化访谈索引、地方女性幸存者组织原件，验证地方差异及受访者重复性。

**G7/G9：改革后幸存者组织（等级B-组织参与者公开署名回顾，非创会原始登记）。** 直接打开Andreas Iswinarto 2025-09-23《The 1965-1966 Online Genocide Library》全文：https://www.insideindonesia.org/editions/edition-161-jul-sep-2025/the-1965-1966-online-genocide-library 。作者记述1999-04-19由Sulami Dodjoprawiro、Hasan Raid、Pramoedya Ananta Toer等建立YPKP 1965，1999-11发行《Soera Kita》首刊，2000-11在中爪哇Wonosobo的Kaliwiro/Situkup/Ndempes开展墓地发掘；2000年Imam Aziz等建立Syarikat Indonesia进行基层和解。此为作者叙述的可追原件线索，不能据此认定创办者法律签署身份或发掘司法结论。缺件：YPKP成立章程与登记、1999年《Soera Kita》原刊、2000年发掘记录与地方许可、Syarikat创会材料；须分别确认地点、人物职务、组织持续性。

**G10并库阻碍：** 已定位正式CSV在archive/records，claim-ledger.csv的非空SHA仍无法从当前GitHub文件接口获得正文；source-register仅取得开头。未发放新S/C/Q/CV正式编号，未覆盖正式CSV、chronology或可读中文正文。优先分段/原始blob方式核完整文件，再去重并库。上述三条来源访问等级、事实与作者判断保持分离。GOAL继续OPEN。


## 2026-11-22 UTC｜ONGOING / GOAL仍进行｜G4 Flores原始军令精确定位 × G5/G7妇女幸存者申诉复核

**全局审计与继承。** 本次重新读取 `archive/records/completeness-audit-2026-11-09.md` 全文，逐项检查G1—G10，及AGENTS、stage-access、goal-continuity、continuity-status、正式source-register、search-log、coverage-matrix、chronology；正式claim-ledger.csv依旧为非空blob SHA `362dbb150c296fd2a5f9e2b4d34db64c6a8f414a` 而UTF-8正文返回空，故不猜测C编号、不覆盖。审计中的S367/C617是历史快照，不是当前上限。以下为待正式去重并库的核验记录，不虚构注册编号。

**G4/G5/G9：Flores—Sikka/Maumere，1966年2—4月（学术论文全文已读，引用的1966年军令原件未读；证据级B）。** 直接打开John Mansford Prior, “The Silent Scream of a Silenced History: Part One: The Maumere Massacre of 1966,” *Exchange* 40 (2011), 117–143, https://www.academia.edu/67357396/The_Silent_Scream_of_a_Silenced_History_Part_One_The_Maumere_Massacre_of_1966 ，印刷页136–137。作者引述1966-03-15 KOMOP/Kodim 1607军方函 `B.061/III/1966`，署名Major Soemarno，针对Bola教区助理神父Yosef Frederikus Pede da Lopez在1966-03-06反对约45名村民遭拘捕的行动，要求教士不得干涉“肃清”并要求调离该神父。**已核实的是Prior论文确实引述该函并提供编号、签署机关、具体威胁内容；并未取得函件影印，不能把二手转引升级为已读原令。** 作者又称V.B. da Costa将副本带到雅加达呈交内政部长，随后有停止杀戮命令；该因果链缺呈文、收件登记、停止令原件，必须标为作者叙述而非独立核实。论文还引1966-04-28 Gabriel Manek大主教给Maumere神父Eugenius Soru的信，明确支持Pede da Lopez等神父给被处决者提供宗教照料；原信未读。800—2000名死者是Maumere地区研究估计，不是逐人死亡簿，不能同NTT全省数字相加。重要分歧：军方、当地天主教青年与神职人员不是一个统一行动者；反对拘捕者、参与杀戮者和沉默者应分别逐人追查。

**跨源核对（非独立原件佐证）：** 直接打开美国国会图书馆托管的开放专著 *A History of Christianity in Indonesia* (Brill 2008), 第七章印刷页253–256，https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/19/66/73/60/2019667360.pdf 。该章记1963年Hendrik Djawa在Maumere各教区组织约25支青年团体、1966年2月军方切断Flores各县通信、1966年3月Pede da Lopez抗议，以及1999年Ledalero牧灵会议呼吁记录受难史、重新安葬死者。该章与Prior后来的2011论文共享作者/地方资料，**不能把两者当成独立见证**；但提供政治竞争—地方青年组织—军方动员—神职反应—1999年记忆行动的连续追档链。特别须查1963青年团体成立记录、1966年KOMOP通讯令、1999年Ledalero会议纪要。学术章节称Bajawa当地教会人士阻止青年参加杀戮，与Maumere情况不同，不能把Flores整体概括为同一模式。

**不同G项G5/G7/G9：2006—2017女性幸存者正式申诉与调查（委员会公开页面全文、开放学术论文全文；报告本体英文PDF本次403）。** 直接核读Komnas Perempuan 2007-09-03官方报告介绍 https://komnasperempuan.go.id/laporan-pemantauan-ham-detail/laporan-pemantauan-ham-perempuan-kejahatan-terhadap-kemanusiaan-berbasis-jender-mendengarkan-suara-perempuan-korban-peristiwa-1965 及其2017-10-18发布、落款2016-04-18的官方声明 https://komnasperempuan.go.id/pernyataan-sikap-detail/pernyataan-sikap-komnas-perempuan-terhadap-simposium-nasional-membedah-tragedi-1965 。后者明确称2007年11月已向总统及有关部门提交涉及122名女性的监测报告，并建议司法调查；2007-09-03为网页发布日期，**不得混为提交总统日期**。直接核读Nelly van Doorn-Harder 2019开放论文 https://onlinelibrary.wiley.com/doi/full/10.1111/cros.12380 ，其称2006-05-29有19名女性幸存者代表向委员会正式陈情。**19名陈情代表、122名证言对象和全国女性受害者总体不是同一分母**；2019论文在很大程度上依赖委员会调查，不是独立验证全部122案。OHCHR托管的委员会英文摘要 https://www.ohchr.org/sites/default/files/lib-docs/HRBodies/UPR/Documents/session13/ID/Komnas_Perempuan_UPR_IDN_S13_2012_KomnasPerempuan_Annex8_E.pdf 搜索索引可见但直接打开返回403，记录为“摘要片段可检索、全文未取得”，不得声称本次读了PDF。

**G1—G10持续OPEN：** G1早期党派/殖民流放与1945—49；G2 SOBSI/BTI/Gerwani/青年/文化组织基层；G3 1965跨机关逐日命令；G4各省地域暴力尤其Flores、Aceh、爪哇、巴厘、Kalimantan、Sulawesi；G5妇女/族群/幸存者；G6拘押与流亡；G7工会政党与申诉实施；G8英美澳中苏及经济介入；G9逐人逐地组织索引；G10正式CSV、排序时间线、中文连续历史未安全并库。**精准续接：** (1) 索取Kodim 1607/KOMOP 1966-03-15 `B.061/III/1966`原件、V.B. da Costa递呈及停止令；(2) 查1966-04-28 Manek—Soru原信、1963 Maumere青年组织会议簿及1999 Ledalero会议决议；(3) 获取Komnas Perempuan 2007年122案报告印尼文PDF及可公开证词、2006-05-29申诉记录，区分委员会与独立证据；(4) 与Aceh军区原件、北苏门答腊土地簿及1998后县级工会登记交替核验；(5) 修复claim-ledger大文件读取、按正式ID去重后同步四CSV、chronology与成熟的中文阅读正文。GOAL未完成。


## 2026-11-22｜东爪哇行政控制的形成与1965—66人口迁移：跨证据类型续查（G3/G4/G6/G9/G10，GOAL OPEN）

**G3/G4（东爪哇，1965-10-10至11-30，军区—县区—群众组织）：** 重新定位Grace Leksana, “Collaboration in Mass Violence: The Case of the Indonesian Anti-Leftist Mass Killings in 1965–66 in East Java”, *Journal of Genocide Research* (2020), DOI https://doi.org/10.1080/14623528.2020.1778612 。本次搜索引擎可见较长论文正文摘录，但直接打开出版社全文返回403，**访问等级C（可见长摘录），不得称本次读过全文或原始军令**。摘录提供此前研究需单独核对的相反行动：1965-10-10 Pasuruan的Panca Tunggal遣散约2,000名针对共产主义者的宗教团体示威者；10-11 Lawang工兵营接获与Puterpra合作维持示威秩序、阻止破坏及必要时鸣枪示警的指令。10-13 Malang Korem 083设Pupelrada（引用Kep-15/10/65），10-14有宗教青年组织声援军方的集会及针对Gerwani/Pemuda Rakyat的调查无线电令；10-21 Banyuwangi Cluring村约300名共产党支持者仍向Panca Tunggal提出支持苏加诺、NASAKOM等声明；10-23 Banyuwangi地方机关会议讨论Pupelrada；11-30无线电报要求所谓群众组织“自行解散”须由Dandim/Pupelrada接受并由其他组织见证。**这些都是作者所引军方文书与事件记录，尚非本次独立核读的原件；人数为报告/研究转述，不能当人口统计。** 其意义在于检验“从一开始所有县机关和宗教青年同步杀戮”的过度简化：初期部分地方机关尝试控制示威，随后县区军事机构扩权；不等于证明这些机构在整个时期保护被针对者。下一步索取Museum Brawijaya的Kep-15/10/65、10-11 Lawang令、10-14无线电令、10-21 Cluring记录、10-23会议纪要、11-30电报及各收件/执行簿；核对日期、文件作者与各县不同实际结果。阻碍：出版社403、军区原件未读；与同作者2023年著作可能共享同一Brawijaya馆藏，不算独立证据。

**不同研究维度G6/G9（1965—66逃亡/迁居与地点网络）：** 直接打开Cornell University Library官方仓储的Siddharth Chandra, “Glimpses of Indonesia’s 1965 Massacre through the Lens of the Census: Migration and Refuge in East Java”, *Indonesia* 104 (2017), pp.27–39，论文**出版页及摘要** https://ecommons.cornell.edu/entities/publication/575ceb77-9ddd-4076-a98d-ed07cf85703d 。作者说明使用三次印尼人口普查估算一次性人口变化，并将1965—66年显著净流入地区与军方情报中PKI干部重新集结地点比较；提出迁入地可能成为逃难者避难处。**访问等级C（出版页/摘要全文已读，论文PDF下载重定向失败；人口普查原表和军方情报原件均未读）**。这一研究提供与军令叙述不同的定量证据路径，但迁移净变化不是死亡人数，也不能直接确认迁入者党籍、迁移动机或逐人去向。下一步取得论文PDF及三次普查的县级表、军方情报地点原件，核对县名与行政边界变动，建立地点—日期—净迁移估算—口述/收容档案的交叉索引；特别注意同一县人口变化也可能包含自然增长、统计误差及其他迁移。阻碍：PDF转向受限，县级底表尚缺。

**横向G1—G10状态：** G1殖民流放/革命前史、G2基层工会/农民/妇女/青年、G3跨机关时序、G4全省暴力差异、G5性别族群幸存者、G6拘押/迁移/流亡、G7改革后组织、G8外部干预、G9地点人物组织索引、G10正式并库与连续中文正文全部OPEN。未获得原始材料的部分不升级来源等级；本次未分配S/C/Q/CV编号，正式claim-ledger.csv非空blob读取为空，严禁覆盖。**下一精确续接**：优先取Brawijaya军令原页并核对Pasuruan/Lawang/Cluring的相反行动，再取得Chandra论文及人口普查县级底表；同时轮换Flores 1966-03-15军函原件与G1/G7其他年代原始组织资料。正式CSV、chronology及readable-history仍待安全同步，不能视为完成。


## 2026-11-22 UTC｜跨地区与跨年代续查：中爪哇1965、加里曼丹1967—1997（G3/G4/G5/G6/G7/G9；全G项仍OPEN）

**中爪哇／Klaten—Surakarta（G3/G4/G9，B：学术论文全文已打开；原始访谈及军令未取得）**：直接核读Mathias Hammer, “The Organisation of the Killings and the Interaction between State and Society in Central Java, 1965,” *Journal of Current Southeast Asian Affairs* 32(3), 2013, https://journals.sagepub.com/doi/full/10.1177/186810341303200303 。其方法部分明确2010年1—6月访谈47人，并参照ISSI在2000—2001年Klaten所做7份访谈记录；作者记录RPKAD于10月19日进入Semarang、10月22日到Surakarta（这两个日期本身据Kammen/Jenkins 2012转引，非Hammer新发现的独立军令）。论文据1971年Diponegoro军史及其他研究记载10月26日Solo会议决定动员既有村庄警卫、扩充辅助队伍。关键机制为军方快速拘押、临时拘押场所、审查小组、地方告发与个人关系影响被选中的人；**这属于Hammer对Klaten访谈及文献的分析，不能直接推定每县相同，更不能把论文摘要的约10万人视为逐人死亡登记**。缺件：ISSI 7份原始访谈、2010年47份访谈可合法调阅部分、1971年《Sedjarah Militer Kodam VII/Diponegoro》相关页、10月26日会议记录及各县拘押簿。行动：以10月19/22/26三个节点交叉对照Brawijaya/Diponegoro不同军区记录，明确中央部署与基层选人机制。

**西加里曼丹／1967与1996—1997（G4/G5/G7/G9，A：HRW于1997年发布的调查报告全文直接打开；但1967部分为该报告历史回顾，非1967同期原始记录）**：直接核读Human Rights Watch, *Communal Violence in West Kalimantan*, 1997-12-01, https://www.refworld.org/reference/countryrep/hrw/1997/en/23874 ，报告导论及背景。该报告说明1997年调查人员于1月、7月两次到访，针对1996年12月至1997年3月达雅克人与马都拉移民冲突，估计约500人死亡、约20,000名马都拉人流离失所；数字是HRW估计，非政府逐人核定。报告回顾1967年10—11月反华暴力时引述约300人死亡、逾55,000华人迁离；这一**1967历史回顾口径与其他研究的更高估计不可合并**，尤其不得将1967华人受害与1997马都拉受害混为同一事件。HRW还记录1997年军警使用1951年紧急条例12号以携带刀具为由拘押部分人员，且认为有关第三方操纵1997冲突的指控缺乏硬证据。该报告可直接证明HRW当时的调查、访谈与判断，不能独立证明1967军方所有具体行动或1997第三方阴谋。缺件：1967年省级迁移报告原件、军方发枪记录、1996—97各县死亡与迁移登记、HRW访谈原记录及1979年Samalantan和解文本。行动：对照Tanasaldy的1967驱逐时间线，分开1967政治军事行动、1996—97族群冲突与后续地权变化。

**证据独立性与跨G续接**：Hammer所引Kammen/Jenkins、1971军史与此前中爪哇研究须按共同来源去重；HRW1997对1967的回顾不可升级为同期军令。下次沿中爪哇10月26日会议原始文书与1967西加里曼丹迁移报告分别追索，同时轮换G1早期工会、G2组织基层和G8外部介入原件。正式CSV与统一chronology仍待安全并库，claim-ledger非空blob读取空文本问题未解除；不虚构S/C编号。G1—G10均OPEN，GOAL未完成。


## 2026-11-22｜跨G项复核：美国名单转交与军援自评，衔接Aceh地方迫害（ONGOING）

**G8/G3/G5/G9｜1965-12—1966-08，雅加达美国使馆、印尼安全机关、PKI/Partindo/Baperki。** 直接核读美国国务院《FRUS 1964–1968》第XXVI卷第185号官方编辑注全文（https://history.state.gov/historicaldocuments/frus1964-68v26/d185），已在正式来源表登记为S032，非新来源。编辑注援引1965-12-17 A-398、1966-03-11 A-564、1966-08-10 A-74：A-398所列1965年5月PKI领导机关共95个职位、67个不同个人，另有18名领导人去向汇编；A-564含80名领导人及状态；A-74增补15名高层人物消息，并记载4名被报告死亡、20名被报告监禁。**这些是不同时间的名单和状态，绝不可相加为独立人数或杀害数。** A-74说1965年12月已向印尼政府提供去除美使馆来源标识的A-398版本，另应印尼政府官员要求提供Partindo、Baperki人员名单。编辑注记录Martens于1990年自称独立决定向反共力量传递公开报刊编成名单，否认获大使批准；与1966年A-74署Green签字及报告已提供名单的事实应按**不同时点、不同对象与不同授权层级**分开，不可直接断言Green批准了1965年12月转交。**证据层级A（官方档案编辑注全文已读；原A-398/A-564/A-74附件未读）**。与Aceh 1965-10 Langsa Baperki组织成员名单和迫害链条存在对象交集，但**不能倒推1965年12月使馆名单导致同年10月地方迫害**。缺件：三份airgram原始附件、转交对象/收件记录、印尼地方名单实际使用记录；先按NARA RG59 POL 12 INDON及RG84 Lot 69 F42索取。阻碍：同一FRUS编辑注不是三份原件独立核实，地方执行记录缺。

**G8/G6｜1950—1967，美国军援与新秩序接管。** 直接核读FRUS第232号McNamara致Johnson 1967-03-01备忘录全文（https://history.state.gov/historicaldocuments/frus1964-68v26/d232；正式S034已登记）。国防部长回顾1950—1965 MAP共6320万美元、1959—1965约5900万美元，其中陆军约4000万美元；涉及超过10万件轻武器、约2000辆车辆及通信设备；约500万美元用于约2100名印尼军人赴美培训；1962—1964工程设备交付约300万美元；1964-09暂停新设备运输、1965-03取消剩余项目（约2300万美元），但保留军事联络；1966-09恢复军官培训，1967年提出新经费。**这些是美方主管部长对本国计划的同期回顾，不等于已逐件核对运输单和印尼收据；更不能直接推导每件武器用于1965年某县杀戮。** McNamara明确将军援影响评价为其本人判断，并承认不能称其为唯一或主要成因。层级A（美方政策文件全文），缺件：MAP交付批次/序列号、印尼军方接收与单位装备登记、各军区部署、训练人员名册；下一步沿RG330 OSD Files FRC72 D2468 Indonesia 1967 091.31 MAP及Johnson Library NSF Indonesia Vol VII索原件和附件。

**G4地方链继续OPEN｜Aceh/北苏门答腊/爪哇/Flores/西加里曼丹/Sulawesi。** 本次G8的美国名单与装备证据不能代替G4逐县拘押、杀害、土地及职业剥夺的地方原件。优先将A-74对Baperki名单转交的时间、印尼接收机关与Aceh 1965-10《Pernjataan》及1966-10后地方处分文件并列校时，检验**是否存在后续使用**而非预设因果；同时轮换G1早期工会原报、G2 SOBSI企业档、G7地方登记。G1—G10全部OPEN。

**归档限制：** 本次重读2026-11-09完整性审计、AGENTS、stage-access、goal-continuity、continuity-status及正式source-register/coverage-matrix/chronology；claim-ledger.csv返回空正文但SHA非空，search-log.csv读取出现远程断连，research-status.md在该路径404。S032/S034已有正式来源编号，因此未伪造新S/C/Q；未覆盖正式CSV，也未把新增核读称为正式claim-ledger并库。下一次须恢复CSV安全读取并补chronology及中文连续正文。此处只作长期缺口总账的证据深化记录，不是阶段结论。

## 2026-11-22｜G2/G5与G3/G4交叉核验：Gerwani原刊发行信息、1964年解雇法及Aceh广播主张（ONGOING）
**G2/G5 原刊A级（对刊物自身内容而言）：** 直接打开《Api Kartini》1964年11—12月号原刊PDF（馆藏文件名误标1963），卷首印有出版者Jajasan Melati、编辑地址Matraman Raya 51 Jakarta、发行/行政地址Kramat V/7、编辑Maasje Siwi、Parjani Pradono、Sudjinah、Kartini Nur，责任编辑Maasje Siwi；标示印量 **5000册**、单价Rp50、全年订阅Rp500、半页广告Rp400等。这些是刊物**自行申报**的印数与商业信息，不等于已售/实际分发量；SIT许可证编号内1963不是刊期。印刷第23页《Buruh wanita berdjuang》与第26页《Kebangkitan wanita tani》提供进一步连接工厂/村庄组织的具体入口，尚未逐案核验。来源复用S1526：https://pustaka.taratsa.id/files/1392/pdf/1776742781-25482708/9a7ed2b1b812ecf0985607c562220b41/Api%20Kartini%20%281963%29%20No.%2011-12%20-%20Majalah%20Api%20Kartini.pdf 。
**G2 法律原件A级：** 直接打开印尼BPK官方保存的9页《1964年第12号私营企业解雇法》全文，1964-09-23颁布，代总统Subandrio签署。第2条要求先与相关工会/工人协商；第3条规定协商不成时个别解雇由地区劳资争议委员会许可，大规模解雇由中央委员会许可；同企业一个月10人及以上是大规模解雇的参照定义；第10条无许可解雇依法无效；第12条覆盖私营企业连续工作超过3个月者。**这证明1964年的规范框架，不证明1965年后各地政治性解雇遵守了它**；需追查县级委员会申请、拒绝、上诉簿与SOBSI工厂档案。原件：https://peraturan.bpk.go.id/Download/39587/UU%20Nomor%2012%20Tahun%201964.pdf 。官方BPK与DPR法律库均标记已由2004年第2号法废止；最高法院旧条目仍显示“有效”，属于元数据冲突，不能误写现行有效。
**G3/G4 Aceh B级（学术全文转引）：** 重开Jess Melvin 2013年全文，核1965-10-11 Langsa Kodim-0104 Iljas Mahmud与Baperki领导人的会面，以及10-18《Pernjataan》所称苏加诺曾广播要求彻底消灭G30S/PKI。作者明确指出该广播并不存在；因此**目前仅可确认当事声明曾如此转述，不能把该话归为苏加诺实际广播**。原《Pernjataan》影印、广播节目表和地方见证仍缺。https://journals.sagepub.com/doi/full/10.1177/186810341303200304 。此材料与此前Melvin研究同源，不能充作独立佐证。
**精确后续：** 逐页核《Api Kartini》23、26页工厂与农村地名；从地方劳资争议委员会取得1964—1967解雇许可簿；追Aceh 10-18声明原件及RRI广播存档；将这些事实与正式来源/主张台账去重并写入统一时间线。G1—G10持续OPEN，claim-ledger非空blob空正文仍未解决。


## 2026-11-22 UTC｜G2/G6工会人员逐人拘押与G4/G8北苏门答腊油业（ONGOING）

**G2/G6（1977-09-23原始人权组织出版全文A，所载个人经历仍是该组织核查/转述，不等于狱方原始名册）：** 直接打开国际特赦组织 *Political Prisoners in Indonesia – Trade Unionists*, ASA 21/09/77，https://www.indonesia1965.org/content/uploads/2023/08/ASA-21-09-77-Occupational-list-of-Prisoners-trade-unionists.pdf ，页1—2。其列举具名职业—工会—拘押地点链：Sri Ambar（SOBSI妇女部门负责人，1966被捕、1975判刑15年、1977在Bukit Duri）；Dahliar（BTI议员，1965-10被捕，Plantungan）；Sjamsul Hadi Kastari（SOBSI全国理事会主席团成员、议员，Buru）；Kartina Kurdi（BTI议员兼Gerwani干部，Bukit Duri）；Kusnah（雅加达Unilever厂工会，1969被捕，Semarang Bulu）；Ferdinand Runturambi（SOBSI议员与国际工运，Buru）。这是具名档案入口，不能推断1977之后生死、刑期、获释；该文对1950年250万、1962年320万SOBSI会员等数字为组织声称或人权组织转述，须另取会费和会员册。缺件：逐人逮捕/审判/释放/监视记录、工会企业名册、Plantungan/Buru登记。重点按性别、行业、地区分解，不以工会成员身份推定PKI党员身份。

**G4/G8（1965-11-01外交原件影印馆藏页面及编辑说明，A仅对使馆报告内容，尚未逐页核验电报图像）：** 美国国家安全档案馆2017-10-17公布使馆电报1290，https://nsarchive.gwu.edu/briefing-book/indonesia/2017-10-17/indonesia-mass-murder-1965-us-embassy-files ，Document 9，RG84 Entry P339 Box14 Folder4。使馆称北苏门答腊据报已拘押约600名被指共产主义者，包括PERBUM石油工会负责人，以及Shell、Stanvac炼油厂和PURSI化肥厂的SOBSI干部。**600为当时使馆报告的“据报拘押”，非逐人核实数字、非死亡人数**；还需区分报告时间和拘押发生时间。此线索与G2产业工会和G8外资炼油资产交叉，不能凭同时发生推断外资公司直接指挥逮捕。缺件：电报1290原页、Medan军区拘押令、PERBUM/SOBSI地方干部名单、Shell/Stanvac/PURSI厂人事及国有化交接文书。

**跨项核验：** Komnas HAM《1965—1966调查执行摘要》印尼语PDF全文 https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf ，第1—2页明确其调查2008-06-01至2012-04-30访问349名证人/受害者，且承认地域广阔、预算、记忆和证据流失造成覆盖不足。349为该调查接触人数，非全国受害总数；本文件已在旧记录中引用，不新造来源编号。G1殖民前史、G3中央命令、G5性别族群、G7改革后组织、G9索引、G10正式台账仍OPEN。

**归档障碍：** 正式source-register/search-log/coverage/chronology定位在archive/records/；claim-ledger.csv blob SHA 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a 读取返回空字符串，不能安全覆盖或分配新C号。本次先保存原文定位与待并库事实；下一执行从Git树/blob API解决完整CSV读取并核正式最大编号，再写原子主张和统一chronology；不得把本段当正式S/C登记。


## 2026-11-22｜G4/G8 地域纠错：1290号电报所述工会拘捕发生在南苏门答腊Palembang（ONGOING）
**直接原件核验（A：美国使馆1965-11-01电报OCR全文，须对照扫描以排除OCR错误）**：美国国家安全档案馆公开的Telegram 1290原始电报OCR（https://nsarchive.gwu.edu/media/15705/ocr），第一段明确记载美国使馆劳工专员于**10月28—29日访问南苏门答腊Palembang**，称当地据报已有约600名被称为共产党人的人员遭拘押，继续有人被捕；Shell与Stanvac炼厂的SOBSI干部、**PUSRI**化肥厂工会干部在其中。电报第三段记载Stanvac约30名印尼员工被捕，包括PERBUM干部；Shell Pladju炼厂及Prabumulih油田另有24名PERBUM成员被捕；PUSRI约1300名印尼员工中有15名SOBSI领导干部被捕。**600、30、24、15不能相加**，可能存在口径包含与重叠；这些是电报中的转述和企业消息，并非逐人拘捕名册或死亡数字。原文还记载Ibnu Sutowo考虑将Stanvac约3500名工人中的至少1000名“超额”工人转往厂外工程，属于**考虑中的计划**，不是已执行的调动。
**关键纠错**：国家安全档案馆2017年介绍页（https://nsarchive.gwu.edu/document/15705-document-9-telegram-1290-american-embassy）将该电报概括为“North Sumatra”，但电报正文明确为“Palembang S Sumatra”。既往缺口总账和续接若把这一批Shell/Stanvac/PUSRI拘捕定位为北苏门答腊，应以**电报正文的南苏门答腊定位**纠正，不能再把这600人算作Medan或北苏门答腊事件。需要扫描页与原始地名核对，另行独立调查北苏门答腊Medan。馆藏：RG84 Entry P339 Jakarta Embassy Files Box14 Folder4, Nov 1-9 1965。
**G6跨年代联系（未闭合）**：1977年国际特赦工会政治犯名单与1965年Palembang各厂被捕干部是否存在同一人，尚无姓名、厂内名册及拘押转移记录，禁止直接连成个人生涯。缺件：Shell Pladju/Stanvac Sungai Gerong/PUSRI 1965年10—12月人事/拘押名单、地方军警逮捕令、Ibnu Sutowo有关人员调动决定、原电报扫描校读、1977年具名囚犯履历。
**不同G项轮换 G6（1968 Blitar Selatan）**：印尼文化部历史百科 https://esi.kemenbud.go.id/wiki/Peristiwa_Blitar_Selatan 记载1967年起军事侦察与地方社会的关系；UNESA 2014论文出版页 https://ejournal.unesa.ac.id/index.php/avatara/article/view/9243 仅核读摘要，涉及Yonif511、Munir、Rewang、Suwandi，尚未取得论文全文及1968年行动命令。文化部条目把1968年7月3日写为派遣Witarmin的日期，而其他公开叙述将行动开始列为6月1日；需用1968年原始命令、作战日志分清建队、部署、正式行动及后续清剿日期，不凭摘要调和冲突。此链访问等级C（网页正文/论文摘要，非当时原件）。
**精确续接**：1. 对照Telegram1290扫描第1、3、5、7页与OCR，确认Palembang/PUSRI与30/24/15口径；2. 检索Palembang/PUSRI 1965拘捕地方档案与企业人事表；3. 独立核实Medan/北苏门答腊1965拘捕，不混省；4. 索取1968 Trisula作战命令与Blitar地方军区日志，厘清6月/7月时间冲突；5. 继续轮换G1/G2早期组织、G5女性及G7改革后劳工。G1—G10全部OPEN。


## 2026-11-22｜G4/G8南苏门答腊企业证词冲突 × G6南勿里达行动起点（ONGOING）
**G4/G8（1965-11-01美国使馆1290号电报公开OCR全文，A级：同期外交报告本身；非印尼地方拘捕原件）**：核读 https://nsarchive.gwu.edu/media/15705/ocr ，明确使馆劳工专员1965-10-28—29访问的是Palembang, South Sumatra，档案馆英文/印尼文介绍将其误写North Sumatra。新增对证词分歧的核验：Ibnu Sutowo将Shell Pladju炼厂火灾视为破坏活动；Shell管理层明确否认，认为是事故，称Pladju减产由Balikpapan炼厂弥补。使馆还转述印尼当局称发现所谓共产党人拟杀害对象与执行人名单，**名单本身未取得且为单方军警指控，不能当成已有杀害计划事实**。电报说10月29日Pladju增派40名军方守卫，Stanvac拟增派120名；与30名Stanvac雇员、24名Shell/PERBUM成员、15名PUSRI/SOBSI领导遭拘捕的报告应区分，不能由企业保卫部署推出外企指挥逮捕。待取：电报扫描逐页校读、火灾调查记录、企业人员名册、当地军方拘押单和政府收件档。
**G6/G4（1968南勿里达，来源等级C/B混合，尚非军令原件）**：印尼文化部历史百科 https://esi.kemenbud.go.id/wiki/Peristiwa_Blitar_Selatan 记述1968-07-03派Witarmin执行Trisula；2022年地方报道 https://www.detik.com/jatim/budaya/d-6322333/sejarah-pki-di-blitar-selatan-pemberontakan-penumpasan-dan-rekonsiliasi 转述1968-05-18组建指挥部、06-01正式行动，并引2004年空军史记06-06组建空中行动分队；两者日期**存在未消除的行动定义/叙述冲突**。另有军事叙述转引PRINOP 01/02/1968、PRINOP 02/05/1968，不能当已读原件。需要分别核实部队组建、地面行动、空中支援、7月指挥变更的原始军令与逐日作战日志；追查当地居民遭拘押及地下组织的补给、通信、人物身份，勿只复制军事胜利叙事。此项与Palembang不同G项/年代，均保持OPEN。
**G1—G10状态**：全部OPEN；G1早期党工会、G2组织基层、G3跨机关命令、G5女性/族群、G7改革后执行、G9人物地点索引、G10正式CSV及中文正文均未闭合。正式claim-ledger.csv接口仍返回0字节但Git blob非空，禁止覆盖；本条尚非正式C编号。下一动作：①核1290影印和Shell火灾调查；②索1968 PRINOP 01/02、02/05及空军6月6日令；③并查Aceh/Flores地方军令；④从正式source-register去重后入账；⑤将证据成熟的事件整合到中文连续正文。


## 2026-11-22 续查｜G6/G4南勿里达与G5/G6南苏拉威西（仍OPEN）

**南勿里达1968年 Trisula 行动，来源B/C而非军令原件。** 已直接打开印尼文化部历史百科《Peristiwa Blitar Selatan》完整网页（https://esi.kemenbud.go.id/wiki/Peristiwa_Blitar_Selatan），署名Johny Alfian Khusyairi，引用1980年国家出版物及2003年未刊学位论文。其记载1967年5月起军方情报行动、1968年7月3日派Witarmin、850人被捕（其中13名中央委员会和12名东爪哇大区委员会人员）、216处地下空间；均属于后出二手叙述，不能作为原始作战命令或逐人名单。对照2022年9月30日detikJatim采访（https://www.detik.com/jatim/budaya/d-6322333/sejarah-pki-di-blitar-selatan-pemberontakan-penumpasan-dan-rekonsiliasi），后者称5月18日任命指挥部、6月1日正式行动、6月6日组建空军Elang分队，并称初期约4,000人被集中。**7月3日与6月1日矛盾仍未消除；850与4,000统计对象不同，禁止相加或当作死者数。** 2022报道引述后来的军史及受访者，不能作为独立的1968年原件。缺：PRINOP 01/02/1968、02/05/1968、1968年6月6日空军命令影印、Witarmin任命书、被拘人员登记；行动：逐页核原文日期/签发与收件机关、不同人数口径。

**南苏拉威西Moncongloe拘押与强制劳动，G5/G6，来源B（作者实地口述研究公开全文）。** 直接打开Taufik Ahmad, “Survival through slavery”, *Inside Indonesia* 99 (2010-01-24), https://www.insideindonesia.org/editions/edition-998/survival-through-slavery 。作者称1965-10-05 Makassar医师Soenarso遭袭，1966年3月初全省军警场所关押9,765人；1969年底Moncongloe营地完工，转入859名男子、52名女子，846人住营内，其余分配到军人家中无薪劳动；1978年前除42人外获释，42人转Nanga-Nanga，次年释放。以上为作者研究及访谈陈述，**尚未取得拘押登记/军令/逐人释放令，不能把9,765人当作Moncongloe营内人数，也不能把1978释放等同公民权恢复**。作者还报告营地耕作、军官占用土地及被释放者继续每周报告；需原营地名册、地籍及军区劳动记录、Anwar Abbas口述录音和Nanga-Nanga调转登记。注意859+52=911与846是不同范围，差额65人不能擅自解释为死亡或逃亡。

**跨项未结：** G1殖民与革命组织原件、G2基层会费/地籍、G3跨机关通信、G4各省原令、G5女性及族群个人档案、G6拘押/地下组织、G7改革后执行、G8外国交付记录、G9人物地点链接、G10正式CSV与中文正文均未关闭。正式CSV已定位archive/records/；claim-ledger.csv仍API返回空正文，不覆盖。下一执行：先查Trisula两份PRINOP影印与军史脚注，再找Moncongloe军方登记及访谈原件；之后轮换G1/G2原始工会刊物或G7 ILO工会执行档案。


## 2026-11-22 持续续查｜G5/G6 Moncongloe逐人证词入口 × G1 1926—1943 Boven-Digoel（ONGOING / 全部OPEN）

**G5/G6 南苏拉威西：由学者概述推进到国家人权委员会调查报告中的证词定位。** 已打开印尼国家人权委员会 Komnas HAM《Ringkasan Eksekutif Tim Ad Hoc Peristiwa 1965-1966》在 Academia.edu 上的公开文字转录（非委员会官方网站原PDF，访问级别：官方报告的第三方转录，须校原件）。报告说明调查组任期2008-06-01至2012-04-30，访查349名证人/受害者；其报告明确承认地域、经费、时间和证人创伤造成取证不完整。转录在Moncongloe段提及证人B62：自Majene监狱转至Moncongloe，报告中其拘押起点为1972年、终点为1977-12-20，并提及建设Kodam建筑与Sungguminasa军人住房；邻近段落引证人描述营地耕作军官私有农地、未获逮捕令与未受审。**这是调查组记载证言，不是已经取得原始BAP笔录，也不是法院最终认定；不得把B62等同Taufik Ahmad所采访的Anwar Abbas。** 报告转录内给出BAP 267/BAP_TPPH65/III/2009等档号（与B62的对应关系须逐页校核）。来源 https://www.academia.edu/11915739/Komnasham_eksekutif_summary_65 。同步复核Taufik Ahmad本人2010年公开全文 https://www.insideindonesia.org/editions/edition-998/survival-through-slavery ：其明确区分911名被转入者、846名住营者及被分派军官家庭无薪劳动者；但本文与其他同作者研究不可视为独立见证。**缺失原件**：Komnas HAM正式PDF及2009年BAP原笔录、Majene—Moncongloe转押登记、1977-12-20释放名册、军方工程合同/地籍；行动：校对委员会官方页版次与证词编号，再将同一证人证词和1977释放行政记录配对。阻碍：第三方转录可能分页错乱、部分证人匿名、原件尚不可公开。

**G1 殖民左翼前史：荷文馆藏机构出版的完整学术文章已读，不是1926年政府决议原件。** Leiden University Libraries刊物 *De Boekenwereld* 35(4), 2019, Anouk Mansfeld, “Boven-Digoel: Koloniaal verbanningsoord, 1927–1943”, 文章见该期印刷页30起；开放PDF https://www.bibliotheek.universiteitleiden.nl/binaries/content/assets/ul2ub/bijzondere-collecties/de-boekenwereld/de-boekenwereld-35_4-2019compressed.pdf 。文章叙述殖民当局于1926-12-10决定设立偏远流放地、1927年3月底第一批被流放者抵达；区分Tanah Merah与Tanah Tinggi，并解释行政拘禁与刑事定罪不同。该研究对「无需刑事定罪而行政流放」的制度分析值得和1965后拘押机制对比，**但不能直接断言两者具有同一法律依据或连续指挥机构**。缺失原件：1926-12-10 Gouvernementsbesluit及Raad van Indië议事、1927首批运输清册、1927—1943逐人登记和当地巴布亚居民土地/劳动资料；行动：从文章脚注定位荷兰Nationaal Archief及Leiden馆藏，核1926年12月10日决议原件及首批名册，追踪流放者在1945—1949时期组织活动。阻碍：目前仅完整打开后出的馆藏研究，未打开原始政府命令。

**全局轮换与治理：** G1—G10均OPEN；G2工会/农会/妇女基层组织、G3跨机关命令、G4各省镇压、G7 1998后组织执行、G8英美澳中苏行动、G9人物地点、G10连续中文正文仍需实质补证。正式claim-ledger.csv仍返回0字符而Git blob SHA非空，**不覆盖、不编造C编号**；本段仅为缺口总账临时证据说明，正式CSV、chronology及中文正文尚待安全合并。下一续接精确入口：①Komnas HAM报告B62及BAP 267/2009原件；②Moncongloe 1977年12月释放登记；③Boven-Digoel 1926-12-10殖民政府决议；④Boven-Digoel 1927首批押送清册；⑤轮换Aceh地方军令与1998后县级工会登记。


## 2026-11-22｜G5/G6南苏拉威西原始调查报告与G1殖民流放交叉核验（ONGOING）

**G5/G6，访问层级A（委员会正式编写的调查执行摘要，第三方TAPOL镜像承载；并非原始证人笔录）**：直接打开Komnas HAM《Ringkasan Eksekutif Hasil Penyelidikan Tim Ad Hoc ... Peristiwa 1965-1966》印尼语PDF全文，https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf 。报告第1页明确调查授权期2008-06-01至2012-04-30，询问349名证人/受害者，并主动说明地区范围、经费、47年记忆跨度及创伤对证据收集的限制。Moncongloe章节（PDF可检索正文）区分A、B、C、D匿名证人：A称1970年9月至1977-12-20被拘押，B称1972年从Majene监狱转入至1977-12-20；报告脚注给出2009年BAP编号266、267、268、269/BAP_TPPH65/III/2009。这是**正式调查摘要中对证言的记载**，并非已经独立取得2009年原笔录或法院裁判。与Taufik Ahmad 2010年公开文章（https://www.insideindonesia.org/editions/edition-998/survival-through-slavery）所述1969年底859男+52女=911人转入、846人住营、其余被分配军人家庭无薪劳动比较，必须严格区分入营总人数、住营人数、某证人拘押期及省级早期拘押总量，不相加。**本次突破**：此前只读第三方转录，本次可直接核读委员会正式署名PDF（虽然由TAPOL镜像提供），因此报告文本访问状态可升级；仍不得称BAP原件已取得。

**G1，访问层级B（莱顿大学图书馆公开的荷文研究全文，不是1926殖民决议原件）**：直接对照Anouk Mansfield《Boven-Digoel: Koloniaal verbanningsoord, 1927-1943》，《De Boekenwereld》35(4), 2019，莱顿馆藏PDF https://www.bibliotheek.universiteitleiden.nl/binaries/content/assets/ul2ub/bijzondere-collecties/de-boekenwereld/de-boekenwereld-35_4-2019compressed.pdf 。研究明确1926-12-10殖民政府决定设流放地，1927年3月底第一批到达；区分Tanah Merah与Tanah Tinggi，说明殖民政府刻意避免将其称为刑罚营地。不可由此推定所有流放者均未经司法程序，须逐人核对法律身份及殖民行政档案。缺件：1926-12-10 Gouvernementsbesluit正式编号和原文、1927运输/流放名册、Raad van Indië报告。

**跨地区比较的边界**：1927殖民行政流放与1969—1977军方控制的Moncongloe拘押是两个不同时期的制度，不得直接声称法律、指挥系统或目的连续。比较只作为研究问题：行政标签如何掩盖实际人身自由限制，谁签发拘押、谁执行、释放如何登记。

**具体续接**：（1）在Komnas HAM PDF内逐页定位Moncongloe匿名证言及BAP脚注，核对扫描页码与证词A/B/C/D对应；（2）追取Komnas HAM原官网版本、2009年266—269号笔录及1977-12-20释放名单；（3）在荷兰Nationaal Archief/Delpher查1926-12-10 Boven-Digoel regeringsbesluit及1927年押送名单；（4）转向Aceh 1965年10月县军令与Flores 1966年3月军方警告信，避免仅集中苏拉威西；（5）核查正式CSV现有两项来源是否登记，claim-ledger仍须先解决读取空正文，未获核准不得分配C编号。G1—G10全部OPEN。


## 2026-11-22｜跨项深化：Moncongloe释放命令与Flores地方甄别会议（ONGOING）

**G5/G6/G9 南苏拉威西，机构调查摘要原文已直接核读，非释放令原件。** Komnas HAM 2012年印尼语调查执行摘要（正式署名PDF由TAPOL镜像）印刷页约145、149—150、154—155，https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf ：报告载1977-12-20地方TEPERDA释放/转管令 **SPRIN/802/TPD/XII/1977**，签署者为Major CPM Idham Alam；措辞是从“完全拘押”改为“居家拘押”，离家须获当地DANDIM或TEPERDA Sulselra许可，**不能把该日一概记为完全自由**。匿名证人B（BAP 267/BAP_TPPH65/III/2009）称1972年从Majene转押Moncongloe，1977-12-20适用上述命令；证人C（BAP 268）记1974-08-08 C3释放分类，证人D（BAP 269）记B2分类。报告另称1977同批Moncongloe与Buru约1000+9000=10000，但系报告叙述而非逐人核实的名册；报告另有明显“1970-12-20”年份笔误，应以具体命令日期及证词对读，不自动更正为确证事实。**来源S140已登记**，勿重复分配。缺原件：SPRIN/802签章影印、逐人附表、BAP 266—269/2009、居家监督/旅行许可、1974-08-08 C3释放函。阻碍：目前只有调查摘要转述，不能证明命令原件、实际离营及所有人获释。

**G3/G4/G5/G9 Flores/Sikka，学术全文B，不是1966会议原始记录。** Gerry van Klinken, *The Making of Middle Indonesia* (2014), Chapter 10, UvA公开完整PDF https://pure.uva.nl/ws/files/2526919/166060_488108.pdf ，章节引述匿名1974年记载：1966-02-27 Sikka县议会厅，Komop参谋长、G30S调查组负责人、政党/社会组织/Golkar代表会商第二波应“secured”人员；会议由调查组负责人Karel Elkel与军方代表Sergeant Major Jos U. Tokoh主持。此为**学术作者翻译的匿名回顾记载**，不是会议纪要或已核实签署名单；不得认定与会者均同意或实际执行全部名单。既有John Mansford Prior 2011全文 **S456** 又引1966-03-15 Major Soemarno对Bola教区神父Pede da Lopez的警告函（原函未见），可作为跨机构顺序追查：2月27日甄别会议→3月6日神父干预（研究记载）→3月15日警告函；不能仅凭两篇学术叙述断言指挥因果。缺原件：匿名1974年手稿及1966-02-27会议签到/名单/Komop命令、1966-03-15签字函与教区收件簿、县级被拘/死亡逐人名册。阻碍：学术引用的原始档案未公开核读；不同作者可能共享同一回忆来源，不当作独立证实。

**G7 不同年代交叉检索**：印尼劳动部JDIH https://jdih.kemnaker.go.id/peraturan/detail/32/undang-undang-nomor-21-tahun-2000 与BPK官方法条 https://peraturan.bpk.go.id/Download/33380/UU%20Nomor%2021%20Tahun%202000.pdf 复核2000-08-04工会法及十人发起、书面通知/登记制度；正式来源 **S611已登记**。这证明规范文本，不证明1998后各县工会登记或实际自由。缺件：地方Disnaker工会收件/登记台账、企业谈判与解雇案件、2024—2026工会组织结构及实施证据。

**治理与续接**：已重读2026-11-09 G1—G10完整性审计及AGENTS/stage-access/goal-continuity，正式来源去重S140/S456/S611。claim-ledger.csv非空SHA却返回0字符，禁止覆盖或发新C编号；正式CSV及统一chronology尚未安全并库。下次从SPRIN/802/TPD/XII/1977及BAP267原件、Flores 1966-02-27县会议记录与3月15日军方警告原函开始；轮换G1殖民流放与G7县级登记，并持续补齐G4其余各省。G1—G10 OPEN，长期GOAL未完成。


## 2026-11-22｜ONGOING / GOAL仍进行｜Moncongloe释放口径与2024劳动判决原件（G5/G6 × G7/G10）

**本次全局复核**：直接读取completeness-audit-2026-11-09.md完整G1—G10，及AGENTS、stage-access、goal-continuity、continuity-status、source-register、search-log、coverage-matrix、chronology；research-status.md在archive/records路径404。claim-ledger.csv的Git blob SHA 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a仍为非空对象但UTF-8接口返回零字符，未覆盖。继承现有S1530、Q593、CV662以后编号；本条不另造S/C。

**G5/G6（南苏拉威西1970—1977，原始机构调查摘要全文A，非证词原件）**：重新打开Komnas HAM《Ringkasan Eksekutif Tim Ad Hoc Peristiwa 1965-1966》印尼语PDF（TAPOL保存的官方署名文本） https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf 。证人A54称1977-12-20与另466名被拘者一起离营；此处“466名其他人”与“总计466人”可能在转译中混淆，须核印尼文原页和释放名单，不可当作全营累计人数。证人B55称根据SPRIN/802/TPD/XII/1977由完全拘押改为居家拘押，故“dibebaskan”不等于行动自由。报告亦转述拘押者开垦军人私人土地、修筑Moncongloe—Daya约23公里道路的证词：道路长度与劳动性质是调查报告记载的证人陈述，不是工程竣工验收数据。缺件：原始BAP 266—269/2009、SPRIN/802签字全文、1977年12月逐人出营和居家监督名册、道路工程记录。阻碍：报告的证词匿名、数字口径与释放性质存在歧义。不可将委员会报告与其英文翻译算作独立两证。

**G7（全国2024劳动法争议，法院正式判决全文A）**：打开印尼政府法规库所载宪法法院2024年第168/PUU-XXI/2023号判决PDF https://peraturan.go.id/files3/putusan-mahkamah-konstitusi-no-168-puu-xxi-2023-tahun-2024.pdf ，第190页附近§443—446明确引用2000年第21号工会法的工会定义及ILO第98号公约，并讨论2023年第6号法改变的劳工权利条款。该处处于当事人法律论证段落，**不能把§443—446直接称为法院裁判主文或认定全部诉请成立**；应继续逐页核判决末尾amar putusan及其具体条款，结合2025—2026实施规定和县级工会档案。官方法条 https://jdih.kemnaker.go.id/peraturan/detail/32/undang-undang-nomor-21-tahun-2000 记载工会最低10人、向当地劳动机关书面报备及取得登记号，属法规规则，不是实际地方登记率。2024-01-25宪法法院新闻 https://www.mkri.id/berita/-19956 转述专家Indrasari Tjandraningsih关于2005—2023工会数量变化的陈述，**数字口径明显需要核原始统计（会员/工会数不可混同）**，暂不采纳为确证的全国工会数量。缺件：168号判决主文逐项核读、劳工部实际执行文件、县市登记名册、工会会员统计原表。阻碍：规范性文件不能证明地方实施；庭审专家陈述不等于法院认定。

**G1—G10横向续接**：G1 ANRI警察档案1215及劳动部91号原件；G2 SOBSI/BTI/Gerwani地方账簿；G3军令广播收发；G4 Aceh、北苏门答腊、东西中爪哇、巴厘、Flores、West Kalimantan、Sulawesi地方名册；G5证人BAP；G6释放监督及PRD；G7县级工会；G8英美澳中苏执行档；G9人地组织索引；G10正式CSV、统一时间线和成熟中文正文仍全部OPEN。下一执行优先交叉获取Moncongloe 1977释放名单与2024判决主文，同时换入Aceh/Flores地区军令，避免持续围绕单一地点。此处为证据追查记录，不替代正式CSV或可读正文；后两者仍有待安全同步。


## 2026-11-22｜G4/G3 巴厘岛军政命令与省长调离：新增可精确索取的私人档案链（ONGOING）
本次再次完整读取2026-11-09 G1—G10审计；G1早期组织、G2群众组织、G3跨机关时间、G4各省镇压、G5妇女族群、G6监禁与再组织、G7改革后工会、G8外部介入、G9人地组织索引、G10正式台账与中文正文全部OPEN。既有长期链G4/G8巴厘死亡数字（正式来源S400、S401）继续保留：1965-12-21使馆A-408报道至少一万名巴厘死亡，1966-02-25 A-527估计八万，不能视作同口径累计，更不能把使馆估计升级为逐人统计；原影印与地方名册仍缺。

**跨项新证据入口（G3/G4/G9）**：直接打开Slamat Trisila发表于《Jurnal Kajian Bali》的论文落地页、摘要和完整参考文献（正式登记S1531；访问层级C：书目与摘要，论文PDF未读）。参考文献列出巴厘Jembrana的Puri Negara私人档案中的五份可逐件索取材料：1965-11-03 Pepelrada KEP-PPD.2/1/234（暂时冻结PKI及其群众组织，并将执行移交Pangdam XV Bali）；1965-12-03总统内阁秘书处关于召A.A.B. Sutedja赴雅加达备忘录；1965-12-10与苏加诺会谈纪要；1965-12-18总统决定380/1965（暂时调往雅加达）；1966-07-26关于Sutedja被绑架的书面报告。来源 https://ejournal1.unud.ac.id/index.php/kajianbali/article/view/5672 。**上述文件仅为作者书目所列，原件一件也未读；不得据此认定命令实际下达至县、执行效果、绑架责任人。** 网页同时标示2013年卷期与2026-05-22上架时间，需核原刊年代，不能误记为2026年首次研究。

这组文书可检验巴厘岛11月初行政禁令、12月军方与省长权力变化的先后关系，并与S401的12-21使馆报告、S400的次年2月估计交叉；**研究对象从死亡数字转向机关决策及传达链**。同属G4的West Kalimantan、Flores、Aceh、北苏门答腊和爪哇各区仍缺军区原令，不能用巴厘替代全国。

**精确续查**：（1）下载并逐页读该论文PDF，标注上述五件文书在正文被引用的页码和作者的实际读件程度；（2）通过Puri Negara Jembrana/大学论文作者线索索取1965-11-03 KEP-PPD.2/1/234原影印、签发人、收文分发及执行记录；（3）索1965-12-03/10/18三份总统与省长文件，核Sutedja实际任职与离任时间；（4）对照S401 A-408原影印及A-527，明确使馆报道时间、来源和统计口径；（5）轮换West Kalimantan 1966年Baperki与华人组织登记/驱逐军令、ANRI Delanggu 1948第1215号警察卷宗、2000年后地方工会登记执行。正式claim-ledger.csv读取仍返回空正文，未覆盖或分配C编号。长期GOAL未完成。


## 2026-11-22｜ONGOING｜G4/G8/G9 西加里曼丹1967年地方暴力：省府报告与军事停令原件定位
已重读2026-11-09完整G1—G10审计和授权规则；本条与巴厘Sutedja长期链跨地区交替。直接核读已登记 **S383** Taufiq Tanasaldy (2012) KITLV著作开放PDF第5章印刷pp.137–145（美国国会图书馆镜像 https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/82/94/2020718294/2020718294.pdf ），并对照已登记 **S453** Matsumura (2015) J-STAGE期刊摘要；**S831是S453重复登记，不计独立来源**。S383是学者全文，不是省府、军方、报纸原件。

**可核实的文献记载及口径：** S383 pp.137–139明确引用西加里曼丹省长办公室1967年内部报告《Pengungsian orang2 Tjina sebagai akibat gerakan2 orang Daya dalam daerah Kabupaten Pontianak dan Kabupaten Sambas》（馆藏标注Library of West Kalimantan Governor’s Office, Pontianak）。作者据该报告将Tepo村Air Besar地区焚掠提前到**1967-10-05至07**，早于常见10-14 Uduk起点；10-18 Bengkayang城已有约1000避难者；10-19 Samalantan出现红碗动员；11月初Senakin、Darit、Sebadu三地合计210死者是学者引述的报告数字。该章引述官方记载249死亡、近60000避难者，均**未见原始逐人名册**，统计时点、县界和重复计数待核，不能与其他估算混加。pp.138–139脚注117定位A.J. Witono 1967-11-17《Maklumat》，藏S. Jacobus E. Frans Layang私人收藏，并有《Pembangunan》1967-11-21报道；据作者转述，命令要求停止示威且威胁当场射杀违抗者，原签署文件未直接取得。

**关键相反解释，必须并列：** S453摘要将军方煽动驱逐和Oevaang Oeray政治动员作为核心解释；S383 pp.144–145虽承认军方鼓励达雅克人对游击队作战，却指出地方行政混乱和县长Usman Idris于1967-11-09指示让华人农民返乡的报载行动，认为尚不足证明雅加达统一预谋驱逐。两者对军方角色的判断不同，且可能共享Davidson、Rachman及同一省府报告，**不是相互独立的原始证言**。须分离中央命令、地方军事煽动、村级行动与事后治理，不得将“达雅克人”或“华人”视为同质行动者。

**待取原件与阻碍：** ①Pontianak省府档案馆1967《Pengungsian orang2 Tjina》原卷，核10-05/07与10-19、逐县伤亡及迁移清单；②Witono 1967-11-17《Maklumat》原影印及1967-11-21《Pembangunan》原报；③1967-11-09《Pembangunan》关于Usman Idris返乡指令原版；④各县警军与医院、难民安置和土地/商铺转移台账；⑤1967年PGRS/Paraku与边境军令及地方组织通信。尚未读取这些原件，**不将学者引用升级为原件证据**。G1—G10均OPEN；继续巴厘1966-07-26报告与07-29失踪日冲突、G1 Delanggu原件、G7地方工会登记，并逐步写成熟中文连续叙事。


## 2026-11-22｜ONGOING｜G1/G2与G4/G9交叉核验：1948年工会公告的国家档案定位
**G1/G2 新增实质证据入口（直接打开官方档案目录全文；目录级C，不是原件全文）：** 印尼国家档案馆ANRI 1995年编制的《Inventaris Arsip Kepolisian Negara RI 1947–1949》公开PDF（https://www.anri.go.id/download/ra-26.-inventaris-arsip-tekstual-sekretariat-negara-kepolisian-negara-ri-19471949-1714018366），目录**第493号**明确列出GASBRI（Gabungan Serikat Buruh Revolusioner Indonesia）**1948-05-01第1号公告**，内容主题为**1948-04-25 Solo革命工人会议**，馆藏1页、类型为turunan（转录/副本）。这是对1948年左翼工会网络的可索取精确卷号，不能据此推断会议实际决议、参与名单或GASBRI与SOBSI的上下级关系。相邻**第494号**为1946-01-27至1948年有关PKI成员身份的文件夹（目录注明不完整），**第501号**为1947年1月至1948年10月与Madiun事件相关的罢工通信；**第481号**为1948年10月2—23日国家种植园系统对Kediri和Surakarta涉案雇员的解职决定副本。第481号的档案标题包含当局对雇员的政治指控，不能把指控当作已证事实。索件顺序493→501→481→494，并核签发人、会议代表、企业和处分对象逐人身份，接入1948 Delanggu—SOBSI—FDR连续时间线。该PDF是**档案目录原文A（目录本身）/被描述历史文书仅C**；原始公告、警察函和人事决定均未读取。

**G4/G9 长期链交叉核对（未重复登记旧来源）：** 西加里曼丹1967年约59,850避难者的口径，既有研究已定位到省政府1968年10月进度报告附录VI；继续明确该数字是**1967年11月安置营与亲属寄居者合计**，不能当作死亡人数，也不能与1968年5月43,941或8月28,028相加。研究全文摘录不是省府原件。必须索取《Progress Report, Propinsi Kalimantan Barat》1968-10-17/18总统访问材料附录VI原件、各县营地名册、迁移和死亡登记，逐栏核A/B/C及1967—68各统计时点；与1967-11-17 Witono Maklumat原影印及省府1967难民报告交叉。**此链本次未取得新地方原件，保留未决，不将既有研究当作独立新证据。**

**治理/续接：** 已重读G1—G10审计；新查的ANRI档案目录须先与正式source-register去重再登记，避免无依据分配S编号。claim-ledger.csv依然为非空SHA却返回空正文，禁止覆盖。优先追ANRI馆藏493公告与501罢工通信，转回西加里曼丹省府附录VI及1967军令；再轮换Aceh/北苏门答腊与G7县级工会登记。G1—G10均OPEN，GOAL未完成。


## 2026-11-22｜ONGOING / GOAL仍进行｜G4亚齐逐人清洗与G1档案调阅路径交叉核验

已重新读取G1—G10完整性审计及AGENTS、授权、GOAL、continuity、正式来源/主张/搜索/覆盖/时间线；claim-ledger.csv仍返回空正文而有非空SHA，禁止覆盖。G1—G10全部OPEN。本条优先推进G4亚齐（此前已登记S472、S855、S612），并与不同年代的G1/G2 1948年GASBRI/Delanggu原件调阅链交叉，未重复分配S/C编号。

**G4/G6 亚齐（1965-10—1967-03，来源等级B：学术著作公开全文已读；书中引述军方文书及表格，原签发件未独立核读）**：直接打开Jess Melvin《The Army and the Indonesian Genocide》2018年全文 https://staibabussalamsula.ac.id/wp-content/uploads/2024/03/Jess_Melvin_The_Army_and_the_Indonesian_Genocide_Mechanics_of_Mass-staibabussalamsula.ac_.id_.pdf ，第7章表7.1及前言（可检索文本行5451—5604）。作者报告发现**82件清洗文书，约111名被解职、停职或停止活动者**，形成日期1965-10-18至1967-03-31；其中1965-10-18两件省长签署的林业部门处分涉及Ibnu Sjakur、Ir Gani Abu；1965-10-20 Takengon县长签署文书涉及县政府S.M. Lahat和农业部门Sedjuk；1965-10-31北亚齐县长签署多件农业/政府人员处分。**82是文件件数，111是作者归纳的人员数，不是死亡人数；表列政治处分也不证明受处分者的政治身份或犯罪事实**。此证据补足此前偏重杀戮数字的行政职业剥夺机制，需逐件核文件号、签署权、送达、复职/工资与后续拘押。

**G4亚齐死亡数字口径**：同书在军方《Complete Yearly Report》引文中载**1,941宗公开杀戮**（行3644—3662），而作者脚注解释这一军方统计针对1965-10-07至13日公开杀戮阶段，并推测全省死亡可能高于此；**不可把1,941写成1965—1966全省总死亡，也不可将作者估计当逐人核定**。S855是相同军方报告的扫描本，与S472作者引述不构成两份独立原始证据。须将表7.1人员名单与军方死亡地点/拘押清单按县分开，不能直接对应。

**G1/G2 1948档案（来源等级A：ANRI官方目录原文；被目录描述的历史文件仅C）**：复核ANRI官方警察档案目录 https://www.anri.go.id/download/ra-26.-inventaris-arsip-tekstual-sekretariat-negara-kepolisian-negara-ri-19471949-1714018366 的第493号，明确GASBRI 1948-05-01公告仅**1页，turunan副本**，对应1948-04-25 Solo工人会议；第494号PKI成员文件夹标注**tidak lengkap（不完整）**。官方ANRI阅览服务 https://anri.go.id/en/public-services/archives-and-reading-room-services 明确提供馆藏借阅、阅览、复制及线上申请渠道；这使493/501/481/494成为可提出馆藏复制申请的精确对象，而不是声称已经取得公告正文。需索公告签发人、会议代表及与SOBSI/FDR关系；目录不能证明实际决议。

**下一精确行动**：①核Melvin表7.1与表7.2逐人、逐县及签发机关，索原82份清洗文书及工资/复职登记；②核S855扫描中《Complete Yearly Report》1,941分区数字原页、期间和计数单位；③向ANRI请求警察档案493、501、481、494影印与目录所列副本状态；④转向北苏门答腊与东爪哇县级行政清洗名册对照；⑤轮换G7县级工会登记和G8外国执行档案。正式CSV、统一时间线、中文正文仍须继续安全并库，不得以本条代替。长期GOAL未完成。


## 2026-11-22｜ONGOING / GOAL仍进行｜G4北苏门答腊 × G2种植园工会原刊入口（跨链）

已逐项重读2026-11-09完整性审计G1—G10，并读取AGENTS、stage-access、goal-continuity、continuity-status、source-register、search-log、coverage-matrix、chronology；research-status.md在archive/records路径404，claim-ledger.csv非空blob 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a的UTF-8正文仍为0，不覆盖、不新编C号。本条为待正式CSV去重并库的核验记录。

**G4/G5/G9：北苏门答腊Medan（1965年10月；来源A=已打开Komnas HAM正式署名调查摘要全文，证言是委员会所记述的当事人陈述而非原BAP）。** 官方调查摘要印尼语PDF https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf 记录一名证人在Medan SMP Negeri 6附近遭自称/据称Pemuda Pancasila成员的青年追捕，曾登上一辆军车又被军人赶下，后被带至摊亭殴打；证词涉及同伴Lim Ceng Siang、Kodim Kota Medan的Kapten Muhammad Ginting。必须逐段核原报告页码、匿名证人编号、具体日期及其与军方接触的证据；调查报告能够证明委员会记录了该陈述，**不能直接证明全部参与者身份和指挥责任**。另有Komnas HAM英文翻译 https://etan.org/action/SaySorry/Komnas%20HAM%201965%20TAPOL%20translation.pdf 转述另一证人在1965-10-14抵Belawan港、SOBSI Jalan Medan Binjai办公室被焚、主席及两名看守被杀的说法；译本与印尼文同源，不作独立佐证，须定位原文、原BAP、当地警方及医院记录、SOBSI人员名册。

**G2/G4/G8：工会和外国观察（1965-10-23；A=当时美国使馆电报影印已由National Security Archive公开，但本次直接打开的是档案馆编者介绍页面，访问层级C对电报正文）。** https://nsarchive.gwu.edu/briefing-book/indonesia/2017-10-17/indonesia-mass-murder-1965-us-embassy-files 列Document 6 / Telegram 1168 (1965-10-23, RG84 Box14 Folder1)，编者称大使Green讨论军方对SOBSI的禁制及劳工部长Sutomo的态度，且Green认为SOBSI预先知晓930事件不大可能。此处**仅能确认编者如何概述外交电报，不能把大使个人判断升级为事实**。同页面Document 9 / Telegram 1290 (1965-11-01)编者称North Sumatra，但前次已发现原电报语境指向南苏门答腊Palembang/Pladju；此为重要**档案网页地理标注疑误**，在未重新核读电报影印前不得将其石油工会拘捕人数归入北苏门答腊。

**G2：SARBUPRI/BTI原刊目录入口（1955—1962；访问C=馆藏链接和二次目录页面已打开，原刊未读）。** https://19651966perpustakaanonline.wordpress.com/2025/02/02/koleksi-arsip-digital-koran-berita-organisasi-sarbupri-sarekat-buruh-perkebunan-republik-indonesia-1955-1957-bisa-diunduh/ 列印尼国家图书馆Perpusnas《Berita Organisasi SARBUPRI》《Warta SARBUPRI》数字馆藏入口，并关联BTI《Suara Tani》1956—1962年原刊目录。需进入Perpusnas逐期查看出版日期、编辑、发行机构、地区支部、工资/土地诉求及会费，不能从网页标题推断已核实具体工会决议。与北苏门答腊种植园工人受镇压链衔接时，必须核支部地名、会员、干部、土地权属及1965后解雇登记，不可仅因同属SOBSI系统就视为同一人员网络。

**全G缺口横向保留**：G1 1920—49组织与ANRI 1948卷；G2种植园/铁路/BTI/Gerwani/Pemuda Rakyat/LEKRA基层；G3 930跨机关命令；G4 Aceh/北苏门答腊/各爪哇/巴厘/Flores/西加里曼丹/Sulawesi原件；G5妇女、族群、幸存者；G6监禁/流亡/新组织；G7县级工会与政党选举；G8英美澳中苏介入执行；G9人物—地点—组织索引；G10正式CSV和中文连续正文均OPEN。

**精确接力**：（1）Komnas HAM印尼语全文定位Medan两组证词、原BAP编号与发生日期，索2009—2012原笔录；（2）调1965-10-14—11-15 Medan/Belawan警方、Kodim、SOBSI办公室火灾和伤亡登记；（3）打开NSA Document 6 Telegram 1168原影印，区分Green判断与军方指控，Document 9原影印复核Palembang地理；（4）打开Perpusnas SARBUPRI/BTI原刊至少一期，逐页核栏目与地区支部；（5）轮换西加里曼丹1967省府报告、Aceh处分原件和G7地方工会登记。此处未声称原始BAP、原刊或电报影印已读。GOAL长期未完成。


## 2026-11-22｜G2 BTI原始档案目录与G4北苏门答腊证词精确定位（ONGOING）

**G2（1947—1965，BTI，原始档案追索）：** 印尼国家档案馆ANRI官方频道于2025-11-19发布《Ekspose Inventaris Arsip Organisasi Kemasyarakatan Barisan Tani Indonesia 1947-1965》，https://www.youtube.com/watch?v=PSYQYoTOCb8 。本次只核对官方发布者、日期及标题/描述，**没有读取馆藏目录逐项条目或BTI原始档案**。这提供了优先向ANRI索取完整inventaris、卷号、原始地方支部报告、土地登记及农会决议的官方入口。与2025-02-01资料网站所列《Suara Tani》1956—1962年国家图书馆数字馆藏入口交叉；后者只核实网页说明，未核对具体期号、正文或其“完整”声明。https://19651966perpustakaanonline.wordpress.com/2025/02/01/arsip-digital-majalah-suara-tani-majalah-resmi-barisan-tani-indonesia-bti/ 。优先追取1959—1965具体地区土地纠纷的BTI支部原文及同期《Suara Tani》原刊，区分组织公开宣传与地方实际行动。来源等级C（官方发布元数据/馆藏指引），不能提升为原件。

**G4/G5（北苏门答腊，1965-10-14，SOBSI）：** 直接核对Komnas HAM 2012年调查摘要印尼语公开PDF中Belawan/Medan段落（报告转述证人陈述），记载1965年10月14日前后Belawan港搜查、书籍被没收，SOBSI位于Jalan Medan Binjai的办公室遭焚，以及证词指称SOBSI主席**Sakir Sobo**与两名守卫被杀。报告脚注指向BAP 248/BAP_TPPH 65/II/2008和064/BAP_TPPH 65/VIN/2008（以原PDF字形为准，须复核）。https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf 。证据等级A仅指已可访问委员会调查摘要，**并非证人原始笔录、火灾勘验、死亡登记或军方行动命令**；事件细节须保持“委员会所记录证词称”。待查：Sakir Sobo身份/职务的同期工会刊物、两名守卫姓名、1965年10月当地军警记录与BAP原件。不得将该事件与其他城市SOBSI办公室受袭混为一事。

**跨G项续接：** 先索取ANRI BTI 1947—1965目录的具体卷号并读取原件；同时核对北苏门答腊BAP原件与地方报纸；轮换G1 1948 GASBRI档案493及G4 Aceh县级处分文书，防止长期仅停留于一地。G1—G10继续OPEN。正式CSV/chronology/中文正文尚未据此更新；不把这些登记线索视为全面完成。


## 2026-11-22 续查｜G4/G6/G9：国家人权委员会馆藏的跨地区、流亡者线索（ONGOING）

已按要求重读 `archive/records/completeness-audit-2026-11-09.md` 全部 G1—G10。此次交叉追查此前 G4 地理失衡与 G6 流亡链，所列材料**均为机构馆藏目录/书目（C级），不是原书或原始行政卷宗全文**，不得作为其叙述事实的独立证明。

- **G4/G9 东部岛屿、宗教关系：** Komnas HAM 官方图书馆主题检索页列 Steven Farram 与 R.A.F. Paul Webb 的《Di-PKI-kan: tragedi 1965 dan kaum Nasrani di Indonesia Timur》。访问：官方书目列表，未打开书内正文。用途：寻找东印尼基督徒社群与1965指控的地方个案；下一步核对该书章节目录、地方教会文件、当时军警文书、受害者身份与地名，不能从书名推断基督徒社群统一政治立场。https://perpustakaan.komnasham.go.id/opackomnas/index.php?search=Search&subject=%22Peristiwa+1965%2F1966%22
- **G6/G8/G9 流亡与国家身份：** Komnas HAM 官方书目登记 Waloejo Sedjati《Bumi Tuhan: Orang Buangan di Pyongyang, Moskwa, dan Paris (1960-2013)》，目录简介称其为1965年在平壤留学的印尼学生、后来护照被撤销而无法返国。这只是**出版社/馆藏简介所载个人经历主张**，尚非直接核实护照撤销文件、使馆往来或本人全文回忆；不可将其个人经历代表全部海外PKI派别。下一步获取书内原文和具体撤照时间、主管机关、旅居地移转记录，交叉查外交部档案。https://perpustakaan.komnasham.go.id/opackomnas/index.php?id=11440&p=show_detail
- **G4/G6 地区档案可及性：** Komnas HAM 官方书目《Malam Bencana 1965 ... Bagian III》登记实体副本分别在Aceh、西苏门答腊、西加里曼丹、中苏拉威西、Maluku、Papua办事处及中央馆。此为**馆藏所在地**，不是这些省份均有该书所载原始个案的证明；须核目录、引用脚注和各地可申请复印范围。https://perpustakaan.komnasham.go.id/opackomnas/index.php?id=11048&keywords=&p=show_detail
- **G5/G7 制度记忆：** Komnas HAM 官方研究导航页将2014年《Peristiwa 1965-1966 - Ringkasan Eksekutif Laporan Penyelidikan Pelanggaran HAM yang Berat》列为馆藏，并列2016—2018和解、调查及受害者权利相关出版入口。仅确认目录与索引，不能由此推定司法追责或赔偿已经实施。https://perpustakaan.komnasham.go.id/pustakawan/index.php/pathfinder/detail/15

**来源去重与正式归档阻碍：** 本次已读取项目规则、G1—G10审计、连续状态及缺口总账；尝试从 `research/indonesia-1965/` 根路径读取五个正式CSV及chronology均404，尚未定位真实路径，故未分配任何S/C/Q/CV编号，也未虚构已完成CSV并库。正式时间线、研究状态、中文可读历史未更新。下一次优先查GitHub树真实路径；逐条检查上述书目是否已登记，避免重复。上述四项仅作馆藏检索和后续取证入口，不将目录升格为原件。

**持续研究位置：** 沿Waloejo Sedjati个人护照与外交部文书链深挖G6/G8；跨项优先东印尼地方教会、军警与村级记录G4/G5；并持续推进前次BTI原刊与Belawan/SOBSI原始笔录G2/G4。G1—G10全部OPEN，GOAL未完成。


## 2026-11-22｜G4 Aceh 与 Flores 跨地区机制复核（ONGOING）

**Aceh / G4-G5-G9（1965-10-11—29；Baperki/Kodim-0104/Pepelrada）**：复读Jess Melvin, “Why Not Genocide? Anti-Chinese Violence in Aceh, 1965–1966” 学术文章公开正文 https://journals.sagepub.com/doi/full/10.1177/186810341303200304 ，访问级别B（作者引用地方原始档案，原件未直接取得）。作者引用1965-10-18 Langsa Baperki《Pernjataan》：追述10-11 Major Iljas Mahmud在Kodim-0104食堂谈话；决议第7项称148名会员退会、地方Baperki解散，附两页名单。**148是会员名单人数，不是死者人数**；作者提出该名单可能用于识别抓捕对象，属于推断，尚无逐人处置交叉核实。作者还引用1965-10-29 Ishak Djuarsa/Pepelrada决定，声称追溯自10-20生效，要求组织负责人最迟10-25报到；这是签发日、生效日、报到期限相互倒置的原始文书时间问题，不能平滑写成10-20已正式签署。必须取得《Surat Keputusan 1965》原影印及收发登记，核验是否存在更早通知或追认。1965-10-14 Kuala Simpang与Pulo Tiga暴力的《Chronologis 1966》为军方叙述，不独立证实参加人数或军方实际制止行为。

**Flores / G4-G3-G9（1966-02-27—03-15；Sikka/Komop/教会）**：直接阅读Gerry van Klinken开放章节PDF https://pure.uva.nl/ws/files/2526919/166060_488108.pdf 第240页，学术转录匿名1974年叙述：2月27日Sikka县议会厅，Komop调查组与政党/社会组织讨论第二波“secured”对象，涉及Karel Elkel及Jos U. Tokoh；原始1966会议纪要未取得，级别B。交叉阅读John M. Prior发表于Exchange 40(2011):117–143的开放论文PDF https://repository.divinity.edu.au/divinityserver/api/core/bitstreams/662d52ff-005b-4845-918c-959a06ea50d0/content ：作者引述1966-03-15 Major Soemarno署名、以Kodim 1607/Komop名义发出的**B.061/III/1966**警告函，指责Bola堂区Pede da Lopez神父3月6日干预行动，要求神职人员不得阻碍并将其暂时调离。两篇文章提供不同节点但不等于两份1966原件已取得；函件复印件、主教档案、Bola证人证词及实际停杀命令均缺。尤其不能仅凭作者记述“信件送达内政部长后很快下令停止”就确定中央行政因果。

**跨地区对照**：Aceh的“先有军方压力、后有组织自我解散文书与追溯性禁令”和Flores的“地方甄别会议、神职人员抵制、军方警告函”说明各地权力传导路径需分别重建；不得由两个案例推导全国统一实施机制。G1—G10继续OPEN；下一动作依次索取Langsa 148人附件和10-29禁令影印、Sikka 2-27会议原件、B.061/III/1966复印件与教会往来函，并轮换G2 BTI原刊和G7县级工会登记原件。正式S/C编号尚未分配，先核对正式CSV避免重复。


## 2026-11-22｜G3/G4 Aceh「总统广播」归属与G7劳工司法程序的双链核验（ONGOING）

**G3/G4/G5 Aceh（1965-10-11—29；总统广播、Kodim-0104、Baperki）**：再次直接打开Jess Melvin 2013学术论文公开正文 https://journals.sagepub.com/doi/full/10.1177/186810341303200304 （B：学术全文，1965原始声明未取得）。Langsa 1965-10-18《Pernjataan》引述所谓苏加诺广播，要求彻底消灭九三〇运动及PKI；**Melvin明确指出苏加诺未发表该广播**，并列其10月3日两次呼吁冷静、10月14日表示拟提出政治解决的公开讲话（引Indonesia 1966:152–155）。故这段所谓广播只能记为地方声明转述的**虚假/错误归属**，绝不能登记为总统真实灭绝命令。究竟由Iljas Mahmud在10月11日谈话时制造、误传或转述，作者亦用“perhaps”保留，尚无会议录音/笔录可确定具体传播者。Melvin 2018书 https://staibabussalamsula.ac.id/wp-content/uploads/2024/03/Jess_Melvin_The_Army_and_the_Indonesian_Genocide_Mechanics_of_Mass-staibabussalamsula.ac_.id_.pdf 公开全文第256页及脚注说明148人名单为两页附件，并**推测**其可能被军方用作死亡名单；没有逐人羁押/死亡核验，不能将此推测写成既成事实。缺件：1965-10-18声明及两页附件影印、1965-10-03/14总统广播原始文字或录音、10-11 Kodim-0104谈话记录、148人逐人去向；障碍为原始档案未公开取得，现有两部Melvin作品并非相互独立证据。

**G7（1993—1999，东爪哇；Marsinah、PPBI/Dita Sari、政府与ILO）**：直接打开ILO理事会第276届材料 GB.276/7/1，结社自由委员会第318次报告第226—231段 https://webapps.ilo.org/public/english/standards/relm/gb/docs/gb276/gb-7-1.htm （A：国际组织正式程序文件全文）。政府1999-08-26答复称6月25日已请Komnas HAM调查Marsinah遇害案；委员会第229段指出距1993年5月遇害超过六年，要求继续报告调查结果。委员会第230段仅**注意到政府陈述**Dita Sari依据总统赦免1999-07-05获无条件释放，不等于独立核实后续无监控。特别区分委员会“要求调查”与司法机关“已查明责任”：ILO文件并未认定Marsinah案已经破案。此来源和节点此前已见连续状态，**本次不新增独立来源ID**；此次补充的价值是将两种程序层级及官方自述严格分离。缺件：Komnas HAM调查完整卷宗、1999总统赦免原令、Marsinah案司法判决及后续执行材料。下一跨项轮换G1 ANRI GASBRI第493号公告原件、G2 BTI原刊和G8外部干预电报原件。

**G10台账治理**：本次确认正式CSV和chronology实际路径为 `research/indonesia-1965/archive/records/`，根目录路径404不代表不存在。正式claim-ledger.csv blob SHA 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a，但UTF-8 fetch返回空正文；不覆盖，不虚构C编号。G1—G10全部OPEN；上述新核验尚未进入正式CSV和中文连续HTML，保留为明确欠账。


## 2026-11-22｜G3/G8跨机关核验：1965-10-26使馆判断与10-28 CIA保留（ONGOING）

本次按规定重读2026-11-09完整性审计G1—G10，读取正式source-register/search-log/coverage-matrix/chronology及连续状态；claim-ledger.csv仍返回零字节正文（blob SHA 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a），禁止覆盖。此项是对既有FRUS原始出版电报的**异议与证据依赖核验**，其URL已在正式source-register中出现，不再伪造新S编号。

**G3/G8（雅加达—华盛顿，1965-10-04—28）**：直接打开美国国务院官方FRUS卷XXVI第146、147、149、161号文件全文。10月4日美国国防部远东地区主任Blouin备忘录（d146）明确将“苏加诺至少部分知情”表述为作者本人倾向判断，同时记载苏加诺不愿立即对PKI行动。10月5日美国驻雅加达大使Green电报868（d147）建议避免公开介入，同时考虑怎样秘密表达协助军方的意愿；这是**政策建议而非已经交付援助**。10月6日CIA情报备忘录OCI 2330/65（d149）报告苏加诺倾向政治解决，并转述10月4日总统要求避免内部互相攻击的讲话。10月26日Green电报1184（d161）则将苏加诺、Subandrio、Aidit等列为主要责任者，声称中国提供数千枪支，但同时承认许多关键事实仍未知；其脚注援引CIA 10月28日OCI 2342/65的判断：“PKI部分人员参与，但党最高领导层角色仍不清楚”。**同一美国政府内的不同判断不应被合并为一个已经核定的政变指挥链**。尤其不得把Green关于中国军火的情报断言直接当成已核实交付，也不得把使馆对苏加诺的怀疑写成司法事实。

原始公开全文：d146 https://history.state.gov/historicaldocuments/frus1964-68v26/d146 ；d147 https://history.state.gov/historicaldocuments/frus1964-68v26/d147 ；d149 https://history.state.gov/historicaldocuments/frus1964-68v26/d149 ；d161 https://history.state.gov/historicaldocuments/frus1964-68v26/d161 。访问级别A：**美国官方出版的当时文件全文**；只能直接证明文件所载官员意见、政策建议和情报机构当时判断，不能直接证明被指控者的真实行为。d161脚注中的10月28日CIA备忘录仅为官方编者节录，**未打开其独立全文**。缺件：OCI 2342/65完整原文、雅加达A-300附件、印尼各方同期通讯/命令、有关中国军火的运输和接收单据、援助实际交付凭证。

**跨地区G4续接**：应将10月5—28日雅加达/华盛顿决策记录与Aceh 10月11—29日地方军令、Flores 1966年2—3月地方甄别会议和巴厘1965年11月军政禁令分别对时；美国政策建议不能自动解释这些地方行动的具体因果链。G1—G10仍OPEN；G1 GASBRI档案493、G2 BTI原刊、G5女性证言、G6流亡和G7工会登记均保持待核，不因本项外部档案进展而降级。


## 2026-11-22｜G4/G8/G9：外交报道的地区偏差与名单传递（ONGOING）
- **G4地区暴力（访问级别A：FRUS官方编辑注释全文，所引1965原电报尚未读取）**：FRUS XXVI d162 明确标注1965-10-27雅加达1215号电报对中爪哇流血原因未能判定；10-28 1255号国家小组对中/东爪哇、万隆、雅加达的事件是否协调同样未定。10-29 1269号涉及亚齐斩首及抛尸的严重指控，11-08 1374号涉及亚齐/北苏门答腊军方与IP-KI青年共同清剿，11-13 1438及泗水171号提供东爪哇夜间杀戮和Kediri/Paree数字，均为使馆收到的转述，未独立核实。1966-04-15 A-641承认死亡估计在十万与百万之间无法确定；1970 Howland文提出105,000估计并引用军官分省数，不可替代地方名册。原文 https://history.state.gov/historicaldocuments/frus1964-68v26/d162 。缺件：RG84 Lot69 F42 1215/1269/1374/1438、Surabaya 171、RG59 A-641、地方警察/军令/墓葬与逐人记录；障碍：编辑摘录非原始电报全文，来源链可能共用传闻。下一步优先亚齐1269与北苏门答腊1374对时、核对地方原件。
- **G8/G9名单机制（访问级别A：FRUS官方编辑注释全文，所引使馆附件未取得）**：FRUS XXVI d185引用1965-12-17 A-398、1966-03-11 A-564、1966-08-10 A-74；A-398所列95个职务仅67名不同个人，不能按95人计；A-74据编辑摘录称A-398去除使馆来源标记的版本于1965年12月提供印尼政府且似被安全部门使用，另有Partindo/Baperki名单。Martens 1990年自述独立决定交名单，不能由此推断全部具体被捕或遇害后果。原文 https://history.state.gov/historicaldocuments/frus1964-68v26/d185 。缺件：三份airgram及附件、传递日期/接收机关登记、名单与地方拘押卷宗逐人对照；障碍：姓名/职务重复、事后陈述与官方编辑摘录非独立印证。
- **跨G项接续**：继续G1/G2 ANRI GASBRI 493与BTI目录原件；G6/G7流亡护照及工会登记；G10 claim-ledger.csv 非空SHA返回零字符，严禁覆盖。G1—G10全部OPEN。


## 2026-11-23 UTC｜G8政策执行门槛与G7工会改革原始记录（ONGOING）

- **G8（1965-11-09，美国CIA政策备忘录，访问等级A：FRUS刊印同期备忘录全文）**：FRUS XXVI d172《Covert Assistance to the Indonesian Armed Forces Leaders》明确将向印尼军方提供秘密资金、采购信用及物资的可能渠道列为可行方案；第7段提及小武器、药品及向民间辅助人员移交装备的风险；第8段明确说**此时不建议提供这类装备**，要先与Sukendro及Nasution下属核查需求、用途、接收者和武器登记。第9段仍为条件式建议，不能写成11月9日已批准或实际交付。来源 https://history.state.gov/historicaldocuments/frus1964-68v26/d172 。证据边界：美国政府公开刊印的当时原文，数行仍删节；只能证明政策分析和建议，不能证明印尼地方接收、实际使用或美国对地方暴力的直接指挥。地区涉及中爪哇及西苏门答腊的情报判断，不能将其“抵抗据点”预测写成已经发生的组织事实。缺件：CIA执行授权、资金账户、运输凭证、Sukendro会谈记录、印尼军方及地方受援名单；下一行动：追踪d172之后的授权/拒绝链与Aceh/中爪哇地方命令对时。
- **G7（1998—2004，SBSI、ILO与工会法，访问等级A：ILO会议记录/监督意见全文及ILO NATLEX法令全文）**：ILO 1998年大会委员会讨论记录载印尼政府代表称1998-05-27劳工部长第5号条例取代1993年第3号登记条例，并允许独立SBSI登记；该陈述是政府对当时措施的报告，委员会工人组另记录Pakpahan获释及SBSI获承认。ILO 2001年采纳、2002年公布的第87号公约专家委员会意见，逐条质疑2000年第21号工会法第21、31、42、44条：章程变更/境外资助报告与取消登记的制裁、缺乏独立司法救济，以及公务员工会的另行立法。2003年采纳、2004年公布的意见记录政府对外资报告制度的不同解释，委员会仍要求修改第42条。1998年法律改革**不等于结社自由已无实际限制**。来源 https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:13101:0::NO::P13101_COMMENT_ID:2145195 ; https://normlex.ilo.org/dyn/nrmlx_en/f?p=1000:13100:0::NO:13100:P13100_COMMENT_ID,P13100_COUNTRY_ID:2200797,102938 ; https://wwwex.ilo.org/dyn/f?p=1000:13101:0::NO:13101:P13101_COMMENT_ID:4415851 ; https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/57553/IDN57553%20Eng.pdf 。缺件：1998年第5号条例印尼原文、SBSI地方登记簿、地方工会章程、2000—2004注销/诉讼个案、2024后执行记录；下一行动：以Bekasi、北苏门答腊、东爪哇地方企业和登记机关为单位验证法律落地，区分政府报告、工人陈述和委员会法律评价。
- **跨项开放缺口**：G1 ANRI 1948 GASBRI 493、G2 BTI/SARBUPRI原刊、G3跨机关九三〇时间线、G4 Aceh/北苏门答腊/爪哇/巴厘/Flores/西加里曼丹/Sulawesi地方命令、G5 Gerwani证言、G6流亡护照、G9人名地名索引、G10正式CSV与连续中文正文均未闭合。claim-ledger.csv 当前读取异常（非空SHA但零正文），不得覆盖。研究链并未因这两项文件核验而完成。


## 2026-11-23 UTC｜G8 跨机关援助执行边界 × G7 女性工会组织调查（持续OPEN）

**G8｜1965-11-17—12-17（美国/雅加达；Sukendro、Nasution、Suharto、303委员会）：** 直接打开FRUS XXVI d175官方公布文件全文（同期11月17日通信设备援助提案），尤其第2、3、4节及编者脚注3。文件称10月13日曾向保护Nasution等人的警卫提供部分通信设备（数量/来源删节）；11月17日建议批准另一项秘密通信设备计划，不能将其视为已批准交付。11月19日303委员会认为援助有价值但要求优先解决不可归属性，12月17日Colby报告CIA已找到并购买相似设备；**采购≠向印尼收件人交付或地方使用**。原文 https://history.state.gov/historicaldocuments/frus1964-68v26/d175 （A：美国当时提案全文；脚注是FRUS编辑引述会议纪要，不是会议原件）。另直接打开d181：12月4日国务院Berger怀疑医药援助项目财务掩护未获Nasution知悉，Colby与白宫代表主张继续；会议最后要求先提交详细掩护方案。https://history.state.gov/historicaldocuments/frus1964-68v26/d181 （A：同期会议备忘录全文）。**不能把11月5日批准医药援助等同于已送达；也不能把12月17日设备采购等同于军方收到。** 缺件：303委员会11/19与12/17会议纪要原件、采购发票/运输单/收据、印尼军方通信分配及使用记录、d181所引12/7 FE-244及12/1—2谈话附件。下一步沿美国档案RG59/NSC Special Group/303 Committee追实际交付，并与地方军令分别对时。

**G7/G5｜2000—2006（工会妇女、地方工会领导层）：** 直接打开ILO委托Annemarie Reerink于2006年出版的《Report on a Survey of Women and Gender Issues in Trade Union Organisations in Indonesia》全文，导言明确调查33名不同层级男女工会干部，涉及妇女领导代表性、集体谈判、工会内部结构及参与障碍。https://www.ilo.org/wcmsp5/groups/public/---asia/---ro-bangkok/---ilo-jakarta/documents/publication/wcms_117189.pdf （A：2006年调查报告原刊全文，**不是全印尼工会总体普查**）。报告对2000年第21号工会法的组织扩展与工会碎片化同时提出分析。不能从33名受访干部推算全国女性会员比例，也不能将2000年后工会直接认作SOBSI的组织继承者。缺件：样本工会名册及原始问卷、县级工会登记、女性会员/干部逐行业逐省数据、具体企业谈判协议。下一步核报告第三部分调查方法与受访组织表，交叉ILO政府登记及工会自有档案。G1—G10继续OPEN。

**归档说明：** 本条仅记录已打开文献的核验，不预分配S/C/Q编号；正式台账仍需按实际最大编号去重后同步。避免把先前FRUS相邻文件重复登记为独立新来源。

## 2026-11-23 UTC｜G4/G6 巴厘逐人拘押链 × G8 通信援助已发生/未发生的严格区分（ONGOING）

**G4/G6 巴厘 Denpasar—Gianyar—Pekambingan（1968）**：直接打开印尼国家人权委员会《Ringkasan Eksekutif Tim Ad Hoc Peristiwa 1965-1966》印尼语公开全文（https://www.tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf），第109页与第123页。报告引述证人1968年在SMAN 1 Denpasar期末考试期间与Bambang Setiawan、Wayan Badra被便衣人员带到Jalan Gadung的Polda Bali，约一周后转LP Gianyar、再转LP Pekambingan。第123页脚注5明确定位**BAP No.30，AN. Dewa Putu Ngurah Djenawi**，这是比无名概述更可操作的原始询问笔录索取号。访问级别：**A（官方调查摘要全文直接打开）/B（摘要所载证词，原始BAP未读）**；不能把证人陈述直接升级为已取得警方拘捕令、监狱登记或房产没收证书。地点包括SMAN 1 Denpasar、Jalan Gadung、LP Gianyar、LP Pekambingan；人物索引候选Dewa Putu Ngurah Djenawi、Bambang Setiawan、Wayan Badra。**另一条同报告第79页**的巴厘海关工作人员证言称1966年经Badung警察及海关甄别列C2、1968-09-23于Padangbay执勤被捕、转Denpasar/Gianyar/Pekambingan、1977-12-20释放；尚未确认其姓名或与第123页证人是否相同，**严禁合并两人**。缺件：BAP No.30原始逐页笔录、1968年SMAN 1考试/学籍、Polda Bali收押和Jalan Gadung房屋征用登记、Gianyar/Pekambingan转押簿、海关甄别及复职卷宗。下一行动：以BAP No.30向Komnas HAM索取可公开部分，核对三人姓名拼写和日期；对1966—1977海关个案另行建人档，不混同。

**G8 美国通信设备（1965-10—12）**：复核FRUS XXVI d175官方全文（https://history.state.gov/historicaldocuments/frus1964-68v26/d175），第3节明确记载**10月13日已有某种通信设备从删节来源库存提供给Nasution等人的警卫使用**；这是同期提案关于较早有限供应的报告，不等于11月17日另拟通信方案已交付。11月17日文件是提交303委员会的提案；11月19日及12月17日仅有FRUS编者脚注转述会议纪要，12月17日为CIA找到并采购设备，不是向印尼收货。与12月4日FRUS d181全文（https://history.state.gov/historicaldocuments/frus1964-68v26/d181）中Berger对医药援助掩护融资的疑虑并列，不能将不同物资计划混为一项。访问等级A（刊印同期提案与会议备忘录全文）；脚注会议纪要为编辑节录、未读原件。缺件：10月13日具体设备种类/数量/签收，11月19与12月17会议原始纪要，采购、装运、交付、使用证据；地方因果仍未证实。

**全域G1—G10保持OPEN**：G1 1948 GASBRI 493原件、G2 BTI/SARBUPRI原刊、G3 1965跨机关分钟级时间、G4 东中西爪哇/巴厘/Flores/苏拉威西/加里曼丹、G5 Gerwani、G6监禁流亡、G7 1998—2026基层工会、G8多国介入、G9人物地名索引、G10正式四CSV和连续中文正文均未闭合。正式claim-ledger.csv非空SHA却返回零字符，严禁覆盖或冒领S/C编号。


## 2026-11-23 UTC｜ONGOING｜G4/G5 西加里曼丹1967与G6/G9 1996—1997暴力记忆的证据边界

**跨地区长期链（G4/G5，西加里曼丹1967）**：直接打开Human Rights Watch 1997-12-01《Communal Violence in West Kalimantan》全文（https://www.refworld.org/reference/countryrep/hrw/1997/23874），导言及背景部分。该组织1997年调查指出，1967年10—11月达雅克人与华裔之间的暴力被当地受访者视为1996—97年冲突的历史参照；报告转述印尼军方当时的说法为约300人死亡、超过55,000名华裔被迫迁移，同时指出袭击并未按实际政治身份区分华裔居民，并提出军方蓄意促成暴力的研究判断。**访问等级A=1997年人权组织报告原文直接打开；但其中1967数字与军方责任为该报告的追溯、转述和解释，不是1967年当地死亡登记或军事命令原件。** 与Aceh、Bali 1965—68资料不可合并为同一时点/死亡总量。缺件：1967 Sanggau Ledo军事日志、地方政府流离失所者名册、华裔安置营记录、达雅克地方组织原始声明、军方物资分发与接收凭证；须核不同研究中300/2,000—5,000死亡估计的时间/地理/定义。阻碍：后见报告、地方记录未取得、民族身份不等于PKI组织归属。

**不同年代第二链（G6/G9，1996—97西加里曼丹）**：同一HRW报告记录1996年12月至1997年3月达雅克—马都拉社群暴力，并根据1997年1月和7月两次当地访谈提出约500人死亡、约20,000马都拉人流离失所的估算；明确指出其为初步调查，部分军警执行及挑衅指控缺充分证据。该组数字**仅指1996—97事件，不能作为1967华裔受害数字**。1997报告可证明当时的调查结果及受访者对1967记忆的叙述，不能自动证明两个事件组织结构或军方命令相同。缺件：1996-12 Sanggau Ledo警方记录、1997年县级死者登记、1979 Samalantan和解协议全文、1997年军警拘捕与处分登记；调查历史记忆如何进入1997行动动员，必须有具体个人/组织链条。

**第三交叉核验（G4/G6，巴厘1968）**：重新打开Komnas HAM《Ringkasan Eksekutif Tim Ad Hoc Peristiwa 1965-1966》印尼语官方调查摘要全文（https://tapol.org/sites/default/files/sites/default/files/pdfs/Komnas%20HAM%201965%20report%20Indonesian.pdf），报告第123页将1968年Denpasar考试期间被捕、Polda Bali→Gianyar→Pekambingan转押证言关联至脚注BAP No.30（Dewa Putu Ngurah Djenawi）。**访问等级A仅指官方调查摘要全文；BAP原始笔录仍D=未取得**，不能把报告引述与原BAP算作两份独立佐证。此项与西加里曼丹不同地区、不同机关，应分别核军警链条。缺件：BAP No.30、1968 Polda Bali及Gianyar/Pekambingan出入簿、考试/学校档案。

**G1—G10轮换与G10归档约束**：G1 ISDV/1948 GASBRI原件、G2 SOBSI/BTI/Gerwani地方册、G3 1965跨机关军令、G7 1998后工会登记、G8英美澳中苏执行证据、G9逐人逐地索引、G10中文连续正文及正式CSV并库仍OPEN。HRW1997一份报告中的1967历史回顾和1997实地调查不可计作两份独立来源。正式claim-ledger.csv仍有读取异常，未编造S/C编号。下一步优先获取西加里曼丹1967年地方安置名册与军区命令，同时继续巴厘BAP No.30，并轮换1948 GASBRI原刊。GOAL长期OPEN。


## 2026-11-23 UTC｜G1/G4/G5/G6跨期核验：1948工会公告目录与1968西加难民统计（ONGOING）
**G1/G2（ANRI官方档案目录全文A，档案内容仍C）：** 直接打开ANRI 1995年编《Inventaris Arsip Kepolisian Negara RI 1947–1949》目录。第493号明确为1948-05-01 GASBRI（Gabungan Serikat Buruh Revolusioner Indonesia）第1号公告，主题是1948-04-25 Solo革命工人会议；**只有1张turunan（转录/派生件）**，不是会议纪要全文。相邻第494号为1946-01-27至1948年9月PKI成员关系文件，**1封套且注明不完整**；第491、492号分别是1948-12-02国防部停火相关命令及1948-12-04东爪哇警方公告。目录本身为官方原始编目材料A，但493/494卷内史料未取得，不能由题名推断参会名单、决议、与SOBSI/FDR/PKI的实际组织关系。目录 https://www.anri.go.id/download/ra-26.-inventaris-arsip-tekstual-sekretariat-negara-kepolisian-negara-ri-19471949-1714018366 。**行动**：按馆藏号493申请单页影印并核公告签署者、发文地、传递对象；连同494成员档、同期Solo报刊与1948-09 Madiun文书交叉，避免将GASBRI直接等同PKI。
**G4/G5/G6（既有正式S232研究全文B，引用1968省府统计原件未读）：** 复核Davidson/Kammen, *Indonesia* 73 (2002)关于1967—68西加里曼丹华裔难民的原表。作者转引1968年10月17—18日总统访问背景下省府进展报告附录VI：1967年11月59,850人（营地32,347；投亲27,503）；1968年5月43,941人（营地24,936；投亲19,005）；1968年8月28,028人（营地15,547；投亲12,481）。**这三个是不同时间的在册/重新登记存量，不是死亡人数、总受害者数或三批可相加流量；人数减少也不自动证明安全返乡**。研究全文 https://ecommons.cornell.edu/bitstreams/4131215c-454f-47f2-8576-71f7abce9e52/download ；另公开可读转录 https://www.academia.edu/103702836/Indonesias_Unknown_War_and_the_Lineages_of_Violence_in_West_Kalimantan 。**行动**：索取《Progress Report, Propinsi Kalimantan Barat》1968附录VI原表及各营地进出册；核实A/B/C分类、迁居与死亡，避免把不同统计口径混作1967杀戮数字。该研究已登记S232，不重复编号；此前Q237/Q541已触及同书，属于针对数字定义与原始档案的复核，不冒称首次发现。
**跨项治理G9/G10：** 地点Solo、Pontianak、Singkawang、Mempawah应按当年行政区划与营地地址索引；G1—G10仍OPEN。正式claim-ledger.csv当前非空SHA却空正文，不覆盖、不分配C号。下一步在可安全读原始blob时再正式并库；本次不以本段代替正式CSV和中文连续正文。


## 2026-11-23 UTC｜ONGOING / GOAL仍进行｜G1革命期机关档案横向扩展 × G4西加地方暴力机制（原件追索）

按规定重读2026-11-09 G1—G10审计及AGENTS、stage-access、goal-continuity、正式source/claim/search/coverage、chronology、续接状态。claim-ledger.csv blob 362dbb150c296fd2a5f9e2b4d34db64c6a8f414a 仍返回空正文，未覆盖；正式来源表与检索日志已有大量同类ANRI目录与西加研究，先去重，不编造S/C编号。

**G1/G2，1946—1948年雅加达/西爪哇及独立革命的组织关系（证据级别：ANRI官方目录全文，未读卷内原件）**：在此前已定位GASBRI 493及PKI会员卷494之外，ANRI《Inventaris Arsip Sekretariat Negara: Kepolisian Negara RI 1947–1949》紧接的**卷495**记载1946-07-25至1948-02-26关于西爪哇和雅加达局势的PAM警察报告（目录显示1封套、抄件）；**卷496**记载1947-01-02和06-26 Benteng RI会议报告（2页、留底）。这些是具体可追的革命期警察/组织交叉记录，不证明其中已有PKI或工会参与；须取原件核人名、会议及政治分类。目录 https://www.anri.go.id/download/ra-26.-inventaris-arsip-tekstual-sekretariat-negara-kepolisian-negara-ri-19471949-1714018366 。另ANRI《Kementerian Penerangan 1945–1949》**卷17**为1948年教育文化部长决定书，目录涉及免去Amir Sjarifuddin在日惹政治科学院理事会的委员/副主席职务；该目录仅能证明存在这份文书描述，不能判定免职日期、动机、与Madiun事件因果。https://anri.go.id/download/ra-18.-inventaris-arsip-tekstual-kementerian-penerangan-19451949-1720168720 。ANRI官方档案服务说明支持经邮件/在线系统申请复制馆藏，可能需要研究登记和费用，故不将目录视为已获取档案。https://anri.go.id/en/public-services/archives-and-reading-room-services 。

**G4/G5/G6，西加里曼丹1967年10—11月（证据级别：学术文本网络可见摘录，尚未核全文/地方原卷）**：关于Dayak动员的学术文本检索摘录指出1967-10-19 Samalantan出现传递红碗的动员信号，11月上旬Senakin、Darit、Sebadu遭袭，并给出三处合计210死亡的作者陈述；它明确引注1967年省府《Pengungsian orang2 Tjina sebagai akibat gerakan2 orang Daya...》第82页。**此为学术文本摘录而非地方行政原件，也不是210名死者的逐人登记**，不能与HRW历史估计300人、1968省府难民在册存量直接合并。研究文本入口 https://www.academia.edu/15049509/Regime_change_and_ethnic_politics_in_Indonesia_Dayak_politics_of_West_Kalimantan 。新追索重点：1967-10-19动员的村级/军警同期记录、11月Senakin/Darit/Sebadu分地点名册、11月17日军区停止示威命令、上述省府报告第82页原影印；区分地方民间行动、军方命令和作者解释。

**G3/G8/G9/G10及其他地区仍OPEN**：Aceh、北苏门答腊、各爪哇地区、Bali、Flores、Sulawesi的军令/逐人档案与美国FRUS执行记录继续并行；G5妇女组织、G6流亡、G7改革后工会仍为独立缺口。本次没有把目录、网页摘录升级为原始文书全文，也没有把重复来源算独立证据。正式CSV、chronology及中文可读正文仍有并库欠账。
