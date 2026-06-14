import { useState } from 'react'
import { days } from './days/registry'
import './App.css'

// 首頁：左側選單切換每一天的練習。
// 現在用 useState 手刻；Day 11 學會 React Router 後會升級成路由。
function App() {
  const [activeId, setActiveId] = useState(days[0].id)
  const active = days.find((d) => d.id === activeId) ?? days[0]
  const ActiveDay = active.Component

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ width: 240, borderRight: '1px solid #e5e7eb', padding: 16 }}>
        <h2 style={{ fontSize: 16, marginTop: 0 }}>React 30 天</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {days.map((day) => {
            const isActive = day.id === activeId
            return (
              <li key={day.id}>
                <button
                  onClick={() => setActiveId(day.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 10px',
                    marginBottom: 4,
                    border: 'none',
                    borderRadius: 6,
                    cursor: 'pointer',
                    background: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? 'white' : '#111',
                  }}
                >
                  {day.title}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <main style={{ flex: 1, padding: 24 }}>
        <ActiveDay />
      </main>
    </div>
  )
}

export default App
