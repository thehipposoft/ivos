import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#01222C] gap-16 flex flex-col'>
      <div className='w-[85vw] py-8 px-12 gap-8 lg:gap-0 flex lg:flex-row flex-col justify-between lg:items-center border-b border-r border-[#F94E19] mx-auto'>
        <Image className='w-[180px] h-[75px] mx-auto md:mx-0' src={'/assets/images/logo-blanco.png'} alt='Logo IVOS blanco' width={558} height={237} />
        <div className='flex lg:justify-center items-center gap-2'>
          <div className='rounded-full bg-white w-12 h-12 flex justify-center items-center'>
            <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0c2.3869 0 4.6761.948211 6.364 2.63604C17.0518 4.32387 18 6.61305 18 9c0 3.074-1.676 5.59-3.442 7.395-.8823.8921-1.8451 1.7008-2.876 2.416l-.426.29-.2.133-.377.24-.336.205-.416.242c-.28237.1612-.60187.2459-.927.2459-.32513 0-.64463-.0847-.927-.2459l-.416-.242-.52-.32-.192-.125-.41-.273c-1.11217-.7525-2.1481-1.6119-3.093-2.566C1.676 14.589 0 12.074 0 9c0-2.38695.948211-4.67613 2.63604-6.36396C4.32387.948211 6.61305 0 9 0Zm0 6c-.39397 0-.78407.0776-1.14805.22836-.36398.15077-.69469.37174-.97327.65032-.27858.27858-.49955.60929-.65032.97327C6.0776 8.21593 6 8.60603 6 9c0 .39397.0776.78407.22836 1.1481.15077.3639.37174.6946.65032.9732.27858.2786.60929.4996.97327.6503C8.21593 11.9224 8.60603 12 9 12c.79565 0 1.5587-.3161 2.1213-.8787C11.6839 10.5587 12 9.79565 12 9c0-.79565-.3161-1.55871-.8787-2.12132C10.5587 6.31607 9.79565 6 9 6Z" fill="#F94E19"/></svg>
          </div>
          <p className='text-white'> Balcarce 1587, Salta Capital</p>
        </div>
        <div className='flex lg:justify-center items-center  gap-2'>
          <div className='rounded-full bg-white w-12 h-12 flex justify-center items-center'>
            <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.332 1.37891c.3868.10547.668.42187.668.80859C19 11.2227 11.6875 18.5 2.6875 18.5c-.42188 0-.73828-.2461-.84375-.6328L1 14.2109c-.070312-.3867.10547-.8086.49219-.9843l3.9375-1.6875c.35156-.1407.73828-.0352.98437.2461l1.75782 2.1445c2.74222-1.3008 4.95702-3.5508 6.22262-6.22267L12.25 5.94922c-.2812-.2461-.3867-.63281-.2461-.98438l1.6875-3.9375c.1758-.386715.5977-.597652.9844-.492184l3.6562.843754Z" fill="#F94E19"/></svg>
          </div>
          <Link className='text-white hover:underline' href={'tel:+543875296426'}>+54 9 387 529-6426</Link>
        </div>
        <div className='flex gap-6 justify-between md:justify-start hidden'>
            <Link href={'/'}>
              <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0625.625c.9141 0 1.6875.77344 1.6875 1.6875v12.375c0 .9492-.7734 1.6875-1.6875 1.6875H9.21094v-5.3438H11.25L11.6367 8.5H9.21094V6.88281c0-.70312.35156-1.37109 1.44136-1.37109h1.0899V3.36719s-.9844-.17578-1.96876-.17578c-1.96875 0-3.26953 1.23047-3.26953 3.41015V8.5H4.28906v2.5312h2.21485v5.3438H1.6875C.738281 16.375 0 15.6367 0 14.6875V2.3125C0 1.39844.738281.625 1.6875.625h12.375Z" fill="#fff"/></svg>
            </Link>
            <Link href={'/'}>
              <svg width="17" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9508.910156c1.1987 0 2.3482.476164 3.1958 1.323744.8476.84758 1.3237 1.99715 1.3237 3.19581V12.661c0 1.1987-.4761 2.3482-1.3237 3.1958-.8476.8476-1.9971 1.3238-3.1958 1.3238H4.71951c-1.19866 0-2.34823-.4762-3.19581-1.3238C.676117 15.0092.199951 13.8597.199951 12.661V5.42971c0-1.19866.476166-2.34823 1.323749-3.19581C2.37128 1.38632 3.52085.910156 4.71951.910156h7.23129ZM8.33515 5.42971c-.95893 0-1.87858.38093-2.55665 1.059-.67806.67806-1.05899 1.59772-1.05899 2.55664 0 .95895.38093 1.87855 1.05899 2.55665.67807.6781 1.59772 1.059 2.55665 1.059.95893 0 1.87855-.3809 2.55665-1.059.6781-.6781 1.059-1.5977 1.059-2.55665 0-.95892-.3809-1.87858-1.059-2.55664-.6781-.67807-1.59772-1.059-2.55665-1.059Zm0 1.80782c.47946 0 .93929.19047 1.27832.5295.33903.33903.52953.79886.52953 1.27832 0 .47947-.1905.93929-.52953 1.27835-.33903.339-.79886.5295-1.27832.5295-.47947 0-.93929-.1905-1.27832-.5295-.33904-.33906-.5295-.79888-.5295-1.27835 0-.47946.19046-.93929.5295-1.27832.33903-.33903.79885-.5295 1.27832-.5295Zm4.06755-3.16369c-.2397 0-.4696.09524-.6391.26475-.1695.16952-.2648.39943-.2648.63917 0 .23973.0953.46964.2648.63916.1695.16951.3994.26475.6391.26475.2398 0 .4697-.09524.6392-.26475.1695-.16952.2648-.39943.2648-.63916 0-.23974-.0953-.46965-.2648-.63917-.1695-.16951-.3994-.26475-.6392-.26475Z" fill="#fff"/></svg>
            </Link>
            <Link href={'/'}>
              <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.632 16.382c.768.232 1.544.368 2.368.368 2.1217 0 4.1566-.8429 5.6569-2.3431C15.1571 12.9066 16 10.8717 16 8.75c0-1.05057-.2069-2.09086-.609-3.06147-.402-.9706-.9913-1.85252-1.7341-2.59538-.7429-.74287-1.6248-1.33215-2.5954-1.73419C10.0909.956926 9.05058.75 8 .75c-1.05057 0-2.09086.206926-3.06147.60896-.9706.40204-1.85252.99132-2.59538 1.73419C.842855 4.59344 0 6.62827 0 8.75c0 3.4 2.136 6.32 5.152 7.472-.072-.624-.144-1.656 0-2.368l.92-3.952s-.232-.464-.232-1.2c0-1.104.688-1.928 1.472-1.928.688 0 1.008.504 1.008 1.152 0 .688-.456 1.672-.688 2.616-.136.784.416 1.472 1.216 1.472 1.424 0 2.528-1.52 2.528-3.664 0-1.92-1.376-3.232-3.352-3.232-2.256 0-3.584 1.68-3.584 3.448 0 .688.224 1.384.592 1.84.072.048.072.112.048.232l-.232.872c0 .136-.088.184-.224.088-1.024-.448-1.616-1.904-1.616-3.08 0-2.528 1.792-4.824 5.248-4.824 2.752 0 4.896 1.976 4.896 4.6 0 2.752-1.704 4.96-4.144 4.96-.776 0-1.536-.416-1.808-.904l-.536 1.896c-.184.688-.688 1.608-1.032 2.16v-.024Z" fill="#fff"/></svg>
            </Link>
            <Link href={'/'}>
              <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.53564 15.9102H.266113V5.39844H3.53564V15.9102ZM1.8833 3.99219c-1.01953 0-1.8632805-.87891-1.8632805-1.9336C.0200195 1.03906.86377.195312 1.8833.195312c1.05469 0 1.89844.843748 1.89844 1.863278 0 1.05469-.84375 1.9336-1.89844 1.9336ZM15.7349 15.9102h-3.2344v-5.0977c0-1.23047-.0352-2.77734-1.7227-2.77734-1.68747 0-1.93356 1.30078-1.93356 2.67184v5.2032H5.57471V5.39844h3.1289v1.4414h.03516c.45703-.80859 1.51173-1.6875 3.09373-1.6875 3.3047 0 3.9375 2.17969 3.9375 4.99216v5.7657h-.0351Z" fill="#fff"/></svg>
            </Link>
        </div>
      </div>
      <div className='w-[85vw] md:px-6 flex flex-col lg:flex-row md:gap-28 gap-8 mx-auto'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.7404858464733!2d-65.4106297!3d-24.7700855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3d7c9590759%3A0x241c18ada1bffa66!2sIVOS%20-%20Revestimientos%20Alternativos!5e0!3m2!1sen!2smx!4v1743870234313!5m2!1sen!2smx" 
          width="450" 
          height="300"
          style={{border: '0'}}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className='w-[85vw] md:w-[450px] h-[300px] md:h-[300px]'
        >
        </iframe>
        <div className='flex flex-col gap-4'>
          <h5 className='text-white underline text-2xl bold'>Materiales</h5>
          <Link className='text-white w-fit hover:underline' href={'/materiales/perfiles-wpc'}>Perfiles WPC</Link>
          <Link className='text-white w-fit hover:underline' href={'/materiales/revestimientos-interiores'}>Revestimientos WPC interiores</Link>
          <Link className='text-white w-fit hover:underline' href={'/materiales/revestimientos-exteriores'}>Revestimientos WPC exteriores </Link>
          <Link className='text-white w-fit hover:underline' href={'/materiales/placas-pvc'}>Placas pvc Simil piedra</Link>
          <Link className='text-white w-fit hover:underline' href={'/materiales/smart-glass'}>Smart Glass</Link>
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='text-white underline text-2xl bold'>Nosotros</h5>
          <Link className='text-white w-fit hover:underline' href={'/#contacto'}>Contacto</Link>
          <Link className='text-white w-fit hover:underline hidden' href={''}>Preguntas Frecuentes</Link>
          <Link className='text-white w-fit hover:underline' href={'mailto:ivos.argentina@gmail.com'}>ivos.argentina@gmail.com</Link>
          <Link className='text-white w-fit hover:underline hidden' href={''}>Trabajá con nosotros</Link>
        </div>
      </div>
      <Image src={'/assets/images/footer.png'} alt='' width={1216} height={116} className='mx-auto w-[85vw]'/>
      <div className='md:w-[85vw] w-[90vw] mx-auto flex justify-center'>
        <Link href={'https://www.thehipposoft.com/'} target='_blank' className='text-white/50 md:text-lg py-5 hover:underline'>Created by <strong className='text-white'>HippoSoft</strong> | All Right Reserved</Link>
      </div>
    </div>
  )
}

export default Footer