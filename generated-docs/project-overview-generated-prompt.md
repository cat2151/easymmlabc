Last updated: 2025-12-02


# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```


以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: 
説明: # easymmlabc
A library for using [mml2abc](https://github.com/cat2151/mml2abc/) and abcjs easily in the browser.

# Demo
https://cat2151.github.io/easymmlabc/

## Demoの遊び方
- テンプレートをドロップダウンリストから選びます。
    - 五線譜が表示されたことを確認します。
    - 音が出たことを確認します。
- textareaに、MML文字列を書きます。
    - 五線譜が表示されたことを確認します。
    - 音が出たことを確認します。

# Features
- ブラウザでMMLをeasyに使える Wrapper library
    - [abcjs](https://github.com/paulrosen/abcjs)を利用しています
        - abcjsは、ブラウザで五線譜を描画しつつSoundFont GM音源ソフトシンセを鳴らすライブラリです
- MMLのテンプレートをドロップダウンリストから選んで、楽に演奏
- 用途は？
    - easymmlabcを使うことで、以下の実現を目指しています。
        - webで MML を楽に使う用。
        - webで五線譜表示と演奏を楽に行う用。
            - それを利用し、
            - [chord2mml](https://github.com/cat2151/chord2mml/)と組み合わせてコード進行を演奏する等、
            - いろいろなフォーマットのテキスト音楽データについても
            - 五線譜表示や演奏のチャンスを増やす用。

# Requirement
- `index.html` をちょっと書けば音が鳴ります

# Usage / Installation
- `index.html`を参考に、`html`を書いてください。
- `js`を配置してください。または`CDN`から参照するように`html`を書いてください。

# Note
## デフォルトではどう動作するの？ & どうカスタマイズするの？
- [easyabcjs6](https://github.com/cat2151/easyabcjs6/)と類似しているので、ひとまずそちらを参照ください。

## このprojectが優先すること
- Demoのpageを開いてキーボードのCキーを押すだけで音が出ること。
- MMLのテンプレートをドロップダウンリストから選ぶだけで音が出ること。


依存関係:
{}

## ファイル階層ツリー
📄 LICENSE
📖 README.md
📄 _config.yml
📜 easymmlabc.js
📁 generated-docs/
🌐 googled947dc864c270e07.html
🌐 index.html
📜 mmlTemplates.js

## ファイル詳細分析
**easymmlabc.js** (108行, 2932バイト)
  - 関数: setupSelect, addOptionToSelect, removeIndent, setupKeyBind, getLastNotePos, findLastMatchPos, function, for, addEventListener, if, catch
  - インポート: なし

**googled947dc864c270e07.html** (1行, 53バイト)
  - 関数: なし
  - インポート: なし

**index.html** (27行, 1043バイト)
  - 関数: なし
  - インポート: なし

**mmlTemplates.js** (202行, 7705バイト)
  - 関数: なし
  - インポート: なし

## 関数呼び出し階層
- for (easymmlabc.js)
  - setupSelect (easymmlabc.js)
    - addOptionToSelect ()
      - removeIndent ()
      - setupKeyBind ()
      - getLastNotePos ()
      - findLastMatchPos ()
      - function ()
      - addEventListener ()
- if (easymmlabc.js)
- catch (easymmlabc.js)


## プロジェクト構造（ファイル一覧）
README.md
easymmlabc.js
googled947dc864c270e07.html
index.html
mmlTemplates.js

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく


---
Generated at: 2025-12-02 07:06:13 JST
