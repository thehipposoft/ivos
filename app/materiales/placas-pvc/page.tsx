import GalleryComponent from '@/components/commons/GalleryComponent'
import React from 'react'
import { PLACAS_PVC } from '../constants'
import Image from 'next/image'

export default function PlacasPVCPage() {
  return (
    <div className='flex flex-col'>
        <div className='h-[200px] flex items-center'>
            <h4 className='w-[85vw] mx-auto 2xl:w-[1300px]'>Placas PVC</h4>
        </div>
        <GalleryComponent banner='/assets/images/materiales/placas-pvc/placas-pvc1.jpg' gallery={PLACAS_PVC} />
        <div className='flex md:flex-row flex-col 2xl:[1300px] w-[85vw] md:w-[1100px] mx-auto gap-8 mt-16 mb-12'>
            <div className='flex flex-col gap-4 md:w-[510px]'>
              <p className='text-lg'>Las placas UV son revestimientos de pared ideales para colocar en espacios interiores y semiexteriores gracias a su composición de polvo de calcio y PVC, que las hace muy resistentes.</p>
              <p className='text-lg'>Son impermeables e ignífugas, así que podes colocarlas en cocinas (¡y cerca de las hornallas!) o en el baño (sin riesgo de que las dañe el agua) sin problemas.</p>
              <p className='text-lg'>Las placas UV vienen enteras y cubren aproximadamen-te 2.97m2 pero podes realizar recortes para adaptarlas a tus ambientes. La instalación es súper sencilla, solo vas a necesitar cutter y cemento de contacto, ¡así de simple!</p>
            </div>
            <div className='flex flex-col gap-4 md:w-[510px]'>
              <p className='text-lg'>Al colocarse con cemento doble contacto, garantizá que la pared a cubrir este lo más lisa y nivelada posible para lograr una correcta adherencia y un acabado prolijo. Además, no necesitan mantenimiento porque se limpian con un paño húmedo y repelen el polvo. </p>
              <p className='text-lg'>Beneficio: Al colocarlas con pegamento de contacto, el mismo día en que las colocas, ya vas a poder disfrutar de ese espacio renovado. </p>
              <div className='flex'>
                <p className='text-lg'><strong>Importante:</strong></p>
              </div>
              <p className='text-lg'><strong>No utilizar para revestir pisos o mesadas ya que no cuenta con capa de uso que la proteja en estos casos.</strong></p>
            </div>
        </div>
        <div className='flex flex-col-reverse gap-8 md:gap-0 md:flex-row w-screen justify-between'>
          <div className='flex flex-col gap-6 pt-8 mx-auto'>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px]'>Livianas y fáciles de instalar</p>
            </div>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px]'>Resistentes a la humedad</p>
            </div>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px]'>Bajo mantenimiento</p>
            </div>
            <div className='flex gap-4'>
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9299.954823c-.2295-.148935-.4861-.251199-.7551-.300952-.269-.049752-.5452-.046018-.8127.01099-.2676.057009-.5213.166174-.7467.321259-.2253.15509-.4179.35305-.5668.58259L9.375 19.5625l-5.69305-5.2639c-.20086-.1857-.43633-.3301-.69297-.4248s-.52943-.138-.80278-.1273c-.55206.0217-1.07292.2617-1.448001.6674-.375079.4056-.57365.9436-.552032 1.4957.021619.5521.261658 1.0729.66731 1.448l7.475003 6.9111s.21458.1847.31389.2493c.2295.1491.48612.2514.7552.3012.26908.0498.54534.0461.81303-.0109.2676-.057.5214-.1662.7468-.3213.2254-.1552.4181-.3532.5669-.5829L24.5438 3.83607c.1489-.22947.2512-.48604.3009-.75505.0498-.26901.046-.54519-.011-.81275-.057-.26757-.1662-.52128-.3212-.74664-.1551-.22537-.3531-.41797-.5826-.566807Z" fill="#F94E19"/></svg>
              <p className='medium text-[20px]'>Ignífugas (resistentes al calor)</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 border border-[#DDDDDD] rounded-tl-2xl md:rounded-tl-[55px] pt-4 mx-auto md:mx-0 w-[80vw] md:w-[50vw]'>
              <div className='flex  py-5 px-8 md:pl-16 border-b border-[#DDDDDD]'>
                  <h3 className='text-[#F94E19] text-lg w-96 '>Carecteristicas</h3>
              </div>
              <div className='flex items-center border-solid border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-96'>Peso</h3>
                  <p className=''>18kg</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-96'>Dimensiones</h3>
                  <p className=''>244 x 122 x 0,3 cm</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-96'>Diseño</h3>
                  <p className=''>Alemania</p>
              </div>
              <div className='flex items-center border-b border-[#DDDDDD] py-4 px-8 md:pl-16'>
                  <h3 className=' w-96'>Apto Interior/ Exterior</h3>
                  <p className=''>Interior</p>
              </div>
            </div>
        </div>
        <div className='flex flex-col py-8'>
          <h4 className='uppercase w-[85vw] mx-auto'>variedades</h4>
          <div className='md:flex grid grid-cols-2 flex-row flex-wrap justify-between w-[85vw] py-8 mx-auto gap-8'>
            <div className='flex flex-col gap-2 w-fit relative'>
                <div className='relative md:w-[205px] w-[170px] md:h-[205px] h-[170px] overflow-hidden'>
                    <Image src={'/assets/images/materiales/placas-pvc/placas-1.png'} alt='' fill className=' object-cover rounded-tl-[45px] rounded-br-[25px]' />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-[22px] regular'>Placas de PVC</h5>
                  <h5 className='text-[22px] regular'>Simil Piedra</h5>
                  <h5 className='text-[22px] medium'>Gris Pacifico</h5>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-fit relative'>
                <div className='relative md:w-[205px] w-[170px] md:h-[205px] h-[170px] overflow-hidden'>
                    <Image src={'/assets/images/materiales/placas-pvc/placas-2.png'} alt='' fill className=' object-cover rounded-tl-[45px] rounded-br-[25px]' />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-[22px] regular'>Placas de PVC</h5>
                  <h5 className='text-[22px] regular'>Simil Piedra</h5>
                  <h5 className='text-[22px] medium'>Veta Gris</h5>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-fit relative'>
                <div className='relative md:w-[205px] w-[170px] md:h-[205px] h-[170px] overflow-hidden'>
                    <Image src={'/assets/images/materiales/placas-pvc.png'} alt='' fill className=' object-cover rounded-tl-[45px] rounded-br-[25px]' />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-[22px] regular'>Placas de PVC</h5>
                  <h5 className='text-[22px] regular'>Simil Piedra</h5>
                  <h5 className='text-[22px] medium'>Trazo Gris</h5>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-fit relative'>
                <div className='relative md:w-[205px] w-[170px] md:h-[205px] h-[170px] overflow-hidden'>
                    <Image src={'/assets/images/materiales/placas-pvc/placas-3.jpg'} alt='' fill className=' object-cover rounded-tl-[45px] rounded-br-[25px]' />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-[22px] regular'>Placas de PVC</h5>
                  <h5 className='text-[22px] regular'>Simil Piedra</h5>
                  <h5 className='text-[22px] medium'>Venom</h5>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
