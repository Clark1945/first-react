// Day 5 — Form 處理

import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react"

// TODO: Controlled component、onSubmit + e.preventDefault()、表單驗證(Email/密碼/錯誤訊息)
export default function Day05() {
  return (
    <section>
      <h1>Day 5 — Form 處理</h1>
      <p>尚未開始 🚧</p>
      <NameTag />
      <LoginForm />
      <RegisterForm />
    </section>
  )
}

function NameTag() {
  const [name, setName] = useState('')

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  )
}

function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("Form submitted!");
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

type FormErrors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // 即時檢查兩次密碼是否一致（學習用：練習 useEffect 同步 state）
  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match!" }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  }, [formData]);

  // 統一處理所有 input 變化
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // 驗證邏輯
  function validate() {
    const newErrors: FormErrors = {};

    // Email 格式驗證
    if (!formData.email.includes("@")) {
      newErrors.email = "Email 格式不正確";
    }

    // 密碼長度驗證
    if (formData.password.length < 8) {
      newErrors.password = "密碼至少需要 8 個字元";
    }

    // 確認密碼驗證
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "兩次密碼不一致";
    }

    return newErrors;
  }

  // 送出處理
  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      // 有錯誤 → 顯示錯誤訊息
      setErrors(newErrors);
      return;
    }

    // 沒有錯誤 → 送出成功
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return <p style={{ color: "green" }}>✅ 註冊成功！</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", padding: "24px" }}>
      <h2>註冊帳號</h2>

      {/* Email */}
      <div style={{ marginBottom: "16px" }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px" }}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
        )}
      </div>

      {/* 密碼 */}
      <div style={{ marginBottom: "16px" }}>
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px" }}
        />
        {errors.password && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
        )}
      </div>

      {/* 確認密碼 */}
      <div style={{ marginBottom: "16px" }}>
        <label>確認密碼</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "8px" }}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</p>
        )}
      </div>

      <button type="submit">註冊</button>
    </form>
  );
}
