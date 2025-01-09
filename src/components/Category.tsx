import React from "react";
import clsx from "clsx"
export default function Category({ text, isFilter }: { text: string, isFilter?: boolean }): React.JSX.Element {
    return (<>
        <div className="cursor-pointer flex">
            <span className='px-3 py-2 leading-6 font-bold tracking-[-0.12px] text-dark_cyan uppercase bg-grayish_cyan rounded-md hover:bg-dark_cyan hover:text-white'>
                {text}
            </span>

            <span className={clsx("p-2 flex items-center bg-dark_cyan hover:bg-very_dark_grayish_cyan translate-x-[-5px]", {
                "hidden": !isFilter
            })}>
                <i className="block w-3 h-3 bg-white" style={{ mask: "url(./assets/images/icon-remove.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-remove.svg) center / cover no-repeat" }}></i>
            </span>
        </div>
    </>)
}