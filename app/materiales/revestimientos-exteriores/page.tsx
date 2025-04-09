import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { REV_EXTERIOR } from '../constants'
import Image from 'next/image'

export default function RevestimientoExteriorPage() {
  return (
    <div className='flex flex-col'>
        <div className='h-[150px] flex items-center'>
            <h4 className='w-[85vw] mx-auto 2xl:w-[1300px] uppercase'>Revestimiento exterior wpc</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/rev-exteriores/rev-exterior-1.jpg' gallery={REV_EXTERIOR} />
        <div className='flex flex-col-reverse py-6 md:py-0 md:h-screen gap-8 md:gap-32 md:flex-row w-screen justify-between md:justify-end items-center'>
        <div className='flex flex-col gap-4 md:w-[510px] w-[85vw] mx-auto md:mx-0'>
              <p className='text-lg'>Nuestro revestimiento acanalado, conocido como Wall Panel de WPC co-extruído, está proyectado y fabricado tanto para exterior como para interior.</p>
              <p className='text-lg'>Cuenta con diseño exclusivo, combinando aspecto de madera con acabado mate y una textura única, logrando ser apto tanto para uso comercial como uso residencial. Además, ¡no requiere mantenimiento!</p>
              <p className='text-lg'>Resistente al agua y a los rayos solares, compuesto en un 95% de materiales reciclados y el restante de fibra de madera y resinas, ¡nuestro Wall Panel de WPC sin duda es una Excelente elección!</p>
            </div>
          <div className='flex flex-col gap-2 border border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 mt-12 md:mt-0 mx-auto md:mx-0 w-[85vw] md:w-[50vw]'>
              <div className='flex  py-5 px-8 md:pl-16 border-b border-[#DDDDDD]'>
                  <h3 className='text-[#F94E19] text-lg w-96 '>Carecteristicas</h3>
              </div>
              <div className='flex items-center justify-between md:justify-start border-solid border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className='w-fit md:w-72 2xl:w-96'>Peso x Mt 2</h3>
                  <p className='md:text-sm text-xs'>13,2 Kg.</p>
              </div>
              <div className='flex items-center justify-between md:justify-start border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className='w-fit md:w-72 2xl:w-96'>Dimensiones</h3>
                  <p className='md:text-sm text-xs max-w-[140px] md:max-w-full'>Ancho 22 cm x 26 mm espesor x 2,90 mt largo </p>
              </div>
              <div className='flex items-center justify-between md:justify-start border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className='w-fit md:w-72 2xl:w-96'>Origen</h3>
                  <p className='md:text-sm text-xs'>China</p>
              </div>
              <div className='flex items-center justify-between md:justify-start border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-fit md:w-72 2xl:w-96'>Apto Interior/ Exterior</h3>
                  <p className='md:text-sm text-xs'>Ambos</p>
              </div>
              <div className='flex items-center justify-between md:justify-start border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-fit md:w-72 2xl:w-96' >Textura</h3>
                  <p className='md:text-sm text-xs'>Simil Madera</p>
              </div>
              <div className='flex items-center justify-between md:justify-start border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-fit md:w-72 2xl:w-96'>Material</h3>
                  <p className='md:text-sm text-xs'>WPC</p>
              </div>
            </div>
        </div>
    </div>
  )
}
