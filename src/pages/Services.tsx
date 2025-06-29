import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, ShoppingCart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Web Design',
      description: 'Responsive, UI-first designs that turn heads and convert visitors into customers.',
      features: ['Mobile-First Design', 'Brand Integration', 'User Experience Focus', 'Performance Optimized'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack, scalable solutions built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Custom stores and Shopify integrations with seamless payment processing.',
      features: ['Shopify Development', 'Payment Integration', 'Inventory Management', 'Analytics Setup'],
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Complete digital branding packages including logos, style guides, and assets.',
      features: ['Logo Design', 'Style Guides', 'Brand Assets', 'Digital Guidelines'],
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'We dive deep into your brand, goals, and vision' },
    { step: '02', title: 'Strategy', desc: 'Crafting a roadmap for digital success' },
    { step: '03', title: 'Design', desc: 'Creating stunning visuals that captivate' },
    { step: '04', title: 'Develop', desc: 'Building with cutting-edge technology' },
    { step: '05', title: 'Launch', desc: 'Going live and celebrating your success' },
  ];

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
            SERVICES THAT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              SCALE YOUR BRAND
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
          >
            From concept to launch, we provide end-to-end solutions that 
            transform your digital presence and drive real results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-900/50 border border-gray-800 p-12 hover:border-white/20 transition-all duration-300 h-full">
                  <service.icon 
                    size={48} 
                    className="mb-8 text-gray-400 group-hover:text-white transition-colors" 
                  />
                  
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-white font-medium group-hover:text-gray-300 transition-colors"
                  >
                    Let's Talk
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            OUR PROCESS
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="text-6xl font-black text-gray-800 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-700" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            TECHNOLOGIES WE LOVE
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 
              'Tailwind', 'Framer Motion', 'Shopify', 'Stripe',
              'MongoDB', 'PostgreSQL', 'Vercel', 'AWS'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-900/50 border border-gray-800 p-6 text-center hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="font-medium">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            READY TO GET STARTED?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Let's discuss your project and see how we can bring your vision to life.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
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
      </section>
    </motion.div>
  );
};

export default Services;