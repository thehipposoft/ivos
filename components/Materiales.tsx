import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Materiales = () => {
  return (
    <div className='md:h-screen flex flex-col w-[85vw] 2xl:w-[1250px] mx-auto'>
        <h4 className='uppercase'>Nuestros Materiales</h4>
        <div className='grid md:gap-10 gap-4 pt-8 w-full md:grid-cols-4 grid-cols-2 grid-rows-2'>
            <Link href={'/materiales/placas-pvc'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px] overflow-hidden'>
                    <Image src={'/assets/images/materiales/placas-pvc.png'} alt='' fill className=' object-cover rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px]'>Placas de PVC</h5>
            </Link>
            <Link href={'/materiales/paneles-acusticos'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/paneles-acusticos.jpg'} alt='' fill className=' object-cover object-top rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px]'>Paneles Acústicos</h5>
            </Link>
            <Link href={'/materiales/revestimientos-interiores'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/rev-interiores-pvc.jpg'} alt='' fill className='object-none object-left-top rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px] md:w-[215px]'>Revestimientos interiores de PVC</h5>
            </Link>
            <Link href={'/materiales/revestimientos-exteriores'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/rev-wpc-exteriores.jpg'} alt='' fill className='object-cover rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px] md:w-[215px]'>Revestimientos WPC exteriores</h5>
            </Link>
            <Link href={'/materiales/chapas-caladas'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/chapas-caladas.jpg'} alt='' fill className='object-cover rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px] md:w-[215px]'>Chapas Caladas</h5>
            </Link>
            <Link href={'/materiales/perfiles-wpc'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/perfiles-wpc.jpg'} alt='' fill className='object-cover rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px] md:w-[215px]'>Perfiles de WPC</h5>
            </Link>
            <Link href={'/materiales/smart-glass'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/smartglass.jpg'} alt='' fill className=' rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px] md:w-[215px]'>Smart Glass</h5>
            </Link>
            <Link href={'/materiales/aluzinc'} className='flex flex-col gap-2 w-fit group cursor-pointer relative'>
                <div className='relative md:w-[215px] w-[170px] md:h-[215px] h-[170px]  overflow-hidden'>
                    <Image src={'/assets/images/materiales/aluzinc.jpg'} alt='' fill className='object-cover object-top rounded-tl-[45px] rounded-br-[25px]' />
                    <div className='md:translate-x-full group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 duration-1000 bg-[#F94E19] absolute bottom-0 right-0 rounded-tl-xl md:w-[175px] w-[110px] h-[65px] rounded-br-[25px] rounded-tl-[25px] uppercase flex items-center pl-4'>
                        <h2>ver<br/>mas</h2>
                    </div>
                </div>
                <h5 className='md:text-[25px] text-[22px] md:w-[215px]'>Aluzinc</h5>
            </Link>
        </div>
    </div>
  )
}

export default Materiales