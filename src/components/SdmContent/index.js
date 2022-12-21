import React from 'react'
import { sdm1, sdm2, sdm3, sdm4 } from '../../assets'
import SdmCard from '../SdmCard'
const SdmContent = () => {
  return (
    <div className='flex flex-col w-full ml-[40px] mb-[80px]'>
        <h1 className='font-montserrat font-semibold text-black text-[36px]'>Sumber Daya Manusia PD. PEMBANGUNAN SULUT</h1>
        <div className=' flex flex-col mt-[40px]'>
            <SdmCard photo={sdm1} title='Profesional' text='Memiliki karyawan yang profesional dan ahli di bidangnya masing-masing'/>
            <div className='h-[20px]'></div>
            <SdmCard photo={sdm2} title='Etos Kerja Tinggi' text='Menjunjung tinggi loyalitas disiplin dan etika'/>
            <div className='h-[20px]'></div>
            <SdmCard photo={sdm3} title='Inovatif' text='Memiliki kreativitas dan ide-ide untuk mengembangkan peforma perusahaan'/>
        </div>
        <h1 className='font-montserrat font-semibold text-black text-[36px] mt-[88px]'>Falsafah Kerja PD. PEMBANGUNAN SULUT</h1>
        <div className=' flex mt-[40px]'>
            <div className='font-inter font-semibold text-[#120303] text-[28px] flex flex-col justify-center'>
                <p>Bekerja Keras</p>
                <p className='mt-[40px]'>Bekerja Cepat</p>
            </div>
            <div className='mx-[19px]'>
                <img className='w-[407px] h-[314px]' src={sdm4} alt="" />
                <p className='font-montserrat font-semibold text-[#867979] text-[24px] mt-[20px]'>Dilandasi Oleh Profesionalisme</p>
            </div>
            <div className='font-inter font-semibold text-[#120303] text-[28px] flex flex-col justify-center'>
                <p>Bekerja Cerdas</p>
                <p className='mt-[40px]'>Bertindak Tepat</p>
            </div>
        </div>
    </div>
  )
}

export default SdmContent