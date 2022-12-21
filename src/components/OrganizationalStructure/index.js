import React from 'react'
import BpCard from '../BpCard'
import DirectorsCard from '../DirectorsCard'
import { dirut, dirpp, dirops } from '../../assets'

const OrganizationalStructure = () => {
  return (
    <div className='flex flex-col ml-[48px] mb-[80px] w-full'>
        <h1 className=' font-montserrat font-semibold text-black text-[36px]'>Struktur Organisasi PD. PEMBANGUNAN SULUT</h1>
        <p className='w-full mt-[40px] font-inter font-medium text-black text-[32px]'>I. Badan Pengawas</p>
        <div className='flex flex-col items-center mt-[40px]'>
            <BpCard title='Ketua' desc='Asisten Perekonomi dan Pembangunan Sekda Provinsi Sulawesi Utara' />
            <div className='w-[4px] h-[36px] bg-[#C32222]'></div>
            <div className='w-[444px] h-[28px] border-t-4 border-x-4 border-[#C32222]'></div>
            <div className=' flex'>
                <BpCard title='Anggota' desc='Kepala Biro Perekonomian Setda Provinsi Sulawesi Utara' />
                <div className='w-[20px]'></div>
                <BpCard title='Anggota' desc='Kepala Dinas Energi Dan Sumberdaya Mineral Daerah Sulawesi Utara'/>
            </div>
        </div>
        <p className='w-full mt-[180px] font-inter font-medium text-black text-[32px]'>II. Direksi</p>
        <div className='flex flex-col items-center mt-[40px]'>
            <DirectorsCard photo={dirut} title="Direktur Utama" name="Anes Evert Franki Paat" />
            <div className='w-[4px] h-[36px] bg-[#C32222]'></div>
            <div className='w-[444px] h-[28px] border-t-4 border-x-4 border-[#C32222]'></div>
            <div className=' flex'>
                <DirectorsCard photo={dirpp} title="Direktur Perencanaan & Keuangan" name="Olvie Atteng, SE.MSi" />
                <div className='w-[20px]'></div>
                <DirectorsCard photo={dirops} title="Direktur Operasional" name="Drs. Joost Fredriek Sepang" />
            </div>
        </div>
    </div>
  )
}

export default OrganizationalStructure