import { motion } from "framer-motion";
import './ChooseUS.css'

const reasons = [
  {
    title: "20+ Years of Experience",
    logo:
      "https://cdn-icons-png.flaticon.com/512/3442/3442327.png",
  },
  {
    title: "Affordable Pricing",
    logo:
      "https://cdn4.iconfinder.com/data/icons/financial-accounting-3/512/Pricing_affordable_discount_pricing-512.png",
  },
  {
    title: "Genuine Parts",
    logo:
      "https://icons.veryicon.com/png/o/construction-tools/industrial-engineering/spare-parts-2.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 bg-white overflow-x-hidden  text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center heading mb-8">
        <h2 className="text-3xl font-bold mb-4 tracking-[4px]">Why Choose Us</h2>
        <div className="bg-[#0A1F44] h-1 w-52 mt-[-9px]"></div>
        </div>
        <div className="flex flex-wrap flex-shrink-1 WhyUsCards gap-6 mt-16 justify-center max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 flex flex-col card  items-center py-5 rounded-xl shadow-md hover:shadow-lg w-80 relative"
            >
               <motion.div 
               initial={{y: 0}}
               whileHover={{y:-20}}              
               className="h-28 w-28 img -top-9 absolute  rounded-full flex items-center justify-center bg-green-400 shadow-md">
                <img
                  src={reason.logo}
                  alt={reason.title}
                  className="object-contain w-[70%]"
                />
               </motion.div>
              <div className="mt-16 text-lg title font-semibold">{reason.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
