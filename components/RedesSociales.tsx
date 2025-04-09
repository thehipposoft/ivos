import React from 'react'
import InstagramFeed from './InstagramFeed'
import { FeedData } from '@/src/types'
import Image from 'next/image'

const RedesSociales = ({feedData}:FeedData) => {
  return (
    <div className='relative py-12'>
        <div className='flex flex-col w-[85vw] 2xl:w-[1300px] mx-auto gap-8 relative z-10'>
            <h4 className='uppercase'>¡Seguinos en nuestras redes!</h4>
            <InstagramFeed feedData={feedData} />
        </div>
        <Image src={'/assets/images/redes-bg.png'} alt='' fill className='object-cover' />
        <div className='w-full h-full absolute left-0 top-0 bg-white/80' />
    </div>
  )
}

export default RedesSociales