import React, { useState } from "react"

const tabs = [
  { id: "profile", label: "プロフィール", content: "プロフィール内容です。" },
  { id: "posts", label: "投稿", content: "投稿一覧をここに表示します。" },
  { id: "settings", label: "設定", content: "設定画面です。" },
]

export const BasicTabs: React.FC = () => {
  const [active, setActive] = useState("profile")

  const activeTab = tabs.find((tab) => tab.id === active)

  return (
    <div>
      <h3>Basic Tabs</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        タブをクリックすると表示領域の中身を切り替えるシンプルなタブです。
      </p>

      <div
        style={{
          display: "flex",
          gap: 8,
          borderBottom: "1px solid #e2e8f0",
          marginBottom: 12,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              border: "none",
              borderBottom:
                active === tab.id ? "2px solid #3b82f6" : "2px solid transparent",
              padding: "6px 12px",
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              color: active === tab.id ? "#0f172a" : "#64748b",
              fontWeight: active === tab.id ? 600 : 400,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        style={{
          padding: 12,
          borderRadius: 8,
          border: "1px solid #e2e8f0",
          backgroundColor: "#f8fafc",
          fontSize: 14,
        }}
      >
        {activeTab?.content}
      </div>
    </div>
  )
}
