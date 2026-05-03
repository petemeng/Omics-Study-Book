<div class="page-wrapper" markdown="1">

<div class="breadcrumb"><a href="../../index.md">首页</a><span>›</span><a href="#">Part 3 免疫与微生态</a><span>›</span>第 9 章</div>

<header class="chapter-header"><div class="chapter-header-inner">
  <div class="chapter-number">09</div>
  <div class="chapter-part">Part 3 · 免疫与微生态</div>
  <h1 class="chapter-title">BCR 与 TCR 免疫组库</h1>
  <p class="chapter-subtitle">用受体序列追踪克隆扩增、抗原经验和免疫动态。</p>
</div></header>

<nav class="chapter-toc"><h3>本章目录</h3><ol>
  <li>V(D)J 重排与 CDR3</li>
  <li>BCR 与 TCR 的差异</li>
  <li>bulk 与单细胞 VDJ</li>
  <li>克隆型、丰度和多样性</li>
  <li>解释边界</li>
  <li>案例深读：克隆型如何连接免疫状态</li>
</ol></nav>

## <span class="section-num">9.1</span>V(D)J 重排与 CDR3

B 细胞和 T 细胞通过 V(D)J 重排产生高度多样的抗原受体。TCR 识别抗原肽-MHC 复合物，BCR 可以识别天然抗原。重排过程中 V、D、J 片段组合，并在连接处产生插入和删除，形成高度多样的 CDR3 区域。CDR3 通常是定义克隆型的核心。

免疫组库测序的基本问题是：样本中有哪些受体序列，它们各自有多少，是否出现克隆扩增，不同组织或时间点之间是否共享克隆。

## <span class="section-num">9.2</span>BCR 与 TCR 的差异

TCR 通常由 alpha/beta 链或 gamma/delta 链组成。TCR 克隆扩增可以提示抗原驱动反应，但仅凭 CDR3 序列很难确定抗原特异性。BCR 除了 V(D)J 重排，还会经历体细胞高突变和类别转换，因此 BCR 组库可以提供亲和成熟、谱系树和抗体类别信息。

| 特征 | TCR | BCR |
|---|---|---|
| 主要功能 | 识别肽-MHC | 识别天然抗原 |
| 后续变化 | 克隆扩增为主 | 高突变、类别转换、克隆扩增 |
| 关键分析 | 克隆型、共享、扩增 | 克隆谱系、突变率、isotype |
| 抗原判断 | 需数据库或实验验证 | 可结合抗体功能验证 |

## <span class="section-num">9.3</span>bulk 与单细胞 VDJ

bulk 免疫组库通量高、适合估计整体多样性和克隆扩增，但难以配对 alpha/beta 或 heavy/light chain，也缺少细胞表型信息。单细胞 VDJ 可以把受体序列与单细胞表达谱连接起来，知道某个扩增克隆属于耗竭 T 细胞、浆细胞还是记忆细胞。

单细胞 VDJ 的价值在于“序列 + 状态”联合解释。例如肿瘤中一个扩增 TCR 克隆如果同时具有细胞毒性和耗竭表达特征，可能提示持续抗原刺激；疫苗后 BCR 克隆若出现高突变和类别转换，可能提示成熟抗体反应。

## <span class="section-num">9.4</span>克隆型、丰度和多样性

常见指标包括 clonotype count、克隆丰度、Shannon diversity、Simpson clonality、Gini index、public clonotype 和 clonal overlap。克隆扩增意味着某些受体序列占比升高，常见于感染、肿瘤、疫苗接种、自身免疫或组织局部免疫反应。

多样性解释要结合采样深度。测得越深，低丰度克隆越容易被发现；样本细胞数不同会影响多样性估计。比较不同样本前通常需要稀释、归一化或使用对测序深度相对稳健的指标。

## <span class="section-num">9.5</span>解释边界

克隆扩增不等于已经知道抗原。相同或相似 TCR 可能识别不同抗原，不同 TCR 也可能识别同一抗原。BCR 序列相似不代表抗体功能相同。免疫组库提供的是免疫历史和克隆动态线索，抗原特异性仍需要 tetramer、抗原刺激、抗体结合或功能实验验证。

<div class="box box-question" markdown="1"><div class="box-title">关键问题</div>
免疫组库结果要同时看三件事：克隆是否扩增，扩增克隆处于什么细胞状态，是否有独立证据支持抗原特异性。
</div>

## <span class="section-num">9.6</span>案例深读：克隆型如何连接免疫状态

**为什么必须做 BCR/TCR。** scRNA-seq 能告诉你 T 细胞处于 exhausted、cytotoxic 或 proliferative 状态，但不能告诉你这些细胞是否来自同一个克隆，也不能追踪抗原选择历史。TCR/BCR 组库把免疫受体序列作为克隆条码。

**结果如何变成生物学结论。** Azizi 等人在 Cell 2018 对乳腺肿瘤微环境进行单细胞免疫图谱，并结合 TCR 信息分析 T 细胞表型多样性。Yost 等人在 Nature 2020 使用单细胞 RNA/TCR 深度测序提出：肿瘤内 T 细胞，尤其治疗响应患者中，可能由肿瘤外的新鲜非耗竭 T 细胞补充。这里 TCR 结果解决 lineage/clone tracking 问题，表达矩阵解决状态问题，两者合在一起才形成免疫动力学解释。

**这个案例教什么。** 免疫组库可以回答“哪些克隆被选择、是否扩增、扩增克隆处于什么功能状态”。但克隆扩增不等于已知抗原，抗原特异性仍需要 tetramer、刺激实验、抗体结合或功能验证。

**参考。** Azizi et al. 2018. *Cell*. https://www.cell.com/cell/fulltext/S0092-8674(18)30723-2；Yost et al. 2020. *Nature*. https://www.nature.com/articles/s41586-020-2056-8

</div>
