
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const services = [
    { title: 'UI/UX Web Design', icon: '✦' },
    { title: 'Full-stack Development', icon: '✦' },
    { title: 'E-commerce & Web Apps', icon: '✦' },
    { title: 'Brand Identity', icon: '✦' },
  ];
const portfolioItems = [
  { 
    title: 'Dhaniram Paints', 
    type: 'Corporate Website',
    image: './assets/dhanirampaints.png'
  },
  { 
    title: 'Anshul Wallah Travel', 
    type: 'Travel Website',
    image: './assets/anshul.png'
  },
  { 
    title: 'Anita Engineering Works', 
    type: 'Industrial Website',
    image: './assets/aew.png'
  },
  { 
    title: 'Process Safety Visuals Web', 
    type: 'B2B SaaS / Consulting',
    image: './assets/process.png'
  },
  { 
    title: 'Affordable Street Eats', 
    type: 'Local Discovery Platform',
    image: './assets/streetfoods.png'
  },
   { 
    title: 'Apex Consultancy', 
    type: 'Business Consulting Website',
    image: './assets/apex.png'
  },
];

  const testimonials = [
    { text: "Thank you bhai 🤝👍⚡ great efforts, great skillset.", client: "Dhaniram Paints" },
    { text: "Slick, fast, and totally custom.", client: "Client B" },
    { text: "Best design team we've worked with.", client: "Client C" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent"
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
          >
            WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">BOLD</span>
            <br />
            WEBSITES FOR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">BOLD BRANDS</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Web Builder Studio turns ideas into stunning digital experiences
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-lg font-bold tracking-wide hover:bg-gray-200 transition-all duration-300 group"
            >
              LET'S BUILD TOGETHER
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {['STRATEGY', 'DESIGN', 'CODE', 'LAUNCH'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-black text-gray-800 mb-4">
                  0{index + 1}
                </div>
                <div className="text-2xl font-bold tracking-wide">
                  {step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            WHAT WE DO
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/50 backdrop-blur-sm border border-gray-800 p-8 hover:border-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="w-full h-0.5 bg-gray-800 group-hover:bg-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            SELECTED WORKS
          </motion.h2>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-8"
            >
              {[...portfolioItems, ...portfolioItems].map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-80 h-64 border border-gray-800 overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer group relative"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm text-gray-300 mb-2">{item.type}</div>
                    <div className="text-2xl font-bold">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            CLIENT LOVE
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="text-2xl md:text-4xl font-bold mb-4">
                  "{testimonial.text}"
                </div>
                <div className="text-gray-400">—{testimonial.client}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white text-black"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            READY TO MAKE YOUR BRAND STAND OUT?
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-bold tracking-wide hover:bg-gray-800 transition-all duration-300 group"
            >
              START YOUR PROJECT
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;