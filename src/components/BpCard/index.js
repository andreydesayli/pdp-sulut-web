import React from 'react'

const BpCard = ({title, desc}) => {
  return (
    <div className='w-[172px] md:w-[424px] h-[126px] md:h-[180px] bg-white rounded-xl flex flex-col items-center justify-center'>
        <h1 className='font-montserrat font-semibold text-[#120303] text-[14px] md:text-[24px]'>{title}</h1>
        <p className='font-inter font-medium text-[#867979] text-[12px] md:text-[16px] text-center w-[150px] md:w-[306px] mt-[16px]'>{desc}</p>
    </div>
  )
}

export default BpCard