import { motion } from "framer-motion";
import './contactStyle.css'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 overflow-x-hidden  bg-gray-50 text-center">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
       <div className="flex flex-col items-center heading mb-8">
        <h2 className="text-3xl font-bold mb-4 tracking-[4px]">Contact Us</h2>
        <div className="bg-[#0A1F44] h-1 w-32 mt-[-9px]"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-10">
          
          <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }} 
          className="text-left space-y-2 address max-w-md">
            <p className="text-lg"><strong>Address:</strong> Sector 6, Faridabad, Haryana</p>
            <p className="text-lg"><strong>Phone:</strong> +91 9999999999</p>
            <p className="text-lg"><strong>Email:</strong> info@friendsautoelectrical.com</p>
          </motion.div>

          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full map lg:w-[500px] h-[290px]">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14043.66864331994!2d77.30850849781292!3d28.361353995236396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc77106cfb5f%3A0x295d6a852d53658a!2sSector%206%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1746616914563!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        <motion.a
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease:'easeIn' }}
        viewport={{ once: true }}
          href="https://wa.me/918178830011"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00C2A8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#009f8e] button "
        >
          Chat on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
