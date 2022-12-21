import React from 'react'
import { vision, mision } from '../../assets'
const VisionMision = () => {
  return (
    <div className='ml-[41px] mb-[80px] w-full'>
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
  )
}

export default VisionMision