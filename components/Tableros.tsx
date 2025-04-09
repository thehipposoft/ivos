import React from 'react'
import SwiperSlider from './SwiperSlider'

interface Slide {
  background: string;
  title: string;
  href: string;
}

const slides: Slide[] = [
  { background: '/assets/images/tableros/chapas.jpg', title: 'Chapas personalizadas', href: 'https://www.pinterest.com/ivosargentina/ivos-chapas-caladas-con-dise%C3%B1o/' },
  { background: '/assets/images/tableros/wpc-exterior.jpg', title: 'WPC Exterior', href: 'https://www.pinterest.com/ivosargentina/ivos-wpc-exterior/' },
  { background: '/assets/images/tableros/paneles-acústicos.jpg', title: 'Paneles Acústicos', href: 'https://www.pinterest.com/ivosargentina/ivos-paneles-ac%C3%BAsticos/' },
  { background: '/assets/images/tableros/placas-marmolizadas.jpg', title: 'Placas PVC Marmolizadas', href: 'https://www.pinterest.com/ivosargentina/ivos-placas-pvc-marmolizadas/' },
  { background: '/assets/images/tableros/revestimiento-interior-pvc.jpg', title: 'Revestimiento Interior PVC', href: 'https://www.pinterest.com/ivosargentina/ivos-revestimiento-interior-pvc/' },
  { background: '/assets/images/tableros/fachadas-metalicas.jpg', title: 'Fachadas Metalicas', href: 'https://www.pinterest.com/ivosargentina/ivos-fachadas-metalicas/' },
  { background: '/assets/images/tableros/vidrio-inteligente.jpg', title: 'Vidrio Inteligente', href: 'https://www.pinterest.com/ivosargentina/ivos-vidrio-inteligente/' },
];

const Tableros = () => {
  return (
    <div className='md:h-screen flex flex-col py-20'>
        <div className='flex flex-col w-[85vw] mx-auto'>
            <p className='text-2xl'>¿Proyecto en mente?</p>
            <h4 className='uppercase'>inspirate con nuestros tableros</h4>
        </div>
        <SwiperSlider slides={slides} />
    </div>
  )
}

export default Tableros