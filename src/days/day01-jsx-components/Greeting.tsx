interface GreetingProps {
  name: string
  role: string
}

// 最小的 Component：回傳一段 JSX，靠 props 客製內容
export function Greeting({ name, role }: GreetingProps) {
  return <h1>Hello {role}, {name}!</h1>
}
