import React from 'react'
import { 
  housingDevelopment,
  agriBusiness,
  tradeAndServices,
  fishery,
  mining,
  tourism,
  transportation,
  construction
} from '../../assets'

const firstRow = [
  {
    id: 1,
    img: construction,
    text: "Konstruksi dan Produksi"
  },
  {
    id: 2,
    img: tradeAndServices,
    text: "Perdagangan dan Jasa"
  },
  {
    id: 3,
    img: agriBusiness,
    text: "Agrobisnis"
  },
  {
    id: 4,
    img: housingDevelopment,
    text: "Pembangunan Perumahan"
  },
]

const secondRow = [
  {
    id: 1,
    img: mining,
    text: "Pertambangan dan Sumber Mineral Lainnya"
  },
  {
    id: 2,
    img: transportation,
    text: "Transportasi Darat, Laut, Udara, dan Perbengkelan"
  },
  {
    id: 3,
    img: fishery,
    text: "Industri Perikanan dan Potensi Bahari Lainnya"
  },
  {
    id: 4,
    img: tourism,
    text: "Pariwisata dan Bidang Jasa Terkait"
  }
]

function BusinessContent() {
  return (
    <div className=' w-[100%] px-[64px] mt-[72px]'>
      <div className='flex'>
        {firstRow.map((item) => (
          <div className=' flex flex-col items-center mr-[20px]' key={item.id}>
            <img className=' w-[313px] h-[200px]' src={item.img} alt='/' />
            <p className=' w-[290px] font-montserrat font-semibold text-black text-[20px] text-center'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='flex'>
        {secondRow.map((item) => (
          <div className=' flex flex-col items-center mr-[20px] mt-[40px]' key={item.id}>
            <img className=' w-[313px] h-[200px]' src={item.img} alt='/' />
            <p className=' w-[262px] font-montserrat font-semibold text-black text-[20px] text-center'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessContent