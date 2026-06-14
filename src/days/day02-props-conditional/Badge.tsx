// union type：color 只能是這三種值之一（編譯期就擋掉打錯字）
export type BadgeColor = 'green' | 'red' | 'gray'

interface BadgeProps {
  color: BadgeColor
  label: string
}

export function Badge({ color, label }: BadgeProps) {
  const colorMap: Record<BadgeColor, string> = {
    green: '#22c55e',
    red: '#ef4444',
    gray: '#6b7280',
  }

  return (
    <span
      style={{
        backgroundColor: colorMap[color],
        color: 'white',
        padding: '2px 8px',
        borderRadius: 4,
      }}
    >
      {label}
    </span>
  )
}
