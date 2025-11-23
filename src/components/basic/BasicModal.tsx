import React, { useState } from "react"

type BasicModalProps = {
  title: string
  children: React.ReactNode
  onClose: () => void
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(15, 23, 42, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
}

const modalStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: 12,
  padding: 20,
  minWidth: 280,
  maxWidth: 400,
  boxShadow: "0 20px 40px rgba(15, 23, 42, 0.2)",
}

export const BasicModalDemo: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h3>Basic Modal</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        ボタンをクリックすると中央にシンプルなモーダルを表示します。
      </p>

      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "6px 12px",
          borderRadius: 9999,
          border: "none",
          backgroundColor: "#3b82f6",
          color: "#ffffff",
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        モーダルを開く
      </button>

      {open && (
        <BasicModal
          title="シンプルモーダル"
          onClose={() => setOpen(false)}
        >
          <p style={{ fontSize: 14, marginBottom: 16 }}>
            これはとてもシンプルなモーダルです。
            背景をクリックすると閉じます。
          </p>
          <button
            onClick={() => setOpen(false)}
            style={{
              padding: "6px 12px",
              borderRadius: 9999,
              border: "none",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            閉じる
          </button>
        </BasicModal>
      )}
    </div>
  )
}

const BasicModal: React.FC<BasicModalProps> = ({ title, children, onClose }) => {
  const handleContentClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // モーダル内をクリックしても閉じないようにする
    e.stopPropagation()
  }

  return (
    <div
      style={overlayStyle}
      onClick={onClose} // 背景クリックで閉じる
    >
      <div onClick={handleContentClick} style={modalStyle}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          {title}
        </div>
        {children}
      </div>
    </div>
  )
}
