<div class="page-wrapper" markdown="1">

<div class="breadcrumb"><a href="../../index.md">首页</a><span>›</span><a href="#">Part 2 分子表型组学</a><span>›</span>第 4 章</div>

<header class="chapter-header"><div class="chapter-header-inner">
  <div class="chapter-number">04</div>
  <div class="chapter-part">Part 2 · 分子表型组学</div>
  <h1 class="chapter-title">转录组 RNA-seq</h1>
  <p class="chapter-subtitle">从表达矩阵理解细胞和组织的转录状态。</p>
</div></header>

<nav class="chapter-toc"><h3>本章目录</h3><ol>
  <li>RNA-seq 测量的对象</li>
  <li>建库策略与数据结构</li>
  <li>差异表达分析</li>
  <li>通路与网络解释</li>
  <li>常见误区</li>
  <li>案例深读：ENCODE 为什么需要 RNA-seq</li>
</ol></nav>

## <span class="section-num">4.1</span>RNA-seq 测量的对象

RNA-seq 测量的是 RNA 分子的相对丰度。它可以回答“某条件下哪些基因表达更高或更低”，也可以分析可变剪接、融合转录本、等位基因特异表达和非编码 RNA。但 RNA-seq 不能直接告诉我们蛋白水平、蛋白活性或代谢通量。

bulk RNA-seq 的样本通常是组织、细胞群或培养物。它的优势是稳健、成本相对可控、统计模型成熟；弱点是会把不同细胞类型的表达混合在一起。一个基因在肿瘤组织中升高，可能因为肿瘤细胞表达升高，也可能因为免疫细胞比例增加。

## <span class="section-num">4.2</span>建库策略与数据结构

常见建库策略有 poly(A) 富集和 rRNA 去除。poly(A) 富集适合成熟 mRNA，成本低、背景少，但不适合降解样本和许多非 poly(A) RNA。rRNA 去除覆盖面更广，适合 FFPE、细菌、病毒或长非编码 RNA，但背景和成本可能更高。

定量层面可以使用 gene-level counts、transcript-level abundance 或 splice junction counts。差异表达通常使用 raw counts 输入统计模型，再由模型处理 library size 和离散度；TPM/FPKM 适合样本内表达结构展示，但不应直接作为差异分析输入。

| 指标 | 适合用途 | 注意点 |
|---|---|---|
| raw counts | 差异表达模型 | 需要归一化和离散度估计 |
| TPM | 比较同一样本内基因贡献 | 不适合直接跨样本做统计检验 |
| normalized counts | 可视化和聚类 | 取决于归一化方法 |
| junction counts | 剪接分析 | 需要足够 read depth |

## <span class="section-num">4.3</span>差异表达分析

差异表达分析的核心不是简单比较均值，而是在计数数据的噪音结构下估计组间差异。RNA-seq counts 通常用负二项分布建模，因为生物重复之间的变异大于泊松抽样噪音。常用思想包括 library size normalization、离散度估计、广义线性模型和多重检验校正。

一个标准差异分析结果至少包含 log2 fold change、统计量、p 值和 adjusted p 值。log2 fold change 表示效应大小，adjusted p 值控制多重检验下的假阳性。解释时不能只看显著性，也要看表达量、效应大小、方向是否符合生物学预期。

## <span class="section-num">4.4</span>通路与网络解释

单个基因差异常常不稳定，通路层面的解释更接近生物过程。富集分析通常分为两类：一类先选出差异基因，再问这些基因是否富集于某些 GO、KEGG、Reactome 或 Hallmark gene sets；另一类使用全基因排序，例如 GSEA，避免人为阈值造成信息损失。

通路解释要警惕数据库偏倚。热门通路注释更完整，更容易被富集；一个基因可以属于多个通路，导致结果看起来丰富但并不独立。好的解释应当回到具体基因、细胞类型和实验背景，而不是停留在“炎症通路显著”这种宽泛表述。

## <span class="section-num">4.5</span>常见误区

第一，差异表达不等于调控因果。转录因子表达升高，不代表它驱动了全部下游变化。第二，RNA 水平不等于蛋白水平。翻译效率、蛋白降解和修饰都可能改变最终功能。第三，bulk RNA-seq 的差异可能由细胞组成变化驱动。第四，批次校正不能修复完全混杂的设计。

<div class="box box-cognition" markdown="1"><div class="box-title">认知升级</div>
RNA-seq 最适合做“状态扫描”和“假设生成”。如果要证明某基因是驱动因子，通常还需要扰动实验、蛋白或功能验证。
</div>

## <span class="section-num">4.6</span>案例深读：ENCODE 为什么需要 RNA-seq

**为什么必须做 RNA-seq。** ENCODE 的核心问题不是“某个处理让哪些基因上调”，而是更基础的：人类基因组中哪些区域具有可检测的生化功能。只看 DNA 序列不能判断区域是否被转录；只看蛋白编码基因会漏掉长非编码 RNA、增强子转录和复杂转录边界。因此 RNA-seq 在 ENCODE 中承担的是“转录证据层”，而不是一个孤立的差异表达流程。

**结果如何变成生物学结论。** RNA-seq 提供转录本覆盖、表达强度、剪接结构和转录方向；CAGE 帮助定位 transcription start site；DNase/ChIP-seq 提供开放染色质和组蛋白修饰。ENCODE Project Consortium 在 Nature 2012 的整合分析中，将这些证据放到同一基因组坐标系：如果一个区域有开放染色质、有启动子或增强子标记，并且自身或附近有转录信号，它就比单独一个 peak 更有资格被解释为功能元件。

**这个案例教什么。** RNA-seq 的强项不是“给出最终机制”，而是告诉你一个系统的转录输出在哪里发生、强度如何、结构如何。它可以解决“哪些区域被转录”“哪些通路被激活”“哪些样本状态不同”的问题；但要把表达变化解释成调控机制，必须结合 ATAC/ChIP/eQTL/扰动实验。

**参考。** ENCODE Project Consortium. 2012. *Nature*. https://www.nature.com/articles/nature11247

</div>
