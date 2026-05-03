# Mapping and quantifying mammalian transcriptomes by RNA-Seq

> **作者** · Mortazavi et al., **期刊** · *Nature Methods*, **年份** · 2008, **DOI** · https://doi.org/10.1038/nmeth.1226  
> **一句话**：他们用短读长深度测序把转录组从“探针强度”改造成“基因组坐标上的 reads 覆盖”，使表达量、外显子边界和剪接连接都能被同一实验读出。

## 1. 背景与前问

2008 年之前，转录组主力是 microarray、EST、SAGE 和 tiling array。它们各有硬伤：microarray 依赖预设探针，不能可靠发现未注释转录本；EST 深度低，偏向高丰度 RNA；SAGE 能计数 tag，但丢失转录本结构；tiling array 有连续基因组覆盖，但动态范围、交叉杂交和背景校正限制明显。

领域真正卡住的是三个问题。第一，表达量能否用一个跨基因、跨样本可比较的单位测量？第二，RNA-seq reads 能否同时支持 gene expression、exon discovery 和 splice junction discovery？第三，测序深度增加后，低表达基因是否持续出现，还是很快进入饱和？Mortazavi 这篇的价值，是把这些问题第一次系统地放进一套 mammalian transcriptome 测量框架。

## 2. 核心问题

核心问题一句话：**短读长 RNA-seq 能否成为哺乳动物转录组的定量技术，而不只是转录本发现工具？**

以前难回答，是因为哺乳动物基因组大、剪接复杂、表达动态范围极宽。microarray 只能在已有注释和探针设计范围内工作；测序则需要证明两个点：reads 数量与 RNA 分子数量近似线性，并且 mapping 到基因组后的覆盖模式能被解释成 exon、junction 和 expression。

## 3. 实验设计的关键决策

他们选择 adult mouse brain、liver、skeletal muscle，理由很清楚：三种组织转录程序差异大，既能测试组织特异表达，也能测试复杂剪接和动态范围。若只做一个细胞系，很难判断方法是否能区分真实组织差异。

建库采用 poly(A)+ RNA，目标是成熟 mRNA。这是合理取舍：它降低 rRNA 背景，让 reads 更集中在 coding genes 上；代价是漏掉非 poly(A) RNA、许多降解 RNA 和一部分 non-coding RNA。所以这篇定义的是早期 mRNA-seq，不是 total transcriptome。

他们还加入已知浓度 RNA standards，用来评估定量线性。这一步很关键：如果没有外源标准，你只能说 reads 多的基因“看起来表达高”；有 standards，才能问 reads per kilobase 是否随输入分子数线性变化。

## 4. 数据生成与处理

这篇使用 Illumina/Solexa 短读长测序，报告每个样本获得大约数千万条 mapped reads，read length 是早期平台常见的 25 bp 级别。按今天标准很短，但在当时足以把 reads anchor 到独特基因组位置，并通过 junction reads 推断 splice events。

处理逻辑可以拆成四步：

1. 将 reads 比对到 mouse genome 和已知 exon/junction 结构。
2. 按 gene model 统计落在 exons 上的 reads。
3. 用 transcript length 和 library depth 校正，提出 RPKM：

$$
\text{RPKM}=\frac{10^9 C}{NL}
$$

其中 $C$ 是落在基因上的 reads 数，$N$ 是样本中总 mapped reads 数，$L$ 是该基因 exon length 的 bp 数。推导很直接：先用 $C/N$ 校正测序深度，再除以 $L/1000$ 校正长度，乘 $10^6$ 变成 per million；合并即 $10^9C/(NL)$。

4. 根据 coverage 和 junction reads 识别 exon boundary、alternative splicing 和组织特异表达。

RPKM 是这篇最有历史影响的公式。它解决了“长基因天然有更多 reads”的问题，也解决了不同样本总 reads 不同的问题。但它没有解决 composition bias，也不能直接用于差异表达统计检验。这一点后来才被 DESeq/edgeR/TMM 体系系统修正。

## 5. 关键 Figure 拆解

### Figure 1：reads 覆盖如何变成转录本证据

这张图的统计动作不是检验，而是把 reads 映射到基因组坐标，展示 reads coverage 与 exon annotation 的一致性。生物学声明是：RNA-seq 不只是测一个 gene-level abundance，它还保留转录本结构信息。能看到 exon coverage，也能看到 junction-spanning reads 支持剪接。

强度边界：它能支持“这些区域被转录”和“这些 junction 存在”，但不能保证完整 isoform 组合。短读长 reads 很难把远距离 exon 串成 full-length transcript。今天这部分应由 long-read RNA-seq 或 transcript assembly 进一步确认。

### Figure 2：RPKM 与外源 RNA 标准的线性

这张图是方法学核心。作者用已知浓度标准检验 reads-derived abundance 与输入分子数是否线性。统计上是在问测序 count 是否可作为分子丰度 proxy。结论强度很高：在足够测序深度和合理 mapping 下，RNA-seq count 可以近似定量。

但线性不等于所有基因都准确。GC bias、mappability、fragmentation bias、3' bias 和 multi-mapping 都会让某些 transcript 偏离线性。RPKM 是第一代校正，不是最终答案。

### Figure 4/5：组织差异与剪接发现

这些图把 reads 用于组织特异表达和 alternative splicing。生物学声明是：brain、liver、muscle 的 mRNA landscape 明显不同，RNA-seq 可以发现 tissue-specific genes 和 splice junctions。

这里的关键不是“发现了很多差异”，而是展示同一数据对象可以回答两类问题：表达量差异和结构差异。今天我们会把这两类拆成 DEG 与 DTU/DSU 分析，使用不同统计模型。

## 6. 结论的强度边界

强支持的结论：RNA-seq reads 可以在基因组坐标上重建 mRNA abundance 和 transcript structure 的一部分；RPKM 作为第一代量化单位能显著优于简单 read count；深度测序能发现 tissue-specific expression 和大量 splice junctions。

强烈暗示但没有完全证明的结论：RNA-seq 可以替代 microarray 成为通用转录组平台。这个方向后来被证明基本成立，但不是靠这一篇单独完成。后续还需要差异表达统计、批次控制、isoform quantification 和标准化框架。

过度使用的遗产：很多人把 RPKM/FPKM 当成跨样本差异表达输入，这是错用。RPKM 校正长度和 depth，但不处理组分偏差、离散度和生物重复。现代 DE 应该回到 raw counts + negative binomial GLM 或 voom/limma 类模型。

## 7. 如果今天重做

2026 年重做这篇，我会保留它的“技术定义”精神，但重构实验：

- 文库：poly(A)+ 与 rRNA-depleted total RNA 都做，区分成熟 mRNA 与更广义 RNA pool。
- 测序：short-read paired-end + long-read Iso-Seq/Nanopore，短读长负责定量，长读长负责 isoform。
- 标准：ERCC 或更合适的 spike-in，同时加入 UMI 版本以评估 PCR bias。
- 统计：不用 RPKM 做 DE；gene-level 用 DESeq2/edgeR，transcript-level 用 Salmon + tximport，isoform switching 用 DRIMSeq/SUPPA2/satuRn。
- 验证：选组织特异 splice events 做 RT-PCR 或 targeted long-read validation。

对植物项目，尤其要加入 organelle reads、基因家族 multi-mapping、多倍体 homeolog 区分和组织异质性控制。植物转录组的关键不是“能不能测到 reads”，而是 reads 是否能唯一归属到亚基因组、旁系同源基因或 organelle-derived transcripts。

## 8. 我学到了什么

（Peter 填）

## 横向连接

- [[03-bulk-RNAseq/tpm-fpkm-cpm-limits]]
- [[03-bulk-RNAseq/library-prep-tradeoffs]]
- [[03-bulk-RNAseq/aligners-vs-pseudoaligners]]
- [[03-bulk-RNAseq/tximport-length-scaling]]
- [[03-bulk-RNAseq/_papers/love-2014-genome-biology-deseq2]]

## 参考

- Mortazavi et al. (2008), *Nature Methods*, DOI: https://doi.org/10.1038/nmeth.1226
- Wang et al. (2009), *Nature Reviews Genetics*, DOI: https://doi.org/10.1038/nrg2484
- Trapnell et al. (2010), *Nature Biotechnology*, DOI: https://doi.org/10.1038/nbt.1621
- Li et al. (2010), *Bioinformatics* — RSEM
- Soneson et al. (2015), *F1000Research* — RNA-seq differential analysis comparison
