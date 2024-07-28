import React from 'react'
import Card from "./Card"
import '../App.css'

function Tour({tour,tourRemoveHandler}) {
  return (
    <div className='py-[10px] flex flex-col justify-center items-center'>

      <div className='text-center py-4 text-[35px] font-bold mb-10'>
        <h1 className='heading'>Plan With Love</h1>
      </div>

      <div className='grid grid-cols-4 gap-14'>
        {tour.map((ele) => {
          return <Card key={ele.id} {...ele} tourRemoveHandler={tourRemoveHandler} />
        })}
      </div>

    </div>
  )
}

export default Tour