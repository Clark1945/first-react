// Day 8 — Component Composition
// TODO: children prop 進階應用、Layout component 設計、理解 component 樹狀結構
export default function Day08() {
  return (
    <Layout>
      <section>
        <h1>Component Composition</h1>
        <Card>
          <h2 className="text-xl font-bold mb-4">Card Component</h2>
          <p>This is a reusable card component that can be used to wrap content.</p>
        </Card>
      </section>
    </Layout>
    
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
            {children}
        </div>
    );
}

// src/components/Layout.jsx
function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Navbar */}
            <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
                <div className="flex gap-6 text-sm text-gray-600">
                    <a href="/" className="hover:text-blue-500">首頁</a>
                    <a href="/users" className="hover:text-blue-500">用戶</a>
                    <a href="/settings" className="hover:text-blue-500">設定</a>
                </div>
            </nav>

            {/* 主內容區 — 每個頁面不同的部分 */}
            <main className="max-w-5xl mx-auto px-8 py-10">
                {children}
            </main>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-400 py-8">
                © 2025 MyApp
            </footer>
        </div>
    );
}