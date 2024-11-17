import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const fadeInVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center"
          initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              {experience.role} -{" "}
              <span className="text-sm text-stone-500">{experience.company}</span>
            </h3>
            <p className="mb-4 text-stone-400">{experience.description}</p>
            {experience.technologies.map((tech, techIndex) => (
              <span
                className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                key={techIndex}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
