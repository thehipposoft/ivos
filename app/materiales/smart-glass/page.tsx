import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { SMART_GLASS } from '../constants'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'IVOS | Smart Glass',
  description: 'El Smart Film es la opción perfecta para renovar su sistema gracias a su fácil instalación.',
}

export default function SmartglassPage() {
  return (
    <div className='flex flex-col pb-8'>
        <div className='h-[200px] flex items-center'>
            <h4 className='w-[85vw] mx-auto 2xl:w-[1300px] uppercase'>SMART GLASS</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/smartglass/smartglass.jpg' gallery={SMART_GLASS} />
        <div className='flex lg:flex-row flex-col 2xl:[1300px] w-[80vw] justify-between mx-auto gap-8 mt-16 mb-12'>
            <div className='flex flex-col gap-4 lg:w-[510px]'>
              <p className='text-lg'>El Smart Film es la opción perfecta para renovar su sistema gracias a su fácil instalación. </p>
              <p className='text-lg'>La Smart Film cambia instantáneamente de transpa-rente a transparente al encenderse y apagarse.</p>
              <p className='text-lg'>Brinda privacidad y es ideal tanto para diseños residen-ciales como comerciales.</p>
              <p className='text-lg'>Se pueden aplicar para modernizar sus clínicas, hogares, salas de conferencias, mamparas de oficina, hoteles y mucho más.</p>
              <p className='text-lg'>Ofrece durabilidad, privacidad, extrema claridad y máxima performance.</p>
              <p className='text-lg'>Nuestros productos son originales, y los de mayor transparencia y ángulo de visión del mercado. </p>
              <p className='text-lg'>Es 100% compatible son sistemas de casas inteligentes y se puede aumentar o disminuir el grado de transpa-rencia mediante la utilización de un Dimmer.</p>
            </div>
            <div className='flex flex-col gap-4 lg:w-[510px]'>
            <p className='text-lg'>Ofrece a los usuarios comerciales o residenciales la posibilidad de modificar instantáneamente el entorno de acuerdo a sus necesidades de privacidad.</p>
              <p className='text-lg'>Es privacidad “On Demand”. Con solo pulsar un botón, tendrá la opción de elegir entre un vidrio transparente u opaco.</p>
              <p className='text-lg'>Le otorgará completo control sobre la luminosidad, reflejos, aislación térmica y privacidad, combinando seguridad y confort, con bajo consumo eléctrico.</p>
              <p className='text-lg'>Sobre vidrio liso, del lado interior y van conectadas a una fuente que permite su funciona-miento. La fuente se encuentra conectada al suministro eléctrico.</p>
              <div className='flex'>
                <p className='text-lg'><strong>Colocación:</strong></p>
              </div>
              <p className='text-lg'>Sobre vidrio liso, del lado interior y van conectadas a una fuente que permite su funciona-miento. La fuente se encuentra conectada al suministro eléctrico.</p>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col 2xl:[1300px] w-[85vw] mx-auto lg:mx-0 justify-between py-8'>
            <div className='flex flex-col md:gap-8 gap-12 pt-8 mx-auto md:mx-0'>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto'>Fácil Instalación.</p>
                </div>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto '>Privacidad en instantes.</p>
                </div>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto'>Para uso residencial o comercial.</p>
                </div>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto'>Colocación sobre vidrio liso.</p>
                </div>
            </div>
            <div className='flex flex-col md:gap-6 gap-12 pt-8 '>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto'>Funcionamiento mediante fuente que se conecta<br/> al suministro eléctrico.</p>
                </div>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto '>Diferentes niveles de transparencia.</p>
                </div>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto'>Privacidad “on demand”.</p>
                </div>
                <div className='flex gap-4'>
                <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
                <p className='medium text-[20px] w-[85%] md:w-auto '>Bajo consumo electrico.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
