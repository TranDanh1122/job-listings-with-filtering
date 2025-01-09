import React from "react";
import clsx from "clsx"
import Category from "./Category";
export default function JobItem({ job }: { job: Job }): React.JSX.Element {
    return (
        <div className={clsx("w-full shadow-md shadow-dark_cyan/50 bg-white flex items-center justify-start gap-6 px-10 py-8 rounded-md mb:flex-col mb:justify-start mb:items-start mb:relative", {
            "border-l-4 border-dark_cyan": job.featured
        })}>
            <img src={job.logo} alt={job.company} className='w-[5.5rem] h-[5.5rem] object-cover rounded-full mb:absolute mb:w-12 mb:h-12 mb:top-0 mb:left-8 mb:translate-y-[-50%]' />
            <div className='flex flex-col gap-2'>
                <div className='text-white flex gap-4 items-center justify-start'>
                    <h3 className='text-dark_cyan font-bold text-[1.125rem]'>{job.company}</h3>
                    <span className={clsx('bg-dark_cyan uppercase px-2 font-bold py-1 rounded-2xl', {
                        "hidden": !job.new
                    })}>new!</span>
                    <span className={clsx('bg-very_dark_grayish_cyan uppercase px-2 font-bold py-1 rounded-2xl', {
                        "hidden": !job.featured
                    })}>FEATURED</span>
                </div>
                <h2 className="font-bold text-[1.5rem] leading-6 text-very_dark_grayish_cyan  cursor-pointer">{job.position}</h2>
                <div className='flex items-center justify-between gap-4'>
                    <span className='text-dark_grayish_cyan text-[1.125rem] leading-6 tracking-[-0.14px]'>{job.postedAt}</span>
                    <span className='w-[5px] h-[5px] bg-dark_grayish_cyan rounded-full'></span>
                    <span className='text-dark_grayish_cyan text-[1.125rem] leading-6 tracking-[-0.14px]'>{job.contract}</span>
                    <span className='w-[5px] h-[5px] bg-dark_grayish_cyan rounded-full'></span>
                    <span className='text-dark_grayish_cyan text-[1.125rem] leading-6 tracking-[-0.14px]'>{job.location}</span>
                </div>
            </div>
            <div className='ml-auto flex flex-wrap gap-4 items-center justify-start'>
                <Category text={job.role} />
                <Category text={job.level} />
                {
                    job.languages.map(el => <Category text={el} />)
                }
                {
                    job.tools.map(el => <Category text={el} />)

                }
            </div>
        </div>
    )
}