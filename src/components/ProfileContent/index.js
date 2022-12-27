import React, { useState } from 'react'
import OrganizationalStructure from '../OrganizationalStructure'
import SdmContent from '../SdmContent'
import VisionMision from '../VisionMision'

const ProfileContent = () => {
    const [content, setContent] = useState("VisionMision");
    const [visionMision, setVisionMision] = useState(true);
    const [organizationalStructure, setOrganizationalStructure] = useState(false);
    const [sdmContent, setSdmContent] = useState(false);

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

  return (
    <div className='flex w-full h-auto bg-[#F9F8F8] pt-[64px] pl-[64px] rounded-lg'>
        <div className='w-[300px] h-[300px] pt-[40px] pb-[60px] px-[40px] border-[4px] border-white rounded-[12px] '>
            <div>
                <p className='font-montserrat font-semibold text-black text-[14px] mb-[8px]'>Tentang Perusahaan</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[32px] ${(visionMision === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickVisionMision}>Visi Misi</p>
            </div>
            <div className=' my-[20px]'>
                <p className=' font-montserrat font-semibold text-black text-[14px] mb-[8px]'>Struktur Perusahaan</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[32px] ${(organizationalStructure === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickOrganizationalStructure}>Struktur Organisasi</p>
            </div>
            <div>
                <p className=' font-montserrat font-semibold text-black text-[14px]'>Info Lanjutan</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[32px] ${(sdmContent === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickSdmContent}>SDM</p>
                <p className={`font-inter font-medium  text-[14px] cursor-pointer ml-[32px] ${(sdmContent === true)? 'text-[#C32222]' : 'text-[#867979]'}`} onClick={handleClickSdmContent}>Falsafah Kerja</p>
            </div>
        </div>
        {content === "VisionMision" && <VisionMision />}
        {content === "OrganizationalStructure" && <OrganizationalStructure />}
        {content === "SdmContent" && <SdmContent />}
    </div>
  )
}

export default ProfileContent