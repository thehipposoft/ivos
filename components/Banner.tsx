import Image from 'next/image'
import React from 'react'
import BannerContent from './BannerContent'

const Banner = () => {
  return (
    <div className='h-screen flex justify-center items-center relative '>
        <div className='w-full h-full absolute left-0 top-0 md:bg-black/25 bg-black/40 z-[5]' />
        <Image src={'/assets/images/banner/banner.jpg'} alt='Remodelacion Espacio Living'  fill className='object-cover' />
        <BannerContent />
    </div>
  )
}

export default Banner