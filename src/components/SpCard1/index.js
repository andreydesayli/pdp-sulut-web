import React from 'react'

const SpCard1 = ({img, text}) => {
  return (
    <div className='flex flex-col items-center bg-white w-[382px] h-auto px-[20px] pt-[24px] pb-[34px] rounded-xl'>
        <img className='w-[27px] mb-[20px]' src={img} alt='' />
        <p className='font-inter font-regular text-[#000000] text-[14px] w-[342px] text-center'>{text}</p>
    </div>
  )
}

export default SpCard1