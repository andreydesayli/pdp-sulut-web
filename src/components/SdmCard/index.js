import React from 'react'

const SdmCard = ({photo, title, text}) => {
  return (
    <div className='flex'>
            <img className='w-[444px] h-[248px]' src={photo} alt='' />
            <div className=' ml-[20px] flex flex-col justify-center'>
            <p className='font-inter font-semibold text-[#120303] text-[28px] mb-[20px]'>{title}</p>
            <p className='font-montserrat font-regular text-[#867979] text-[20px] w-[408px]'>{text}</p>
        </div>
    </div>
  )
}

export default SdmCard