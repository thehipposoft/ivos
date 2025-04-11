import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='h-screen flex justify-center items-center relative '>
        <div className='w-full h-full absolute left-0 top-0 md:bg-black/25 bg-black/40 z-[5]' />
        <Image src={'/assets/images/banner/banner.jpg'} alt='Remodelacion Espacio Living'  fill className='object-cover' />
        <div className='w-[90vw] md:w-full mx-auto md:mx-0 flex lg:flex-row items-center justify-center flex-col relative md:z-10 z-[6] md:gap-6 gap-10'>
            <Image className='w-[200px] h-[200px] md:w-[300px] md:h-[300px]' src={'/assets/images/svg/sintesis-white-2.svg'} alt='Simbolo elipsis IVOS' width={300} height={300} />
            <div className='flex flex-col justify-center text-center md:text-left'>
                <h3 className='uppercase md:text-[75px] text-5xl text-white leading-[70px] drop-shadow-lg'>remodelá</h3>
                <h2 className='uppercase md:text-[88px] text-6xl text-white leading-[80px] drop-shadow-lg'>Sin obra</h2>
                <p className='text-white md:text-[24px] text-2xl drop-shadow-lg'>Una nueva generación de materiales</p>
            </div>
        </div>
    </div>
  )
}

export default Banner