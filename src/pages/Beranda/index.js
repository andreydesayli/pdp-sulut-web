import React, { useState } from 'react'
import { BusinessContent, Card, Footer, Header, SelayangPandang, Slider } from '../../components'
import { maps, integrated, ubs, selfSupport, businessScope, financePerformance, menu, close, arrowRightRed} from '../../assets'
import CompanyProfile from '../CompanyProfile';

function Beranda() {
    const [changeBeranda, setChangeBeranda] = useState(true);
    const [changeProfil, setChangeProfil] = useState(false);
    const [changeSP, setChangeSP] = useState(false);
    const [content, setContent] = useState("Beranda");
    const [navbar, setNavbar] = useState(false);

    const handleClickBeranda = () => {
        setChangeBeranda(true);
        setChangeProfil(false);
        setChangeSP(false);
        setContent("Beranda");
        setNavbar(false);
    }
    const handleClickProfil = () => {
        setChangeProfil(true);
        setChangeBeranda(false);
        setChangeSP(false);
        setContent("ProfilePerusahaan");
        setNavbar(false);
    }
    const handleClickSP = () => {
        setChangeSP(true);
        setChangeBeranda(false);
        setChangeProfil(false);
        setContent("SelayangPandang");
        setNavbar(false);
    }
    const handleClickNavbar = () => {
        setNavbar(!navbar)
    }

    const handleHubungiKami = () => {
        alert("Fitur belum tersedia, coba lagi nanti.")
    }

  return (
    <div className=' w-screen'>
        <div className={`flex w-[100%] h-[52px] md:h-[116px]  px-[16px] md:px-[64px] ${(navbar === true)? 'bg-[#ffffff] border-b-[1px] border-[#C32222] flex-col' : 'bg-[#C32222] justify-between items-center'}`}>
            <div className={`flex justify-between ${(navbar === true)? 'mt-[18px]' : 'mt-0'}`}>
                <h1 className={` font-montserrat font-semibold text-[12px] md:text-[24px] cursor-pointer ${(navbar === true)? 'text-[#C32222]' : 'text-[#ffffff]'}`}>PD. PEMBANGUNAN SULUT</h1>
                <img className={`w-[24px] cursor-pointer  ${(navbar === true)? 'visible' : 'hidden'} duration-1000`} onClick={handleClickNavbar} src={close} alt='' />
            </div>
            <div className={` md:flex font-montserrat font-regular text-[16px] ${(navbar === true)? 'visible text-[#C32222] mt-[40px]' : 'hidden text-[#FFFFFF]'} `}>
                <div className='flex justify-between' onClick={handleClickBeranda}>
                    <h2 className={`mr-[40px] cursor-pointer ${(changeBeranda === true)? 'font-semibold' : 'font-regular'}`} >Beranda</h2>
                    <img className={`w-[24px] cursor-pointer  ${(navbar === true)? 'visible' : 'hidden'}`} onClick={handleClickNavbar} src={arrowRightRed} alt='' />
                </div>
                <div className='flex justify-between my-[40px] md:my-0' onClick={handleClickProfil}>
                    <h2 className={`mr-[40px] cursor-pointer ${(changeProfil === true)? 'font-semibold' : 'font-regular'}`}>Profil Perusahaan</h2>
                    <img className={`w-[24px] cursor-pointer  ${(navbar === true)? 'visible' : 'hidden'}`} onClick={handleClickNavbar} src={arrowRightRed} alt='' />
                </div>
                <div className='flex justify-between' onClick={handleClickSP}>
                    <h2 className={`cursor-pointer ${(changeSP === true)? 'font-semibold' : 'font-regular'}`}>Selayang Pandang</h2>
                    <img className={`w-[24px] cursor-pointer  ${(navbar === true)? 'visible' : 'hidden'}`} onClick={handleClickNavbar} src={arrowRightRed} alt='' />
                </div>
            </div>
            <img className={`w-[24px] cursor-pointer md:hidden ${(navbar === true)? 'hidden' : 'visible'} duration-1000`} onClick={handleClickNavbar} src={menu} alt='' />
        </div>
        <div className={`${(navbar === true)? 'hidden' : 'visible'}`}>
            {content === "ProfilePerusahaan" && <CompanyProfile />}
            {content === "SelayangPandang" && <SelayangPandang />}
            {content === "Beranda" &&
                <div>
                <div className=' flex flex-col w-screen pt-[39px] md:pt-[120px] items-center'>
                    <h1 className=' font-montserrat font-bold text-black text-[16px] md:text-[44px] w-[211px] text-center md:w-auto'>MEMBANGUN BERSAMA MENUJU SEJAHTERA</h1>
                    <p className=' font-inter font-regular text-[#867979] text-[12px] md:text-[18px] w-[357px] md:w-[908px] text-center mt-[8px] md:mt-[16px]'>Perusahaan pembangunan daerah terkemuka untuk membangun daerah menjadi tempat yang lebih baik serta mewujudkan impian menjadi kenyataan dengan proyek pembangunan yang sukses</p>
                    <img src={maps} alt='/' className=' w-[91%] mt-[40px] md:mt-[72px]' />
                </div>
                <Slider />
                <div className='flex flex-col w-screen pt-[40px] md:pt-[120px] items-center'>
                    <h1 className=' font-montserrat font-bold text-black text-[16px] md:text-[36px] text-center'>GARIS BESAR KEGIATAN BISNIS</h1>
                    <p className=' font-inter font-regular text-[#867979] text-[12px] md:text-[18px] w-[358px] md:w-[908px] text-center'>Kinerja Manajemen PD. Pembangunan Sulut terarah pada restrukturisasi bisnis secara berkesinambungan dengan fokus pada pemberdayaan potensi sumber daya yang dimiliki Sulawesi Utara</p>
                </div>
                <BusinessContent />
                <div className=' flex flex-col w-screen mt-[40px] md:mt-[152px] items-center'>
                    <h1 className=' font-montserrat font-semibold text-black text-[16px] md:text-[36px] text-center w-[349px] md:w-auto'>PENINGKATAN PENDAYAGUNAAN MEDIA INFORMASI BERBASIS IT</h1>
                    <div className='flex flex-col grid-cols-1 xl:flex-row w-[100%] mt-[32px] md:mt-[72px] items-center xl:justify-center'>
                        <Card 
                        img={integrated} 
                        title='Integreted Multimedia Centre' 
                        text='Sistem Informasi terpadu yang mampu menunjang proses percepatan dan perkembangan pembangunan perekonomian di wilayah Sulawesi Utara'
                        />
                        <div className='w-0 md:w-[21px] h-[20px] xl:h-0'></div>
                        <Card 
                        img={ubs}
                        title='Unit Bisnis Strategi (UBS)'
                        text='Integreted Multimedia Centre digagas sebagai suatu model bisnis jangka panjang-menengah untuk keberlangsungan sebuah strategi bisnis'
                        />
                        <div className='w-0 md:w-[21px] h-[20px] xl:h-0'></div>
                        <Card 
                        img={selfSupport}
                        title='Self Support'
                        text='(Kemampuan menghidupi diri sendiri) berdasarkan pertimbangan prospek bisnis dan nilai strategis yang dimiliki.'
                        />
                    </div>
                </div>
                <div className=' grid md:flex mt-[56px] md:mt-[152px] mx-[10px] md:mx-[64px] justify-between items-center'>
                    <img className=' w-[358px] xl:w-[646px]' src={financePerformance} alt='/' />
                    <div className=' w-[358px] md:w-[646px] mt-[18px] md:mt-0 ml-0 md:ml-[20px]'>
                        <h2 className=' font-montserrat font-semibold text-black text-[14px] md:text-[36px]'>PERFORMA FINANSIAL</h2>
                        <p className=' font-inter font-medium text-[#867979] text-[12px] md:text-[16px] text-justify mt-[8px] md:mt-[33px]'>Total Aset PD. Pembangunan Sulawesi Utara per-31 Desember 2010 adalah sebesar Rp. 18 Milyard. Dengan performa manajement keuangan tersebut, PD. Pembangunan Sulawesi Utara berada dalam kondisi keuangan yang terbilang sehat dan total asset dengan likuiditas yang sangat baik.</p>
                        <p className=' font-inter font-medium text-[#867979] text-[12px] md:text-[16px] text-justify mt-[12px] md:mt-[33px]'>Hal ini menjadi salah satu modal yang strategis bagi PD. Pembangunan Sulut untuk memainkan perannya dalam dunia bisnis ditingkat manapun yang berorientasi pada pemanfaatan dan pendaya-gunaan potensi sumber-daya yang dimiliki daerah Sulawesi Utara, termasuk untuk kepentingan bisnis ditingkat global.</p>
                    </div>
                </div>
                <div className=' grid md:flex md:flex-row-reverse mt-[20px] md:mt-[152px] mx-[10px] md:mx-[64px] justify-between items-center'>
                    <img className=' w-[358px] xl:w-[646px]' src={businessScope} alt='/' />
                    <div className=' w-[358px] md:w-[646px] mt-[18px] md:mt-0 mr-0 md:mr-[20px]'>
                        <h2 className=' font-montserrat font-semibold text-black text-[14px] md:text-[36px]'>RUANG LINGKUP BISNIS</h2>
                        <p className=' font-inter font-medium text-[#867979] text-[12px] md:text-[16px] text-justify mt-[8px] md:mt-[33px]'>Pengalaman selama 43 tahun yang telah dijalani merupakan salah satu faktor yang menjadi perhatian utama para rekan bisnis PD. Pembangunan Sulut, baik dalam ruang lingkup lokal daerah, nasional maupun mancanegara, untuk menjalin dan memperkuat kemitraan bisnis.</p>
                        <p className=' font-inter font-medium text-[#867979] text-[12px] md:text-[16px] text-justify mt-[12px] md:mt-[33px]'>Gerakan pro-aktif yang menjadi ciri perilaku organisasi perusahaan PD. Pembangunan Sulut dalam mendukung prioritas program- program pemerintahan di Sulawesi Utara selama ini telah menjadikan PD. Pembangunan Sulut sebagai ujung tombak berbagai program Pemerintah Provinsi Sulawesi Utara di Bidang Pertanian, perkebunan, Pariwisata, Transportasi, Konstruksi dan Produksi serta Perdagangan.</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className=' w-[358px] md:w-[100%] h-[196px] md:h-[434px] flex flex-col items-center bg-[#F3F2F2] mt-[40px] md:mt-[120px] pb-[20x] px-[22px] md:px-[64px] pt-[16px] md:pt-[104px]'>
                        <h1 className=' w-[242px] md:w-auto text-center font-montserrat font-semibold text-black text-[16px] md:text-[44px]'>MULAILAH BERSAMA PD. PEMBANGUNAN SULUT</h1>
                        <p className=' w-[314px] md:w-[847px] font-inter font-regular text-[#867979] text-[10px] md:text-[18px] text-center mt-[16px]'>Berfungsi sebagai panduan dan arahan dalam mengelola kegiatan bisnis serta menentukan langkah-langkah jangka panjang untuk perkembangan perusahaan di masa mendatang</p>
                        <div className=' w-[119px] md:w-[200px] h-[40px] md:h-[56px] bg-[#C32222] flex justify-center items-center rounded-lg mt-[20px] md:mt-[60px] cursor-pointer hover:opacity-75' onClick={handleHubungiKami}>
                            <p className=' font-inter font-semibold text-[#ffffff] text-[14px] md:text-[16px]'>Hubungi Kami</p>
                        </div>
                    </div>
                </div>
                </div>
            }
            <Footer />
        </div>
    </div>
  )
}

export default Beranda