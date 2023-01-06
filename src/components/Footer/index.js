import React from 'react'
import { location, mail } from '../../assets'

function Footer() {
  return (
    <div className='flex flex-col mt-[40px] md:mt-[64px] justify-center px-[16px] md:px-[64px]'>
        <div className='grid xl:flex w-full justify-between'>
            <div>
                <p className=' font-montserrat font-semibold text-black text-[20px] xl:text-[24px]'>PD. PEMBANGUNAN SULUT</p>
                <div className=' flex mt-[20px] md:mt-[36px] items-center'>
                    <img className='h-[16px] md:h-[24px] mr-[16px]' src={location} alt='/' />
                    <p className='font-montserrat font-regular text-[#867979] text-[12px] md:text-[14px]'>Jln. Ch. Taulu No. 59 Ling. 2 Kel. Bumi Beringin Kec. Wenang</p>
                </div>
                <div className=' flex mt-[8px] md:mt-[22px] items-center'>
                    <img className='h-[16px] md:h-[24px] mr-[16px]' src={mail} alt='/' />
                    <p className='font-montserrat font-regular text-[#867979] text-[12px] md:text-[14px]'>pdpembangunansulut15347@gmail.com</p>
                </div>
            </div>
            <div className=' flex mt-[40px] md:mt-0'>
                <div className=' mr-[36px] md:mr-[103px] font-inter font-regular text-[#867979] text-[12px] xl:text-[14px]'>
                    <h1 className=' font-inter font-semibold text-black text-[14px] md:text-[18px] mb-[12px]'>Tentang</h1>
                    <p className='w-[78px]'>Tentang Kami</p>
                </div>
                <div className=' mr-[36px] md:mr-[53px] font-inter font-regular text-[#867979] text-[12px] xl:text-[14px]'>
                    <h1 className=' font-inter font-semibold text-black text-[14px] md:text-[18px] mb-[12px]'>Profil</h1>
                    <p>Visi & Misi</p>
                    <p className=' my-[16px]'>Struktur Organisasi</p>
                    <p>SDM & Falsafah Kerja</p>
                </div>
                <div className=' font-inter font-regular text-[#867979] text-[12px] xl:text-[14px]'>
                    <h1 className=' font-inter font-semibold text-black text-[14px] md:text-[18px] mb-[12px]'>Media Sosial</h1>
                    <p>Facebook</p>
                    <p className=' my-[16px]'>Instagram</p>
                    <p>WhatsApp</p>
                </div>
            </div>
        </div>
        <div className=' grid xl:flex justify-between font-inter font-regular text-[#867979] text-[12px] mt-[20px] md:mt-[80px] mb-[56px]'>
            <p>Copyright 2022 PD. Pengembangan Sulut. All Right Reserved</p>
            <div className=' flex justify-between'>
                <p className=' mr-[32px]'>Terms & Agreements</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div> 
  )
}

export default Footer