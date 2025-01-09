import React from "react";
type AppAction = { type: "INIT", payload: Job[] }
    | { type: "CLEAR" }
    | { type: "APPLY_FILTER", filter: string }
type AppState = {
    data: Job[],
    filteredData: Job[],
    filter: string[]
}
const initData: AppState = { data: [], filteredData: [] }
const appReducer = (data: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "INIT": {
            if (!action.payload) return data
            return { ...data, data: action.payload, filteredData: action.payload }
        }
        case "APPLY_FILTER":
            return data;
        default:
            return data;
    }
}
export const AppContext = React.createContext<{ state: AppState, dispatch: React.Dispatch<AppAction> }>({ state: {} as AppState, dispatch: () => { } });

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(appReducer, initData)
    return (
        <AppContext.Provider value={{ state, dispatch }}> {children}</AppContext.Provider>
    )
} 