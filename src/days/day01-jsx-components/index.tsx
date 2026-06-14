import { Greeting } from './Greeting'
import { UserCard } from './UserCard'

// Day 1：JSX 初體驗 + 第一個 Component + Props
// Java 類比：Component ≈ 回傳 UI 的 method，Props ≈ Constructor 參數
export default function Day01() {
  return (
    <section>
      <h1>Day 1 — JSX + Components</h1>
      <p>重點：Component ≈ 回傳 UI 的 method，Props ≈ Constructor 參數。</p>

      <Greeting name="Alice" role="Admin" />
      <UserCard name="Bob" role="Engineer" isActive={true} />
      <UserCard name="Eve" role="Hacker" isActive={false} />
      <UserCard name="Charlie" role="Designer" isActive={true} />
    </section>
  )
}
