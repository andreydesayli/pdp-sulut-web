import React from 'react'
import { BusinessContent, Card, Footer, Header, Slider } from '../../components'
import { maps, integrated, ubs, selfSupport, businessScope, financePerformance} from '../../assets'

function Beranda() {
  return (
    <div className=' w-screen'>
        <Header />
        <div className=' flex flex-col w-screen pt-[120px] items-center'>
            <h1 className=' font-montserrat font-bold text-black text-[44px]'>MEMBANGUN BERSAMA MENUJU SEJAHTERA</h1>
            <p className=' font-inter font-regular text-[#867979] text-[18px] w-[908px] text-center'>Perusahaan pembangunan daerah terkemuka untuk membangun daerah menjadi tempat yang lebih baik serta mewujudkan impian menjadi kenyataan dengan proyek pembangunan yang sukses</p>
            <img src={maps} alt='/' className=' w-[91%] mt-[72px]' />
        </div>
        <Slider />
        <div className='flex flex-col w-screen pt-[120px] items-center'>
            <h1 className=' font-montserrat font-bold text-black text-[36px]'>GARIS BESAR KEGIATAN BISNIS</h1>
            <p className=' font-inter font-regular text-[#867979] text-[18px] w-[908px] text-center'>Kinerja Manajemen PD. Pembangunan Sulut terarah pada restrukturisasi bisnis secara berkesinambungan dengan fokus pada pemberdayaan potensi sumber daya yang dimiliki Sulawesi Utara</p>
        </div>
        <BusinessContent />
        <div className=' flex flex-col w-screen mt-[152px] items-center'>
            <h1 className=' font-montserrat font-semibold text-black text-[36px]'>PENINGKATAN PENDAYAGUNAAN MEDIA INFORMASI BERBASIS IT</h1>
            <div className=' flex w-[100%] px-[64px] mt-[72px]'>
                <Card 
                img={integrated} 
                title='Integreted Multimedia Centre' 
                text='Sistem Informasi terpadu yang mampu menunjang proses percepatan dan perkembangan pembangunan perekonomian di wilayah Sulawesi Utara'
                />
                <div className='w-[21px]'></div>
                <Card 
                img={ubs}
                title='Unit Bisnis Strategi (UBS)'
                text='Integreted Multimedia Centre digagas sebagai suatu model bisnis jangka panjang-menengah untuk keberlangsungan sebuah strategi bisnis'
                />
                <div className='w-[21px]'></div>
                <Card 
                img={selfSupport}
                title='Self Support'
                text='(Kemampuan menghidupi diri sendiri) berdasarkan pertimbangan prospek bisnis dan nilai strategis yang dimiliki.'
                />
            </div>
        </div>
        <div className=' flex mt-[152px] mx-[64px] justify-between items-center'>
            <img className='w-[45%]' src={financePerformance} alt='/' />
            <div className='w-[55%] ml-[20px]'>
                <h2 className=' font-montserrat font-semibold text-black text-[36px]'>PERFORMA FINANSIAL</h2>
                <p className=' font-inter font-medium text-[#867979] text-[16px] text-justify mt-[33px]'>Total Aset PD. Pembangunan Sulawesi Utara per-31 Desember 2010 adalah sebesar Rp. 18 Milyard. Dengan performa manajement keuangan tersebut, PD. Pembangunan Sulawesi Utara berada dalam kondisi keuangan yang terbilang sehat dan total asset dengan likuiditas yang sangat baik.</p>
                <p className=' font-inter font-medium text-[#867979] text-[16px] text-justify mt-[33px]'>Hal ini menjadi salah satu modal yang strategis bagi PD. Pembangunan Sulut untuk memainkan perannya dalam dunia bisnis ditingkat manapun yang berorientasi pada pemanfaatan dan pendaya-gunaan potensi sumber-daya yang dimiliki daerah Sulawesi Utara, termasuk untuk kepentingan bisnis ditingkat global.</p>
            </div>
        </div>
        <div className=' flex mt-[152px] mx-[64px] justify-between items-center'>
            <div className='w-[55%] mr-[20px]'>
                <h2 className=' font-montserrat font-semibold text-black text-[36px]'>RUANG LINGKUP BISNIS</h2>
                <p className=' font-inter font-medium text-[#867979] text-[16px] text-justify mt-[33px]'>Pengalaman selama 43 tahun yang telah dijalani merupakan salah satu faktor yang menjadi perhatian utama para rekan bisnis PD. Pembangunan Sulut, baik dalam ruang lingkup lokal daerah, nasional maupun mancanegara, untuk menjalin dan memperkuat kemitraan bisnis.</p>
                <p className=' font-inter font-medium text-[#867979] text-[16px] text-justify mt-[33px]'>Gerakan pro-aktif yang menjadi ciri perilaku organisasi perusahaan PD. Pembangunan Sulut dalam mendukung prioritas program- program pemerintahan di Sulawesi Utara selama ini telah menjadikan PD. Pembangunan Sulut sebagai ujung tombak berbagai program Pemerintah Provinsi Sulawesi Utara di Bidang Pertanian, perkebunan, Pariwisata, Transportasi, Konstruksi dan Produksi serta Perdagangan.</p>
            </div>
            <img className='w-[45%]' src={businessScope} alt='/' />
        </div>
        <div className=' w-screen h-[434px] flex flex-col items-center bg-[#F3F2F2] mt-[120px] px-[64px] pt-[104px]'>
            <h1 className=' font-montserrat font-semibold text-black text-[44px]'>MULAILAH BERSAMA PD. PEMBANGUNAN SULUT</h1>
            <p className=' w-[847px] font-inter font-regular text-[#867979] text-[18px] text-center mt-[16px]'>Berfungsi sebagai panduan dan arahan dalam mengelola kegiatan bisnis serta menentukan langkah-langkah jangka panjang untuk perkembangan perusahaan di masa mendatang</p>
            <div className='w-[200px] h-[56px] bg-[#C32222] flex justify-center items-center rounded-lg mt-[60px] cursor-pointer hover:opacity-75'>
                <p className=' font-inter font-semibold text-[#ffffff] text-[16px]'>Get Started</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Beranda