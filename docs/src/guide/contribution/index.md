# 贡献指南

## 介绍

感谢你使用 IBest-UI。

以下是关于向 IBest-UI 提交反馈或代码的指南。在向 IBest-UI 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下内容。

## Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。

## 参与开发

待补充...

## 代码规范

在编写代码时，请注意：

- 确保代码可以通过的 鸿蒙编辑器及仓库的 TSLint 校验。
- 确保代码格式是规范的，使用 鸿蒙编辑器 进行代码格式化。

## 提交 Pull Request

### 参考指南

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md)
- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

### Pull Request 规范

在提交 Pull Request 时，请注意：

- 保持你的 PR 足够小，一个 PR 只解决单个问题或添加单个功能。
- 当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。
- 在 PR 中请添加合适的描述，并关联相关的 Issue。

### Pull Request 流程

- fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码。
- 基于 fork 后仓库的 main 分支新建一个分支，比如 feature/button_color。
- 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 main 分支。
- Pull Request 会在 Review 通过后被合并到主仓库。
- 等待 IBEST-UI 发布新版本。

### Pull Request 标题格式

Pull Request 的标题应该遵循以下格式：

```shell
type(ComponentName?)：commit message
```

示例

- docs: fix typo in quickstart
- build: optimize build speed
- fix(Button): incorrect style
- feat(Button): add color prop

可选的类型：

- fix
- feat
- docs
- perf
- test
- types
- style
- build
- chore
- release
- refactor
- breaking change
- revert:

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```shell
# 添加主仓库到 remote
git remote add

# 拉取主仓库最新代码
git fetch

# 切换至 main 分支
git checkout main

# 合并主仓库代码
git merge
```
