# easymmlabc
A library for using mml2abc and abcjs easily in the browser.

# Demo
https://cat2151.github.io/easymmlabc/

## Demoの遊び方
- textareaに、MML文字列を書きます。
- 五線譜が表示されたことを確認します。
- 音が出たことを確認します。

# Features
- ブラウザでMMLをeasyに使える Wrapper library
    - abcjsを利用しています
        - abcjsは、ブラウザで五線譜を描画しつつSoundFont GM音源ソフトシンセを鳴らすライブラリです
- 用途は？
    - easymmlabcを使うことで、以下の実現を目指しています。
        - webで MML を楽に使う用。
        - webで五線譜表示と演奏を楽に行う用。
            - それを利用し、
            - 今後、Chord notation 等、
            - いろいろなフォーマットのテキスト音楽データについても
            - 五線譜表示や演奏のチャンスを増やす用。

# Requirement
- `index.html` をちょっと書けば音が鳴ります

# Installation
- `index.html` を参考にコードを書けばOK。
    - `easymmlabc.js`は配置不要。CDNからの取得でOK。詳しくは `index.html` を参照ください。

# Usage
- `index.html` を参考にコードを書けばOK。

# Note
## デフォルトではどう動作するの？ & どうカスタマイズするの？
- easyabcjs6と類似しているので、ひとまずそちらを参照ください

## このprojectが優先すること
- Demoのpageを開いてキーボードのCキーを押すだけで音が出ること。
