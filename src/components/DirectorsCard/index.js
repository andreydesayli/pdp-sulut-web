import React from 'react'

const DirectorsCard = ({photo, title, name}) => {
  return (
    <div className='w-[450px] h-[286px] bg-white rounded-xl flex flex-col items-center justify-center'>
        <img className='w-[108px] h-[138px]' src={photo} alt='/' />
        <h1 className='font-montserrat font-semibold text-[#120303] text-[24px] mt-[24px]'>{title}</h1>
        <p className='font-inter font-medium text-[#867979] text-[16px] text-center w-[306px] mt-[16px]'>{name}</p>
    </div>
  )
}

export default DirectorsCard