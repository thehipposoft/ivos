import React from 'react'

const Novedad = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col'>
                <h2 className='uppercase md:text-[80px]'>novedad &lt;</h2>
                <button className='md:w-[180px] md:h-[80px] bg-[#F94E19] rounded-tl-[30px] rounded-br-[30px]'>
                    <h2 className='uppercase'> ver video</h2>
                </button>
            </div>
            <div>
                <h3 className='uppercase md:text-[70px] '>smart glass</h3>
                <h3 className='uppercase md:text-[42px] regular'>vidrios inteligentes</h3>
            </div>
        </div>
    </div>
  )
}

export default Novedad