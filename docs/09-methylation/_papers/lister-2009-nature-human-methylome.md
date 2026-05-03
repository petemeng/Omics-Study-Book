# Human DNA methylomes at base resolution show widespread epigenomic differences

> **作者** · Lister et al., **期刊** · *Nature*, **年份** · 2009, **DOI** · https://doi.org/10.1038/nature08514  
> **一句话**：这篇用单碱基 methylome 比较人胚胎干细胞和成纤维细胞，显示细胞身份转换伴随大规模甲基化重塑。

## 1. 背景与前问

哺乳动物 DNA methylation 传统上主要关注 CpG 和 promoter silencing。但 stem cell biology 提出更深问题： pluripotent state 是否有独特 methylome？分化后哪些区域被重塑？非 CG methylation 是否存在且有意义？

## 2. 核心问题

核心问题一句话：**人类细胞身份差异能否在单碱基 methylome 上被系统读出？**

这篇选择 human embryonic stem cells 和 fetal fibroblasts，是为了比较 pluripotent 与 differentiated state 的 epigenomic architecture。

## 3. 实验设计的关键决策

使用 whole-genome bisulfite sequencing，避免 array 只覆盖预设 CpGs 的限制。这个选择昂贵，但能发现 non-CG methylation 和未预设区域变化。

细胞系统选择 hESC 与 fibroblast，差异足够大，适合展示方法能力；但这也意味着结论不等于所有分化路径通用。

## 4. 数据生成与处理

核心仍是 bisulfite conversion + deep sequencing。每个 cytosine 按 context 分类：CG、CHG、CHH。对哺乳动物，CG 是主轴；这篇重要发现之一是 hESC 中存在显著 non-CG methylation。

差异甲基化区域不是单点噪音，而是相邻 CpGs 的区域性变化。实际统计中应考虑 coverage、相邻相关性和 biological replicate；早期论文更多是 map-level 描述。

## 5. 关键 Figure 拆解

<div class="figure-reading" markdown="1">
<div class="figure-reading-title">真实 Figure 入口 · 原文 Figures</div>
这篇 <em>Nature</em> 论文建议打开 <a href="https://www.nature.com/articles/nature08514/figures/1">Figure 1</a>、<a href="https://www.nature.com/articles/nature08514/figures/2">Figure 2</a> 和 <a href="https://www.nature.com/articles/nature08514/figures/4">Figure 4</a>。读图顺序是：先看 hESC 和 fibroblast 的全局 methylome landscape，再按 promoter/gene body/repeat 等区域分层，最后看 non-CG methylation 为什么是 pluripotent state 的重要信号，而不是普通 CpG silencing 的延伸。
</div>

### Figure 1：base-resolution methylome map

这张图建立全基因组单碱基分辨率。生物学声明是 hESC 和 fibroblast 的 methylome landscape 系统不同。

### Figure 2/3：CG methylation 与基因组功能区域

这些图展示 promoter、gene body、repeat、CpG island 等区域的甲基化模式。读法关键是 region-specific：promoter methylation 常与沉默相关，gene body methylation 不应直接解释为沉默。

### Figure 4：non-CG methylation

hESC 中 non-CG methylation 是这篇最有概念冲击的结果。它提示 pluripotent cells 有特殊 methylation machinery 或 chromatin context。分化细胞中该信号下降，支持其与细胞状态相关。

## 6. 结论的强度边界

强支持：hESC 和 fibroblast 有广泛 methylome 差异；单碱基 WGBS 能解析 context 和区域差异；non-CG methylation 在 hESC 中显著存在。

边界：methylation difference 不等于因果驱动分化；细胞培养状态会影响 epigenome；早期数据 replicate 和统计框架不如今天严格。

## 7. 如果今天重做

今天会加入多 hESC lines、分化时间序列、single-cell methylome、matched RNA/ATAC 和 CRISPR perturbation。还会区分 5mC 与 5hmC，因为 bisulfite 不能天然区分二者。对植物读者，这篇的迁移价值在于“context matters”：动物 non-CG 是特殊状态信号，而植物 non-CG 是常规调控语言，不能混读。

## 8. 我学到了什么

（Peter 填）

## 横向连接

- [[09-methylation/methylation-platforms-chemistry]]
- [[09-methylation/5mc-functional-roles-by-context]]
- [[09-methylation/5mc-vs-5hmc-discrimination]]
- [[09-methylation/methylation-expression-causality]]

## 参考

- Lister et al. (2009), *Nature*, DOI: https://doi.org/10.1038/nature08514
- Meissner et al. (2008), *Nature* — mammalian methylome
- Smith & Meissner (2013), *Nature Reviews Genetics* — DNA methylation roles
