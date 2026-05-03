<div class="page-wrapper" markdown="1">

<div class="breadcrumb"><a href="../../index.md">首页</a><span>›</span><a href="#">Part 4 遗传变异与数量性状</a><span>›</span>第 11 章</div>

<header class="chapter-header"><div class="chapter-header-inner">
  <div class="chapter-number">11</div>
  <div class="chapter-part">Part 4 · 遗传变异与数量性状</div>
  <h1 class="chapter-title">GWAS 与群体遗传</h1>
  <p class="chapter-subtitle">用自然群体中的遗传变异定位影响性状的基因组区域。</p>
</div></header>

<nav class="chapter-toc"><h3>本章目录</h3><ol>
  <li>GWAS 的基本思想</li>
  <li>连锁不平衡和群体结构</li>
  <li>标准分析流程</li>
  <li>从关联位点到候选基因</li>
  <li>常见误区</li>
</ol></nav>

## <span class="section-num">11.1</span>GWAS 的基本思想

GWAS（Genome-Wide Association Study）在全基因组范围内检验遗传变异与表型之间的统计关联。基本模型是：对每个 SNP，比较不同基因型个体的表型是否系统性不同。对于二分类疾病常用 logistic model，对于连续性状常用 linear model 或 mixed model。

GWAS 的优势是无需预先指定候选基因，可以在自然群体中发现影响性状的基因组区域。局限是它通常定位到关联区域，而不是直接定位到因果变异；它对常见变异更有力，对罕见变异、结构变异和复杂环境互作的能力有限。

## <span class="section-num">11.2</span>连锁不平衡和群体结构

连锁不平衡（LD）指相邻变异在群体中非随机共遗传。GWAS 命中的 SNP 往往只是与因果变异处在 LD 中的标记位点。LD 既帮助我们用有限 SNP 捕获附近遗传信息，也限制了定位分辨率。

群体结构是 GWAS 的主要混杂来源。如果病例和对照来自不同祖源群体，某些 SNP 频率差异可能反映祖源差异，而不是疾病原因。主成分校正、线性混合模型、亲缘关系矩阵和严格样本 QC 都是控制群体结构的重要方法。

## <span class="section-num">11.3</span>标准分析流程

GWAS 通常包括表型 QC、基因型 QC、缺失率过滤、MAF 过滤、Hardy-Weinberg equilibrium 检查、亲缘关系检查、祖源 PCA、基因型填充、关联模型、全基因组显著性校正、QQ plot、Manhattan plot 和重复队列验证。

```mermaid
flowchart LR
  Pheno[表型定义] --> QC[样本和变异 QC]
  Geno[基因型数据] --> QC
  QC --> PCA[群体结构/亲缘关系]
  PCA --> Model[关联模型]
  Model --> Loci[显著位点]
  Loci --> Fine[精细定位和功能注释]
```

## <span class="section-num">11.4</span>从关联位点到候选基因

显著位点附近最近的基因不一定是因果基因。许多 GWAS 信号位于非编码调控区域，可能通过远端增强子影响目标基因。候选基因推断常需要结合 eQTL、染色质可及性、染色质互作、保守性、细胞类型特异表达、精细定位和功能实验。

多基因性状通常由大量小效应变异共同影响。单个位点解释的表型方差可能很小，但多基因风险评分（PRS）可以聚合许多位点进行风险预测。PRS 的可迁移性受祖源和队列差异影响很大。

## <span class="section-num">11.5</span>常见误区

第一，把关联 SNP 当作因果突变。第二，把最近基因当作因果基因。第三，忽视群体结构和表型定义质量。第四，用一个祖源群体训练的 PRS 直接推广到另一个祖源群体。第五，只看 p 值，不看效应大小、频率和复现。

<div class="box box-question" markdown="1"><div class="box-title">关键问题</div>
GWAS 命中后最重要的问题不是“这个 SNP 显著吗”，而是“它通过哪个变异、哪个细胞类型、哪个调控机制影响表型”。
</div>

</div>

