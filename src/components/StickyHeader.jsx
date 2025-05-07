import { motion, AnimatePresence } from "framer-motion";
import './header.css'
import { MenuSquare, X } from "lucide-react";
import { useState } from "react";

export default function StickyHeader({ visible }) {
  const [showSlider, setShowSlider] = useState(false)
  const toggle = ()=>{
    setShowSlider(!showSlider)
  }

   const navButton = [
    {
        name: 'Home',
        path: '',
    },
    {
        name: 'About',
        path: '#about'
    },
    {
         name: 'Service & Products',
        path: '#service'
    },
    {
         name: 'Contact',
        path: '#contact'
    },
   ]
   const handleScroll = (targetId) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100,}}
      animate={{ y: visible ? 0 : -100,}}
      transition={{ duration: 0.2 }}
      className="fixed top-0 w-[100vw] header z-50 bg-[#0A1F44] text-white py-5 px-6 shadow-md flex justify-between items-center overflow-x-hidden"
    >
      <h1 className="lg:text-lg md:text-base sm:text-base title font-bold">Friends Auto Electrical</h1>

      {/* //icons for desktop */}
      <ul className="flex lg:space-x-12 md:space-x-10 dskBtn md:hidden sm:hidden  sm:space-x-6 sm:text-sm ">
        {navButton.map((i,index)=>
        <li 
        onClick={() => handleScroll(i.path)} 
        key={index} 
        className="hover:text-[#FFB400] transition cursor-pointer caret-transparent">
         {i.name}
        </li>
        )}
      </ul>
      {/* Icons for mobile */}
      
      <AnimatePresence>
  {showSlider && (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowSlider(false)}
      />

      {/* Slider Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="min-h-screen fixed top-0 slider right-0 z-50 w-[200px] bg-[#263c638d] flex flex-col p-6 text-white"
      >
        <div className="flex justify-end mb-6">
          <X className="cursor-pointer" onClick={() => setShowSlider(false)} />
        </div>
        <ul className="flex flex-col navBtn space-y-6 sm:text-sm">
          {navButton.map((i, index) => (
            <li
              key={index}
              onClick={() => {
                handleScroll(i.path);
                setShowSlider(false); // Close slider on click
              }}
              className="hover:text-[#FFB400] transition cursor-pointer caret-transparent"
            >
              {i.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )}
</AnimatePresence>

      <a
        href="https://wa.me/918178830011"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FFB400] text-black md:hidden sm:hidden lg:px-4 lg:py-2 md:px-3 md:py-1 sm:px-2 sm:py-1 rounded-full sm:text-sm font-semibold"
      >
        Enquire
      </a>

      <MenuSquare id="menu" className={`opacity-${!showSlider ? '1' : '0'} opacity lg:hidden text-white cursor-pointer`}  onClick={toggle}/>
    </motion.header>
  );
}
