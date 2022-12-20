import React, { useState } from 'react'

function Header() {
  const [changeBeranda, setChangeBeranda] = useState(false);
  const [changeProfil, setChangeProfil] = useState(false);
  const [changeSP, setChangeSP] = useState(false);

  const handleClickBeranda = () => {
    setChangeBeranda(!changeBeranda);
    setChangeProfil(false);
    setChangeSP(false);
  }
  const handleClickProfil = () => {
    setChangeProfil(!changeProfil);
    setChangeBeranda(false);
    setChangeSP(false);
  }
  const handleClickSP = () => {
    setChangeSP(!changeSP);
    setChangeBeranda(false);
    setChangeProfil(false);
  }

  return (
    <div className=' flex w-[100%] h-[116px] bg-[#C32222] px-[64px] justify-between items-center'>
        <h1 className=' font-montserrat font-semibold text-[#FFFFFF] text-[24px] cursor-pointer'>PD. PEMBANGUNAN SULUT</h1>
        <div className=' flex font-montserrat font-regular text-[#FFFFFF] text-[16px]'>
            <h2 className={`mr-[40px] cursor-pointer ${(changeBeranda === true)? 'font-semibold' : 'font-regular'}`} onClick={handleClickBeranda}>Beranda</h2>
            <h2 className={`mr-[40px] cursor-pointer ${(changeProfil === true)? 'font-semibold' : 'font-regular'}`} onClick={handleClickProfil}>Profil Perusahaan</h2>
            <h2 className={`cursor-pointer ${(changeSP === true)? 'font-semibold' : 'font-regular'}`} onClick={handleClickSP}>Selayang Pandang</h2>
        </div>
    </div>
  )
}

export default Header