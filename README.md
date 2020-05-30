# NgStorybook

## 概要

- Angular + Storybook のサンプルです。
- `@storybook/addon-actions` を使用しています。

## 実行環境

- Node.js - 12.x
- Yarn - 1.17.x

## 使用ライブラリ

- Angular - 9.1.x
- @storybook/angular - 5.3.x
- @storybook/addon-actions - 5.3.x

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone https://github.com/yasu-s/ng-storybook-sample.git
```

### 2. ブランチ切り替え

```bash
cd ng-storybook-sample
git checkout develop/actions
```

### 3. パッケージインストール

```bash
yarn
```

### 4. サンプルの起動

```bash
yarn storybook
```

## 実行確認

- http://localhost:8080/

![storybook-actions](https://user-images.githubusercontent.com/2668146/83319630-2db90a00-a27b-11ea-9199-20ca4fafc154.gif)

## 参考URL

- https://storybook.js.org/docs/guides/guide-angular/
- https://github.com/storybookjs/storybook/tree/master/examples/angular-cli
