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
  <li>CNS / 高影响案例深读：植物 GWAS 如何从关联走向候选机制</li>
</ol></nav>

<div class="learning-guide" markdown="1">
<div class="learning-guide-title">本章学习导向：GWAS 一般为了解决什么问题？</div>
<p><strong>常见问题。</strong> GWAS 用来问“自然群体中的哪些遗传变异与性状差异相关”。它适合定位复杂性状候选区域、发现自然等位基因、研究地方适应和驯化，也能为后续功能验证提供入口。</p>
<p><strong>一般分析思路。</strong> 先保证表型定义和基因型 QC，再控制缺失率、MAF、亲缘关系和群体结构，建立 SNP-phenotype 关联模型；随后看 QQ/Manhattan、LD block、fine mapping、候选基因注释、eQTL/ATAC/表达整合和独立群体验证。</p>
<p><strong>为什么这样分析。</strong> 关联信号很容易被群体结构、亲缘关系、表型噪音和 LD 误导。GWAS peak 通常只是标记了一个相关区域，不等于峰顶 SNP 是因果变异，也不等于最近基因就是因果基因。</p>
<p><strong>生物学主线。</strong> 复杂性状常由多位点、小效应、环境和调控变异共同塑造。读 GWAS 时要从“显著位点”继续追问：哪个变异、哪个细胞/组织、哪个调控或蛋白机制、在哪个环境中影响表型？</p>
</div>

## <span class="section-num">11.1</span>GWAS 的基本思想

GWAS（Genome-Wide Association Study）在全基因组范围内检验遗传变异与表型之间的统计关联。基本模型是：对每个 SNP，比较不同基因型个体的表型是否系统性不同。对于二分类疾病常用 logistic model，对于连续性状常用 linear model 或 mixed model。

GWAS 的优势是无需预先指定候选基因，可以在自然群体中发现影响性状的基因组区域。局限是它通常定位到关联区域，而不是直接定位到因果变异；它对常见变异更有力，对罕见变异、结构变异和复杂环境互作的能力有限。

### 生物学补充：复杂性状通常不是一个基因的故事

GWAS 的生物学前提，是自然群体中存在影响性状的遗传变异。可是多数复杂性状不是 Mendelian trait，而是 polygenic architecture：很多位点各自贡献很小效应，共同改变发育、代谢、免疫、形态或行为。株高、开花期、抗病性、产量、药物反应和常见疾病，往往都由主效位点、小效位点、环境和基因互作共同塑造。

变异的功能也不只有“改变蛋白”。编码变异可能改变酶活性、受体结合或蛋白稳定性；调控变异可能改变 enhancer、promoter、splicing、polyadenylation 或染色质状态；结构变异可能改变基因剂量、融合、拷贝数或远端调控关系。很多 GWAS 信号落在非编码区，不是因为它们“不重要”，而是因为复杂性状经常通过细胞类型特异的调控元件改变基因表达。

植物 GWAS 还要格外重视地方适应和驯化。一个等位基因可能不是普遍“好”或“坏”，而是在特定光周期、温度、病原压力、土壤条件或栽培制度下有优势。换句话说，GWAS 命中的不是抽象的性状按钮，而是自然选择、育种选择和环境历史共同塑造的遗传变异。

<figure class="source-figure" markdown="1">
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Manhattan_plot_of_the_GWAS_of_self-reporting_of_being_a_morning_person.jpg" alt="Manhattan plot from a GWAS">
  <figcaption><strong>图 11.1 · GWAS Manhattan plot。</strong> Manhattan plot 的每个点是一个变异位点，横轴是基因组位置，纵轴是关联显著性。峰值说明某区域与表型关联，但不等于峰顶 SNP 就是因果变异。来源：Hu et al. 2016, PLOS Genetics, via <a href="https://commons.wikimedia.org/wiki/File:Manhattan_plot_of_the_GWAS_of_self-reporting_of_being_a_morning_person.jpg">Wikimedia Commons</a>, CC BY 4.0。</figcaption>
</figure>

## <span class="section-num">11.2</span>连锁不平衡和群体结构

连锁不平衡（LD）指相邻变异在群体中非随机共遗传。GWAS 命中的 SNP 往往只是与因果变异处在 LD 中的标记位点。LD 既帮助我们用有限 SNP 捕获附近遗传信息，也限制了定位分辨率。

群体结构是 GWAS 的主要混杂来源。如果病例和对照来自不同祖源群体，某些 SNP 频率差异可能反映祖源差异，而不是疾病原因。主成分校正、线性混合模型、亲缘关系矩阵和严格样本 QC 都是控制群体结构的重要方法。

LD 本身也是生物学历史的记录。重组率低、选择扫荡、瓶颈、自交、近交和群体扩张都会改变 LD。自交植物的 LD 往往更长，定位分辨率可能较低，但固定纯合材料便于重复表型；异交物种 LD 衰减快，定位可以更细，但需要更高标记密度和样本量。读 GWAS 时要把 LD 看成群体历史的一部分，而不是一个纯统计麻烦。

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

从位点到机制可以按一条证据阶梯走：关联峰定位到 LD block；fine mapping 缩小 credible set；功能注释判断变异是否落在编码区、启动子、增强子、剪接位点或保守元件；eQTL、ATAC、甲基化或 Hi-C 提供目标基因线索；突变体、互补、编辑或近等基因系验证因果。对植物来说，最漂亮的链条通常是 GWAS peak → 候选变异 → 等位基因表达或功能差异 → CRISPR/转基因/互补 → 环境或病原条件下表型复现。

## <span class="section-num">11.5</span>常见误区

第一，把关联 SNP 当作因果突变。第二，把最近基因当作因果基因。第三，忽视群体结构和表型定义质量。第四，用一个祖源群体训练的 PRS 直接推广到另一个祖源群体。第五，只看 p 值，不看效应大小、频率和复现。

<div class="box box-question" markdown="1"><div class="box-title">关键问题</div>
GWAS 命中后最重要的问题不是“这个 SNP 显著吗”，而是“它通过哪个变异、哪个细胞类型、哪个调控机制影响表型”。
</div>

## <span class="section-num">11.6</span>CNS / 高影响案例深读：植物 GWAS 如何从关联走向候选机制

**我选的案例。** Atwell et al. 2010, *Nature* 是 Arabidopsis GWAS 经典；Huang et al. 2012, *Nature* 是水稻群体基因组与驯化经典。前者最适合学习“植物自然群体里如何做 GWAS”，后者适合学习“GWAS/群体变异如何回答驯化与选择”。

**科研逻辑图。**

```mermaid
flowchart LR
  Q[真实问题: 自然变异中哪些 loci 影响性状] --> P[设计: 多 accessions + 精确表型]
  G[全基因组 SNP/SV] --> M[混合模型: SNP effect + kinship/structure]
  P --> M
  M --> L[association peaks]
  L --> F[fine mapping / LD / annotation]
  F --> C[候选基因/候选变异]
  C --> V[突变体 / NIL / transgenic / expression evidence]
```

**为什么必须做 GWAS/群体基因组。** 当问题是“自然变异中哪些等位基因塑造性状”，转录组只能给状态，不能给遗传原因。GWAS 直接利用自然群体中的 recombination history 和 LD，把 phenotype variation 映射到 genotype variation。植物尤其适合，因为自交、地方适应、驯化和广泛自然 accessions 提供了丰富的遗传结构。

**原理如何支撑结论。** Atwell 对 107 个 Arabidopsis 表型做 genome-wide association，把每个 SNP 作为 fixed effect，同时面对两个核心统计问题：LD 决定定位分辨率，population structure 决定假阳性风险。它的教育价值在于：很多性状可以找到接近已知生物学基因的峰，但许多峰也受样本量、群体结构和小效应限制。Huang 的水稻研究进一步用大规模 SNP 图谱、群体分化和选择扫荡，把关联位点放回驯化历史。

**从实际科研逻辑怎么读。** GWAS 论文先看 phenotype quality。表型噪音大，模型再高级也只会得到弱信号。其次看群体结构：Arabidopsis 和水稻都有强地理/祖源结构，若结构和表型共同变化，普通线性模型会把祖源差异误报成性状位点。Atwell 的意义在于它把 mixed model 和自然 accessions 的植物 GWAS 推成范式；Huang 的意义在于用群体变异和选择信号把性状关联放进驯化历史。

**关键结果如何支撑生物学声明。** Manhattan peak 只支持“某区域与表型关联”。如果 peak 附近有已知通路基因，支持候选基因；如果该区域还显示 selection sweep，支持驯化相关；如果 allele effect 在独立群体复现，支持稳健性。只有当突变体、近等基因系或转基因改变表型时，才真正从 association 进入 causation。对植物 PI 来说，最实用的读法是把 GWAS peak 当作“候选机制入口”，不是最终答案。

**结论边界。** GWAS peak 不是因果突变，最近基因不是因果基因；植物强群体结构和环境适应会制造假阳性；多倍体或高度自交物种还会让模型更复杂。强结论需要 fine mapping、候选基因表达、突变体、互补实验或 near-isogenic lines。今天重做应加入 pangenome graph、SV、环境 GWAS、multi-omics QTL 和混合模型/regenie 类算法。

**参考。** Atwell et al. 2010. *Nature*. https://www.nature.com/articles/nature08800；Huang et al. 2012. *Nature*. https://www.nature.com/articles/nature11532

</div>
