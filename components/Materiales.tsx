import Image from 'next/image'
import React from 'react'

const Materiales = () => {
  return (
    <div className='h-screen flex flex-col w-[85vw] mx-auto'>
        <h4 className='uppercase'>Nuestros Materiales</h4>
        <div className='grid md:gap-10 pt-8 w-full grid-cols-4 grid-rows-2'>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/placas-pvc.png'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-cover rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Placas de PVC</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/paneles-acusticos.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-cover object-top rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Paneles Acústicos</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/rev-interiores-pvc.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-none object-left-top rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Revestimientos interiores de PVC</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/rev-wpc-exteriores.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-cover rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Revestimientos WPC exteriores</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/chapas-caladas.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-cover rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Chapas Caladas</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/perfiles-wpc.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-cover rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Perfiles de WPC</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/smartglass.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Smart Glass</h5>
            </div>
            <div className='flex flex-col gap-2'>
                <Image src={'/assets/images/materiales/aluzinc.jpg'} alt='' width={768} height={768} className='w-[205px] h-[205px] object-cover object-top rounded-tl-[45px] rounded-br-[45px]' />
                <h5>Aluzinc</h5>
            </div>
        </div>
    </div>
  )
}

export default Materiales