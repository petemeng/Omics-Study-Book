# 章节深度扩展 · 五大板块结构与 CNS 文献深读

版本：v1.1 · 2026-05-03 · 在原 Codex 任务文件基础上补强生物学厚度与文献深读

## 与原任务文件的关系

Codex 后续写作时必须先读 `docs/_meta/this-task.md`，再读本文件。

原任务的角色、atomic note 模板、quiz 模板、问题清单和反馈规则仍有效。本文件替换原任务中的工作流程：每启动一个组学时，不再直接从问题清单平铺写笔记，而是先建立五大板块结构。

## 每章必须有的五大板块

每个组学文件夹增加 `00-chapter.md`，作为章节长目录。

### 板块 A · 生物学篇

讲这个组学测量的生物学实体本身。重点不是怎么测、不是怎么分析，而是细胞里哪种分子、哪个过程、哪段时空尺度正在被观测。

写作要求：

- 不复述本科教材。
- 每个机制都回答“为什么我们相信是这样”，引用关键原始实验。
- 标出共识、争议和未解问题。
- 能用 Mermaid 画机制图时要画。

### 板块 B · 技术篇

平台、化学、文库、误差模型。重点写设计取舍：为什么这个平台能看见目标实体，为什么会有某种偏差。

### 板块 C · 分析篇

归一化、统计模型、差异分析、聚类、轨迹、网络。保留原任务问题清单中的方法学深挖。

### 板块 D · 生物学解读篇

从统计结果回到生物学：怎么读 DEG、怎么辩护通路富集、怎么不被 TF 推断骗、轨迹的因果边界、如何报告 negative results。

每个组学都应至少包含：

- `differential-results-how-to-read-biologically`
- `pathway-enrichment-defending-the-claim`
- `effect-size-vs-significance-revisit`
- `negative-results-publication`

### 板块 E · CNS 文献深读

每章固定 3 篇，位于 `_papers/` 子文件夹。三类各选一篇：

- 方法学经典：定义了平台或分析范式。
- 生物学突破：用该组学揭示根本生物学机制。
- 方法学反思：被后续研究质疑、修正或暴露局限，最有教育意义。

硬约束：Codex 先生成 `_papers/00-candidates.md`，列 5-8 篇候选。默认等 Peter 勾选 3 篇；若 Peter 明确授权 Codex 代选，则 Codex 直接按教学价值选出 3 篇并标记。

## 文献深读 atomic note 模板

路径：`{NN-omics}/_papers/{first-author}-{year}-{journal}-{shortname}.md`

长度：2500-4000 字。

结构：

1. 背景与前问：写领域卡点，给先驱文献。
2. 核心问题：一句话说明问题，以及为什么以前不能回答。
3. 实验设计的关键决策：系统、时间点、条件、对照、样本量、混杂控制。
4. 数据生成与处理：Methods 参数、文库、测序、比对、QC、统计、可视化。
5. 关键 Figure 拆解：2-3 张核心图，落到统计模型和生物学声明。
6. 结论的强度边界：哪些强支持，哪些只是暗示，哪些过度引申，后续如何修正。
7. 如果今天重做：给出 2026 年可执行改进。
8. 我学到了什么：留给 Peter。
9. 横向连接。
10. 参考。

## `03-bulk-RNAseq/` 板块 A 必补

- `transcription-pol2-mechanics` — Pol II 的转录起始/延伸/终止物理过程，CTD 磷酸化的角色。
- `5-prime-capping-and-meaning` — 5' 帽的化学结构、加帽的耦合时机、为什么影响翻译与稳定性。
- `splicing-mechanism-step-by-step` — 剪接体两步酯交换反应的化学机制，U1/U2/U4/U5/U6 snRNP 各自做什么。
- `alternative-splicing-five-modes` — 外显子跳跃、互斥外显子、5'SS、3'SS、内含子保留的机制与意义。
- `polyadenylation-and-apa` — polyA 加尾机制；alternative polyadenylation 的调控意义。
- `mRNA-stability-and-decay` — 5'→3' 与 3'→5' 降解、NMD、ARE、m6A 与稳定性。
- `ncRNA-zoo` — lncRNA、circRNA、miRNA、piRNA、snoRNA、eRNA 的定义与功能尺度。
- `m6A-and-the-epitranscriptome` — m6A 写入、擦除、读取，对剪接、稳定性、翻译的影响。
- `co-transcriptional-coupling` — 转录与剪接、加帽、加尾、染色质之间的耦合。
- `plant-specific-transcription` — 植物 Pol IV/V、siRNA 通路、植物 NMD 特殊性。

## 其他组学板块 A 必补方向

- `04-scRNAseq/`：cell type/state/fate 本体论、transcriptional bursting、cell cycle、spliced/unspliced、cell size/mRNA content、stress/apoptosis signatures。
- `02-GWAS/`：复杂性状遗传架构、LD 生物学、调控变异 vs 编码变异、missing heritability、多效性与因果。
- `09-methylation/`：DNMT 建立与维持、context 功能、TET 去甲基化、印记、植物 RdDM、植物 CHH。
- `07-BCR-TCR/`：Ig 结构、VDJ/RAG、GC/SHM/CSR、affinity maturation、TCR-pMHC、Burnet clonal selection。
- 其他组学按“该组学测什么生物学实体”原则补足。

## 新工作流程

每启动一个组学时：

1. 生成 `00-chapter.md`，包含五大板块结构和笔记链接。
2. 生成 `_papers/00-candidates.md`，列 5-8 篇候选论文；默认等待 Peter 勾选，若已授权则由 Codex 直接选择 3 篇。
3. 先写板块 A 生物学篇。
4. 再写板块 B + C 技术与分析篇。
5. 再写板块 D 生物学解读篇。
6. 等 Peter 确认或授权 Codex 选择后，写板块 E 的 3 篇深读。
7. 最后写章节 quiz。

每个组学完成 = 章首文档 + 30-50 篇 atomic notes + 3 篇文献深读 + 1 份 quiz。
