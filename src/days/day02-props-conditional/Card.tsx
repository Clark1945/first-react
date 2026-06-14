import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode // React 內建的特殊 prop，用來放子元件
}

// children prop：讓 Card 像容器一樣包住任意內容
export function Card({ children }: CardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, margin: '8px 0' }}>
      {children}
    </div>
  )
}
