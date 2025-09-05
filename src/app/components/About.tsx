import { motion } from 'framer-motion';





const skills = [
  "HTML", "CSS", "React", "Next.js", "TypeScript", "Node.js",
  "Python", "Express.js", "MongoDB", "SQL", "MySQL", "OpenAI Agent SDK", "Docker",
  "Git", "GitHub", "FastAPI", "Tailwind CSS", "Sanity", "CustomGPTs"
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">

                <div style={{ backgroundImage: "url(/athar12.jpg)" }} className="w-full h-full bg-cover bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">




                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full opacity-50"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Hello! I&apos;m Athar Hussain
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer with 1.5+ years of experience creating
              web applications that solve real-world problems. I love working with modern
              technologies and am always eager to learn new tools and frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection