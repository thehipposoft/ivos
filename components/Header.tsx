import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-screen absolute z-10 top-0'>
        <div className='md:w-[85vw] flex justify-between mx-auto items-center'>
            <Image src={'/assets/images/logo.png'} alt='Logo' width={1028} height={338} className='md:w-[162px] md:h-[52px]' />
            <div className='w-24 h-24 bg-[#F94E19] flex justify-center items-center'>
              <svg className='w-8 h-8' width="101" height="101" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#000"><path d="M16 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM16 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM16 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12-2c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4ZM4 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm0-10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM4 0C1.791 0 0 1.791 0 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Z" fill="#FFF" strokeWidth=".00032" fillRule="evenodd"/></svg>
            </div>
        </div>
    </div>
  )
}

export default Header