import React from 'react'

const SpCard2 = ({img, text}) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-xl'>
        <img className='w-[368px]' src={img} alt='' />
        <div className='bg-white rounded-b-xl pb-[4px] px-[4px] w-full h-full'>
            <div className='bg-[#8679790D] rounded-b-xl w-full h-full pt-[40px] flex justify-center'>
                <p className='font-inter font-medium text-[#000000] text-[20px]'>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default SpCard2