'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const BannerContent = () => {

  const container = useRef(null)

  useGSAP(()=> {
    gsap.from('.elipsis', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut'
    })
    gsap.from('.text__ > *', {
        opacity: 0,
        yPercent: 10,
        duration: 1.2,
        ease: 'power3.inOut',
        stagger: 0.2,
        delay: .7,
    })
    gsap.to('.elipsis', {
        rotate: '100deg',
        scrollTrigger: {
            markers: true,
            trigger: container.current,
            start: 'center center',
            end: 'center end',
            scrub: 3,
        }
    })
  }, {scope: container})

  return (
    <div ref={container} className='w-[90vw] md:w-full mx-auto md:mx-0 flex lg:flex-row items-center justify-center flex-col relative md:z-10 z-[6] md:gap-6 gap-10'>
        <Image className='elipsis w-[200px] h-[200px] md:w-[300px] md:h-[300px]' src={'/assets/images/svg/sintesis-white-2.svg'} alt='Simbolo elipsis IVOS' width={300} height={300} />
        <div className='text__ flex flex-col justify-center text-center md:text-left'>
            <h3 className='uppercase overflow-hidden md:text-[75px] text-5xl text-white leading-[70px] drop-shadow-lg'>remodelá</h3>
            <h2 className='uppercase overflow-hidden md:text-[88px] text-6xl text-white leading-[80px] drop-shadow-lg'>Sin obra</h2>
            <p className='text-white overflow-hidden md:text-[24px] text-2xl drop-shadow-lg'>Una nueva generación de materiales</p>
        </div>
    </div>
  )
}

export default BannerContent