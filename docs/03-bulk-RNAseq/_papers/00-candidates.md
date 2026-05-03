# Bulk RNA-seq · CNS / 高影响文献候选清单

> 请选择 3 篇：方法学经典 1 篇、生物学突破 1 篇、方法学反思 1 篇。勾选后我再按深读模板写 2500–4000 字 atomic note。

## 方法学经典候选

- [ ] Mortazavi et al. 2008, *Nature Methods* — *Mapping and quantifying mammalian transcriptomes by RNA-Seq*  
  为什么候选：早期系统定义 RNA-seq 如何用 reads 覆盖、RPKM 和基因模型来量化转录组，是从 tiling array 时代转向测序转录组的标志性方法论文。

- [ ] Trapnell et al. 2010, *Nature Biotechnology* — *Transcript assembly and quantification by RNA-Seq reveals unannotated transcripts and isoform switching during cell differentiation*  
  为什么候选：Cufflinks 将 splice-aware alignment、转录本组装和 isoform abundance estimation 组织成一个分析范式，让 RNA-seq 从 gene-level count 推进到 transcript-level interpretation。

- [ ] Wang et al. 2009, *Nature Reviews Genetics* — *RNA-Seq: a revolutionary tool for transcriptomics*  
  为什么候选：综述，不作为 3 篇之一的首选，但适合做背景坐标，梳理 RNA-seq 相对 microarray、SAGE、EST 的范式变化。

## 生物学突破候选

- [ ] Wang et al. 2008, *Nature* — *Alternative isoform regulation in human tissue transcriptomes*  
  为什么候选：用高通量转录组数据展示组织间 isoform regulation 的广度，让“基因表达”不再只是 gene-level abundance，而是 transcript structure 和 isoform usage 的问题。

- [ ] Pickrell et al. 2010, *Nature* — *Understanding mechanisms underlying human gene expression variation with RNA sequencing*  
  为什么候选：把 RNA-seq 和遗传变异连接起来，分析人群中表达差异、等位基因特异表达和 eQTL，为“表达变异的遗传机制”建立了重要样板。

- [ ] ENCODE Project Consortium. 2012, *Nature* — *An integrated encyclopedia of DNA elements in the human genome*  
  为什么候选：不是单纯 RNA-seq 论文，但 RNA-seq/CAGE 与 ChIP/DNase 共同构成功能注释证据链。适合深读“RNA-seq 如何作为多组学功能注释的一层证据”。

## 方法学反思候选

- [ ] Tarazona et al. 2011, *Genome Research* — *Differential expression in RNA-seq: a matter of depth*  
  为什么候选：早期系统讨论测序深度、低表达基因、方法选择对差异表达结果的影响，适合训练“DEG list 不是稳定真理”的判断。

- [ ] Soneson & Delorenzi. 2013, *BMC Bioinformatics* — *A comparison of methods for differential expression analysis of RNA-seq data*  
  为什么候选：虽然不是 CNS，但教育价值高，适合拆解早期 DE 方法在 dispersion、normalization、false discovery 上的差异。

- [ ] Love et al. 2014, *Genome Biology* — *Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2*  
  为什么候选：不是 CNS，但对现代 RNA-seq 差异分析影响极大。适合做“方法学反思/成熟化”：为什么需要 dispersion shrinkage 和 LFC shrinkage。

## 我建议的默认三篇

如果 Peter 没有特别偏好，我建议：

1. 方法学经典：Mortazavi et al. 2008, *Nature Methods*
2. 生物学突破：Pickrell et al. 2010, *Nature*
3. 方法学反思：Love et al. 2014, *Genome Biology*

理由：这组三篇分别覆盖“RNA-seq 如何被定义为测量技术”“RNA-seq 如何回答遗传调控生物学问题”“现代差异表达为什么不能只看 naive fold change 和 p 值”。

