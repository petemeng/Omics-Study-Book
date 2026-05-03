# 章 03 · Bulk RNA-seq

> 这一章不把 bulk RNA-seq 当成“差异表达工具”，而是把它放回 RNA 生物学：转录、加工、剪接、稳定性和降解共同决定我们在测序矩阵里看到的 read counts。

## 板块 A · 生物学篇

本板块讲 RNA-seq 测到的生物学实体本身：RNA 分子从转录起始、共转录加工、剪接、加尾、输出、翻译到降解的生命周期。读完应能回答：count matrix 背后到底是哪一类 RNA 分子、处在哪个成熟阶段、受哪些分子机制影响。

笔记列表：

- [[03-bulk-RNAseq/transcription-pol2-mechanics]] — Pol II 的转录起始、暂停、延伸和终止，以及 CTD 磷酸化如何组织 RNA 加工
- [[03-bulk-RNAseq/5-prime-capping-and-meaning]] — 5' 帽的化学结构、加帽时机，以及它如何影响翻译、稳定性和 RNA 身份
- [[03-bulk-RNAseq/splicing-mechanism-step-by-step]] — 剪接体两步酯交换反应，U1/U2/U4/U5/U6 snRNP 各自负责什么
- [[03-bulk-RNAseq/alternative-splicing-five-modes]] — 五类可变剪接模式的分子机制与生物学意义
- [[03-bulk-RNAseq/polyadenylation-and-apa]] — polyA 加尾与 alternative polyadenylation 如何改变 3'UTR 和调控命运
- [[03-bulk-RNAseq/mRNA-stability-and-decay]] — 5'→3'、3'→5'、NMD、ARE、m6A 如何共同决定 RNA 半衰期
- [[03-bulk-RNAseq/ncRNA-zoo]] — lncRNA、circRNA、miRNA、piRNA、snoRNA、eRNA 的分子定义与功能尺度
- [[03-bulk-RNAseq/m6A-and-the-epitranscriptome]] — m6A 写入、擦除、读取如何影响剪接、稳定性和翻译
- [[03-bulk-RNAseq/co-transcriptional-coupling]] — 转录、加帽、剪接、加尾和染色质不是流水线，而是共转录耦合
- [[03-bulk-RNAseq/plant-specific-transcription]] — 植物 Pol IV/V、siRNA 通路和植物 NMD 的特殊性

## 板块 B · 技术篇

本板块讲 RNA-seq 如何把 RNA 分子变成可计数的 reads：文库选择、链特异性、比对与 pseudoalignment 的物理和统计来源。重点不是工具清单，而是技术选择如何改变可见的 RNA 世界。

笔记列表：

- [[03-bulk-RNAseq/library-prep-tradeoffs]] — polyA、rRNA 去除、total RNA 文库在分子层看到的 RNA 集合有何不同
- [[03-bulk-RNAseq/strand-specificity-mechanism]] — dUTP / TruSeq 链特异性文库如何在分子层实现方向信息
- [[03-bulk-RNAseq/aligners-vs-pseudoaligners]] — STAR、HISAT2、salmon、kallisto 何时会给出显著不同结果
- [[03-bulk-RNAseq/salmon-em-multi-mapping]] — salmon 的 EM 算法在解决什么 multi-mapping 问题
- [[03-bulk-RNAseq/tximport-length-scaling]] — tximport 的 lengthScaledTPM 处理了什么偏差

## 板块 C · 分析篇

本板块讲 count matrix 进入统计模型之后发生了什么：归一化、组分偏差、负二项模型、dispersion、shrinkage、检验和网络。

笔记列表：

- [[03-bulk-RNAseq/tpm-fpkm-cpm-limits]] — TPM、FPKM、CPM 的精确公式与不能做什么
- [[03-bulk-RNAseq/tmm-derivation]] — TMM 的 trimmed mean 为什么这样选
- [[03-bulk-RNAseq/size-factor-geometric-mean]] — DESeq2 size factor 的几何均值思想
- [[03-bulk-RNAseq/normalize-then-de-is-wrong]] — 为什么“先归一化再差异表达”是错的
- [[03-bulk-RNAseq/composition-bias-example]] — 组分偏差的最小例子
- [[03-bulk-RNAseq/why-negative-binomial-not-poisson]] — 为什么用负二项不用泊松
- [[03-bulk-RNAseq/deseq2-dispersion-three-steps]] — DESeq2 dispersion estimation 三步：per-gene、trend、shrinkage
- [[03-bulk-RNAseq/edger-three-dispersions]] — edgeR common、trended、tagwise dispersion
- [[03-bulk-RNAseq/voom-precision-weights]] — limma-voom 的 precision weight 怎么推
- [[03-bulk-RNAseq/lfc-shrinkage-priors]] — DESeq2 LFC shrinkage 对应什么先验
- [[03-bulk-RNAseq/wald-vs-lrt]] — Wald vs LRT 在 DE 中何时该用哪个
- [[03-bulk-RNAseq/independent-filtering-not-cheating]] — independent filtering 为什么不算作弊
- [[03-bulk-RNAseq/gsea-vs-ora]] — GSEA vs ORA 的本质区别
- [[03-bulk-RNAseq/wgcna-soft-threshold]] — WGCNA 软阈值与无标度拓扑判据
- [[03-bulk-RNAseq/pc1-batch-rescue]] — PC1 捕获 batch 而不是 condition 怎么救

## 板块 D · 生物学解读篇

本板块讲统计结果如何回到生物学。目标是避免“DEG list -> 富集图 -> 讲故事”的机械路线。

笔记列表：

- [[03-bulk-RNAseq/differential-results-how-to-read-biologically]] — 看到 DEG list 第一件事不是做富集，而是问 5 个问题
- [[03-bulk-RNAseq/pathway-enrichment-defending-the-claim]] — 给一个富集结果，怎么辩护它不是 cherry-picking
- [[03-bulk-RNAseq/effect-size-vs-significance-revisit]] — RNA-seq 里 effect size 应该怎么定义与解读
- [[03-bulk-RNAseq/negative-results-publication]] — 如何报告“没有差异”
- [[03-bulk-RNAseq/deg-vs-dtu-vs-dte]] — DEG、DTU、DTE 三层差异各自对应什么生物学问题
- [[03-bulk-RNAseq/from-deg-to-mechanism]] — 从差异表达走向机制需要哪些外部证据

## 板块 E · CNS 文献深读

本板块固定 3 篇：方法学经典、生物学突破、方法学反思。Peter 已授权 Codex 按教学价值直接选择。

候选列表：

- [[03-bulk-RNAseq/_papers/00-candidates]]

已选择：

- [[03-bulk-RNAseq/_papers/mortazavi-2008-nature-methods-rnaseq]] — 方法学经典：RNA-seq 如何定义转录组测量
- [[03-bulk-RNAseq/_papers/pickrell-2010-nature-expression-variation]] — 生物学突破：RNA-seq 如何解析人群表达变异机制
- [[03-bulk-RNAseq/_papers/love-2014-genome-biology-deseq2]] — 方法学反思：为什么现代 DE 需要 dispersion 与 LFC shrinkage

## 本章 quiz

- [[03-bulk-RNAseq/_quiz/待生成]]
