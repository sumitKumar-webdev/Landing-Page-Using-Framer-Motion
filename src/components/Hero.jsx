import { easeInOut, motion } from "framer-motion";
import { ArrowDown, Mouse } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#0A1F44] relative overflow-x-hidden  text-white min-h-screen flex flex-col items-center justify-center px-6 text-center ">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:text-4xl md:text-3xl sm:text-xl font-bold mb-4"
      >
        Friends Auto Electrical
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:text-base md:text-base sm:text-sm mb-6 max-w-xl"
      >
        Serving Faridabad with Reliable Repairs, Installations & Automotive Electrical Expertise
      </motion.p>
      <motion.a
        href="https://wa.me/918178830011"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FFB400] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg"
      >
        Enquire on WhatsApp
      </motion.a>

      <motion.div
      animate={{y:[-20,20,-20]}}
      transition={{duration:2, repeat:Infinity, ease:'easeInOut',}}
       className="flex flex-col items-center absolute bottom-10 justify-center flex-1">
        Scroll Down to Explore
      <ArrowDown size={40}/>
    </motion.div>
    </section>
  );
}
