'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar';
import Link from 'next/link';
import {FreeMode, Pagination, Navigation, Scrollbar, A11y} from 'swiper/modules'
import Image from 'next/image';

const SwiperSlider = ({ slides }:any) => {
    return (
        <div>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    720: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
                speed={500}
                scrollbar={{ draggable: true }}
                freeMode={true}
                modules={[FreeMode, Pagination, Navigation, Scrollbar, A11y]}
                className='md:max-w-[1250px] mx-auto my-12 cursor-grab md:h-[360px] h-[400px]'
            >
                <div className='flex cursor-grab'>
                    {
                        slides.map((value:any, index:any) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center md:w-[250px] h-[320px] bg-white hover:shadow-xl duration-700 mx-auto'>
                                    <div className={`relative md:w-[300px] w-[340px] min-h-[360px] md:min-h-[320px] group cursor-pointer`}>
                                        <Link href={value.href} target='_blank' className=''>
                                            <Image src={`${value.background}`} fill alt='' objectPosition='center center' objectFit='cover' className='' />
                                            <div className='flex flex-col justify-end pt-4 absolute h-full w-full left-0 top-0 bg-black/30 md:opacity-40 duration-700 group-hover:opacity-100'>
                                                <svg className='absolute left-4 top-4 w-12 h-12' width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.32 34.195c1.68.5075 3.3775.805 5.18.805 4.6413 0 9.0925-1.8437 12.3744-5.1256C33.1563 26.5925 35 22.1413 35 17.5c0-2.2981-.4526-4.5738-1.3321-6.697-.8795-2.12316-2.1685-4.05234-3.7935-5.67737-1.6251-1.62502-3.5542-2.91406-5.6774-3.79352C22.0738.452651 19.7981 0 17.5 0s-4.5738.452651-6.697 1.33211c-2.12316.87946-4.05234 2.1685-5.67737 3.79352C1.84374 8.40752 0 12.8587 0 17.5c0 7.4375 4.6725 13.825 11.27 16.345-.1575-1.365-.315-3.6225 0-5.18l2.0125-8.645s-.5075-1.015-.5075-2.625c0-2.415 1.505-4.2175 3.22-4.2175 1.505 0 2.205 1.1025 2.205 2.52 0 1.505-.9975 3.6575-1.505 5.7225-.2975 1.715.91 3.22 2.66 3.22 3.115 0 5.53-3.325 5.53-8.015 0-4.2-3.01-7.07-7.3325-7.07-4.935 0-7.84 3.675-7.84 7.5425 0 1.505.49 3.0275 1.295 4.025.1575.105.1575.245.105.5075l-.5075 1.9075c0 .2975-.1925.4025-.49.1925-2.24-.98-3.535-4.165-3.535-6.7375 0-5.53 3.92-10.5525 11.48-10.5525 6.02 0 10.71 4.3225 10.71 10.0625 0 6.02-3.7275 10.85-9.065 10.85-1.6975 0-3.36-.91-3.955-1.9775l-1.1725 4.1475c-.4025 1.505-1.505 3.5175-2.2575 4.725v-.0525Z" fill="#fff"/></svg>
                                                <h2 className='text-xl text-white font-bold p-4 md:opacity-0 duration-700 group-hover:opacity-100'>{value.title}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
