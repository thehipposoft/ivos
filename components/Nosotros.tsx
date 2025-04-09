import Image from 'next/image'
import React from 'react'

const Nosotros = () => {
  return (
    <div className='lg:h-[540px] flex flex-col' id='nosotros'>
        <div className='bg-gradient-to-b from-[#F2F2F3] to-[#C8CBCE] flex items-end lg:h-[450px]'>
            <div className='flex flex-col lg:flex-row justify-between w-[85vw] 2xl:w-[1300px] mx-auto'>
                <div className='flex flex-col gap-4 md:pb-12 pt-10 md:pt-0 lg:w-[810px]'>
                    <h4 className='uppercase'>nosotros</h4>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] regular'>Nuestra empresa está <strong>liderada por arquitectos</strong>, lo que nos permite ofrecer más que solo materiales de construcción. </p>
                        <p className='text-[18px] regular'>Comprendemos cada producto desde su funcionalidad hasta su impacto en el diseño, <strong>brindando asesoramiento especializado para optimizar cada proyecto.</strong></p>
                        <p className='text-[18px] regular'>Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes. <strong>No solo vendemos insumos, sino que ayudamos a construir espacios mejor diseñados y más eficientes.</strong></p>
                    </div> 
                </div>
                <div className='flex relative overflow-hidden w-[85vw] lg:w-[480px] h-[280px] lg:h-auto'>
                    <Image className='absolute -bottom-12 right-24 w-[440px]' src={'/assets/images/nosotros/Nacho.png'} alt='Arq. Nieva Toppa' width={473} height={430} />
                    <Image className='absolute -bottom-16 -right-20 w-[460px]' src={'/assets/images/nosotros/belen.png'} alt='Arq. Borigen' width={477} height={435} />
                </div>
            </div>
        </div>
        <div className='h-[90px] relative w-screen flex items-center'>
            <Image src={'/assets/images/nosotros/nosotros-banne.png'} alt='' fill className='object-cover' />
            <div className='flex relative z-10 justify-end w-[90vw] 2xl:w-[1300px] mx-auto'>
                <div className='flex gap-8 bg-white h-[50px] items-center rounded-tl-[30px] rounded-br-[30px] md:px-16 px-6'>
                    <p className='bold uppercase text-sm'>Arq. Ignacio Nieva Toppa</p>
                    <p className='bold uppercase text-sm'>Arq Belén Borigen </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nosotros