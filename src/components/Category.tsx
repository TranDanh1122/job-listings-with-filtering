import React from "react";
import clsx from "clsx"
import { AppContext } from "../AppContext";
export default function Category({ text, isFilter }: { text: string, isFilter?: boolean }): React.JSX.Element {
    const { dispatch } = React.useContext(AppContext)
    const addFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        const filter = (e.target as HTMLSpanElement).textContent
        if (!filter) return
        dispatch({ type: "ADD_FILTER", filter: filter })
    }
    const removeFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        const filter = (e.target as HTMLSpanElement).dataset.filter
        if (!filter) return
        dispatch({ type: "REMOVE_FILTER", filter: filter })
    }
    return (<>
        <div className="cursor-pointer flex">
            <span onClick={(e) => addFilter(e)} className='px-3 py-2 leading-6 font-bold tracking-[-0.12px] text-dark_cyan uppercase bg-grayish_cyan rounded-md hover:bg-dark_cyan hover:text-white'>
                {text}
            </span>

            <span onClick={(e) => removeFilter(e)} data-filter={text} className={clsx("p-2 flex items-center bg-dark_cyan hover:bg-very_dark_grayish_cyan translate-x-[-5px]", {
                "hidden": !isFilter
            })}>
                <i onClick={(e) => removeFilter(e)}  data-filter={text} className="block w-3 h-3 bg-white" style={{ mask: "url(./assets/images/icon-remove.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-remove.svg) center / cover no-repeat" }}></i>
            </span>
        </div>
    </>)
}