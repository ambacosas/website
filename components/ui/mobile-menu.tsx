"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { dataEn, dataEs } from "../data";
import { useLanguage } from "../context/LanguageContext";
import Arg from "@/public/images/Argentina.png";
import Us from "@/public/images/us.png";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const nav = currentLanguage === "es" ? dataEs.nav : dataEn.nav;
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = (e.currentTarget.getAttribute("href") || "").slice(1); // Obtén el href del enlace
    const section = document.getElementById(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileNavOpen(false);
    }
  };
  const itemClick = () => {
    setMobileNavOpen(false);
  };
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            {nav.map((item, index) =>
              !item.button ? (
                <li key={index}>
                  <a
                    href={`#${item.href}`}
                    onClick={scrollToSection}
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </a>
                </li>
              ) : (
                <li  key={index}>
                  <a
                    href={`#${item.href}`}
                    onClick={scrollToSection}
                    className="btn-sm text-gray-200 bg-prim hover:bg-blue-300 ml-3"
                    >
                    <span>{item.name}</span>
                    <svg
                      className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </li>
              )
            )}
            <li>
              <a className="flex justify-center" onClick={handleLanguageToggle}>
                <div className="w-8 h-8 mt-8">
                  <Image
                    className="w-[125px]"
                    src={currentLanguage === "es" ? Arg : Us}
                    alt=""
                  />
                </div>
              </a>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
