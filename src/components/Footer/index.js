import React from 'react'
import { location, mail, phone } from '../../assets'
function Footer() {
  return (
    <div className='flex flex-col mt-[64px] px-[64px]'>
        <div className='flex w-full justify-between'>
            <div>
                <p className=' font-montserrat font-semibold text-black text-[24px]'>PD. PEMBANGUNAN SULUT</p>
                <div className=' flex mt-[36px] items-center'>
                    <img className='h-[24px] mr-[16px]' src={location} alt='/' />
                    <p className='font-montserrat font-regular text-[#867979] text-[14px]'>Jln. Ch. Taulu No. 59 Ling. 2 Kel. Bumi Beringin Kec. Wenang</p>
                </div>
                <div className=' flex my-[22px] items-center'>
                    <img className='h-[24px] mr-[16px]' src={mail} alt='/' />
                    <p className='font-montserrat font-regular text-[#867979] text-[14px]'>pdpembangunansulut15347@gmail.com</p>
                </div>
            </div>
            <div className=' flex'>
                <div className=' mr-[103px] font-inter font-regular text-[#867979] text-[12px]'>
                    <h1 className=' font-inter font-semibold text-black text-[18px] mb-[14px]'>Tentang</h1>
                    <p>Tentang Kami</p>
                </div>
                <div className=' mr-[53px] font-inter font-regular text-[#867979] text-[12px]'>
                    <h1 className=' font-inter font-semibold text-black text-[18px] mb-[14px]'>Profil</h1>
                    <p>Visi & Misi</p>
                    <p className=' my-[16px]'>Struktur Organisasi</p>
                    <p>SDM & Falsafah Kerja</p>
                </div>
                <div className=' font-inter font-regular text-[#867979] text-[12px]'>
                    <h1 className=' font-inter font-semibold text-black text-[18px] mb-[14px]'>Media Sosial</h1>
                    <p>Facebook</p>
                    <p className=' my-[16px]'>Instagram</p>
                    <p>WhatsApp</p>
                </div>
            </div>
        </div>
        <div className=' flex justify-between font-inter font-regular text-[#867979] text-[12px] mt-[80px] mb-[56px]'>
            <p>Copyright 2022 PD. Pengembangan Sulut. All Right Reserved</p>
            <div className=' flex'>
                <p className=' mr-[32px]'>Terms & Agreements</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div> 
  )
}

export default Footer