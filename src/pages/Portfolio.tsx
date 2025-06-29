import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'TechFlow',
      type: 'SaaS Platform',
      year: '2024',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive project management platform for tech teams with real-time collaboration features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      features: ['Real-time collaboration', 'Task management', 'Team analytics', 'File sharing'],
      challenge: 'Building a scalable real-time collaboration system that could handle hundreds of concurrent users.',
      solution: 'Implemented WebSocket connections with Redis for session management and horizontal scaling.',
    },
    {
      id: 2,
      title: 'Minimalist Co.',
      type: 'E-commerce',
      year: '2024',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A clean, modern e-commerce platform for sustainable fashion with a focus on user experience.',
      technologies: ['Next.js', 'Shopify', 'Stripe', 'Tailwind'],
      features: ['Product customization', 'Sustainable shipping', 'AR try-on', 'Loyalty program'],
      challenge: 'Creating an immersive shopping experience while maintaining fast loading times.',
      solution: 'Optimized images with Next.js, implemented lazy loading, and used Shopify\'s Storefront API.',
    },
    {
      id: 3,
      title: 'Creative Hub',
      type: 'Portfolio',
      year: '2023',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A dynamic portfolio platform for creative professionals with interactive project showcases.',
      technologies: ['React', 'Framer Motion', 'Three.js', 'Vercel'],
      features: ['3D project previews', 'Interactive timeline', 'Client testimonials', 'Blog integration'],
      challenge: 'Balancing stunning visuals with performance across all devices.',
      solution: 'Used Three.js for 3D elements with fallbacks, implemented progressive loading.',
    },
    {
      id: 4,
      title: 'StartupX',
      type: 'Landing Page',
      year: '2023',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-converting landing page for a Y Combinator startup with advanced analytics integration.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Analytics'],
      features: ['A/B testing', 'Conversion tracking', 'Lead capture', 'Performance monitoring'],
      challenge: 'Achieving maximum conversion rates while maintaining brand consistency.',
      solution: 'Implemented extensive A/B testing and heat mapping to optimize user flow.',
    },
    {
      id: 5,
      title: 'ArtSpace',
      type: 'Gallery',
      year: '2023',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Digital gallery platform for emerging artists with virtual exhibition capabilities.',
      technologies: ['React', 'WebGL', 'Node.js', 'PostgreSQL'],
      features: ['Virtual exhibitions', 'Artist profiles', 'Art marketplace', 'Curator tools'],
      challenge: 'Creating immersive virtual gallery experiences that rival physical spaces.',
      solution: 'Built custom WebGL gallery renderer with realistic lighting and spatial audio.',
    },
    {
      id: 6,
      title: 'FinanceApp',
      type: 'Dashboard',
      year: '2024',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive financial dashboard for small businesses with real-time data visualization.',
      technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
      features: ['Real-time charts', 'Expense tracking', 'Revenue forecasting', 'Team management'],
      challenge: 'Processing and visualizing large amounts of financial data in real-time.',
      solution: 'Implemented data streaming with WebSockets and optimized D3.js rendering.',
    },
  ];

  const categories = ['All', 'SaaS Platform', 'E-commerce', 'Portfolio', 'Landing Page', 'Gallery', 'Dashboard'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24"
    >
      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-8"
          >
            SELECTED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              WORKS
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
          >
            A showcase of digital experiences we've crafted for forward-thinking brands 
            and innovative startups.
          </motion.p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 text-sm font-medium tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-white hover:bg-gray-800 border border-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] mb-6 relative overflow-hidden border border-gray-800 hover:border-white/20 transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white font-medium">View Project</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{project.type}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span>{selectedProject.type}</span>
                      <span>•</span>
                      <span>{selectedProject.year}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-800 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="aspect-video mb-8 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                    <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                    
                    <h4 className="font-bold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 px-3 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-bold mb-3">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{selectedProject.challenge}</p>
                    
                    <h4 className="font-bold mb-3">Solution</h4>
                    <p className="text-gray-300 text-sm">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Live Site
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-gray-600 px-6 py-3 font-medium hover:border-white transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;