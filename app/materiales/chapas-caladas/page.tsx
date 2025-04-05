import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { CHAPAS_CALADAS } from '../constants'

export default function ChapasCaladasPage() {
  return (
    <div className='flex flex-col'>
        <div className='h-[200px] flex items-center'>
            <h4 className='w-[85vw] mx-auto 2xl:w-[1300px]'>Chapas Caladas</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/placas-pvc/placas-pvc1.jpg' gallery={CHAPAS_CALADAS} />
        <div className='flex flex-col-reverse gap-8 md:gap-0 pt-20 md:flex-row md:w-screen justify-between 2xl:[1300px] w-[85vw] mx-auto'>
          <div className='flex md:flex-row flex-col mx-auto gap-8 md:mt-16 mt-8 mb-12'>
              <div className='flex flex-col gap-4 md:w-[510px]'>
                <p className='text-lg'>Las chapas caladas son una solución versátil y estética para quienes buscan diseño, resistencia y personaliza-ción en elementos arquitectónicos. Fabricadas con tecnología de corte láser CNC, permiten crear patrones únicos con máxima precisión, adaptándose a cualquier proyecto.</p>
              </div>
          </div>
          <div className='flex flex-col md:gap-6 gap-12 pt-8 mx-auto'>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px] w-4/5 md:w-full'>Material resistente y duradero.</p>
            </div>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px] w-4/5 md:w-full'>Diseño moderno y adaptable a distintos estilos.</p>
            </div>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px] w-4/5 md:w-full'>Posibilidad de aplicar diferentes terminaciones y colores.</p>
            </div>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px] w-4/5 md:w-full'>Instalación sencilla en distintos tipos de estructuras.</p>
            </div>
          </div>
        </div>
        <div className='md:flex-row  2xl:[1300px] md:w-[1300px] w-[85vw] mx-auto  justify-between '>
          <p className='medium text-xl'>Aplicaciones</p>
          <ul className='list-disc pl-8 flex flex-col gap-2 pt-4'>
            <li className='text-lg'>Puertas y portones con diseños exclusivos.</li>
            <li className='text-lg'>Barandas de escaleras y balcones con detalles decorativos.</li>
            <li className='text-lg'>Pérgolas que filtran la luz y generan sombras elegantes.</li>
            <li className='text-lg'>Divisores de ambientes o cerramientos con estilo.</li>
            <li className='text-lg'>Fachadas metálicas que combinan diseño y funcionalidad.</li>
          </ul>
        </div>
        <div className='md:flex-row 2xl:[1300px] md:w-[1300px] w-[85vw] mx-auto pt-12 justify-between '>
          <p className='medium text-xl'>Medidas disponibles:</p>
          <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-between'>
            <div>
              <ul className='list-disc pl-8 flex flex-col gap-2 pt-4'>
                <li className='text-lg'>1 x 2 m</li>
                <li className='text-lg'>1,22 x 2,44 m</li>
              </ul>
            </div>
            <div className='rounded-tl-[40px] bg-[#F94E19] md:w-[70vw] flex items-center pl-12 h-[140px]'>
              <p className='medium text-lg'>
              &gt;&gt;También realizamos diseños 100% personalizados, ajustándonos<br/>
              a tu idea y necesidades.&gt;&gt;
              </p>
            </div>
          </div>
          <p className='medium text-lg py-16'>Transformá tus espacios con chapas caladas de diseño único. ¡Contactanos y hacé realidad tu proyecto! </p>
        </div>
    </div>
  )
}
