import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Card } from "./Card";
import './service.css'
// import '../img(1)'

const services = [
  {
    title: 'Old Motor Graders',
    img : './img (1).jpg'
  },
  {
    title: 'Old JCB Loader',
    img : './img (2).jpg'
  },
  {
    title: 'Motor Graders',
  img : './img (3).jpg'
  },
  {
    title: 'Old Piling Machine',
  img : './img (4).jpg'
  },
  {
    title: 'Old Piling Machine',
img : './img (5).jpg'
  },
  {
    title: 'Old Piling Machine',
    img : './img (6).jpg'
  },
  {
    title: 'Old Piling Machine',
    img : './img (7).jpg'
  },
  {
    title: 'Old Piling Machine',
    img : './img (8).jpg'
  },
 
];


export default function Services() {
  const [index, setIndex] = useState(0)
  const [img, setImg] = useState(3)

  useEffect(() => {
    const updateImgCount = () => {
      if (window.matchMedia('(max-width: 479px)').matches) {
        setImg(1);
      } else {
        setImg(3);
      }
    };
    updateImgCount();
    
    window.addEventListener('resize', updateImgCount);
    return () => {
      window.removeEventListener('resize', updateImgCount);
    };

  }, []);



  useEffect(()=>{
    const interval = setInterval(() => {
      setTimeout(()=>{
        setIndex((prev)=>(prev+3<services.length ? prev+1 : 0))
      },2000)
    }, 2000);
    return ()=>clearInterval(interval)
  },[])


  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end","start center" ],
  });


  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return (
    <section id="service" className="py-16 overflow-x-hidden  px-6 bg-gray-50 text-center">
      <motion.div ref={ref} style={{ opacity:opacity, y:y }} className="relative" transition={{ duration:0.5 ,delay:5}}>

      <div className="flex flex-col items-center heading mb-8">
        <h2 className="text-3xl font-bold mb-4 tracking-[4px]">SERVICE & PRODUCTS</h2>
        <div className="bg-[#0A1F44] h-1 w-52 mt-[-9px]"></div>
        </div>

        <div className="overflow-hidden max-w-7xl py-8 mx-auto">
        <div 
        style={{
          width: `${(services.length*100)/img}%`,
          transform:`translateX(-${(100/8)*index}%)`,
          
        }}
       className="flex Imgcontainer transition-transform duration-700 ease-in-out">
          {services.map((service, idx) => (
            <div
            className="w-full sm:w-1/2 lg:w-1/3 px-2" 
            key={idx}
            >
              <Card title={service.title}  img={service.img}/>
            </div>
            
          ))}
        </div>
        </div>
      </motion.div>
    </section>
  );
}