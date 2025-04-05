import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { PERFILES_WPC } from '../constants'

export default function PlacasPVCPage() {
  return (
    <div className='flex flex-col'>
        <div className='h-[200px] flex items-center'>
            <h4 className='w-[85vw] mx-auto 2xl:w-[1300px]'>PERFILES DE WPC</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/perfiles-wpc/perfiles-1.jpg' gallery={PERFILES_WPC} />
        <div className='flex md:flex-row flex-col 2xl:[1300px] w-[85vw] md:w-[1100px] mx-auto gap-8 mt-16 mb-12'>
            <div className='flex flex-col gap-4 md:w-[510px]'>
              <p className='text-lg'>Los perfiles de WPC (Wood Plastic Composite) tienen todas las ventajas de la madera sin sus inconvenientes. Además de ser 100% resistentes al agua, la mezcla de resina de celulosa y PVC les permiten ser resistente a los rayos UV, a sustancias químicas como el cloro y a los golpes.</p>
              <p className='text-lg'>Vienen en 3 formatos diferentes, lo que permite lograr diferentes diseños</p>
              <p className='text-lg'>Nuestros perfiles son ideales para utilizarse con fines decorativos, tanto en exterior como en interior.</p>
            </div>
            <div className='flex flex-col gap-4 md:w-[510px]'>
              <p className='text-lg'>Cuentan con textura rústica, símil madera, y se fabrican en diversos colores </p>
              <p className='text-lg'>No requieren mantenimiento, posibilitándote disfrutarlos por más tiempo, sin esfuerzos ni gastos extras.</p>
              <p className='text-lg'>Permiten renovar tu hogar y crear proyectos en poco tiempo.</p>
              <p className='text-lg'>Podés utilizarlos en pérgolas, parasoles, persianas, cercos, aberturas, cerramientos, revestimientos en paredes, techos, y todo lo que proyectes.</p>
            </div>
        </div>
        <div className='flex md:flex-wrap flex-col gap-8 md:gap-16 py-12 md:flex-row w-[85vw] mx-auto justify-center'>
          <div className='flex flex-col gap-2 border border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 mx-auto md:mx-0 w-[85vw] md:w-[550px]'>
              <div className='flex py-5 px-8  border-b border-[#DDDDDD]'>
                  <h3 className='text-[#F94E19] text-xl w-96 '>Características Perfil PHR 42-21</h3>
              </div>
              <div className='flex items-center border-solid border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Espesor</h3>
                  <p className=''>Alto 4 cm</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Medida de Listón</h3>
                  <p className=''>Ancho 2 cm x 3 mt largo</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Peso</h3>
                  <p className=''>2,5 Kg</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8'>
                  <h3 className=' w-96'>Textura</h3>
                  <p className=''>Simil madera</p>
              </div>
          </div>
          <div className='flex flex-col gap-2 border border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 mx-auto md:mx-0 w-[85vw] md:w-[550px]'>
              <div className='flex  py-5 px-8  border-b border-[#DDDDDD]'>
                  <h3 className='text-[#F94E19] text-xl w-96 '>Características Perfil PHR 60- 42</h3>
              </div>
              <div className='flex items-center border-solid border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Espesor</h3>
                  <p className=''>Alto 6 cm</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Medida de Listón</h3>
                  <p className=''>Ancho 4 cm  x 3 mt largo </p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Peso</h3>
                  <p className=''>5 Kg</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Textura</h3>
                  <p className=''>Simil madera</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 border border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 mx-auto md:mx-0 w-[85vw] md:w-[550px]'>
              <div className='flex  py-5 px-8  border-b border-[#DDDDDD]'>
                  <h3 className='text-[#F94E19] text-xl w-96 '>Características Perfil PHR 102- 52</h3>
              </div>
              <div className='flex items-center border-solid border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Espesor</h3>
                  <p className=''>Alto 5 cm</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Medida de Listón</h3>
                  <p className=''>Ancho 10 cm  x 3 mt largo </p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Peso</h3>
                  <p className=''>7,5 Kg</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 '>
                  <h3 className=' w-96'>Textura</h3>
                  <p className=''>Simil madera</p>
              </div>
            </div>
        </div>
    </div>
  )
}
