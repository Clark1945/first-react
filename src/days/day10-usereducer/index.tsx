// Day 10 — useReducer
// 管理複雜 state 邏輯：把「怎麼改 state」集中到一個 reducer 函式
// Java 類比：
//   - action     ≈ Command 物件（封裝「要做什麼」+ 參數）
//   - reducer    ≈ Command Pattern 的 invoker / handler（依 action.type 決定行為）
//   - dispatch   ≈ 送出一個 Command 去執行
//   - 純函式特性 ≈ 不可變物件，回傳新 state 而非原地修改

import { useReducer } from "react";

// ---- 商品 / 購物車項目型別 ----
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  qty: number;
}

type CartState = CartItem[];

// ---- Action 型別（discriminated union）----
// 每個 action 就是一個 Command：type 是指令名稱，其餘是參數
type CartAction =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: number }
  | { type: "INCREMENT"; id: number }
  | { type: "DECREMENT"; id: number }
  | { type: "CLEAR" };

// ---- reducer：(舊 state, action) => 新 state ----
// 必須是純函式：不改參數、不做 side effect、相同輸入永遠相同輸出
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((item) => item.id === action.product.id);
      if (existing) {
        // 已存在 → 數量 +1（回傳新陣列，不原地修改）
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.product, qty: 1 }];
    }
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );
    case "DECREMENT":
      // 數量降到 0 就移除
      return state
        .map((item) =>
          item.id === action.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

// ---- 假商品清單 ----
const PRODUCTS: Product[] = [
  { id: 1, name: "機械鍵盤", price: 2890 },
  { id: 2, name: "人體工學滑鼠", price: 1290 },
  { id: 3, name: "27 吋螢幕", price: 6990 },
  { id: 4, name: "USB-C Hub", price: 990 },
];

export default function Day10() {
  // useReducer(reducer, 初始 state) → [目前 state, dispatch]
  const [cart, dispatch] = useReducer(cartReducer, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">
        Day 10 — useReducer
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        購物車 Reducer：所有 state 變更都透過 dispatch(action) 集中處理
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 商品清單 */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">商品</h2>
          <ul className="flex flex-col gap-3">
            {PRODUCTS.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3"
              >
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    NT$ {product.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => dispatch({ type: "ADD", product })}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                >
                  加入
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 購物車 */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              購物車（{totalCount}）
            </h2>
            {cart.length > 0 && (
              <button
                onClick={() => dispatch({ type: "CLEAR" })}
                className="text-sm text-red-500 hover:text-red-600"
              >
                清空
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm py-8 text-center">
              購物車是空的 🛒
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      NT$ {(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREMENT", id: item.id })
                      }
                      className="w-7 h-7 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREMENT", id: item.id })
                      }
                      className="w-7 h-7 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                      className="ml-1 text-gray-300 hover:text-red-500"
                      aria-label="移除"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <div className="border-t border-gray-100 mt-4 pt-4 flex items-center justify-between">
              <span className="font-medium text-gray-700">總計</span>
              <span className="text-lg font-bold text-blue-600">
                NT$ {total.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
