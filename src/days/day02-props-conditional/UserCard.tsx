import { Badge } from './Badge'

interface UserCardProps {
  name: string
  role: string
  isActive: boolean
}

// Day 2 版 UserCard：同時示範三元 + && 短路兩種條件渲染
export function UserCard({ name, role, isActive }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Role: {role} {isActive ? '(Active)' : '(Inactive)'}</p>
      {/* && 短路渲染：isActive 為 true 才顯示 Badge，false 則整個不渲染 */}
      {isActive && <Badge color="green" label="Active" />}
    </div>
  )
}
