import React from 'react'
import { vision, mision } from '../../assets'
const VisionMision = () => {
  return (
    <div className='ml-[41px] mb-[40px] md:mb-[80px] w-full'>
            <div>
                <h1 className=' font-montserrat font-semibold text-black text-[16px] md:text-[36px]'>Visi Misi PD. PEMBANGUNAN SULUT</h1>
                <div className='flex mt-[20px] md:mt-[68px] flex-col md:flex-row'>
                    <img className='w-[273px] md:w-[312px] h-[173px] md:h-[201px] mr-[32px]' src={vision} alt="" />
                    <div className='flex flex-col justify-center mt-[16px] md:mt-0'>
                        <p className=' font-montserrat font-medium text-[#120303] text-[14px] md:text-[32px]'>Visi</p>
                        <p className=' font-inter font-medium text-[#867979] text-[12px] md:text-[24px] mt-[14px] md:mt-[36px] w-[249px] md:w-[497px]'>“Menjadi mitra usaha terpercaya pemerintah, masyarakat, dan dunia usaha”</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex mt-[68px] flex-col-reverse md:flex-row'>
                    <div className='flex flex-col justify-center mt-[16px] md:mt-0'>
                        <p className=' font-montserrat font-medium text-[#120303] text-[14px] md:text-[32px]'>Misi</p>
                        <div className='flex items-center mt-[12px] md:mt-[36px] '>
                            <div className='w-[20px] md:w-[48px] h-[20px] md:h-[48px] flex justify-center items-center bg-[#C32222] rounded-full'>
                                <p className='font-inter font-medium text-white text-[12px] md:text-[24px] '>1</p>
                            </div>
                            <p className='font-inter font-medium text-[#867979] text-[12px] md:text-[24px] ml-[40px] w-[200px] md:w-[400px]'>Membangun bidang usaha yang mendukung pembangunan daerah</p>
                        </div>
                        <div className='flex items-center mt-[16px]'>
                            <div className='w-[20px] md:w-[48px] h-[20px] md:h-[48px] flex justify-center items-center bg-[#C32222] rounded-full'>
                                <p className=' font-inter font-medium text-white text-[12px] md:text-[24px]'>2</p>
                            </div>
                            <p className='font-inter font-medium text-[#867979] text-[12px] md:text-[24px] ml-[40px]'>Memberikan konstribusi bagi daerah</p>
                        </div>
                    </div>
                    <img className='w-[277px] md:w-[312px] h-[185px] md:h-[265px] ml-[32px]' src={mision} alt="" />
                </div>
            </div>
        </div>
  )
}

export default VisionMision