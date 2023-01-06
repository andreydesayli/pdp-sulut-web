import React from 'react'

function Card({img, title, text}) {
  return (
    <div className='flex flex-col w-[358px] md:w-[423px] h-[149px] md:h-[221px] bg-[#F3F2F2] p-[12px] md:py-[32px] md:px-[42px] rounded-[8px] items-center'>
        <img className='w-[32px] md:w-[62px]' src={img} alt='/' />
        <h1 className=' font-montserrat font-semibold text-black text-[14px] md:text-[20px] mt-[16px]'>{title}</h1>
        <p className=' font-inter font-regular text-[#867979] text-[12px] text-center w-[339px] mt-[4px]'>{text}</p>
    </div>
  )
}

export default Card