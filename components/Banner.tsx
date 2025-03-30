import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='h-screen flex justify-center items-center relative'>
        <Image src={'/assets/images/banner/banner.jpg'} alt=''  fill className='object-cover' />
        <div className='flex relative z-10'>
            <div className='flex flex-col bg-black/20'>
                <h3 className='uppercase text-[75px] text-white'>remodelá</h3>
                <h2 className='uppercase text-[85px] text-white'>Sin obra</h2>
                <p>Una nueva generación de materiales</p>
            </div>
        </div>
    </div>
  )
}

export default Banner