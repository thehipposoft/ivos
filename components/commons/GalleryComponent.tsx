'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LightBox from './LightBox'

type Images = {
  src: string,
  alt: string, 
}

type GalleryTypes = {
  gallery: Images[],
  banner: string 
}

const GalleryComponent = ({gallery, banner}:GalleryTypes) => {

  const [openGallery, setOpenGallery] = useState(false);

  const toggleGallery = () => {
      setOpenGallery(!openGallery)
  }

  return (
    <div className='h-[700px] md:w-screen w-[90vw] mx-auto md:mx-0 2xl:w-[1300px] 2xl:mx-auto relative group'>
        <Image src={banner} alt=''  fill className='object-cover rounded-2xl md:rounded-none' />
        <div className='absolute w-full h-full left-0 top-0 bg-black/20 md:bg-black/40 z-10 md:group-hover:opacity-100 md:opacity-0 duration-500 flex justify-center items-center'>
            <button onClick={toggleGallery} className='md:w-[180px] cursor-pointer flex items-center justify-center gap-6 w-1/2 h-[80px] bg-[#FFFFFF] duration-300 rounded-tl-[30px] rounded-br-[30px]'>
                <h2 className='uppercase text-xl md:text-auto text-left'> ver<br/>galeria</h2>
                <p className='text-[#F94E19] text-5xl'>+</p>
            </button>
        </div>
        <LightBox projectImages={gallery} isGalleryOpen={openGallery} closeGallery={toggleGallery} />
    </div>
  )
}

export default GalleryComponent