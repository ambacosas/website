import React from 'react'
import LogoWpp from '@/public/images/wpp.png'
import Image from "next/image";


export default function Whatsapp() {
    return (
        <a target='_blank' href='https://api.whatsapp.com/send?phone=541153366660&text=%C2%A1Hola%20AMBACO!' className='fixed right-4 bottom-4 rounded-full hover:scale-105 hover:cursor-pointer'>
                <Image
                    className="w-[50px]"
                    src={LogoWpp}
                    alt=""
                />
        </a>
    )
}
