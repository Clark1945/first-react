// Day 9 — useContext

import { createContext, useContext, useState } from "react";

// TODO: 解決 props drilling、建立 AuthContext / ThemeContext
const UserContext = createContext("");

export default function Day09() {
  const user = "小明";
  const user2 = "小華";

  return (
    <section>
      <h1>Day 9 — useContext</h1>
      <UserContext.Provider value={user2}>
        <SectionA user={user} />
      </UserContext.Provider>
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
    </section>
  )
}

function SectionA({ user }: { user: string }) {
  return (
    <SectionB user={user} />
  )
}

function SectionB({ user }: { user: string }) {
  return (
    <SectionC user={user} />
  )
}

function SectionC({ user }: { user: string }) {
  const user2 = useContext(UserContext);
  return (
    <p>Hello, {user} and {user2}!</p>
  )
}


type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light"); // "light" | "dark"

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "dark" ? "dark" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}

// 任何元件都可以切換主題
function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg border"
        >
            {theme === "light" ? "🌙 深色" : "☀️ 淺色"}
        </button>
    );
}