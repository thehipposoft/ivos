'use client'
import Image from "next/image";
import { useState } from "react";

type Proyect = {
  src: string,
  alt: string,
  title: string
}

type SliderProps = {
  proyects: Proyect[];
};

const Slider: React.FC<SliderProps> = ({ proyects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? proyects.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === proyects.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="relative md:w-screen w-[95vw] rounded-2xl md:rounded-none h-screen max-h-[620px] mx-auto bg-black/80">
        {/* Image Slides */}
        <div className="relative w-full h-full">
          {proyects.map((val, index) => (
            <div key={index}>
              <Image
                  fill
                  src={val.src}
                  alt={val.alt}
                  className={`absolute rounded-2xl md:rounded-none w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
                      index === currentIndex ? "opacity-100  z-10" : "opacity-0 z-0"
                  }`}
                  style={{ transition: "opacity 1s ease-in-out, transform 1s ease-in-out" }}
                />
                <div className={`${index === currentIndex ? "opacity-100  z-10" : "opacity-0 z-0"} absolute z-20 bottom-0 left-0 flex bg-white py-2 px-12 rounded-tl-[30px] rounded-br-[30px]`}>
                    <p className="text-[30px] text-[#F94E19]">{val.title}</p>
                </div>
            </div>
          ))}
          
        </div>
  
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="cursor-pointer absolute z-20 top-1/2 left-6 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white shadow-lg hover:bg-black/70 transition"
        >
            <svg width="31" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33154 14.5 14.9056 27m13.6219-12.5H2.33154 28.5275Zm-26.19596 0L14.9056 2 2.33154 14.5Z" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
  
        <button
          onClick={nextSlide}
          className="cursor-pointer absolute z-20 top-1/2 right-6 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white shadow-lg hover:bg-black/70 transition"
        >
          <svg className="rotate-[180deg]" width="31" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33154 14.5 14.9056 27m13.6219-12.5H2.33154 28.5275Zm-26.19596 0L14.9056 2 2.33154 14.5Z" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
  
        {/* Navigation Dots */}
        <div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {proyects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 cursor-pointer rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-[#F94E19]" : ""
              }`}
            >
              {
                currentIndex === index ? <></> : <Image src={'/assets/images/boton.svg'} alt="" width={20} height={20} />
              }
            </button>
          ))}
        </div>
      </div>
    );
  };

export default Slider;