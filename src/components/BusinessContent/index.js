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
    <div className=' w-full pl-[16px] md:pl-[64px] mt-[12px] md:mt-[72px]'>
      <div className=' grid grid-cols-2 xl:flex'>
        {firstRow.map((item) => (
          <div className=' flex flex-col items-center mr-[20px] mt-[20px] xl:mt-0' key={item.id}>
            <img className=' w-[169px] md:w-[313px] h-[98px] md:h-[200px]' src={item.img} alt='/' />
            <p className=' w-[177px] md:w-[290px] font-montserrat font-semibold text-black text-[14px] md:text-[20px] text-center'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 xl:flex'>
        {secondRow.map((item) => (
          <div className=' flex flex-col items-center mr-[20px] mt-[20px] xl:mt-[40px]' key={item.id}>
            <img className=' w-[169px] md:w-[313px] h-[98px] md:h-[200px]' src={item.img} alt='/' />
            <p className=' w-[170px] md:w-[262px] font-montserrat font-semibold text-black text-[14px] md:text-[20px] text-center'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessContent