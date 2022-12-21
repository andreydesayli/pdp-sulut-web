import React from 'react'
import OrganizationalStructure from '../OrganizationalStructure'
import SdmContent from '../SdmContent'
import VisionMision from '../VisionMision'

const ProfileContent = () => {
  return (
    <div className='flex w-full h-auto bg-[#F9F8F8] pt-[64px] pl-[64px] rounded-lg'>
        <div className='w-[290px] h-[320px] pt-[40px] pb-[60px] px-[40px] border-[4px] border-white rounded-[12px] '>
            <div>
                <p className=' font-montserrat font-semibold text-black text-[14px] mb-[8px]'>Tentang Perusahaan</p>
                <p className=' font-inter font-medium text-[#867979] text-[14px] cursor-pointer ml-[32px]'>Visi Misi</p>
            </div>
            <div className=' my-[20px]'>
                <p className=' font-montserrat font-semibold text-black text-[14px] mb-[8px]'>Struktur Perusahaan</p>
                <p className=' font-inter font-medium text-[#867979] text-[14px] cursor-pointer ml-[32px]'>Struktur Organisasi</p>
            </div>
            <div>
                <p className=' font-montserrat font-semibold text-black text-[14px]'>Info Lanjutan</p>
                <p className=' font-inter font-medium text-[#867979] text-[14px] cursor-pointer my-[8px] ml-[32px]'>SDM</p>
                <p className=' font-inter font-medium text-[#867979] text-[14px] cursor-pointer ml-[32px]'>Falsafah Kerja</p>
            </div>
        </div>
        {/* <VisionMision /> */}
        {/* <OrganizationalStructure /> */}
        <SdmContent />
    </div>
  )
}

export default ProfileContent