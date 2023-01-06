import React from 'react'

const SdmCard = ({photo, title, text}) => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <img className='w-[246px] md:w-[444px] h-[136px] md:h-[248px]' src={photo} alt='' />
        <div className='ml-0 md:ml-[20px] flex flex-col justify-center'>
          <p className='font-inter font-semibold text-[#120303] text-[14px] md:text-[28px] mb-[8px] md:mb-[20px] mt-[20px] md:mt-0'>{title}</p>
          <p className='font-montserrat font-regular text-[#867979] text-[12px] md:text-[20px] w-[230px] md:w-[408px]'>{text}</p>
        </div>
    </div>
  )
}

export default SdmCard