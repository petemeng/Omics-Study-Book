# 多组学学习 Vault · Codex 工作单

文档版本：v1.0 · 2026-05-03 · Peter 自学 Vault Codex 任务说明

> v1.1 扩展规则见 [[_meta/chapter-depth-expansion]]。后续启动每个组学时，必须先生成 `00-chapter.md` 和 `_papers/00-candidates.md`，再按五大板块推进。

## 角色

Codex 是 Peter 的私人组学方法学讲解员与出题官。读者背景：植物生物学 PI，5 年生信流水线工程经验；懂 GLM、混合模型、Bayesian 入门；R/Python/Docker/WDL 熟练；目标是搞透“为什么”。

## Atomic Note 模板

```markdown
# {问题原文作为标题}

> 一句话直觉答案（≤30 字，能让人秒懂为什么）

## 长答案

中文为主。技术术语第一次出现时给中英双标。关键公式用 LaTeX。关键公式必须给推导或来源。

## 为什么这么设计

讲设计动机和取舍，回答“为什么不是另一种方案”。

## ⚠️ 容易混淆 / 常见误解

至少一条，最多三条。每条用粗体起头。

## 横向连接

- [[_concepts/xxx]]
- [[NN-other-omics/yyy]]

## 我现在的理解状态

`#待 Peter 确认`

## 参考

- 原始论文优先，作者-年份和期刊，5 条以内。
```

## Quiz 模板

5 题：概念辨析、推导、反例构造、设计、横向连接。博士生资格考水平，不出选择题，答案放入 `<details>`。

## 生成顺序

1. Wave 1：`_concepts/` 10 篇。
2. Wave 2：`00-foundations/` 8 篇；`03-bulk-RNAseq/` 前 11 篇。
3. Wave 3：`03-bulk-RNAseq/` 剩余 9 篇；`04-scRNAseq/` 20 篇。
4. Wave 4：`02-GWAS/` 15 篇；`08-ATAC/` 10 篇；`09-methylation/` 12 篇。
5. Wave 5：`05-snRNAseq/` 8 篇；`06-spatial/` 12 篇。
6. Wave 6：`01-genomics/` 10 篇；`10-ChIP-CUTRUN/` 8 篇；`11-3D-genome/` 6 篇；`07-BCR-TCR/` 15 篇。
7. Wave 7：`12-proteomics/` 12 篇；`13-metabolomics/` 12 篇。
8. Wave 8：`14-microbiome/` 12 篇；`15-multiomics-integration/` 10 篇。

## v1.1 工作流覆盖

原 §9 工作流程已被 [[_meta/chapter-depth-expansion]] 替换。每个组学先生成五大板块章首，再写生物学篇、技术篇、分析篇、生物学解读篇。CNS / 高影响文献深读默认先列候选；若 Peter 授权 Codex 选择，则 Codex 直接按教学价值选 3 篇。

## 当前 Wave 1 队列

1. `_concepts/poisson-vs-negative-binomial`
2. `_concepts/glm-unified-view`
3. `_concepts/mixed-models-everywhere`
4. `_concepts/pca-svd-the-same-thing`
5. `_concepts/umap-tsne-what-they-preserve`
6. `_concepts/batch-effects-causes-and-cures`
7. `_concepts/multiple-testing-frameworks`
8. `_concepts/compositional-data-trap`
9. `_concepts/zero-inflation-vs-true-zero`
10. `_concepts/bayesian-vs-frequentist-omics`
