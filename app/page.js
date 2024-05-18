'use client'
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Description from "./components/description";
import Menu from "./components/menu";
import Skills from "./components/skills";
import Samples from "./components/samples";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";

export default function Home() {

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true);
  const [navBarHeight, setNavBarHeight] = useState(0)
  const navRef = useRef(null);

  useEffect(() => {
    setNavBarHeight(navRef.current.offsetHeight)
  }, []) 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible( prevScrollPos > currentScrollPos || currentScrollPos < 20)
      setPrevScrollPos(currentScrollPos);

      if (!visible) {
        navRef.current.style.top = `-${navBarHeight + 5}px`;
      } else {
        navRef.current.style.top = `0`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible, navBarHeight])

  return (
    <div className="flex flex-col items-center">
      <div className="bg-mainBG min-h-screen mx-5 text-white max-w-[860px] lg:max-w-[1280px]">
        <div className="sm:hidden">
          <Menu/>
        </div>
  
        <div ref={navRef} className={`fixed top-0 left-0 w-full transition-all 0.6s ease-in-out z-50`}>
          <div className="hidden sm:block">
            <Navbar/>
          </div>
        </div>
  
        <div className={`sm:text-3xl mt-10 sm:mt-[105px] pb-10 lg:pb-28 border-b border-theme lg:mt-[180px]`}>
          <Hero/>
        </div>
  
        <div className="border-b border-theme">
          <Description/>
        </div>
  
        <div className="border-b border-theme">
            <Skills/>
        </div>
  
        <div className="border-b border-theme">
          <Samples/>
        </div>
  
        <div className="border-b border-theme md:border-b-0">
          <CallToAction/>
        </div>
      </div>

      <div className="text-white footer w-full border-t border-theme">
        <Footer/>
      </div>
    </div>
  )
}
