# RECIST 1.1 和 iRECIST 到底在判什么？

> RECIST 把“肿瘤变大变小”标准化，iRECIST 处理免疫治疗里的假进展。

## 先把词听懂

- RECIST（Response Evaluation Criteria in Solid Tumors）：实体瘤影像疗效评价标准，用目标病灶大小变化定义 CR、PR、SD、PD。
- 完全缓解（complete response, CR）：所有目标病灶消失。
- 部分缓解（partial response, PR）：目标病灶总径较基线下降达到预设比例。
- 疾病稳定（stable disease, SD）：既没达到 PR，也没达到 PD。
- 疾病进展（progressive disease, PD）：目标病灶显著增大或出现新病灶。
- iRECIST：免疫治疗试验用的数据处理建议，引入 iUPD 和 iCPD，避免把一过性假进展直接算作确认进展。
- 假进展（pseudoprogression）：免疫细胞浸润、水肿或短期炎症让影像看起来变大，之后可能缩小。

## 长答案

RECIST 1.1 的核心思想很朴素：选一组可测量目标病灶，定期影像复查，用病灶直径总和相对基线或最低点的变化判断疗效。这样做的好处是把不同医院、不同试验的“肿瘤缩小”变成可比较的规则。

但是免疫治疗带来一个特殊问题：有些患者影像先看起来进展，之后又出现缓解。这可能来自免疫细胞进入肿瘤、炎症反应或测量时点问题。若按传统 RECIST 1.1，一旦判 PD，后续疗效可能被截断。

iRECIST 因此引入：

- iUPD（immune unconfirmed progressive disease）：免疫治疗下未确认进展。
- iCPD（immune confirmed progressive disease）：后续复查确认进展。

iRECIST 的关键不是“临床上一定继续治疗”，而是临床试验中如何一致记录数据。EORTC/RECIST 工作组明确强调，iRECIST 是用于免疫治疗试验的数据处理建议，不是已经验证的临床处置标准。

## 为什么这么设计 / 为什么临床会这样问

医生问“耐药定义是 RECIST 1.1 还是 iRECIST”时，其实是在问组学标签是否可靠。对免疫治疗研究，进展后取样如果混入假进展患者，所谓“耐药机制”就可能变成免疫浸润或炎症反应。

因此在设计免疫治疗耐药组学课题时，必须把影像评估标准写进方案：

- 原发耐药：通常指治疗早期没有达到临床获益，常按 PD 或短 PFS 定义。
- 获得性耐药：曾经 CR/PR/SD 或有较长 PFS，之后发生 PD。
- hyperprogression：治疗后肿瘤增长速度异常加快，定义在文献中并不完全统一，需要预先指定。

## 组学翻译

RECIST/iRECIST 直接影响样本分组：

| 临床标签 | 适合的样本 | 可能的组学问题 |
|---|---|---|
| 治疗前最终 PR | baseline biopsy | 原发敏感性、免疫预存状态 |
| 治疗中 iUPD | on-treatment biopsy | 假进展、免疫浸润、炎症反应 |
| 确认 iCPD | progression biopsy | 获得性耐药、免疫逃逸、克隆选择 |
| 长 DOR 后 PD | paired baseline/progression | 残留细胞状态与耐药演化 |

scRNA-seq 可以看细胞状态，spatial 可以看免疫细胞是否真的接触肿瘤，WES/ctDNA 可以看克隆演化。三者回答的问题不同，不能只因为医生说“耐药”就默认 scRNA-seq 是唯一方案。

## ⚠️ 容易混淆 / 常见误解

**误解 1：iRECIST 比 RECIST 1.1 更“高级”，所以都该用 iRECIST。**  
不对。iRECIST 是免疫治疗试验数据处理建议；多数实体瘤非免疫治疗试验仍按 RECIST 1.1。

**误解 2：PD 就等于生物学耐药。**  
不一定。PD 可能受评估间隔、假进展、局部进展、混合反应影响。组学取样前要确认进展类型。

**误解 3：PR 患者就是机制相同的一组。**  
不一定。PR 只说明影像缩小，背后的机制可以是靶点依赖、免疫激活、化疗敏感或混合效应。

## 横向连接

- [[medical-bridge/L1-clinical-literacy/oncology-endpoints-os-pfs-orr-dor]]
- [[medical-bridge/L4-disease-omics-crossovers/tumor/tumor-scrnaseq-playbook]]
- [[04-scRNAseq/_papers/macosko-2015-cell-dropseq]]
- [[06-spatial/_papers/stahl-2016-science-spatial-transcriptomics]]

## 我现在的理解状态

`#待 Peter 确认`

## 参考

- Eisenhauer et al. (2009), *European Journal of Cancer* — RECIST 1.1.
- RECIST Working Group, RECIST 1.1 official page, accessed 2026-05-04: https://recist.eortc.org/recist/recist-1-1-2/
- Seymour et al. (2017), *The Lancet Oncology* — iRECIST guideline.
- RECIST Working Group, iRECIST official page, accessed 2026-05-04: https://recist.eortc.org/irecist/
- NCI, Imaging Response Criteria, accessed 2026-05-04: https://dctd.cancer.gov/research/research-areas/imaging/resources/response-criteria
