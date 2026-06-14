import { Card } from './Card'
import { UserCard } from './UserCard'

// Day 2：Props 型別（interface + union type）+ 條件渲染（三元 vs && 短路）+ children
// Java 類比：Props interface ≈ DTO，? 選用屬性 ≈ @Nullable
export default function Day02() {
  return (
    <section>
      <h1>Day 2 — Props 型別 + 條件渲染</h1>
      <p>重點：interface 定義 Props、union type、三元 vs && 短路、children。</p>

      <UserCard name="Bob" role="Engineer" isActive={true} />
      <UserCard name="Eve" role="Hacker" isActive={false} />

      {/* children prop：Card 包住任意子內容 */}
      <Card>
        <UserCard name="Dave" role="Manager" isActive={true} />
      </Card>
    </section>
  )
}
