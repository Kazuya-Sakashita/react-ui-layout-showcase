import React, { useState } from "react"

export const BasicSlider: React.FC = () => {
  const [value, setValue] = useState(40)

  return (
    <div>
      <h3>Basic Slider</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        input type="range" を使ったシンプルなスライダーです。
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div style={{ fontSize: 14 }}>現在値: {value}</div>
      </div>
    </div>
  )
}
