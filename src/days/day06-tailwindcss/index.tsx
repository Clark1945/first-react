// Day 6 — TailwindCSS
// TODO: 安裝設定、utility class(flex/grid/p-4/rounded-lg/hover:)、重新設計 UserCard 與登入表單
export default function Day06() {
  return (
    <section>
      <h1>Day 6 — TailwindCSS</h1>
      <LoginForm />
    </section>
  )
}

import { useState, type ChangeEvent, type SyntheticEvent } from "react";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("請填寫所有欄位");
      return;
    }
    setError("");
    alert("登入成功！");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        {/* 標題 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">歡迎回來</h1>
        <p className="text-gray-500 text-sm mb-8">請登入你的帳號</p>

        {/* 錯誤訊息 */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="clark@vaidio.ai"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* 密碼 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              密碼
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* 送出按鈕 */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  );
}
