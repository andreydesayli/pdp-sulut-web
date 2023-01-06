import React, { useState } from 'react'
import OrganizationalStructure from '../OrganizationalStructure'
import SdmContent from '../SdmContent'
import VisionMision from '../VisionMision'
import { arrowRightRed } from '../../assets'

const ProfileContent = () => {
    const [content, setContent] = useState("VisionMision");
    const [visionMision, setVisionMision] = useState(true);
    const [organizationalStructure, setOrganizationalStructure] = useState(false);
    const [sdmContent, setSdmContent] = useState(false);
    const [navClick, setNavClick] = useState(true);

    const handleClickVisionMision = () => {
        setVisionMision(true);
        setOrganizationalStructure(false);
        setSdmContent(false);
        setContent("VisionMision");
    }
    const handleClickOrganizationalStructure = () => {
        setOrganizationalStructure(true);
        setVisionMision(false);
        setSdmContent(false);
        setContent("OrganizationalStructure");
    }
    const handleClickSdmContent = () => {
        setSdmContent(true);
        setVisionMision(false);
        setOrganizationalStructure(false);
        setContent("SdmContent");
    }

    const handleNavClick = () => {
        setNavClick(!navClick);
    }

  return (
    <div className='flex flex-col md:flex-row w-full h-auto bg-[#F9F8F8] pt-[32px] md:pt-[64px] pl-[3px] md:pl-[64px] rounded-lg items-center md:items-start'>
        <div className=' flex w-full justify-center items-center md:w-0 md:invisible border-b-[1px] border-[#C32222] pb-[16px] mb-[16px] cursor-pointer' onClick={handleNavClick}>
            <h1 className='font-montserrat font-semibold text-[16px] text-[#C32222] mr-[17px]'>Profil Perusahaan</h1>
            <img className={`w-[14px] ${(navClick === true)? ' -rotate-90' : 'rotate-90'}`} src={arrowRightRed} alt='' />
        </div>
        <div className={`flex flex-col w-[326px] md:w-[300px] h-[228px] md:h-[300px] mb-[32px] pt-0 md:pt-[40px] pb-[60px] px-[0px] md:px-[40px] border-[4px] border-white rounded-[12px] ${(navClick ===true)? 'visible' : 'hidden'}`}>
            <div>
                <p className='font-montserrat font-semibold text-black text-[14px] mb-[8px] invisible md:visible'>Tentang Perusahaan</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[16px] md:ml-[32px] ${(visionMision === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickVisionMision}>Visi Misi</p>
            </div>
            <div className=' my-0 md:my-[20px]'>
                <p className=' font-montserrat font-semibold text-black text-[14px] mb-[8px] invisible md:visible '>Struktur Perusahaan</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[16px] md:ml-[32px] ${(organizationalStructure === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickOrganizationalStructure}>Struktur Organisasi</p>
            </div>
            <div>
                <p className=' font-montserrat font-semibold text-black text-[14px] invisible md:visible'>Info Lanjutan</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer mb-[18px] md:mb-[0px] ml-[16px] md:ml-[32px] ${(sdmContent === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickSdmContent}>SDM</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[16px] md:ml-[32px] ${(sdmContent === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickSdmContent}>Falsafah Kerja</p>
            </div>
        </div>
        {/* <VisionMision /> */}
        {/* <OrganizationalStructure /> */}
        {/* <SdmContent /> */}
        {content === "VisionMision" && <VisionMision />}
        {content === "OrganizationalStructure" && <OrganizationalStructure />}
        {content === "SdmContent" && <SdmContent />}
    </div>
  )
}

export default ProfileContent