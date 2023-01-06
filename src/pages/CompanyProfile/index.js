import React from 'react'
import { ProfileContent } from '../../components'
import { arrowRight } from '../../assets'

const CompanyProfile = () => {
  return (
    <div>
      <div className='flex flex-col pt-[20px] md:pt-[50px] px-[16px] md:px-[64px]'>
        <div className=' flex items-center font-montserrat font-medium md:text-[14px]'>
          <div className=' flex flex-row-reverse md:flex-row items-center'>
            <p className=' text-[#005B9C] cursor-pointer text-[12px]'>Beranda</p>
            <img className='h-[16px] md:h-[14px] mr-[8px] md:mx-[20px] rotate-180 md:rotate-0' src={arrowRight} alt=">" />
          </div>
          <p className=' text-white md:text-[#120303]'>Profil Perusahaan</p>
        </div>
        <h1 className=' font-montserrat font-semibold text-[#C32222] text-[16px] md:text-[40px] mt-[12px] md:mt-[20px] mb-[12px]'>Profil PD. PEMBANGUNAN SULUT</h1>
        <p className=' font-inter font-medium text-[#867979] text-[14px] md:text-[24px]'>Ketahuilah segalanya tentang PD. PEMBANGUNAN SULUT</p>
        <div className=' mt-[40px] md:mt-[109px]'>
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile