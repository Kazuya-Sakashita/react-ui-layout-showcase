import React, { useState } from "react"

const items = [
  { id: 1, title: "スライド 1", description: "シンプルなカルーセルの1枚目です。" },
  { id: 2, title: "スライド 2", description: "2枚目のスライドです。" },
  { id: 3, title: "スライド 3", description: "3枚目のスライドです。" },
]

export const BasicCarousel: React.FC = () => {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((current) => (current === 0 ? items.length - 1 : current - 1))
  }

  const next = () => {
    setIndex((current) => (current === items.length - 1 ? 0 : current + 1))
  }

  const currentItem = items[index]

  return (
    <div>
      <h3>Basic Carousel</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        左右ボタンでスライドするだけのシンプルなカルーセルです。
      </p>

      <div
        style={{
          borderRadius: 12,
          border: "1px solid #e2e8f0",
          padding: 16,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button onClick={prev} style={navButtonStyle}>
          {"<"}
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
            {currentItem.title}
          </div>
          <div style={{ fontSize: 13, color: "#4b5563" }}>
            {currentItem.description}
          </div>
        </div>
        <button onClick={next} style={navButtonStyle}>
          {">"}
        </button>
      </div>

      <div
        style={{
          marginTop: 8,
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {items.map((item, i) => (
          <span
            key={item.id}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: i === index ? "#3b82f6" : "#cbd5f5",
            }}
          />
        ))}
      </div>
    </div>
  )
}

const navButtonStyle: React.CSSProperties = {
  borderRadius: "50%",
  border: "none",
  width: 28,
  height: 28,
  cursor: "pointer",
  backgroundColor: "#eff6ff",
}
