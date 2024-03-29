"use client";

import { useState, useEffect, MouseEvent } from "react";

import Link from "next/link";
import Logo from "@/public/images/logoambaco.png";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import { dataEs, dataEn } from "../data";
import Image from "next/image";
import Arg from "@/public/images/Argentina.png";
import Us from "@/public/images/us.png";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const { currentLanguage, toggleLanguage } = useLanguage();
  const nav = currentLanguage === "es" ? dataEs.nav : dataEn.nav;
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = (e.currentTarget.getAttribute("href") || "").slice(1); // Obtén el href del enlace
    const section = document.getElementById(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (href !== "home") {
        setTop(false);
      } else {
        setTop(true);
      }
    }
  };

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Image className="w-[125px]" src={Logo} alt="" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
								<Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
							</li>
							<li>
								<Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
									<span>Sign up</span>
									<svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
									</svg>
								</Link>
							</li> */}
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
                  <li key={index}>
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
                <a onClick={handleLanguageToggle} className="cursor-pointer ">
                  <div className="w-8 h-8 ml-8 ">
                    <Image
                      className="w-[125px] hover:scale-105"
                      src={currentLanguage === "es" ? Arg : Us}
                      alt=""
                    />
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
