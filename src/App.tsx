import './App.css'
import React from 'react'
import { AppContext } from './AppContext'
import JobItem from './components/JobItem'
import Category from './components/Category'
function App() {
  const { state, dispatch } = React.useContext(AppContext)
  const [loading, setLoading] = React.useState<boolean>(true)
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("./data.json")
        const data = await response.json() as Job[]
        dispatch({ type: "INIT", payload: data })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])
  React.useEffect(() => {    
    dispatch({ type: "APPLY_FILTER" })
  }, [state.filter])
  const handleClear = () => {
    dispatch({ type: "CLEAR" })
  }
  if (loading) return <p>Loading...</p>
  return (
    <>
      <header className='bg-contain bg-top bg-fixed bg-dark_cyan bg-[url(./assets/images/bg-header-desktop.svg)] mb:bg-[url(./assets/images/bg-header-mobile.svg)] w-full h-[150px] bg-no-repeat'></header>
      {
        (state.filter.length > 0) ?
          <div className='container mb:max-w-none bg-white py-5 px-10 flex items-center translate-y-[-50%]'>
            <div className='flex flex-wrap gap-6 gap-y-4'>

              {state.filter.map((el, index) => <Category text={el} key={index} isFilter={true} />)}
            </div>
            <span onClick={() => handleClear()} className='uppercase text-dark_cyan leading-6 tracking-[-0.12px] font-bold hover:underline ml-auto cursor-pointer'>clear</span>
          </div>
          : ""
      }


      <div className='container mb:max-w-none  flex flex-col gap-6 mb:gap-10 mt-20'>
        {
          state.filteredData.map(el => <JobItem key={el.id} job={el} />)
        }
      </div>
    </>
  )
}

export default App
