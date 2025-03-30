import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-screen absolute z-10 top-0'>
        <div className='md:w-[85vw] flex justify-between mx-auto items-center'>
            <Image src={'/assets/images/logo.png'} alt='Logo' width={1028} height={338} className='md:w-[162px] md:h-[52px]' />
            <div className='w-24 h-24 bg-amber-600'>
            </div>
        </div>
    </div>
  )
}

export default Header