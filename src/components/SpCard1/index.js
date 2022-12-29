import React from 'react'

const SpCard1 = ({img, text}) => {
  return (
    <div className='flex flex-col items-center bg-white w-[308px] md:w-[382px] h-auto px-[20px] pt-[24px] pb-[32px] md:pb-[34px] rounded-xl mt-[20px] md:mt-0'>
        <img className='w-[20px] md:w-[27px] mb-[8px] md:mb-[20px]' src={img} alt='' />
        <p className='font-inter font-regular text-[#000000] text-[12px] md:text-[14px] w-[248px] md:w-[342px] text-center'>{text}</p>
    </div>
  )
}

export default SpCard1