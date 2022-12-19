import React from 'react'
import { integrated } from '../../assets'

function Card({img, title, text}) {
  return (
    <div className='flex flex-col w-[32%] h-[221px] bg-[#F3F2F2] py-[32px] px-[42px] rounded-[8px] items-center'>
        <img className='w-[24%]' src={img} alt='/' />
        <h1 className=' font-montserrat font-semibold text-black text-[20px] mt-[16px]'>{title}</h1>
        <p className=' font-inter font-regular text-[#867979] text-[12px] text-center w-[339px] mt-[4px]'>{text}</p>
    </div>
  )
}

export default Card