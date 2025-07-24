import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
const projects = [
  {
    id: 1,
    title: 'Dhaniram Paints',
    type: 'Corporate Website',
    year: '2025',
      image: './assets/dhanirampaints.png', // local image in public/images/
    liveUrl: 'https://www.dhanirampaint.com/',
    description: 'A vibrant corporate website built for Dhaniram Paints to showcase their premium paint products and brand story.',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    features: ['Product catalog', 'Responsive design', 'Contact forms', 'SEO optimization'],
    challenge: 'Presenting a large range of products while keeping the design clean and fast-loading.',
    solution: 'Used Next.js static generation, optimized images, and modular Tailwind components to ensure speed and maintainability.',
  },
  {
    id: 2,
    title: 'Anshul Wallah Travel',
    type: 'Travel Website',
    year: '2023',
      image: './assets/anshul.png', // local image in public/images/
    liveUrl: 'https://www.anshulwallahtravel.in/',
    description: 'A sleek and simple travel website built for a local travel agency, highlighting tours, destinations, and packages.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Tour listings', 'Contact form', 'Photo gallery', 'Mobile-friendly layout'],
    challenge: 'Creating an engaging design on a purely static stack without modern frameworks.',
    solution: 'Focused on clean HTML structure, modern CSS effects, and lightweight JS interactions to ensure usability and appeal.',
  },
  {
    id: 3,
    title: 'Anita Engineering Works',
    type: 'Industrial Website',
    year: '2023',
     image: './assets/aew.png', // local image in public/images/
    liveUrl: 'https://anitaengineeringworks.com/',
    description: 'Corporate website designed for a manufacturer specializing in industrial nuts and fasteners, showcasing their products and expertise.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Product catalog', 'About & history pages', 'Inquiry form', 'Clean responsive design'],
    challenge: 'Conveying industrial reliability and brand heritage through a static website.',
    solution: 'Crafted a professional, minimal layout with strong typography and imagery reflecting the industry’s strength.',
  },
  {
    id: 4,
    title: 'Process Safety Visuals Web',
    type: 'B2B SaaS / Consulting',
    year: '2025',
     image: './assets/process.png', // local image in public/images/
    liveUrl: 'https://www.processsafetysupport.com/',
    description: 'A professional web platform for an international process safety expert offering risk management tools and expert resources.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'shadcn/ui', 'Framer Motion'],
    features: ['Resource hub', 'Service descriptions', 'Contact and consultation booking', 'Smooth animations'],
    challenge: 'Communicating complex safety concepts in a modern, clean design while ensuring credibility.',
    solution: 'Used structured content, elegant typography, and subtle animations to guide users and highlight expertise.',
  },
  {
    id: 5,
    title: 'Affordable Street Eats',
    type: 'Local Discovery Platform',
    year: '2024',
     image: './assets/streetfoods.png', // local image in public/images/
    liveUrl: 'https://affordable-street-eats.vercel.app/',
    description: 'A web app that helps users discover affordable and authentic local street food near them.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    features: ['Nearby street food listings', 'User reviews', 'Map integration', 'Photo uploads'],
    challenge: 'Keeping data fresh and fast while handling user-generated content.',
    solution: 'Built a MERN stack app with dynamic MongoDB data and lightweight front-end using React and Tailwind.',
  },
  {
  id: 6,
  title: 'Apex Consultancy',
  type: 'Business Consulting Website',
  year: '2025',
  image: './assets/apex.png', // local image saved in your assets or public/images
  liveUrl: 'https://apex-consultancy.netlify.app/',
  description: 'Transform your business with expert consulting services that drive growth, optimize operations, and help achieve strategic objectives through proven methodologies and industry expertise.',
  technologies: ['Vite', 'Tailwind CSS'],
  features: ['Service overview', 'Contact form', 'Responsive design', 'Clean branding'],
  challenge: 'Building a professional yet modern website that conveys trust and clarity in consulting services.',
  solution: 'Used Vite for fast build times and Tailwind CSS for a consistent, minimalist design that focuses on content clarity and user experience.',
},
{
  id: 7,
  title: 'Creators Design Firm',
  type: 'Business Interior Website',
  year: '2025',
  image: './assets/designfirm.png', // local image saved in your assets or public/images
  liveUrl: 'https://creators-design-firm.vercel.app/',
  description: 'Transform your business with expert consulting services that drive growth, optimize operations, and help achieve strategic objectives through proven methodologies and industry expertise.',
  technologies: ['Vite', 'Tailwind CSS'],
  features: ['Service overview', 'Contact form', 'Responsive design', 'Clean branding'],
  challenge: 'Building a professional yet modern website that conveys trust and clarity in consulting services.',
  solution: 'Used Vite for fast build times and Tailwind CSS for a consistent, minimalist design that focuses on content clarity and user experience.',
},
{
  id: 8,
  title: '',
  type: 'Elena Studio',
  year: '2025',
  image: './assets/elena.png', // local image saved in your assets or public/images
  liveUrl: 'https://creator-firm.vercel.app/',
  description: 'Transform your business with expert consulting services that drive growth, optimize operations, and help achieve strategic objectives through proven methodologies and industry expertise.',
  technologies: ['Vite', 'Tailwind CSS'],
  features: ['Service overview', 'Contact form', 'Responsive design', 'Clean branding'],
  challenge: 'Building a professional yet modern website that conveys trust and clarity in consulting services.',
  solution: 'Used Vite for fast build times and Tailwind CSS for a consistent, minimalist design that focuses on content clarity and user experience.',
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
  <motion.a
    href={selectedProject.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
  >
    <ExternalLink size={16} />
    View Project
  </motion.a>
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