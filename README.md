# Omics Study Book

一本面向生命科学学习和科研入门的组学教材型 GitHub Book。内容覆盖转录组、单细胞、空间转录组、BCR/TCR 免疫组库、ATAC-seq、DNA 甲基化、微生物组、GWAS、eQTL、蛋白质组、代谢组和多组学整合。

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

仓库已经包含 `.github/workflows/deploy.yml`。推送到 `main` 或 `master` 后，在 GitHub 仓库的 `Settings -> Pages` 中把 Source 设置为 `GitHub Actions`。

## 目录说明

- `docs/`: 成书正文，供 MkDocs 构建。
- `Templates/`: 概念卡片和文献笔记模板。
- `素材库/`: 后续整理概念、学习笔记和分析方法。
- `mkdocs.yml`: 站点配置和导航。
