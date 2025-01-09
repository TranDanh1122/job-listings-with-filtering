import './App.css'
import React from 'react'
import { AppContext } from './AppContext'
import JobItem from './components/JobItem'
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
  if (loading) return <p>Loading...</p>
  return (
    <>

      <header className='bg-contain bg-top bg-fixed bg-dark_cyan bg-[url(./assets/images/bg-header-desktop.svg)] mb:bg-[url(./assets/images/bg-header-mobile.svg)] w-full h-[150px] bg-no-repeat'></header>
      <div className='container mb:max-w-none  flex flex-col gap-6 mt-20'>
        {
          state.filteredData.map(el => <JobItem key={el.id} job={el} />)
        }
      </div>
    </>
  )
}

export default App
