import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Card.css'


export const Card = ({
    title,
    img
}) => {
    const [show, setShow] = useState(false);
  return(
     <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-2 rounded-xl relative shadow card hover:shadow-lg "
              onClick={() => window.open("https://wa.me/918178830011", "_blank")}
              onMouseEnter={()=>setShow(true)}
              onMouseLeave={()=>setShow(false)}
            >
                {show && 
                <motion.a
                href="https://wa.me/918178830011"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFB400] enqBtn top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-black absolute  rounded-full font-semibold shadow-md hover:shadow-lg"
      >
        Enquire on WhatsApp
      </motion.a>}

                <img src={img} className='lg:w-[90%] md:w-[40%] sm:w-[30%] object-cover' alt={title} />
              <h3 className="text-xl font-semibold">{title}</h3>
      </motion.div>
   )
  }
