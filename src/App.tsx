import "./App.css"
import { BasicTable } from "./components/basic/BasicTable"
import { AdvancedTable } from "./components/advanced/AdvancedTable"
import { BasicModalDemo } from "./components/basic/BasicModal"
import { AdvancedModalDemo } from "./components/advanced/AdvancedModal"
import { BasicTabs } from "./components/basic/BasicTabs"
import { BasicAccordion } from "./components/basic/BasicAccordion"
import { BasicCarousel } from "./components/basic/BasicCarousel"
import { BasicSlider } from "./components/basic/BasicSlider"

function App() {
  return (
    <div>
      <h1 style={{ marginBottom: 16 }}>React UI コンポーネント・レイアウト集</h1>
      <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>
        シンプル版とゴリゴリ版のコンポーネントを並べて比較できるデモです。
      </p>

      {/* Table */}
      <section className="section">
        <div className="section-title">React Table</div>
        <div className="section-subtitle">
          シンプルなテーブルと、ソート・フィルタ付きの高機能テーブル。
        </div>
        <div className="row">
          <div className="column">
            <BasicTable />
          </div>
          <div className="column">
            <AdvancedTable />
          </div>
        </div>
      </section>

      {/* Modal */}
      <section className="section">
        <div className="section-title">React Modal</div>
        <div className="section-subtitle">
          確認用モーダルと、ステップ付きフォームモーダル。
        </div>
        <div className="row">
          <div className="column">
            <BasicModalDemo />
          </div>
          <div className="column">
            <AdvancedModalDemo />
          </div>
        </div>
      </section>

      {/* Tabs / Accordion */}
      <section className="section">
        <div className="section-title">React Tabs & Accordion</div>
        <div className="section-subtitle">
          コンテンツの切り替えや FAQ の開閉など、よく使う UI パターン。
        </div>
        <div className="row">
          <div className="column">
            <BasicTabs />
          </div>
          <div className="column">
            <BasicAccordion />
          </div>
        </div>
      </section>

      {/* Carousel / Slider */}
      <section className="section">
        <div className="section-title">React Carousel & Slider</div>
        <div className="section-subtitle">
          横スクロールと数値入力 UI のシンプルなサンプル。
        </div>
        <div className="row">
          <div className="column">
            <BasicCarousel />
          </div>
          <div className="column">
            <BasicSlider />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
