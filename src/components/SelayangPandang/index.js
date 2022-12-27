import React from 'react'
import { arrowRight } from '../../assets'
import SpCard1 from '../SpCard1'
import { star, staticsUp, sp1, sp2 } from '../../assets'
import SpCard2 from '../SpCard2'

const SelayangPandang = () => {
  return (
    <div>
        <div className='flex flex-col pt-[50px] px-[64px]'>
        <div className=' flex items-center font-montserrat font-medium text-[14px]'>
            <p className=' text-[#005B9C] cursor-pointer'>Beranda</p>
            <img className='h-[14px] mx-[20px]' src={arrowRight} alt=">" />
            <p className=' text-[#120303]'>Profil Perusahaan</p>
        </div>
        <h1 className=' font-montserrat font-semibold text-[#C32222] text-[40px] mt-[20px] mb-[12px]'>Selayang Pandang PD. PEMBANGUNAN SULUT</h1>
        <p className=' font-inter font-medium text-[#867979] text-[24px]'>Ketahuilah segalanya tentang PD. PEMBANGUNAN SULUT</p>
        </div>
        <div className='flex justify-center mt-[50px]'>
            <div className='w-[1312px] h-auto bg-[#8679790D] rounded-lg pt-[64px] pl-[20px] pr-[7px] pb-[80px]'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className=' font-montserrat font-medium text-[#867979] text-[32px]'>PD. Pembangunan Sulawesi Utara</h1>
                        <h1 className=' font-montserrat font-semibold text-[#120303] text-[40px] mt-[16px]'>Pertama Kali Didirikan </h1>
                    </div>
                    <p className='font-inter font-regular text-[#000000] text-[14px] w-[607px] text-justify'>Melalui SK Menteri Dalam Negeri No. 21 Tahun 1969 sebagai tindak lanjut dari INPRES  No. 17 Tahun 1967, dengan tujuan sebagai wadah yang ada dalam wilayah Provinsi Sulawesi Utara. Penegasan undang-undang yang terakhir menyangkut eksistensi PD. Pembangunan Sulut tertuang dalam KepMen No. 973.530.51-380 TENTANG pengesahan Peraturan Daerah Tingkat I Provinsi Sulawesi Utara tanggal 26 Januari 1981 Nomor 3 Tahun 1981</p>
                </div>
                <div className='flex mt-[120px]'>
                    <SpCard1 img={staticsUp} text='Menjadi Badan Usaha Milik Daerah (BUMD) Pemerintah Provinsi Sulawesi Utara dalam membangun Daerah Sulawesi Utara' />
                    <div className='w-[24px]'></div>
                    <SpCard1 img={star} text='Mampu bertahan dari berbagai macam perubahan akibat pergeseran peta politik dalam jajaran Pemerintahan Provinsi Sulawesi Utara' />
                    <div>
                        <h1 className='font-montserrat font-semibold text-[#120303] text-[40px] text-right'>Eksistensi Dunia Bisnis</h1>
                        <p className='font-montserrat font-medium text-[#867979] text-[32px] text-right mr-[37px]'>Memasuki 43 Tahun pada Tahun 2022</p>
                    </div>
                </div>
                <div className=' flex mt-[120px]'>
                    <div className='bg-white w-[535px] h-auto rounded-xl pt-[28px] pb-[100px] pl-[46px] pr-[49px] mr-[8px] font-montserrat font-semibold text-[#120303] text-[24px]'>
                        <p>Kemampuan</p>
                        <p className='text-[28px] w-[400px] mt-[12px]'>PD. PEMBANGUNAN SULUT Di Era Globalisasi</p>
                        <p className='font-inter font-medium text-[14px] text-[#867979] mt-[41px]'>Melalui pemerintahan terpilih sebagai hasil pemilihan umum yang dilaksanakan secara langusng membawa perubahaan yang baik untuk memulai satu tahapan baru yang strategis-fundamental untuk menjadi kekuatan bisnis di daerah Sulawesi Utara.</p>
                    </div>
                    <SpCard2 img={sp1} text='Komposisi Manajemen Baru' />
                    <div className='w-[8px]'></div>
                    <SpCard2 img={sp2} text='Personil Eksekutif Berkompoten' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelayangPandang