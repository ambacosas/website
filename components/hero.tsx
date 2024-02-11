"use client"
import VideoThumb from '@/public/images/hero-image.png'
import React, { useEffect, useState } from 'react';
import ModalVideo from '@/components/modal-video'
import {dataEs, dataEn} from  './data';
import Image from 'next/image'
import { useLanguage } from './context/LanguageContext';

export default function Hero() {

  const { currentLanguage } = useLanguage();
	const dataHero = currentLanguage === 'es' ? dataEs.hero : dataEn.hero

  return (
    <section id='#home' className="relative">

      {/* Illustration behind hero content */}
      <div  className="absolute md:left-1/2 -left-[10px] transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor='#0070f4' offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 lg:h-screen h-full">

          {/* Section header */}
          <div className="text-center flex flex-col items-center justify-center pb-12 md:pb-16">
            <h2 className="text-4xl flex flex-col md:text-[4.25rem] font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">{dataHero.titulo}</h2>
            <Image alt='' className='md:w-3/5 sm:w-2/3 w-full mb-4' src={dataHero.span} />
            <div className="max-w-3xl mt-2 mx-auto">
              <h1 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">{dataHero.texto}</h1>
              <div className=" max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-prim hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#contact">{dataHero.boton1}</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#services">{dataHero.boton2}</a>
                </div>
              </div>
            </div>
          </div>
          <div  className="md:hidden absolute -left-[10.75rem] transform -translate-x-1/2 -bottom-[251px] pointer-events-none -z-1" aria-hidden="true">
        <svg width="1200" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor='#0070f4' offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section>
  )
}