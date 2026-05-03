# Omics Study Book

面向生命科学学习和科研入门的组学教材型 GitHub Book。目标不是堆工具名，而是讲清每一种组学为什么要做、核心原理是什么、结果能解决什么生物学问题，以及高水平论文如何把组学结果变成机制解释。

## 在线阅读

https://petemeng.github.io/Omics-Study-Book/

## 内容范围

本书目前覆盖：

- 入门框架：组学全景、实验设计、批次效应、测序基础与 QC
- 分子表型组学：bulk RNA-seq、单细胞转录组、空间转录组、ATAC-seq、DNA 甲基化
- 免疫与微生态：BCR/TCR 免疫组库、微生物组与宏基因组
- 遗传变异与数量性状：GWAS、eQTL 与多组学关联
- 功能层与整合：蛋白质组、代谢组、多组学整合路线图
- 案例深读：按 RNA-seq、单细胞、空间、ATAC、甲基化、GWAS、免疫组库、微生物组、蛋白质组和多组学拆解 CNS/高影响论文
- 附录：术语表、学习路线、工具与公共数据资源、推荐阅读

## 适合谁读

- 需要系统补齐组学概念地图的生命科学研究者
- 会跑流程、但想理解“为什么这么分析”的学生和科研人员
- 想从 RNA-seq / 单细胞扩展到 GWAS、表观组、微生物组和多组学整合的人

## 本地预览

先安装依赖：

```powershell
pip install "mkdocs<2" "mkdocs-material>=9,<10"
```

启动预览：

```powershell
$env:PYTHONIOENCODING='utf-8'; python -m mkdocs serve
```

构建静态网站：

```powershell
$env:PYTHONIOENCODING='utf-8'; python -m mkdocs build --strict
```

## 发布到 GitHub Pages

仓库已经包含 `.github/workflows/deploy.yml`。推送到 `main` 或 `master` 后会自动构建并发布到 GitHub Pages。

## 目录说明

- `docs/`: 成书正文，供 MkDocs 构建。
- `Templates/`: 概念卡片和文献笔记模板。
- `素材库/`: 后续整理概念、学习笔记和分析方法。
- `mkdocs.yml`: 站点配置和导航。

## 维护方式

正文按章节放在 `docs/` 下。新增章节后需要同步更新 `mkdocs.yml` 的 `nav`，推送后 GitHub Actions 会自动发布网页。
