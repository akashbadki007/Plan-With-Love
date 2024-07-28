import React, { useState } from 'react'
import Tour from "./Component/Tour"
import Data from "./Component/Data"

function App() {
  const [tour, setTour] = useState(Data)

  function tourRemoveHandler(id) {
    const newTour = tour.filter(tour => tour.id !== id)
    setTour(newTour)
  }

  function refreshHandler() {
    setTour(Data)
  }

  if(tour.length === 0) {
    return (
      <div className='w-full h-full py-[10px] flex flex-col justify-center items-center'>

        <div className='text-center py-4 text-[35px] font-bold mb-10'>
          <h1 className='heading'>Plan With Love</h1>
        </div>

        <div className='mt-10'>
          <h2 className='text-[30px] font-bold text-blue-900 mb-3'> No Tours Left</h2>
          <button 
           className='w-[150px] h-[40px] ml-5 text-[16px] bg-red-600 text-white font-bold hover:bg-blue-600' 
           onClick={refreshHandler}> 
           Refresh 
          </button>
        </div>

      </div>
    )
  }

  return (

    <div>
      <Tour tour={tour} tourRemoveHandler={tourRemoveHandler} />
    </div>

  )

}

export default App
