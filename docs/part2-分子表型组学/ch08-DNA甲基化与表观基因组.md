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
  <li>案例深读：单碱基分辨率如何改变表观调控问题</li>
</ol></nav>

## <span class="section-num">8.1</span>5mC 的生物学含义

DNA 甲基化最常指胞嘧啶 5 位甲基化（5mC）。在哺乳动物中，它主要发生在 CpG 位点。启动子 CpG island 高甲基化通常与转录沉默相关，而基因体甲基化、增强子甲基化和非 CpG 甲基化的解释更依赖细胞类型和基因组背景。

甲基化既可以是调控机制，也可以是细胞状态的记录。发育分化、细胞类型比例、年龄、炎症、肿瘤演化、环境暴露都会影响甲基化图谱。因此，甲基化研究尤其需要控制细胞组成和样本来源。

## <span class="section-num">8.2</span>甲基化测量技术

全基因组亚硫酸氢盐测序（WGBS）覆盖最全面，通过化学处理把未甲基化胞嘧啶转换为尿嘧啶，而甲基化胞嘧啶相对保留，从而通过测序推断甲基化状态。RRBS 通过限制性内切酶富集 CpG 密集区域，成本较低但覆盖不均。芯片方法如 EPIC array 成本更低、适合大队列，但只覆盖预设位点。

新路线还包括酶法甲基化测序和长读长甲基化检测。选择技术时要看问题：若关注全基因组调控，WGBS 更合适；若做大规模流行病学关联，芯片可能更现实；若关注重复序列、结构变异和单倍型，长读长有优势。

## <span class="section-num">8.3</span>beta 值、M 值和 DMR

甲基化比例常用 beta 值表示，范围 0 到 1，表示某个位点甲基化 reads 占总 reads 的比例。M 值是 beta 值的 logit 转换，更适合统计建模。差异甲基化可以在单个位点层面分析，也可以在连续区域层面识别 DMR（Differentially Methylated Region）。

DMR 通常比单个位点更稳定，因为相邻 CpG 的甲基化状态具有相关性。解释 DMR 时要关注它位于启动子、增强子、基因体、CpG island shore、重复序列还是印记区域，不同位置的功能含义不同。

## <span class="section-num">8.4</span>与表达和细胞组成的关系

甲基化和表达之间不是简单的负相关。启动子高甲基化常与低表达相关，但增强子去甲基化可能与增强子激活相关，基因体甲基化有时与活跃转录相关。把甲基化和 RNA-seq 结合时，应当按基因组区域分层解释。

组织样本中的甲基化差异经常反映细胞组成变化。例如血液样本中某些 CpG 差异，可能只是中性粒细胞、淋巴细胞和单核细胞比例不同。大队列甲基化分析通常需要进行细胞组成估计或使用纯化细胞。

## <span class="section-num">8.5</span>常见误区

第一，把甲基化差异直接解释为基因沉默。第二，忽视 SNP 对探针或比对的影响。第三，不控制年龄、性别、吸烟、细胞组成和批次。第四，把甲基化时钟、暴露标志和疾病因果混为一谈。

<div class="box box-cognition" markdown="1"><div class="box-title">认知升级</div>
甲基化是调控层，也是历史记录层。解释它时要同时问：这是驱动变化，还是细胞命运、环境和疾病过程留下的痕迹？
</div>

## <span class="section-num">8.6</span>案例深读：单碱基分辨率如何改变表观调控问题

**为什么必须做甲基化。** 很多问题不是“此刻 RNA 是否高表达”，而是“某个区域是否长期处于沉默、印记、去分化或重编程状态”。甲基化更接近稳定细胞身份、发育历史和环境记忆。

**结果如何变成生物学结论。** Lister 等人在 Nature 2009 构建人类胚胎干细胞和胎儿成纤维细胞的单碱基分辨率 methylome，展示不同细胞状态具有广泛不同的甲基化模式，并发现胚胎干细胞中显著的 non-CG methylation。WGBS 的结果不是一个“表达替代指标”，而是直接描述基因组每个胞嘧啶位点或区域的甲基化状态。

**这个案例教什么。** 甲基化组能解决“细胞身份、发育阶段、沉默区域和环境记忆如何写入基因组”的问题。植物研究还要额外区分 CG、CHG、CHH 三种 context，因为它们对应不同维持机制和 RdDM 参与程度。

**参考。** Lister et al. 2009. *Nature*. https://www.nature.com/articles/nature08514

</div>
