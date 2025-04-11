import React from 'react'
import Slider from './commons/Slider'

const IMAGES = [
  {
    src: '/assets/images/banner/banner.jpg',
    alt: 'Proyecto 1',
    title: 'Revestimientos WPC Interiores'
  },
  {
    src: '/assets/images/materiales/paneles-acusticos.jpg',
    alt: 'Proyecto 2',
    title: 'Title two'
  },
  {
    src: '/assets/images/materiales/aluzinc.jpg',
    alt: 'Proyecto 3',
    title: 'Title three'
  },
]

const Proyectos = () => {
  return (
    <div className='flex flex-col my-20'>
        <div className=''>
            <h4 className='uppercase w-[85vw] mx-auto pb-8'>Nuestros proyectos</h4>
            <Slider proyects={IMAGES} />
        </div>
    </div>
  )
}

export default Proyectos