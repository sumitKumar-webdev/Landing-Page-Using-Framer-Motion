import { motion } from "framer-motion";
import './aboutStyle.css'

export default function About() {
  return (
    <section id="about" className="py-16 px-6 overflow-x-hidden bg-white text-center ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative "
      >
        {/* Heading */}
        <div className="flex flex-col items-center heading mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[4px] mb-2">ABOUT US</h2>
          <div className="bg-[#0A1F44] h-1 w-32"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 contentArea items-center justify-center">
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
              src="https://5.imimg.com/data5/DP/XZ/FV/SELLER-26140109/motor-grader1-250x250.png"
              alt="Motor Grader"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg text-justify leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi, fugiat soluta optio cum minus ipsum doloremque eos natus unde nesciunt quo, qui iure cupiditate. Quas in eius laborum harum?
            Eveniet aperiam recusandae tempora necessitatibus, fugit harum deleniti molestiae, praesentium quod quos perferendis adipisci blanditiis? Excepturi quam nemo fuga recusandae, cum harum adipisci vitae corporis ducimus facilis quod tempora! Cum!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
