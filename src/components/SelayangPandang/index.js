import React from 'react'
import { arrowRight } from '../../assets'
import SpCard1 from '../SpCard1'
import { star, staticsUp, sp1, sp2 } from '../../assets'
import SpCard2 from '../SpCard2'

const SelayangPandang = () => {
  return (
    <div>
        <div className='flex flex-col pt-[20px] md:pt-[50px] px-[16px] md:px-[64px]'>
            <div className=' flex items-center font-montserrat font-medium md:text-[14px]'>
                <div className=' flex flex-row-reverse md:flex-row items-center'>
                    <p className=' text-[#005B9C] cursor-pointer text-[12px]'>Beranda</p>
                    <img className='h-[16px] md:h-[14px] mr-[8px] md:mx-[20px] rotate-180 md:rotate-0' src={arrowRight} alt=">" />
                </div>
                <p className=' text-white md:text-[#120303]'>Selayang Pandang</p>
            </div>
            <h1 className=' font-montserrat font-semibold text-[#C32222] text-[16px] md:text-[40px] mt-[20px] mb-[12px]'>Selayang Pandang PD. PEMBANGUNAN SULUT</h1>
            <p className=' font-inter font-medium text-[#867979] text-[14px] md:text-[24px]'>Ketahuilah segalanya tentang PD. PEMBANGUNAN SULUT</p>
        </div>
        <div className='flex justify-center mt-[50px]'>
            <div className=' w-[358px] md:w-[1312px] h-auto bg-[#8679790D] rounded-lg pt-[16px] md:pt-[64px] pl-[4px] md:pl-[20px] pr-[7px] pb-[32px] md:pb-[80px]'>
                <div className='flex justify-between flex-col grid-cols-1 xl:flex-row'>
                    <div>
                        <h1 className=' font-montserrat font-medium text-[#867979] text-[14px] md:text-[32px]'>PD. Pembangunan Sulawesi Utara</h1>
                        <h1 className=' font-montserrat font-semibold text-[#120303] text-[16px] md:text-[40px] mt-[16px]'>Pertama Kali Didirikan </h1>
                    </div>
                    <p className='font-inter font-regular text-[#000000] text-[12px] md:text-[14px] mt-[20px] md:mt-0 w-[352px] md:w-[607px] text-left md:text-justify'>Melalui SK Menteri Dalam Negeri No. 21 Tahun 1969 sebagai tindak lanjut dari INPRES  No. 17 Tahun 1967, dengan tujuan sebagai wadah yang ada dalam wilayah Provinsi Sulawesi Utara. Penegasan undang-undang yang terakhir menyangkut eksistensi PD. Pembangunan Sulut tertuang dalam KepMen No. 973.530.51-380 TENTANG pengesahan Peraturan Daerah Tingkat I Provinsi Sulawesi Utara tanggal 26 Januari 1981 Nomor 3 Tahun 1981</p>
                </div>
                <div className='flex flex-col-reverse md:flex-row mt-[20px] md:mt-[120px] items-center'>
                    <div>
                        <SpCard1 img={staticsUp} text='Menjadi Badan Usaha Milik Daerah (BUMD) Pemerintah Provinsi Sulawesi Utara dalam membangun Daerah Sulawesi Utara' />
                        <div className='w-[24px]'></div>
                        <SpCard1 img={star} text='Mampu bertahan dari berbagai macam perubahan akibat pergeseran peta politik dalam jajaran Pemerintahan Provinsi Sulawesi Utara' />
                    </div>
                    <div className='ml-[-45px] md:ml-0'>
                        <h1 className='font-montserrat font-semibold text-[#120303] text-[16px] md:text-[40px] text-left md:text-right'>Eksistensi Dunia Bisnis</h1>
                        <p className='font-montserrat font-medium text-[#867979] text-[14px] md:text-[32px] text-left md:text-right mr-[37px]'>Memasuki 43 Tahun pada Tahun 2022</p>
                    </div>
                </div>
                <div className=' flex mt-[20px] md:mt-[120px] flex-col grid-cols-1 xl:flex-row items-center'>
                    <div className='bg-white w-[326px] md:w-[535px] h-auto rounded-xl pt-[24px] md:pt-[28px] pb-[32px] md:pb-[100px] pl-[24px] md:pl-[46px] pr-[49px] mr-0 md:mr-[8px] font-montserrat font-semibold text-[#120303] text-[14px] md:text-[24px]'>
                        <p>Kemampuan</p>
                        <p className='text-[16px] md:text-[28px] w-[229px] md:w-[400px] mt-[12px]'>PD. PEMBANGUNAN SULUT Di Era Globalisasi</p>
                        <p className='font-inter font-medium text-[12px] md:text-[14px] text-[#867979] mt-[12px] md:mt-[41px] w-[272px] md:w-auto'>Melalui pemerintahan terpilih sebagai hasil pemilihan umum yang dilaksanakan secara langusng membawa perubahaan yang baik untuk memulai satu tahapan baru yang strategis-fundamental untuk menjadi kekuatan bisnis di daerah Sulawesi Utara.</p>
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