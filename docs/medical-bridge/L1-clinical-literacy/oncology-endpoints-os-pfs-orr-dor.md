# OS、PFS、ORR、DOR 分别在回答什么？

> 肿瘤终点不是一串缩写，而是不同层级的临床证据。

## 先把词听懂

- 总生存期（overall survival, OS）：从入组或治疗开始到任何原因死亡的时间。
- 无进展生存期（progression-free survival, PFS）：从入组或治疗开始到疾病进展或死亡的时间。
- 客观缓解率（objective response rate, ORR）：达到完全缓解 CR 或部分缓解 PR 的患者比例。
- 缓解持续时间（duration of response, DOR）：从首次达到缓解到进展或死亡的时间。
- 替代终点（surrogate endpoint）：用较早、较易观察的指标替代更硬的临床获益，例如用 PFS 或 ORR 推断 OS 或生活质量获益。

## 长答案

OS 是最硬的终点，因为死亡时间明确、临床意义直接。但 OS 需要更长随访，也会被后续治疗交叉、救援治疗和治疗线数影响。一个药物延长 PFS，却因为后续治疗很多，未必能很快显示 OS 差异。

PFS 更早发生，常用于晚期肿瘤随机试验。它反映“疾病多久不进展”，但依赖影像评估频率、RECIST 判读和盲法独立评审。PFS 改善通常说明药物控制肿瘤有效，但不自动等于病人活得更久或生活质量更好。

ORR 是“肿瘤缩小了多少人”的比例，特别适合单臂早期试验、罕见突变靶向药和加速批准情境。它的优点是快、直观；缺点是只看缩小，不看持续多久。因此 ORR 往往要和 DOR 一起读：短暂缩小与长期控制的临床价值完全不同。

对组学研究来说，这些终点对应不同的生物学问题：

| 终点 | 临床含义 | 更适合问的组学问题 |
|---|---|---|
| OS | 最终生存获益 | 预后分层、治疗后全程风险 |
| PFS | 肿瘤控制时间 | 耐药风险、克隆演化、微环境重塑 |
| ORR | 是否明显缩小 | 原发敏感性、靶点依赖、免疫激活 |
| DOR | 缓解能维持多久 | 获得性耐药、残留病灶、适应性状态 |

## 为什么这么设计 / 为什么临床会这样问

临床试验的终点选择反映现实取舍：医生想要 OS，但研究者常需要更早判断药物是否有效。监管也会区分“真实临床获益”和“可能预测临床获益的替代终点”。FDA 肿瘤终点指南把 OS、PFS、ORR 等放在不同证据层级中讨论；2025 年 FDA 还发布了关于随机肿瘤试验中 OS 评估的草案指南，强调即便 OS 不是主要终点，也需要系统收集和解释 OS 数据。

## 组学翻译

如果医生说“我们要找免疫治疗疗效标志物”，Peter 不能只问“有 responder/non-responder 吗”，而要追问：

- responder 是按 ORR、PFS6、PFS12，还是 durable clinical benefit 定义？
- 进展是 RECIST 1.1 还是 iRECIST？
- 是否有影像复核，扫描间隔是否一致？
- 死亡、失访、换药、后续治疗如何记录？
- 样本是治疗前、治疗中，还是进展后？

这些问题决定标签噪声。如果标签不稳，scRNA-seq 再精细也只是在拟合不可靠的临床分组。

## ⚠️ 容易混淆 / 常见误解

**误解 1：PFS 改善等于 OS 一定改善。**  
错。PFS 是重要终点，但 OS 会受后续治疗和交叉影响；PFS 到 OS 的外推要看癌种、治疗线数和药物机制。

**误解 2：ORR 高就一定是好药。**  
不一定。还要看 DOR、毒性、患者症状、生活质量和是否转化成长期获益。

**误解 3：组学标签越二分越好。**  
错。把 PFS 连续时间粗暴切成 responder/non-responder 会损失信息，也可能制造人为阈值。

## 横向连接

- [[medical-bridge/L1-clinical-literacy/recist-irecist-response]]
- [[medical-bridge/L1-clinical-literacy/km-cox-forest-plot-reading]]
- [[medical-bridge/L4-disease-omics-crossovers/tumor/tumor-scrnaseq-playbook]]

## 我现在的理解状态

`#待 Peter 确认`

## 参考

- FDA (2018), *Clinical Trial Endpoints for the Approval of Cancer Drugs and Biologics*, accessed 2026-05-04: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-trial-endpoints-approval-cancer-drugs-and-biologics
- FDA (2025 draft), *Approaches to Assessment of Overall Survival in Oncology Clinical Trials*, accessed 2026-05-04: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/approaches-assessment-overall-survival-oncology-clinical-trials
- FDA Oncology Center of Excellence, Patient-Friendly Language for Cancer Clinical Trials, accessed 2026-05-04: https://www.fda.gov/about-fda/oncology-center-excellence/patient-friendly-language-cancer-clinical-trials
- Project Confirm, FDA Oncology Center of Excellence, accessed 2026-05-04: https://www.fda.gov/about-fda/oncology-center-excellence/project-confirm

