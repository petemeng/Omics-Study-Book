<div class="page-wrapper" markdown="1">

<div class="breadcrumb"><a href="../../index.md">首页</a><span>›</span><a href="#">Part 2 分子表型组学</a><span>›</span>第 7 章</div>

<header class="chapter-header"><div class="chapter-header-inner">
  <div class="chapter-number">07</div>
  <div class="chapter-part">Part 2 · 分子表型组学</div>
  <h1 class="chapter-title">ATAC-seq 与染色质可及性</h1>
  <p class="chapter-subtitle">从开放染色质推断调控元件、转录因子和细胞状态。</p>
</div></header>

<nav class="chapter-toc"><h3>本章目录</h3><ol>
  <li>ATAC-seq 的基本原理</li>
  <li>peaks、motif 和 footprint</li>
  <li>bulk ATAC 与 single-cell ATAC</li>
  <li>QC 指标</li>
  <li>解释边界</li>
  <li>案例深读：开放染色质如何指向调控元件</li>
</ol></nav>

## <span class="section-num">7.1</span>ATAC-seq 的基本原理

ATAC-seq 的核心是 Tn5 transposase。Tn5 更容易进入核小体缺失或染色质开放区域，并在切割 DNA 的同时插入测序接头。测序后，reads 富集的位置被称为 peaks，通常代表启动子、增强子、绝缘子或其他开放调控区域。

ATAC-seq 测到的是“可及性”，不是转录因子结合本身。开放区域更可能被调控因子访问，但并不等于该增强子正在驱动表达，也不等于某个 motif 对应的转录因子一定结合在那里。

## <span class="section-num">7.2</span>peaks、motif 和 footprint

peaks 是 ATAC 分析的基本单位。peak calling 会识别 reads 富集区，然后构建“样本 × peak”或“细胞 × peak”的矩阵。差异可及性分析比较不同条件下哪些 peaks 更开放或更关闭。

motif 分析关注 peaks 中是否富集某些转录因子识别序列。例如疾病样本中开放的 peaks 富集 NF-kB motif，可以提示炎症调控增强。footprint 分析则试图利用 Tn5 插入模式识别转录因子保护区域，但对测序深度、酶偏好和模型假设非常敏感。

## <span class="section-num">7.3</span>bulk ATAC 与 single-cell ATAC

bulk ATAC-seq 适合比较纯化细胞群或组织样本的整体调控状态，信号稳定，peak calling 相对容易。single-cell ATAC-seq 能区分不同细胞类型的调控状态，但数据极度稀疏：单个细胞只捕获到全基因组开放区域的一小部分，因此分析更依赖聚合、降维和 motif 活性推断。

单细胞 ATAC 常见分析包括 LSI 降维、细胞聚类、gene activity score、peak-to-gene linkage、motif deviation 和与 scRNA-seq 的联合整合。gene activity 是从基因附近开放区域推测表达潜力，不是实际表达。

## <span class="section-num">7.4</span>QC 指标

ATAC-seq 的关键 QC 包括 TSS enrichment、FRiP score、片段长度分布、线粒体 reads 比例、重复率和样本相关性。高质量 ATAC 通常能看到核小体周期性：短片段来自核小体缺失区域，较长片段对应 mono-nucleosome、di-nucleosome 等结构。

| 指标 | 含义 | 异常提示 |
|---|---|---|
| TSS enrichment | TSS 附近信号富集程度 | 核提取或建库质量差 |
| FRiP | reads 落在 peaks 中的比例 | 信噪比低 |
| mitochondrial reads | 线粒体 reads 比例 | 细胞破裂或样本质量差 |
| fragment pattern | 片段长度周期性 | 核小体结构是否清晰 |

## <span class="section-num">7.5</span>解释边界

ATAC-seq 很适合提出调控假设：哪个增强子被打开，哪个转录因子 motif 被富集，哪个细胞状态的调控程序发生变化。但它不能单独证明某增强子调控某基因。增强子-基因连接通常需要结合距离、共变、Hi-C/染色质互作、eQTL、CRISPR 扰动或报告基因实验。

<div class="box box-question" markdown="1"><div class="box-title">关键问题</div>
看到 ATAC 结果时，先问：开放区域是否与表达变化一致？motif 对应的转录因子是否表达？候选 enhancer 是否有独立证据连接到目标基因？
</div>

## <span class="section-num">7.6</span>案例深读：开放染色质如何指向调控元件

**为什么必须做 ATAC。** RNA-seq 告诉你表达变了，但不直接告诉你哪个 enhancer、promoter 或 transcription factor program 驱动了变化。ATAC-seq 把问题推进到染色质可及性层：哪些调控元件处于开放状态，哪些 motif 程序可能被激活。

**结果如何变成生物学结论。** Buenrostro 等人在 Nature Methods 2013 建立 ATAC-seq，用 Tn5 同时切割开放染色质并插入接头，得到 peaks、片段长度和潜在 footprint 信息。Corces 等人在 Science 2018 的 TCGA 癌症 ATAC 研究中，分析 410 个肿瘤样本，用开放染色质区分癌症亚型、推断驱动 TF，并把非编码风险位点连接到活跃调控元件。

**这个案例教什么。** ATAC 的结果能解决“上游调控程序在哪里改变”的问题，但不能单独证明 TF 结合或 enhancer 靶基因。强解释通常需要 RNA 表达一致性、ChIP/CUT&Tag、eQTL、3D genome 或 CRISPR enhancer perturbation。

**参考。** Buenrostro et al. 2013. *Nature Methods*. https://www.nature.com/articles/nmeth.2688；Corces et al. 2018. *Science*. https://www.science.org/doi/10.1126/science.aav1898

</div>
