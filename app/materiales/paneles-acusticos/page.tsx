import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { PANELES_ACUSTICOS } from '../constants'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'IVOS | Paneles Acústicos',
  description: 'Los paneles acústicos se pueden utilizar en oficinas, restaurantes, salas de reuniones, bibliotecas, hoteles, residencias, entre otros.',
}

export default function PanelesAcusticosPage() {
  return (
    <div className='flex flex-col'>
        <div className='h-[150px] flex items-center'>
            <h4 className='w-[85vw] mx-auto uppercase 2xl:w-[1300px]'>Paneles Acústicos</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/paneles-acusticos/paneles-1.jpg' gallery={PANELES_ACUSTICOS} />
        <div className='md:h-screen flex flex-col justify-center md:gap-6 gap-4 py-8 md:py-0 lg:w-[1200px] w-[85vw] mx-auto'>
            <p className='text-[22px]'>Los paneles acústicos tienen muchas ventajas, entre las que se encuentran:</p>
            <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between'>
                <div className='flex flex-col gap-6 pt-8 mx-auto'>
                    <div className='flex gap-4'>
                        <svg className='w-[25px] h-[25px]' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                        <p className='lg:w-full w-[90%] text-[20px]'><strong>Reduccion del ruido: </strong>Los paneles acústicos absorben el sonido y reducen el eco, lo que ayuda<br /> a disminuir el ruido ambiental. </p>
                    </div>
                    <div className='flex gap-4'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                        <p className='lg:w-full w-[90%] text-[20px]'><strong>Aislamiento: </strong>Los paneles acústicos pueden ayudar a aislarse del ruido exterior.  </p>
                    </div>
                    <div className='flex gap-4'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                        <p className='lg:w-full w-[90%] text-[20px]'><strong>Privacidad: </strong>Los paneles acústicos pueden ayudar a aumentar la privacidad, ya que pueden evitar<br /> que los demás escuchen las conversaciones. </p>
                    </div>
                    <div className='flex gap-4'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                        <p className='lg:w-full w-[90%] text-[20px]'><strong>Comodidad: </strong>Los paneles acústicos pueden ayudar a crear un ambiente de calma y tranquilidad.  </p>
                    </div>
                    <div className='flex gap-4'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                        <p className='lg:w-full w-[90%] text-[20px]'><strong>Decoración: </strong>Los paneles acústicos pueden ser un elemento estético más, gracias a sus diferentes acabados. </p>
                    </div>
                    <div className='flex gap-4'>
                        <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                        <p className='lg:w-full w-[90%] text-[20px]'><strong>Facilidad de Instalación: </strong>Los paneles acústicos pueden montarse de forma fácil y sencilla tanto en paredes<br /> como en techos.</p>
                    </div>
                    <p className=' text-[20px]'><strong>Los paneles acústicos se pueden utilizar en oficinas, restaurantes, salas de reuniones, bibliotecas, hoteles, residencias, entre otros.</strong></p>
                </div>
            </div>
        </div>
    </div>
  )
}
