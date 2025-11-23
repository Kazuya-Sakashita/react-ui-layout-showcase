# React UI Layout Showcase
**シンプル版とゴリゴリ版で UI コンポーネントを比較できるデモ集**

React × TypeScript で UI コンポーネントを
**最小構成（Basic）** と **実践的機能付き（Advanced）**
の 2 段階で比較できるサンプルプロジェクトです。

学習用・ブログ用・実務アイデア収集用として使えるテンプレです。

---

## 🎯 このサンプルの目的

- UI コンポーネントの「最小の書き方」と「現場寄りの書き方」を比較できる
- React 入門者にも読みやすい構成
- Qiita やブログ記事のコード例として使いやすい
- 自作 UI ライブラリの基盤にできる

---

## 📦 実装済みコンポーネント一覧

### ◎ Basic（シンプル版）
最低限のロジックで構成した学習用 UI。

- `BasicTable`
- `BasicModal`
- `BasicTabs`
- `BasicAccordion`
- `BasicCarousel`
- `BasicSlider`

### ◎ Advanced（ゴリゴリ版）
実務でよくある機能を追加した UI。

- `AdvancedTable`（ソート・フィルタ・ページネーション）
- `AdvancedModal`（Escape・ステップフォーム・ローディング）

---

## 📁 ディレクトリ構成
```
src/
components/
basic/
BasicTable.tsx
BasicModal.tsx
BasicTabs.tsx
BasicAccordion.tsx
BasicCarousel.tsx
BasicSlider.tsx
advanced/
AdvancedTable.tsx
AdvancedModal.tsx
App.tsx
main.tsx
index.css
```
## 🚀 セットアップ

```bash
npm create vite@latest react-ui-layout-showcase -- --template react-ts
cd react-ui-layout-showcase
npm install
npm run dev
```
アプリは http://localhost:5173
 で確認できます。

## 🧩 各コンポーネントの概要

以下では、それぞれの UI コンポーネントについて
**Basic（シンプル版）** と **Advanced（ゴリゴリ版）** の違いを比較できる形式でまとめています。

---

### 1. Table（テーブル）

#### ▶ BasicTable（シンプル版）
- プレーンな HTML `<table>`
- 配列 `.map` で行を描画
- 最低限の UI（交互色・ボーダー）

#### ▶ AdvancedTable（ゴリゴリ版）
- ソート機能（昇順 / 降順）
- 名前フィルタ（検索）
- ページネーション（前へ / 次へ）
- データ件数・現在ページ表示
- 実務寄りの高速テーブル構造

---

### 2. Modal（モーダル）

#### ▶ BasicModal（シンプル版）
- 中央配置のシンプルなモーダル
- 背景クリックで閉じる
- 親側で状態管理
- 最小構成の使いやすい UI

#### ▶ AdvancedModal（ゴリゴリ版）
- Escape キーで閉じる
- 2 ステップフォーム（Step1 → Step2）
- ローディング UI
- 成功メッセージ表示
- マウント / アンマウントで状態リセット

---

### 3. Tabs（タブ）

#### ▶ BasicTabs
- タブクリックでコンテンツを切り替え
- 選択中タブを下線強調
- 最小ロジックでタブ UI を実装

---

### 4. Accordion（アコーディオン）

#### ▶ BasicAccordion
- 見出しクリックで内容を開閉
- 単一オープン方式（1つだけ開く）
- FAQ に最適なシンプル構造

---

### 5. Carousel（カルーセル）

#### ▶ BasicCarousel
- 左右ボタンでスライド移動
- 現在インデックスのドット表示
- スワイプなしの軽量カルーセル

---

### 6. Slider（スライダー）

#### ▶ BasicSlider
- `input type="range"` を利用したシンプルなスライダー
- 現在値をそのまま表示
- カスタムスライダーの基礎として最適

---

## 📝 App.tsx の構成

UI コンポーネントは以下の順番で表示されます：

1. **Table（Basic / Advanced）**
2. **Modal（Basic / Advanced）**
3. **Tabs（Basic）**
4. **Accordion（Basic）**
5. **Carousel（Basic）**
6. **Slider（Basic）**

横並びで「シンプル版 vs ゴリゴリ版」が比較できるように
セクション単位で見やすく構成しています。
