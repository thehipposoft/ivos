import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatsApp = () => {

    return(
        <div className='fixed cursor-pointer bottom-[30px] right-[30px] z-40 hover:scale-115 transition-all duration-500'>
           <Link
                href={'https://wa.me/543875296426'}
                target={'_blank'}
                rel="noreferrer"
            >
                <Image
                    alt={'WhatsApp icon'}
                    src={'/assets/images/whatsapp.svg'}
                    width={66}
                    height={66}
                    className='md:w-12 w-16 md:h-12 h-16'
                />
           </Link>
        </div>
    )
}

export default WhatsApp;