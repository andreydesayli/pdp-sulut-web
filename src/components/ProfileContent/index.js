import React from 'react'
import { vision, mision } from '../../assets'

const ProfileContent = () => {
  return (
    <div className='flex justify-between  w-full h-[760px] bg-[#F9F8F8] pt-[64px] pl-[64px] rounded-lg'>
        <div className='w-[262px] h-[291px] pt-[40px] pb-[60px] px-[40px] border-[4px] border-white rounded-[12px] '>
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
        <div className='ml-[41px]'>
            <div>
                <h1 className=' font-montserrat font-semibold text-black text-[36px]'>Visi Misi PD. PEMBANGUNAN SULUT</h1>
                <div className='flex mt-[68px]'>
                    <img className='w-[312px] h-[201px] mr-[32px]' src={vision} alt="" />
                    <div className='flex flex-col justify-center'>
                        <p className=' font-montserrat font-medium text-[#120303] text-[32px]'>Visi</p>
                        <p className=' font-inter font-medium text-[#867979] text-[24px] mt-[36px] w-[497px]'>“Menjadi mitra usaha terpercaya pemerintah, masyarakat, dan dunia usaha”</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex mt-[68px]'>
                    <div className='flex flex-col justify-center'>
                        <p className=' font-montserrat font-medium text-[#120303] text-[32px]'>Visi</p>
                        <div className='flex items-center mt-[36px] '>
                            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#C32222] rounded-full'>
                                <p className='font-inter font-medium text-white text-[24px] '>1</p>
                            </div>
                            <p className='font-inter font-medium text-[#867979] text-[24px] ml-[40px] w-[400px]'>Membangun bidang usaha yang mendukung pembangunan daerah</p>
                        </div>
                        <div className='flex items-center mt-[16px]'>
                            <div className='w-[48px] h-[48px] flex justify-center items-center bg-[#C32222] rounded-full'>
                                <p className=' font-inter font-medium text-white text-[24px]'>2</p>
                            </div>
                            <p className='font-inter font-medium text-[#867979] text-[24px] ml-[40px]'>Memberikan konstribusi bagi daerah</p>
                        </div>
                    </div>
                    <img className='w-[312px] h-[265px] mr-[32px]' src={mision} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileContent