'use client'


import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-book project",
    description: "E-book solution with description , modern view, and responsive design.",
    techStack: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/AtharHussain320/E_book_project_01.git",
    demoUrl: "https://ebookprojec.netlify.app/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task management application with drag-and-drop functionality.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "UI"],
    githubUrl: "https://github.com/AtharHussain320/nextapp.git",
    demoUrl: "https://github.com/AtharHussain320/nextapp.git",
    image: "https://sl.bing.net/be71VtSSg8G"
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "Interactive dashboard displaying weather data with charts and predictive analytics.",
    techStack: ["React", "D3.js", "Python", "FastAPI"],
    githubUrl: "#",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and sentiment analysis.",
    techStack: ["Nextjs", "Typescript", "TailwinD CSS", "OpenAI"],
    githubUrl: "https://github.com/AtharHussain320/AI_Chatbot.git",
    demoUrl: "https://ai-chatbot-sooty-nine.vercel.app/",
    image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=400&h=250&fit=crop"
  }
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};






interface ProjectCardProps {
  project: Project;
  index: number;
}




function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <motion.a
            href={project.githubUrl}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.demoUrl}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection