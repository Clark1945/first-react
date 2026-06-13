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

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" role="Admin" />
      <UserCard name="Bob" role="Engineer" isActive={true} />
      <UserCard name="Eve" role="Hacker" isActive={false} />
      <UserCard name="Charlie" role="Designer" isActive={true} />
    </div>
  )
}

export default App
