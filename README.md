# easymmlabc
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
