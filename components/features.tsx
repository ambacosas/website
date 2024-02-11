"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Tab1 from "@/public/images/i1.jpeg";
import Tab2 from "@/public/images/i3.png";
import {dataEs, dataEn} from "./data";
import { useLanguage } from "./context/LanguageContext";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);
  const {currentLanguage} = useLanguage();
	const servicios = currentLanguage === 'es' ? dataEs.services : dataEn.services;
	const serviciosTab = currentLanguage === 'es' ? dataEs.servicesTab : dataEn.servicesTab;


  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
    const intervalId = setInterval(() => {
      setTab((prevTab) => (prevTab === 1 ? 2 : 1));
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="services" className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 lg:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 lg:pb-16">
            <h1 className="h2 mb-4">{servicios.titulo}</h1>
            <p className="text-xl text-gray-600">{servicios.subtitulo}</p>
          </div>

          {/* Section content */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-6">
            {/* Content */}
            <div
              className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-6 lg:mt-6"
              data-aos="fade-right"
            >
              <div className=" lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">{servicios.titulo2}</h3>
                <p className="text-xl text-gray-600">{servicios.subtitulo2}</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 lg:mb-0">
                {serviciosTab.map((tabs) => (
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== tabs.n
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(tabs.n);
                    }}
                    key={tabs.n}
                  >
                    <div>
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        {tabs.titulo}
                      </div>
                      <div className="text-gray-600">{tabs.texto}</div>
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      <tabs.icon />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className=" flex w-full justify-center lg:ml-5 ml-0 items-center lg:max-w-none lg:w-full lg:col-span-5 md:col-span-6 mb-8 lg:mb-0 lg:order-1">
              <div className="transition-all ">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="lg:max-w-none mx-auto rounded"
                        src={Tab1}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/* <Image className="lg:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="lg:max-w-none mx-auto rounded"
                        src={Tab2}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/* <Image className="lg:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                    </div>
                  </Transition>
                  {/* Item 3 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
