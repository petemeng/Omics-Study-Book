# Understanding mechanisms underlying human gene expression variation with RNA sequencing

> **作者** · Pickrell et al., **期刊** · *Nature*, **年份** · 2010, **DOI** · https://doi.org/10.1038/nature08872  
> **一句话**：他们把 RNA-seq 与人群基因型放在同一批个体中，证明表达差异可以被拆成总表达、剪接和等位基因特异输出三类遗传调控机制。

## 1. 背景与前问

在人类遗传学里，GWAS 很早就遇到一个翻译鸿沟：大量风险位点位于非编码区，但不知道它们影响哪个基因、在哪个组织、通过什么分子过程起作用。eQTL 是连接遗传变异和分子表型的关键桥梁，但早期 eQTL 多依赖 microarray。

microarray 有两个限制。第一，它主要读预设探针，不能很好分辨 isoform、unannotated exon 和 allele-specific expression。第二，探针本身会被 SNP 影响，导致某些“表达差异”其实是 hybridization artifact。RNA-seq 的出现让问题变成：能否用 reads 的基因组坐标直接把 expression variation 分解为机制层次？

## 2. 核心问题

核心问题一句话：**人群中的表达差异，有多少可以被附近遗传变异解释，且这些变异是通过表达量、剪接还是等位基因偏倚起作用？**

这比“找 eQTL”更深。因为 eQTL peak 只说明 genotype 与 expression 相关；Pickrell 试图用 RNA-seq 的结构信息追问：相关背后的 molecular mechanism 是什么。

## 3. 实验设计的关键决策

作者选择 69 个 HapMap Yoruba individuals 的 lymphoblastoid cell lines（LCLs）。这个系统有明显优点：基因型数据已有，样本可重复培养，遗传背景较清楚，适合做 genotype-expression association。缺点也明显：LCL 是 EBV-transformed cell line，不代表原生组织；免疫细胞转化和培养条件会引入 expression artifacts。

为什么不是多组织？因为 2010 年测序成本仍高，多组织会稀释样本量和统计功效。作者的选择是先在一个可控系统里把 RNA-seq eQTL 框架做深：gene expression、splice junction、ASE 都从同一数据里读出。

## 4. 数据生成与处理

这篇的核心数据是同一批个体的 genotype + RNA-seq。处理逻辑包括：

1. 将 RNA-seq reads 比对到人类基因组和转录本注释。
2. 用 gene/exon/junction read counts 表示表达量和剪接使用。
3. 在每个 gene 或 exon unit 上检验 SNP genotype 与 RNA abundance 的关联。
4. 对 heterozygous sites，统计两个 allele 上 reads 的不平衡，识别 allele-specific expression（ASE）。
5. 对 splice-site 附近变异，检查其是否解释 exon inclusion 或 junction usage。

从模型角度，标准 eQTL 可写成：

$$
y_i=\beta_0+\beta_1 g_i+\sum_k \gamma_k c_{ik}+\epsilon_i
$$

其中 $y_i$ 是个体 $i$ 的表达表型，$g_i \in \{0,1,2\}$ 是基因型剂量，$c_{ik}$ 是批次、隐藏因子或 ancestry 相关 covariates。$\beta_1$ 显著不等于 0 时，说明该 variant 与表达相关。ASE 则更像在 heterozygote 内部做 binomial imbalance：

$$
X_i \sim \text{Binomial}(n_i, p), \qquad H_0:p=0.5
$$

如果一个 heterozygous site 上 reference/alternate allele reads 显著偏离 1:1，而且 mapping bias 被控制，就支持 cis-regulatory imbalance。

## 5. 关键 Figure 拆解

### Figure 1：RNA-seq 数据质量和表达测量

这张图主要建立测量可信度：reads 覆盖基因、表达分布和样本间可比性。统计上是在证明 RNA-seq expression phenotype 足够稳定，可以进入遗传关联模型。

实际读法：如果 expression phenotype 本身噪音很大，后面所有 eQTL 都会变成噪音放大器。所以这张图不是铺垫，而是后续关联分析的地基。

### Figure 2/3：cis-eQTL 与 expression variation

这些图展示 SNP genotype 与 gene expression 的关联。生物学声明是：部分个体间表达差异可由 nearby genetic variation 解释。这类 cis signal 比 trans signal 更容易解释，因为近端变异可能落在 promoter、enhancer、UTR 或 splice-related region。

结论强度：支持遗传调控表达；但单个 lead SNP 不一定是 causal variant。LD 中多个变异可能共享信号，必须 fine mapping 或 reporter/CRISPR 才能定位 causal element。

### Figure 4/5：ASE 和 splicing 机制

ASE 图把证据强度提高一档。跨个体 eQTL 可能受 trans environment、batch 或 cell state 影响；ASE 在同一个细胞环境里比较两个 haplotypes，因此更直接指向 cis effect。剪接相关图则把 eQTL 从 abundance 推进到 RNA processing：某些变异影响 exon inclusion 或 splice junction usage。

这部分的生物学声明是：表达变异不只是 promoter strength 差异，还包括 RNA processing 层的遗传调控。

## 6. 结论的强度边界

强支持的结论：RNA-seq 能把 expression QTL、splicing QTL 和 ASE 放在同一数据框架中分析；许多人群表达差异具有 cis-regulatory component；splice-site 附近变异可以影响 transcript structure。

强烈暗示但未完全证明的结论：某些 eQTL 通过具体调控元件或 splice mechanism 起作用。RNA-seq 可以提示机制方向，但 causal element 和 causal gene 仍需要功能实验。

需要警惕的地方：LCL 不是自然组织；样本量对 small-effect variants 有限；mapping bias 会影响 ASE；短读长无法完整解析 isoform。今天看这篇，应当把它理解为“机制拆解框架”，不是最终的 human regulatory atlas。

## 7. 如果今天重做

2026 年重做，我会做四个升级：

- **组织与细胞类型**：把 LCL 扩展到 primary immune cells，并加入 stimulation 条件，例如 IFN、LPS 或 pathogen mimic。
- **单细胞层**：做 sc-eQTL 或 pseudobulk cell-type-specific eQTL，避免细胞组成混淆。
- **长读长层**：加入 long-read RNA-seq，直接解析 isoform 和 allele-specific isoform expression。
- **调控证据链**：与 ATAC、H3K27ac CUT&Tag、Hi-C/ABC model 和 CRISPR perturb-seq 共定位，验证 variant -> element -> gene -> phenotype。

对植物研究，可以把这个框架迁移成 accession panel 的 stress-response eQTL：同一批材料测 genotype、RNA-seq、ATAC 和 phenotype，在感染或胁迫后做 time-course。关键是组织和条件要匹配性状发生场景；用叶片 eQTL 解释根系抗病，机制链会很弱。

## 8. 我学到了什么

（Peter 填）

## 横向连接

- [[03-bulk-RNAseq/deg-vs-dtu-vs-dte]]
- [[03-bulk-RNAseq/aligners-vs-pseudoaligners]]
- [[02-GWAS/twas-mathematical-principle]]
- [[15-multiomics-integration/mr-with-omics]]
- [[03-bulk-RNAseq/_papers/mortazavi-2008-nature-methods-rnaseq]]

## 参考

- Pickrell et al. (2010), *Nature*, DOI: https://doi.org/10.1038/nature08872
- Montgomery et al. (2010), *Nature*, DOI: https://doi.org/10.1038/nature08903
- Lappalainen et al. (2013), *Nature*, DOI: https://doi.org/10.1038/nature12531
- GTEx Consortium (2020), *Science*, DOI: https://doi.org/10.1126/science.aaz1776
- Castel et al. (2015), *Genome Biology* — ASE 方法与 mapping bias
