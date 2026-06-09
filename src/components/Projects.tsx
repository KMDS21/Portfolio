import { motion } from 'framer-motion'; 
import { projects, Project } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-semibold text-center mb-4"
        >
          Featured Projects
        </motion.h2>
        <p className="text-zinc-400 text-center mb-16">Recent work showcasing my skills</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={project.title}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-6 line-clamp-3">{project.desc}</p>
                <p className="text-blue-400 text-sm font-medium mb-6">{project.tech}</p>
                
                <a 
                  href={project.link} 
                  className="inline-block px-6 py-3 bg-white text-zinc-900 font-medium rounded-2xl hover:bg-blue-500 hover:text-white transition-all"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;