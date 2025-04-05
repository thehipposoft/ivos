import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { ALUZINC } from '../constants'

export default function AluzincPage() {
  return (
    <div className='flex flex-col pb-8'>
        <div className='h-[200px] flex items-center'>
            <h4 className='w-[85vw] mx-auto 2xl:w-[1300px]'>ALUZINC</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/aluzinc/aluzinc-1.jpg' gallery={ALUZINC} />
        <div className='flex md:flex-row flex-col 2xl:[1300px] w-[80vw] justify-between mx-auto gap-8 mt-16 mb-12'>
            <div className='flex flex-col gap-4 md:w-[510px]'>
              <p className='text-lg'>Revestimiento metálico de chapa revestida con una disposición macho-hembra que permite el acople de los paneles entre sí. Su característica estética, revela una dramática textura unidireccional, que se puede instalar en cualquier sentido.</p>
              <div className='flex pt-4'>
                <p className='text-lg'><strong>Colocación:</strong></p>
              </div>
              <p className='text-lg'>Sobre un perfil de soporte que debe ser calculado de acuerdo a las normas estructurales pe. CIRSOC cuya forma puede ser CE/ Omega. La fijación es con tornillos autoterrajantes, autoperforantes 8×14 o remaches pop, sobre el ala libre.</p>
            </div>
            <div className='flex flex-col gap-4 md:w-[510px]'>
              <div className='flex'>
                <p className='text-lg'><strong>Material:</strong></p>
              </div>
              <p className='text-lg'>Fabricados en chapa de acero revestido cincalum y/o prepintado espesores 0,5mm o 0,7mm – se conforman en frío en largos de hasta 4.500 mm – De colores prepintados o terminaciones simil madera.</p>
            </div>
        </div>
        <p className='medium text-lg md:py-12 2xl:[1300px] w-[80vw] mx-auto'>Su material, los hace aptos para la intemperie y su gran ventaja el bajo mantenimiento.</p>
    </div>
  )
}
