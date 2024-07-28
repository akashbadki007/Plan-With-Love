import React from 'react'
import { useState } from 'react'
import '../App.css'

function Card({id,image,cityName,price,info,tourRemoveHandler}) {

    const [readMore, setReadMore] = useState(false)
    const des = readMore ? info : `${info.substring(0,80)}....`

    const moreLessHandler = () => {
        setReadMore(!readMore)
    }

  return (

    <div className='w-[272px] h-full  bg-slate-100 gap-1 tour-img'>

        <div>
            <img className='w-[270px] h-[220px] m-auto rounded-md mb-[3px]' src={image} alt="tour-img" />
        </div>

        <div className='w-[250px] px-2'>

            <p className='text-orange-900 font-semibold text-[16px] mb-[3px]'> {cityName} </p>
            <p className='text-green-600 font-semibold text-[16px] mb-[3px]'> ₹:{price} </p>

            <div className='text-[14px]'>
                {des}
                <span 
                 className='text-green-600 ml-[2px] cursor-pointer hover:underline'
                 onClick={moreLessHandler}> 
                 {readMore ? " show less" : "read more"} 
                </span>
            </div>

        </div>

        <div className='flex flex-col justify-center items-center p-3' >
            <button 
             className='w-[200px] h-[30px] text-[14px] bg-red-600 text-white font-bold hover:bg-red-900' 
             onClick={() => tourRemoveHandler(id)}> 
             Not Interested 
            </button>
        </div>

    </div>
  )
}

export default Card