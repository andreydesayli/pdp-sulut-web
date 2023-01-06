import React from 'react'

const DirectorsCard = ({photo, title, name}) => {
  return (
    <div className='w-[172px] md:w-[450px] h-[238px] md:h-[286px] bg-white rounded-xl flex flex-col items-center justify-center'>
        <img className='w-[88px] md:w-[108px] h-[118px] md:h-[138px]' src={photo} alt='/' />
        <h1 className='font-montserrat font-semibold text-[#120303] text-[14px] md:text-[24px] mt-[20px] md:mt-[24px] text-center'>{title}</h1>
        <p className='font-inter font-medium text-[#867979] text-[12px] md:text-[16px] text-center w-[306px] mt-[1px] md:mt-[16px]'>{name}</p>
    </div>
  )
}

export default DirectorsCard