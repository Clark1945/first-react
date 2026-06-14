// Day 4 — List Rendering + useEffect
// TODO: array.map() + key(用唯一 id)、useEffect 依賴陣列、串接公開 API + Loading / Error
export default function Day04() {
  return (
    <section>
      <h1>Day 4 — useEffect</h1>
      <TodoListFromAPI />
      <UserProfile userId={1} />
    </section>
  )
}

import { useState, useEffect } from "react";

function TodoListFromAPI() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("API 請求失敗");
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] = 只在第一次渲染後打一次 API

  // Loading 狀態
  if (loading) return <p>載入中...</p>;

  // Error 狀態
  if (error) return <p style={{ color: "red" }}>錯誤：{error}</p>;

  // 資料渲染
  return (
    <div style={{ padding: "24px" }}>
      <h2>Todo List（來自 API）</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ color: todo.completed ? "gray" : "black" }}
          >
            {todo.completed ? "✅" : "⬜"} {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // userId 一變 → 重新 fetch

  if (loading) return <p>載入中...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}