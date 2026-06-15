# React 一個月學習路線圖
> 目標：後端工程師（Java / Spring Boot）→ 全端工程師面試準備  
> 條件：每天 3–4 小時，每天 GitHub commit  
> 面試時程：2–3 個月後

---

## Week 1 — React 核心語法

### Day 1 — 環境設置 + JSX 初體驗
- 安裝 Node.js 20 LTS
- 建立專案：`npm create vite@latest react-playground -- --template react-ts`
- 理解 JSX：瀏覽器看不懂 JSX，Vite 在 build time 編譯成純 JS
- 建立第一個 Component（`Greeting`、`UserCard`）
- **Java 類比**：Component ≈ 回傳 UI 的 method，Props ≈ Constructor 參數

### Day 2 — Props + TypeScript 型別
- Props 加上 TypeScript `interface` 定義型別
- 條件渲染：`{isActive && <Badge />}` 和三元運算子
- `children` prop：讓 component 包裹其他內容
- **Java 類比**：Props interface ≈ DTO，`?` 選用屬性 ≈ `@Nullable`

### Day 3 — useState
- `useState` 基本用法
- 為什麼不能直接改變數：React 需要透過 setter 才知道重新渲染
- 事件處理：`onClick`、`onChange`
- 實作：Counter、Toggle、Todo List
- **Java 類比**：`setState` ≈ JPA dirty checking，只能透過 setter 改值

### Day 4 — List Rendering + useEffect
- `array.map()` 渲染列表，`key` 要用唯一 id（不用 index）
- `useEffect` dependency array：`[]` 只跑一次，`[value]` 監聽值改變
- 串接公開 API，加上 Loading / Error 狀態
- **Java 類比**：`useEffect(fn, [])` ≈ `@PostConstruct`，cleanup ≈ `@PreDestroy`

### Day 5 — Form 處理
- Controlled component：input 值永遠來自 state
- `onSubmit` + `e.preventDefault()`
- 表單驗證：Email 格式、密碼長度、錯誤訊息顯示
- **Java 類比**：Controlled component ≈ Spring MVC Model Binding
- setInterval and cleanup in useEffect

### Day 6 — TailwindCSS
- 安裝與設定
- 核心 utility class：`flex`、`grid`、`p-4`、`rounded-lg`、`hover:`
- 重新設計 UserCard 和登入表單

### Day 7 — 整合日
- 整合所有元件，整理 folder structure（`components/`、`types/`）
- 寫 README
- Week 1 自我檢查：能解釋 Component / Props / State 的差別

---

## Week 2 — 進階 Hooks + React Router

### Day 8 — Component Composition
- `children` prop 進階應用
- Layout component 設計
- 理解 component 樹狀結構

### Day 9 — useContext
- 解決 props drilling 問題
- 建立 `AuthContext`、`ThemeContext`
- **Java 類比**：Context ≈ Spring 的 ApplicationContext，全域共享狀態

### Day 10 — useReducer
- 管理複雜的 state 邏輯
- `reducer` 函式：接收 action，回傳新 state
- 實作購物車 Reducer
- **Java 類比**：reducer ≈ Command Pattern

### Day 11–12 — React Router v6
- `BrowserRouter`、`Routes`、`Route`
- `useNavigate`、`useParams`
- 巢狀路由、Protected Route（需登入才能進入）
- 實作多頁面 SPA

### Day 13 — Custom Hooks
- 把重複邏輯抽成 `useXxx` 函式
- 實作 `useFetch`、`useLocalStorage`、`useDebounce`
- **Java 類比**：Custom Hook ≈ 抽成 Service 層的邏輯

### Day 14 — 整合日 + 專案規劃
- 整合本週所有功能
- 開始規劃個人專案：DB schema、API 設計、頁面結構

---

## Week 3 — 後端工程師必知的生態系

### Day 15 — Axios 進階
- 建立 `axios instance`，統一設定 baseURL、header
- Request / Response interceptor：自動帶 JWT token、攔截 401
- Loading / Error 統一處理模式
- **Java 類比**：Axios interceptor ≈ Spring `HandlerInterceptor`

### Day 16 — TailwindCSS 進階 + UI 元件
- RWD：`sm:`、`md:`、`lg:` 斷點
- 常用 UI 模式：Modal、Dropdown、Toast notification
- 重構整體 UI

### Day 17–18 — Zustand（狀態管理）
- 為什麼不用 Redux：太重，面試不強求
- Zustand 基本用法：`create`、`store`、`selector`
- 取代 `useContext` 管理全域狀態
- **Java 類比**：Zustand store ≈ Spring Singleton Bean

### Day 19 — React Query
- Server state vs Client state 的區別
- `useQuery`：自動 fetch、caching、refetch
- `useMutation`：POST / PUT / DELETE + 自動 invalidate cache
- **Java 類比**：React Query ≈ Spring Cache + 自動失效機制

### Day 20–21 — 專案開發
- 後端 API 串接（自己的 Spring Boot 後端）
- JWT 登入流程完整實作
- CRUD 核心功能完成

---

## Week 4 — 專案收尾 + 部署 + 面試準備

### Day 22–23 — TypeScript 加深
- Generic type 在 React 中的應用
- API response 型別定義
- `as const`、`union type`、`utility types`（`Partial`、`Pick`、`Omit`）
- **Java 類比**：TypeScript Generic ≈ Java `<T>` 泛型，編譯後消失（type erasure）

### Day 24–26 — 專案 Polish
- Error Boundary：捕捉 component 錯誤
- Loading Skeleton UI
- 修 bug、優化效能（`useMemo`、`useCallback` 基礎）
- RWD 確認

### Day 27 — 測試入門
- Vitest + React Testing Library
- 寫 3–5 個 component test
- 測試 render、user interaction、API mock

### Day 28 — AWS 部署
- 前端：S3 static hosting + CloudFront CDN
- 後端：EC2 / ECS 或 Lambda + API Gateway
- 資料庫：RDS（PostgreSQL）
- CI/CD：GitHub Actions 自動部署

### Day 29–30 — 面試準備
- 整理 README：架構圖、功能截圖、部署連結、技術選型說明
- 準備技術問答：Virtual DOM、re-render 機制、useEffect dependency
- 準備「遇到問題 → 如何解決」的故事
- 確認 GitHub contribution graph 30 天全綠

---

## 技術選型總覽

| 分類 | 技術 |
|------|------|
| 框架 | React 18 + TypeScript |
| 建構工具 | Vite |
| 路由 | React Router v6 |
| 樣式 | TailwindCSS |
| 狀態管理 | Zustand |
| Server State | React Query |
| HTTP | Axios |
| 測試 | Vitest + React Testing Library |
| 後端 | Spring Boot（既有技能） |
| 部署 | AWS S3 + CloudFront + ECS + RDS |
| CI/CD | GitHub Actions |

---

## GitHub Commit 策略

```
feat:     新增功能
fix:      修正 bug
refactor: 重構（不改功能）
style:    UI / 樣式調整
docs:     README、註解
chore:    設定、依賴安裝
test:     新增測試
```

> 沒有新功能的日子：修一個 bug、補一個型別、加一行註解也算 commit。

---

## 面試核心定位

> **「能獨立交付從 React 前端到 AWS 部署的完整系統的工程師」**

面試必備的一句話：
> *"前端部署在 S3 + CloudFront，後端用 ECS，DB 用 RDS，透過 GitHub Actions 做 CI/CD，整套架構在 AWS 上跑。"*
