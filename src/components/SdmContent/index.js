import React from 'react'
import { sdm1, sdm2, sdm3, sdm4 } from '../../assets'
import SdmCard from '../SdmCard'
const SdmContent = () => {
  return (
    <div className='flex flex-col w-full ml-0 md:ml-[40px] mb-[80px] items-center'>
        <h1 className='font-montserrat font-semibold text-black text-[16px] md:text-[36px] text-center'>Sumber Daya Manusia PD. PEMBANGUNAN SULUT</h1>
        <div className=' flex flex-col mt-[20px] md:mt-[40px]'>
            <SdmCard photo={sdm1} title='Profesional' text='Memiliki karyawan yang profesional dan ahli di bidangnya masing-masing'/>
            <div className='h-[20px]'></div>
            <SdmCard photo={sdm2} title='Etos Kerja Tinggi' text='Menjunjung tinggi loyalitas disiplin dan etika'/>
            <div className='h-[20px]'></div>
            <SdmCard photo={sdm3} title='Inovatif' text='Memiliki kreativitas dan ide-ide untuk mengembangkan peforma perusahaan'/>
        </div>
        <h1 className='font-montserrat font-semibold text-black text-[16px] md:text-[36px] mt-[20px] md:mt-[88px] w-[229px] md:w-auto text-center'>Falsafah Kerja PD. PEMBANGUNAN SULUT</h1>
        <div className=' flex flex-col md:flex-row mt-[40px]'>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                <div className='font-inter font-semibold text-[#120303] text-[14px] md:text-[28px] flex flex-col justify-center mt-[8px] md:mt-0'>
                    <p>Bekerja Keras</p>
                    <p className='mt-[8px] md:mt-[40px]'>Bekerja Cepat</p>
                </div>
                <div className='mx-[19px]'>
                    <img className='w-[246px] md:w-[407px] h-[200px] md:h-[314px]' src={sdm4} alt="" />
                    <p className='font-montserrat font-semibold text-[#120303] text-[14px] md:text-[24px] mt-[20px]'>Dilandasi Oleh Profesionalisme</p>
                </div>
            </div>
            <div className='font-inter font-semibold text-[#120303] text-[14px] md:text-[28px] flex flex-col justify-center items-center mt-[8px] md:mt-0'>
                <p>Bekerja Cerdas</p>
                <p className=' mt-[8px] md:mt-[40px]'>Bertindak Tepat</p>
            </div>
        </div>
    </div>
  )
}

export default SdmContent