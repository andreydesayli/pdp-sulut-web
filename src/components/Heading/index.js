import React from 'react'

function Heading() {
  return (
    <div className=' flex w-[100%] h-[116px] bg-[#C32222] px-[64px] justify-between items-center'>
        <h1 className=' font-montserrat font-semibold text-[#FFFFFF] text-[24px] cursor-pointer'>PD. PEMBANGUNAN SULUT</h1>
        <div className=' flex font-montserrat font-regular text-[#FFFFFF] text-[16px]'>
            <h2 className=' mr-[40px] cursor-pointer font-semibold'>Beranda</h2>
            <h2 className=' mr-[40px] cursor-pointer'>Profil Perusahaan</h2>
            <h2 className=' cursor-pointer'>Selayang Pandang</h2>
        </div>
    </div>
  )
}

export default Heading