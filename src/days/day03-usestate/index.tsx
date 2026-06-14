import { useState } from "react";
// Day 3 — useState
// TODO: useState 基本用法、事件處理(onClick/onChange)、Counter / Toggle / Todo List
export default function Day03() {
  return (
    <section>
      <h1>Day 3 — useState</h1>
      <Counter />
      <Toggle />
      <TodoList />
    </section>
  );
}

function Counter() {
  // Use useState to replace pure variable. Then counter works
  // useState(0) mean the value initialized to 0. This method also include setter function
  // I call it pure function
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: "24px" }}>
      <p>狀態：{isOn ? "🟢 開啟" : "🔴 關閉"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "關閉" : "開啟"}
      </button>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(["買咖啡", "寫程式"]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;       // 空白不加入
    // Spread Operator flatten all array element and add new item to create a new array
    setTodos([...todos, input]);           // 加入新項目
    setInput("");                          // 清空輸入框
  }

  function handleDelete(index: number) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div style={{ padding: "24px", maxWidth: "400px" }}>
      <h2>Todo List</h2>

      {/* 輸入區 */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新增待辦事項"
        />
        <button onClick={handleAdd}>新增</button>
      </div>

      {/* 列表區 */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}