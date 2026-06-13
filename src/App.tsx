import './App.css'

interface GreetingProps {
  name: string
  role: string
}

function Greeting({ name, role }: GreetingProps) {
  return <h1>Hello {role}, {name}!</h1>
}

interface UserCardProps {
  name: string
  role: string
  isActive: boolean
}

function UserCard({ name, role, isActive }: UserCardProps) {
  return (
    <span className="user-card">
      <h2>{name}</h2>
      <p>Role: {role} {isActive ? '(Active)' : '(Inactive)'}</p>
    </span>
  )
}

type BadgeColor = 'green' | 'red' | 'gray'

interface BadgeProps {
  color: BadgeColor
  label: string
}

function Badge({ color, label }: BadgeProps) {
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
        borderRadius: '4px',
      }}
    >
      {label}
    </span>
  )
}

interface CardProps {
  children: React.ReactNode // React 內建的特殊 prop，用來放子元件
}

function Card({ children }: CardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" role="Admin" />
      <UserCard name="Bob" role="Engineer" isActive={true} />
      <UserCard name="Eve" role="Hacker" isActive={false} />
      <UserCard name="Charlie" role="Designer" isActive={true} />
      <Badge color="green" label="Active" />
      <Card>
        <UserCard name="Dave" role="Manager" isActive={true} />
      </Card>
    </div>
  )
}

export default App
