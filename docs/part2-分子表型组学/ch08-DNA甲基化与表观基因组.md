<div class="page-wrapper" markdown="1">

<div class="breadcrumb"><a href="../../index.md">首页</a><span>›</span><a href="#">Part 2 分子表型组学</a><span>›</span>第 8 章</div>

<header class="chapter-header"><div class="chapter-header-inner">
  <div class="chapter-number">08</div>
  <div class="chapter-part">Part 2 · 分子表型组学</div>
  <h1 class="chapter-title">DNA 甲基化与表观基因组</h1>
  <p class="chapter-subtitle">甲基化记录调控状态、细胞身份、发育历史和环境影响。</p>
</div></header>

<nav class="chapter-toc"><h3>本章目录</h3><ol>
  <li>5mC 的生物学含义</li>
  <li>甲基化测量技术</li>
  <li>beta 值、M 值和 DMR</li>
  <li>与表达和细胞组成的关系</li>
  <li>常见误区</li>
  <li>CNS / 高影响案例深读：单碱基分辨率如何改变甲基化问题</li>
</ol></nav>

<div class="learning-guide" markdown="1">
<div class="learning-guide-title">本章学习导向：DNA 甲基化组一般为了解决什么问题？</div>
<p><strong>常见问题。</strong> 甲基化组用来研究基因组区域是否处于长期沉默、细胞身份、发育历史、环境暴露、转座子压制或表观遗传重编程状态。它特别适合问“这个区域的调控状态是否被稳定记录下来”。</p>
<p><strong>一般分析思路。</strong> 先确认测序/芯片覆盖、转化效率、位点过滤和细胞组成，再计算 CpG 或 cytosine methylation level，识别 DMP/DMR，并按 promoter、enhancer、gene body、repeat、imprinted region、植物 CG/CHG/CHH context 分层解释。</p>
<p><strong>为什么这样分析。</strong> 甲基化的功能高度依赖位置和 context。promoter 高甲基化常与沉默相关，但 gene body、enhancer 和转座子甲基化含义不同；植物 CG、CHG、CHH 分别对应不同维护机制和 RdDM 逻辑，不能混成一个平均值。</p>
<p><strong>生物学主线。</strong> 甲基化是写入、维护和擦除的动态系统。读结果时要问：它是驱动调控、转座子防御、细胞组成变化，还是发育/环境过程留下的历史记录？</p>
</div>

## <span class="section-num">8.1</span>5mC 的生物学含义

DNA 甲基化最常指胞嘧啶 5 位甲基化（5mC）。在哺乳动物中，它主要发生在 CpG 位点。启动子 CpG island 高甲基化通常与转录沉默相关，而基因体甲基化、增强子甲基化和非 CpG 甲基化的解释更依赖细胞类型和基因组背景。

甲基化既可以是调控机制，也可以是细胞状态的记录。发育分化、细胞类型比例、年龄、炎症、肿瘤演化、环境暴露都会影响甲基化图谱。因此，甲基化研究尤其需要控制细胞组成和样本来源。

### 生物学补充：甲基化是一套维护、擦除和重新书写的系统

甲基化图谱之所以能携带“记忆”，是因为细胞分裂后它可以被维护。哺乳动物中，DNMT1 偏好半甲基化 CpG，负责复制后维护；DNMT3A/DNMT3B 更偏 de novo methylation，负责在发育、分化和疾病过程中建立新甲基化。TET 酶把 5mC 氧化为 5hmC、5fC、5caC，配合 DNA 修复实现主动去甲基化。于是甲基化不是静态标签，而是写入、维护、擦除之间的动态平衡。

植物的逻辑更复杂，也更适合训练 context 思维。CG 甲基化主要由 MET1 维护，CHG 甲基化与 CMT3 和 H3K9me2 形成反馈，CHH 甲基化常由 DRM2/RdDM 或 CMT2 维持。RdDM（RNA-directed DNA methylation）用 24nt siRNA 把沉默信号导向转座子和重复序列，是植物表观基因组的核心机制之一。看到植物 CHH methylation 变化时，应该立刻想到 de novo methylation、small RNA、转座子控制和发育/胁迫调控，而不能只套“启动子甲基化压低表达”的动物公式。

甲基化还常出现在印记、X 染色体失活、转座子沉默和细胞身份维持中。它的功能强度依赖位置：promoter CpG island 甲基化常强烈压制转录；gene body methylation 可能出现在稳定表达基因中；enhancer methylation 更像细胞类型特异调控状态；repeat methylation 则常和基因组防御相关。

<figure class="source-figure" markdown="1">
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/DNA_methylation.svg" alt="DNA methylation adding a methyl group to cytosine">
  <figcaption><strong>图 8.1 · DNA methylation 的化学含义。</strong> 甲基化不是抽象的“表观标签”，而是在胞嘧啶上增加一个 methyl group。理解这个化学层，有助于后面区分 bisulfite sequencing、酶法测序和长读长直接检测甲基化信号。来源：Christoph Bock / Max Planck Institute for Informatics, <a href="https://commons.wikimedia.org/wiki/File:DNA_methylation.svg">Wikimedia Commons</a>, CC BY-SA 3.0。</figcaption>
</figure>

## <span class="section-num">8.2</span>甲基化测量技术

全基因组亚硫酸氢盐测序（WGBS）覆盖最全面，通过化学处理把未甲基化胞嘧啶转换为尿嘧啶，而甲基化胞嘧啶相对保留，从而通过测序推断甲基化状态。RRBS 通过限制性内切酶富集 CpG 密集区域，成本较低但覆盖不均。芯片方法如 EPIC array 成本更低、适合大队列，但只覆盖预设位点。

新路线还包括酶法甲基化测序和长读长甲基化检测。选择技术时要看问题：若关注全基因组调控，WGBS 更合适；若做大规模流行病学关联，芯片可能更现实；若关注重复序列、结构变异和单倍型，长读长有优势。

## <span class="section-num">8.3</span>beta 值、M 值和 DMR

甲基化比例常用 beta 值表示，范围 0 到 1，表示某个位点甲基化 reads 占总 reads 的比例。M 值是 beta 值的 logit 转换，更适合统计建模。差异甲基化可以在单个位点层面分析，也可以在连续区域层面识别 DMR（Differentially Methylated Region）。

DMR 通常比单个位点更稳定，因为相邻 CpG 的甲基化状态具有相关性。解释 DMR 时要关注它位于启动子、增强子、基因体、CpG island shore、重复序列还是印记区域，不同位置的功能含义不同。

## <span class="section-num">8.4</span>与表达和细胞组成的关系

甲基化和表达之间不是简单的负相关。启动子高甲基化常与低表达相关，但增强子去甲基化可能与增强子激活相关，基因体甲基化有时与活跃转录相关。把甲基化和 RNA-seq 结合时，应当按基因组区域分层解释。

组织样本中的甲基化差异经常反映细胞组成变化。例如血液样本中某些 CpG 差异，可能只是中性粒细胞、淋巴细胞和单核细胞比例不同。大队列甲基化分析通常需要进行细胞组成估计或使用纯化细胞。

一个实用判断是：如果 DMR 在 promoter，且同一细胞类型中目标基因表达反向变化，可以提出转录调控假设；如果 DMR 在 enhancer，需要再看 ATAC/H3K27ac/目标基因连接；如果 DMR 在转座子或重复序列，要优先考虑基因组防御、邻近基因沉默和 small RNA；如果 DMR 与细胞类型 marker 同步变化，则很可能反映组成差异。甲基化解释的第一步不是找最近基因，而是先判定区域类别和细胞来源。

## <span class="section-num">8.5</span>常见误区

第一，把甲基化差异直接解释为基因沉默。第二，忽视 SNP 对探针或比对的影响。第三，不控制年龄、性别、吸烟、细胞组成和批次。第四，把甲基化时钟、暴露标志和疾病因果混为一谈。

<div class="box box-cognition" markdown="1"><div class="box-title">认知升级</div>
甲基化是调控层，也是历史记录层。解释它时要同时问：这是驱动变化，还是细胞命运、环境和疾病过程留下的痕迹？
</div>

## <span class="section-num">8.6</span>CNS / 高影响案例深读：单碱基分辨率如何改变甲基化问题

**我选的案例。** Lister et al. 2008, *Cell* 的 Arabidopsis methylome 是植物表观基因组的标志性论文；Lister et al. 2009, *Nature* 的 human ESC/fibroblast methylome 展示同一测量思想如何迁移到哺乳动物细胞身份问题。对 Peter 来说，2008 年植物论文更该放在第一位。

**科研逻辑图。**

```mermaid
flowchart LR
  Q[真实问题: 哪些基因组区域被长期沉默或被重编程] --> W[WGBS/methylC-seq]
  W --> C1[CG methylation]
  W --> C2[CHG methylation]
  W --> C3[CHH methylation]
  C1 --> R[context-specific methylome map]
  C2 --> R
  C3 --> R
  R --> S[整合 small RNA / expression / transposon annotation]
  S --> H[机制假设: RdDM、转座子沉默、细胞身份]
  H --> V[验证: mutant / demethylation / targeted methylation]
```

**为什么必须做甲基化。** 很多问题不是“此刻 RNA 是否高表达”，而是“某个基因组区域是否处于长期沉默、转座子压制、印记或重编程状态”。RNA 是输出，甲基化更像调控历史和染色质身份的一层记录。植物里尤其如此：CG、CHG、CHH 三种 context 分别受到不同维持机制和 RdDM 通路影响，不能用动物 CpG 思维直接套。

**原理如何支撑结论。** Bisulfite sequencing 利用未甲基化 C 被转化、5mC 相对保留的化学差异，把甲基化状态读成测序碱基差异。Lister 2008 将 methylC-seq、small RNA 和 mRNA 放到同一 Arabidopsis 基因组坐标上，能同时看甲基化位置、24nt siRNA 富集和转录沉默之间的关系。

**从实际科研逻辑怎么读。** 甲基化论文不能只看“某基因 promoter hypermethylated”。先看 genomic context：promoter、gene body、enhancer、repeat、transposon、imprinted region 的解释完全不同。植物还必须把 CG/CHG/CHH 分开，因为 CHH 强烈提示 de novo/RdDM 或 DRM2 相关活动，而 CG 更像 maintenance memory。Lister 2008 的实际价值在于把 methylome 与 small RNA 和 expression 叠加，让“甲基化在哪里”进一步转成“可能由哪条 pathway 维持、是否对应转录沉默”。

**关键结果如何支撑生物学声明。** 如果一个转座子区域同时有高 CHH methylation、24nt siRNA 和低表达，就支持 RdDM 参与沉默；如果一个基因 body 甲基化但表达不低，就不能套用 promoter methylation silencing；如果某 DMR 与表达反向变化，只能说支持调控关系，还不能证明 methylation 是原因。实际项目里，最强链条是：DMR 定位到调控区域 → 表达或小 RNA 一致变化 → 甲基化通路突变体或靶向去甲基化能改变表型。

**结论边界。** 甲基化差异不自动等于功能因果；它可能是沉默机制，也可能是细胞组成、发育阶段或转录状态的结果。WGBS 还会受 bisulfite damage、mapping bias 和 SNP 影响。今天重做植物 methylome，应加入 long-read methylation、单细胞/空间甲基化和 RdDM 小 RNA 扰动，区分旁观者甲基化与功能性 DMR。

**参考。** Lister et al. 2008. *Cell*. https://doi.org/10.1016/j.cell.2008.03.029；Lister et al. 2009. *Nature*. https://www.nature.com/articles/nature08514

**延伸深读。** [[09-methylation/_papers/lister-2008-cell-arabidopsis-methylome]]；[[09-methylation/_papers/lister-2009-nature-human-methylome]]

</div>
