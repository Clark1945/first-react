import './App.css'

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" />
      <UserCard name="Bob" job="Engineer" email="bob@example.com" />
      <UserCard name="Eve" job="Hacker" email="eve@example.com" />
      <UserCard name="Charlie" job="Designer" email="charlie@example.com" />
    </div>
  )
}

function Greeting(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>
}

function UserCard(props: { name: string; job: string; email: string }) {
  return (
    <span className="user-card">
      <h2>{props.name}</h2>
      <p>Job: {props.job} Email: {props.email}</p>
    </span>
  )
}

export default App

