import React from 'react'
import { 
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
} from '../../assets'

function Slider() {
  return (
    <div className=' flex snap-x snap-mandatory scroll-smooth overflow-scroll mt-[48px] scrollbar-hide'>
        {image.map((item) => (
            <div className='snap-center flex-shrink-0 mr-[20px] w-[30%]' key={item.id}>
                <img src={item.img} alt='/' className='w-[100%] duration-300'/>
            </div>
        ))}
        </div>
  )
}
const image = [
    {
        id: 1,
        img: image1
    },
    {
        id: 2,
        img: image2
    },
    {
        id: 3,
        img: image3
    },
    {
        id: 4,
        img: image4
    },
    {
        id: 5,
        img: image5
    },
    {
        id: 6,
        img: image6
    },
    {
        id: 7,
        img: image7
    },
    {
        id: 8,
        img: image8
    },
    {
        id: 9,
        img: image9
    },
    {
        id: 10,
        img: image10
    },
    {
        id: 11,
        img: image11
    },
    {
        id: 12,
        img: image12
    },
]


export default Slider