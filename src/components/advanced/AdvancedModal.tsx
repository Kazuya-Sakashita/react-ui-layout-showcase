import React, { useEffect, useState } from "react"

type AdvancedModalProps = {
  onClose: () => void
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(15, 23, 42, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 50,
}

const modalStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: 16,
  padding: 20,
  minWidth: 320,
  maxWidth: 480,
  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.35)",
}

// デモ用ラッパーコンポーネント
export const AdvancedModalDemo: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h3>Advanced Modal</h3>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
        ステップ付きフォーム・ローディング・Escape キー対応などを入れたゴリゴリ版です。
      </p>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "6px 12px",
          borderRadius: 9999,
          border: "none",
          backgroundColor: "#a855f7",
          color: "#ffffff",
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        高機能モーダルを開く
      </button>

      {/* open が true のときだけ AdvancedModal をマウント */}
      {open && <AdvancedModal onClose={() => setOpen(false)} />}
    </div>
  )
}

const AdvancedModal: React.FC<AdvancedModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<1 | 2>(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // モーダルがマウントされている間だけ Escape キーを監視
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeydown)
    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [onClose])

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitted(false)
    // 疑似的な API 呼び出し
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div
      style={overlayStyle}
      onClick={() => {
        onClose()
      }}
    >
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 600 }}>
            ユーザー登録ウィザード
          </div>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "透明",
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>
          Step {step} / 2
        </div>

        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label style={labelStyle}>
              名前
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="山田 太郎"
                style={inputStyle}
              />
            </label>
            <button
              disabled={!name.trim()}
              onClick={() => setStep(2)}
              style={{
                ...primaryButtonStyle,
                opacity: name.trim() ? 1 : 0.5,
              }}
            >
              次へ
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label style={labelStyle}>
              メール
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                style={inputStyle}
              />
            </label>

            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button
                onClick={() => setStep(1)}
                style={secondaryButtonStyle}
                disabled={isSubmitting}
              >
                戻る
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  ...primaryButtonStyle,
                  opacity: email.trim() ? 1 : 0.5,
                }}
                disabled={!email.trim() || isSubmitting}
              >
                {isSubmitting ? "送信中..." : "登録する"}
              </button>
            </div>

            {submitted && (
              <div
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: "#16a34a",
                }}
              >
                登録が完了しました！
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  fontSize: 13,
}

const inputStyle: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid #cbd5f5",
  fontSize: 14,
}

const primaryButtonStyle: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 9999,
  border: "none",
  backgroundColor: "#4f46e5",
  color: "#ffffff",
  fontSize: 14,
  cursor: "pointer",
}

const secondaryButtonStyle: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 9999,
  border: "1px solid #cbd5f5",
  backgroundColor: "#ffffff",
  color: "#0f172a",
  fontSize: 14,
  cursor: "pointer",
}
