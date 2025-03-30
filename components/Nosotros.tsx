import Image from 'next/image'
import React from 'react'

const Nosotros = () => {
  return (
    <div className='h-[540px] flex flex-col'>
        <div className='bg-[#c8cbce] flex items-end md:h-[450px]'>
            <div className='flex justify-between w-[85vw] mx-auto'>
                <div className='flex flex-col gap-4 md:w-[810px]'>
                    <h4 className='uppercase'>nosotros</h4>
                    <div className='flex flex-col gap-2'>
                        <p>Nuestra empresa está liderada por arquitectos, lo que nos permite ofrecer más que solo materiales de construcción. </p>
                        <p>Comprendemos cada producto desde su funcionalidad hasta su impacto en el diseño, brindando asesoramiento especializado para optimizar cada proyecto.</p>
                        <p>Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes. No solo vendemos insumos, sino que ayudamos a construir espacios mejor diseñados y más eficientes.</p>
                    </div>
                </div>
                <div className='flex relative'>
                    <Image className='absolute' src={'/assets/images/nosotros/Nacho.png'} alt='Arq. Nieva Toppa' width={473} height={430} />
                    <Image className='absolute' src={'/assets/images/nosotros/belen.png'} alt='Arq. Borigen' width={477} height={435} />
                </div>
            </div>
        </div>
        <div className='md:h-[90px] bg-orange-600'>

        </div>
    </div>
  )
}

export default Nosotros