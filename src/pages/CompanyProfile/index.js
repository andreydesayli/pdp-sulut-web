import React from 'react'
import { Footer, Header, ProfileContent } from '../../components'
import { arrowRight } from '../../assets'

const CompanyProfile = () => {
  return (
    <div>
      <div className='flex flex-col pt-[50px] px-[64px]'>
        <div className=' flex items-center font-montserrat font-medium text-[14px]'>
          <p className=' text-[#005B9C] cursor-pointer'>Beranda</p>
          <img className='h-[14px] mx-[20px]' src={arrowRight} alt=">" />
          <p className=' text-[#120303]'>Profil Perusahaan</p>
        </div>
        <h1 className=' font-montserrat font-semibold text-[#C32222] text-[40px] mt-[20px] mb-[12px]'>Profil PD. PEMBANGUNAN SULUT</h1>
        <p className=' font-inter font-medium text-[#867979] text-[24px]'>Ketahuilah segalanya tentang PD. PEMBANGUNAN SULUT</p>
        <div className='mt-[109px]'>
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile