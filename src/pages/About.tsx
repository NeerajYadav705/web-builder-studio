import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart, Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Target, title: 'Strategic Focus', desc: 'Every pixel with purpose' },
    { icon: Zap, title: 'Lightning Speed', desc: 'Fast sites, faster delivery' },
    { icon: Heart, title: 'Passionate', desc: 'We love what we do' },
    { icon: Code, title: 'Clean Code', desc: 'Every line matters' },
    { icon: Palette, title: 'Bold Design', desc: 'Standing out is our specialty' },
    { icon: Rocket, title: 'Future-Ready', desc: 'Built for tomorrow' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '2024', label: 'Founded' },
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
            WE ARE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              WEB BUILDER STUDIO
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
          >
            A creative startup with big dreams. We don't just code websites. 
            We craft digital experiences that make brands unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                OUR MISSION
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We believe every brand has a unique story worth telling. Our mission is to transform 
                those stories into digital experiences that don't just look good—they feel incredible.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                As a startup ourselves, we understand the hustle. We're not your typical agency. 
                We're creative rebels who happen to be really good at code.
              </p>
              <p className="text-lg text-gray-300">
                We're here to help other startups and bold brands make their mark in the digital world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-black/30 p-8 border border-gray-800 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-4xl font-black mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            WHAT DRIVES US
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center bg-gray-900/30 p-8 border border-gray-800 hover:border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <value.icon 
                  size={48} 
                  className="mx-auto mb-6 text-gray-400 group-hover:text-white transition-colors" 
                />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-12"
            >
              OUR STORY
            </motion.h2>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-gray-300 leading-relaxed"
            >
              <p>
                Web Builder Studio started in 2024 with a simple belief: every brand deserves 
                a website that's as bold and unique as their vision.
              </p>
              
              <p>
                We're a young, hungry startup that understands the challenges of building 
                something from scratch. That's why we're passionate about helping other 
                entrepreneurs and creative brands establish their digital presence.
              </p>
              
              <p>
                Our approach is different. We don't just follow trends—we set them. 
                We don't just build websites—we create digital experiences that convert 
                visitors into customers and customers into brand advocates.
              </p>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mt-12"
              >
                "We're not just building websites. We're building the future of digital experiences."
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            READY TO WORK WITH US?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Let's create something amazing together. Your vision + our expertise = digital magic.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-lg font-bold tracking-wide hover:bg-gray-200 transition-all duration-300 group"
            >
              LET'S BUILD TOGETHER
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;