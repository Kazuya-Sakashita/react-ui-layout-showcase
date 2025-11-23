import React, { useMemo, useState } from "react"

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
  { id: 4, name: "鈴木 三郎", email: "saburo@example.com", role: "User" },
  { id: 5, name: "高橋 四郎", email: "shiro@example.com", role: "Admin" },
  { id: 6, name: "近藤 五郎", email: "goro@example.com", role: "User" },
]

type SortKey = keyof User | null
type SortOrder = "asc" | "desc"

export const AdvancedTable: React.FC = () => {
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [filterName, setFilterName] = useState("")
  const [page, setPage] = useState(1)
  const pageSize = 3

  const filteredAndSorted = useMemo(() => {
    let data = [...mockUsers]

    // フィルタ（名前）
    if (filterName.trim() !== "") {
      const keyword = filterName.toLowerCase()
      data = data.filter((user) =>
        user.name.toLowerCase().includes(keyword)
      )
    }

    // ソート
    if (sortKey) {
      data.sort((a, b) => {
        const v1 = a[sortKey]
        const v2 = b[sortKey]
        if (v1 < v2) return sortOrder === "asc" ? -1 : 1
        if (v1 > v2) return sortOrder === "asc" ? 1 : -1
        return 0
      })
    }

    return data
  }, [filterName, sortKey, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / pageSize))
  const currentPage = Math.min(page, totalPages)

  const pageData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredAndSorted.slice(start, start + pageSize)
  }, [filteredAndSorted, currentPage])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortOrder("asc")
    }
  }

  const sortIndicator = (key: SortKey) => {
    if (sortKey !== key) return ""
    return sortOrder === "asc" ? " ▲" : " ▼"
  }

  return (
    <div>
      <h3>Advanced Table</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        フィルター・ソート・ページネーションを追加したゴリゴリ版テーブルです。
      </p>

      <div style={{ marginBottom: 12, display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="名前でフィルター"
          value={filterName}
          onChange={(e) => {
            setFilterName(e.target.value)
            setPage(1)
          }}
          style={{
            padding: "6px 10px",
            borderRadius: 8,
            border: "1px solid #cbd5f5",
            fontSize: 13,
            flex: 1,
          }}
        />
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr>
            <th style={thStyle} onClick={() => handleSort("id")}>
              ID{sortIndicator("id")}
            </th>
            <th style={thStyle} onClick={() => handleSort("name")}>
              名前{sortIndicator("name")}
            </th>
            <th style={thStyle} onClick={() => handleSort("email")}>
              メール{sortIndicator("email")}
            </th>
            <th style={thStyle} onClick={() => handleSort("role")}>
              ロール{sortIndicator("role")}
            </th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((user, index) => (
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
          {pageData.length === 0 && (
            <tr>
              <td style={tdStyle} colSpan={4}>
                データがありません
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        style={{
          marginTop: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
        }}
      >
        <span>
          {filteredAndSorted.length} 件 / {currentPage} / {totalPages} ページ
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={buttonStyle}
          >
            前へ
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            style={buttonStyle}
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  )
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "8px 12px",
  borderBottom: "1px solid #e2e8f0",
  backgroundColor: "#e5edff",
  cursor: "pointer",
  userSelect: "none",
}

const tdStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid #e2e8f0",
}

const buttonStyle: React.CSSProperties = {
  padding: "4px 10px",
  borderRadius: 9999,
  border: "1px solid #cbd5f5",
  backgroundColor: "#ffffff",
  cursor: "pointer",
}
