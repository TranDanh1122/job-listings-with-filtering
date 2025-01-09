import React from "react";
type AppAction = { type: "INIT", payload: Job[] }
    | { type: "CLEAR" }
    | { type: "ADD_FILTER", filter: string }
    | { type: "APPLY_FILTER" }
    | { type: "REMOVE_FILTER", filter: string }
type AppState = {
    data: Job[],
    filteredData: Job[],
    filter: string[]
}
const initData: AppState = { data: [], filteredData: [], filter: [] }
const appReducer = (data: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "INIT": {
            if (!action.payload) return data
            return { ...data, data: action.payload, filteredData: action.payload }
        }
        case "ADD_FILTER":
            if (data.filter.includes(action.filter)) return data
            return { ...data, filter: [...data.filter, action.filter] }

        case "APPLY_FILTER": {
            const newData = { ...data }
            if(newData.filter.length <= 0) return {...newData, filteredData: newData.data}
            newData.filteredData = newData.data.filter(item =>
                newData.filter.some(el =>
                    item.level == el ||
                    item.role == el ||
                    item.languages.includes(el) ||
                    item.tools.includes(el)
                )
            );            
            return newData;
        }
        case "REMOVE_FILTER": {
            const filter = data.filter.filter(el => el != action.filter)
            return { ...data, filter: filter };
        }
        case "CLEAR" : {
            return { ...data, filter: [] };
        }
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