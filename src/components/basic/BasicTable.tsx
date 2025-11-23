import type React from "react"

type User = {
  id: number
  name: string
  email: string
  role: string
}

const mockUsers: User[] = [
  { id: 1, name: "山田 太郎", email: "taro@example.com", role: "Admin" },
  { id: 2, name: "佐藤 花子", email: "hanako@example.com", role: "User" },
  { id: 3, name: "田中 次郎", email: "jiro@example.com", role: "Editor" },
]

export const BasicTable: React.FC = () => {
  return (
    <div>
      <h3>Basic Table</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        プレーンな HTML テーブルで配列データをそのまま表示するシンプル版です。
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>名前</th>
            <th style={thStyle}>メール</th>
            <th style={thStyle}>ロール</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user, index) => (
            <tr
              key={user.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc",
              }}
            >
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "8px 12px",
  borderBottom: "1px solid #e2e8f0",
  backgroundColor: "#f1f5f9",
}

const tdStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid #e2e8f0",
}
