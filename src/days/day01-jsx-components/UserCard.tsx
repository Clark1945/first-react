interface UserCardProps {
  name: string
  role: string
  isActive: boolean
}

// 三元運算子做條件渲染：依 isActive 顯示不同文字
export function UserCard({ name, role, isActive }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Role: {role} {isActive ? '(Active)' : '(Inactive)'}</p>
    </div>
  )
}
