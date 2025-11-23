import React, { useState } from "react"

type Item = {
  id: number
  question: string
  answer: string
}

const items: Item[] = [
  {
    id: 1,
    question: "Q1. このアプリは無料ですか？",
    answer: "はい、学習用途の個人利用であれば無料です。",
  },
  {
    id: 2,
    question: "Q2. 商用利用はできますか？",
    answer: "商用利用の場合は、別途ライセンス契約が必要です。",
  },
  {
    id: 3,
    question: "Q3. スマホでも使えますか？",
    answer: "はい、レスポンシブデザインに対応しています。",
  },
]

export const BasicAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div>
      <h3>Basic Accordion</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        FAQ によくある単一オープンのアコーディオンです。
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => {
          const isOpen = openId === item.id
          return (
            <div
              key={item.id}
              style={{
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggle(item.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "8px 12px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <span>{item.question}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div
                  style={{
                    borderTop: "1px solid #e2e8f0",
                    padding: "8px 12px",
                    fontSize: 13,
                    color: "#4b5563",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
