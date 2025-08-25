# Ch1nyzzz's Personal Website & Blog

这是我的个人网站和博客仓库。

## 如何写新博客

### 方式一：使用 Jekyll（推荐）

1. 在 `_posts` 目录下创建新文件
2. 文件命名格式：`YYYY-MM-DD-title.md`（例如：`2025-01-25-my-first-post.md`）
3. 在文件开头添加 Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: 2025-01-25
categories: tech  # 可选：tech, life, thinking
---
```

4. 用 Markdown 格式写文章内容
5. 提交并推送到 GitHub：

```bash
git add .
git commit -m "Add new blog post: 文章标题"
git push origin main
```

### 方式二：直接编辑 HTML

1. 编辑 `blog.html` 文件
2. 在 `<div class="blog-posts">` 中添加新的文章卡片
3. 创建对应的文章详情页（可选）

### 方式三：使用在线编辑器

1. 直接在 GitHub 网页上点击 "Add file" → "Create new file"
2. 在 `_posts/` 目录下创建新文件
3. 编写内容后直接提交

## 本地预览

如果想在本地预览博客：

```bash
# 安装 Jekyll（首次）
gem install jekyll bundler

# 本地运行
jekyll serve

# 访问 http://localhost:4000
```

## 目录结构

```
.
├── index.html          # 主页
├── blog.html          # 博客列表页
├── style.css          # 主页样式
├── blog-style.css     # 博客样式
├── _posts/            # 博客文章目录（Jekyll）
│   └── YYYY-MM-DD-title.md
└── _config.yml        # Jekyll 配置
```

## 提交新文章

```bash
# 1. 创建新文章
# 在 _posts 目录下创建 2025-01-26-my-new-post.md

# 2. 添加到 Git
git add _posts/2025-01-26-my-new-post.md

# 3. 提交
git commit -m "发布新文章：文章标题"

# 4. 推送到 GitHub
git push origin main

# 等待几分钟后，文章就会出现在网站上
```