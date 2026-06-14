import type { ComponentType } from 'react'
import Day01 from './day01-jsx-components'
import Day02 from './day02-props-conditional'
import Day03 from './day03-usestate'
import Day04 from './day04-list-useeffect'
import Day05 from './day05-forms'
import Day06 from './day06-tailwindcss'
import Day07 from './day07-integration'
import Day08 from './day08-composition'
import Day09 from './day09-usecontext'
import Day10 from './day10-usereducer'
import Day11to12 from './day11-12-react-router'
import Day13 from './day13-custom-hooks'
import Day14 from './day14-integration-planning'
import Day15 from './day15-axios'
import Day16 from './day16-ui-components'
import Day17to18 from './day17-18-zustand'
import Day19 from './day19-react-query'
import Day20to21 from './day20-21-project'
import Day22to23 from './day22-23-typescript'
import Day24to26 from './day24-26-polish'
import Day27 from './day27-testing'
import Day28 from './day28-aws-deploy'
import Day29to30 from './day29-30-interview-prep'

// 集中登記每一天的展示頁。新增一天 = 建資料夾 + 在這裡加一行。
// Java 類比：像 @Configuration 的 bean 清單，集中管理進入點。
export interface DayEntry {
  id: string
  title: string
  Component: ComponentType
}

export const days: DayEntry[] = [
  { id: 'day01', title: 'Day 1 — JSX + Components', Component: Day01 },
  { id: 'day02', title: 'Day 2 — Props 型別 + 條件渲染', Component: Day02 },
  { id: 'day03', title: 'Day 3 — useState', Component: Day03 },
  { id: 'day04', title: 'Day 4 — List + useEffect', Component: Day04 },
  { id: 'day05', title: 'Day 5 — Form 處理', Component: Day05 },
  { id: 'day06', title: 'Day 6 — TailwindCSS', Component: Day06 },
  { id: 'day07', title: 'Day 7 — 整合日', Component: Day07 },
  { id: 'day08', title: 'Day 8 — Composition', Component: Day08 },
  { id: 'day09', title: 'Day 9 — useContext', Component: Day09 },
  { id: 'day10', title: 'Day 10 — useReducer', Component: Day10 },
  { id: 'day11-12', title: 'Day 11–12 — React Router', Component: Day11to12 },
  { id: 'day13', title: 'Day 13 — Custom Hooks', Component: Day13 },
  { id: 'day14', title: 'Day 14 — 整合 + 規劃', Component: Day14 },
  { id: 'day15', title: 'Day 15 — Axios 進階', Component: Day15 },
  { id: 'day16', title: 'Day 16 — UI 元件', Component: Day16 },
  { id: 'day17-18', title: 'Day 17–18 — Zustand', Component: Day17to18 },
  { id: 'day19', title: 'Day 19 — React Query', Component: Day19 },
  { id: 'day20-21', title: 'Day 20–21 — 專案開發', Component: Day20to21 },
  { id: 'day22-23', title: 'Day 22–23 — TypeScript', Component: Day22to23 },
  { id: 'day24-26', title: 'Day 24–26 — Polish', Component: Day24to26 },
  { id: 'day27', title: 'Day 27 — 測試入門', Component: Day27 },
  { id: 'day28', title: 'Day 28 — AWS 部署', Component: Day28 },
  { id: 'day29-30', title: 'Day 29–30 — 面試準備', Component: Day29to30 },
]
