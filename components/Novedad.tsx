'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LightBox from './commons/LightBox'

const Novedad = () => {

    const [openGallery, setOpenGallery] = useState(false);

    const toggleGallery = () => {
        setOpenGallery(!openGallery)
    }

  return (
    <div className='h-screen flex items-center gap-20 2xl:w-[1400px] mx-auto w-[85vw] md:w-full'>
        <Image src={'/assets/images/novedad-elipsis.png'} alt='Elipsis' width={248} height={585} className='object-contain object-left hidden md:block' />
        <div className='flex lg:flex-row flex-col gap-8 md:justify-center'>
            <div className='flex flex-col gap-4'>
                <h2 className='uppercase md:text-[80px] text-[50px] bluet md:leading-[80px]'>novedad &lt;</h2>
                <button onClick={toggleGallery} className='md:w-[180px] flex items-center justify-center gap-8 w-1/2 h-[80px] bg-[#F94E19] border-[#F94E19] rounded-tl-[30px] rounded-br-[30px] border-[3px] cursor-pointer hover:bg-transparent duration-500'>
                    <h2 className='uppercase text-xl md:text-auto text-left'> ver<br/>video</h2>
                    <svg width="21" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0003v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M1 7.00031v-2.967c0-2.31 2.534-3.769003 4.597-2.648l12.812 6.968c.4803.25541.882.63669 1.1622 1.10298.2802.4663.4282 1.00001.4282 1.54401s-.148 1.0777-.4282 1.544c-.2802.4663-.6819.8476-1.1622 1.103l-6.406 3.484" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
            </div>
            <div>
                <h3 className='uppercase md:text-[70px] text-4xl bluet'>smart glass</h3>
                <h3 className='uppercase md:text-[42px] text-3xl regular bluet'>vidrios inteligentes</h3>
            </div>
        </div>
        <LightBox videoLightBox isGalleryOpen={openGallery} closeGallery={toggleGallery} />
    </div>
  )
}

export default Novedad