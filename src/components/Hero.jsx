import profilePic from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <motion.div
      className="pd-4 lg:mb-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2"
          variants={childVariants}
        >
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Ravi Kumar"
              className="border border-stone-900 rounded-3xl"
              variants={imageVariants}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          variants={childVariants}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              variants={childVariants}
            >
              Paman Yuthmika
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              variants={childVariants}
            >
              IT Undergraduate student
            </motion.span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              variants={childVariants}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/my.pdf"
              target="_blank"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              variants={childVariants}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
