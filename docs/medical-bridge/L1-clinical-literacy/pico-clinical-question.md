# 医生一句话怎么拆成 PICO 临床问题？

> PICO 把模糊临床兴趣变成能设计、能分析、能复述的问题。

## 先把词听懂

- 临床问题（clinical question）：医生真正想在某类病人中改变诊断、治疗或预后判断的问题。
- PICO：Patient/Problem、Intervention、Comparator、Outcome，分别是人群/问题、干预、对照、结局。
- 终点（endpoint）：研究预先定义的“用什么量判断成功”，例如 OS、PFS、ORR。
- 混杂因素（confounder）：同时影响“接受某治疗”和“结局”的变量，例如分期、年龄、既往治疗。

## 长答案

医生常说的是一个压缩过的临床观察：“晚期肺癌免疫治疗耐药机制想做一下”。这句话对组学设计还不够，因为它没有说明病人是谁、治疗是什么、耐药按什么定义、样本什么时候取、最后要解释什么临床结局。

PICO 的作用是把这句话拆开：

| 元素 | 需要问清 | 肺癌免疫耐药例子 |
|---|---|---|
| P | 哪类病人？癌种、分期、治疗线数、分子分型 | 晚期 NSCLC，EGFR/ALK 阴性或阳性要分开 |
| I | 暴露或干预是什么？ | 一线 PD-1/PD-L1 抑制剂 + 化疗 |
| C | 和谁比？ | 获益者 vs 原发耐药者；治疗前 vs 进展后配对 |
| O | 结局怎么定义？ | RECIST 1.1 的 PD、PFS、ORR、DOR |

在转化组学里，PICO 常常要扩成 PICOTS：多出 Timing（取样时间）和 Setting（医疗场景）。因为组学读数对时间点极其敏感：治疗前样本回答“原发耐药风险”，进展后样本回答“获得性耐药机制”，治疗中早期样本可能回答“适应性重塑”。

## 为什么这么设计 / 为什么临床会这样问

临床医生的默认单位是病人和决策，不是基因和通路。PICO 强迫我们先站在医生的决策点上：这个结果会改变入组、治疗选择、随访强度，还是只是一篇机制论文？

没有 PICO 的组学项目最容易变成“样本有什么就测什么”。这种项目常常最后只能给出相关性：某些细胞群在 A 组更多，某些通路上调。但医生真正关心的是：这个差异是否解释疗效，是否能预测谁会耐药，是否能指导下一步治疗。

## 组学翻译

把 PICO 翻译成组学设计时，至少问 5 个问题：

1. P 决定纳入排除：癌种、分期、治疗线数、驱动突变、合并用药必须记录。
2. I 决定机制假设：化疗、靶向、免疫治疗引发的选择压力完全不同。
3. C 决定统计比较：横断面对比、配对前后、纵向多时间点不是一回事。
4. O 决定标签质量：RECIST、PFS、病理缓解、ctDNA 清除代表不同结局。
5. T 决定可解释性：治疗前、治疗中、进展后样本不能混着讲同一个机制。

## ⚠️ 容易混淆 / 常见误解

**误解 1：PICO 只适合 RCT。**  
错。单臂研究、回顾性队列、组学机制研究也需要 PICO，只是 C 可能是历史对照、内部亚组或配对前后。

**误解 2：有样本清单就等于有研究问题。**  
错。样本清单只说明“能测什么”，PICO 才说明“测了以后能回答什么”。

**误解 3：结局可以等数据出来再定。**  
错。组学探索可以开放，但主要临床结局必须预先定义，否则很容易变成事后挑结果。

## 横向连接

- [[medical-bridge/L1-clinical-literacy/oncology-endpoints-os-pfs-orr-dor]]
- [[medical-bridge/L1-clinical-literacy/recist-irecist-response]]
- [[medical-bridge/L5-study-design-playbook/00-MOC]]
- [[part1-入门框架/ch02-实验设计与批次效应]]

## 我现在的理解状态

`#待 Peter 确认`

## 参考

- Richardson et al. (1995), *ACP Journal Club* — The well-built clinical question.
- ICH E8(R1) (2021), General Considerations for Clinical Studies.
- FDA Oncology Center of Excellence, Patient-Friendly Language for Cancer Clinical Trials, accessed 2026-05-04: https://www.fda.gov/about-fda/oncology-center-excellence/patient-friendly-language-cancer-clinical-trials
