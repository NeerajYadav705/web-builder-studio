import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Web Design', path: '/services' },
      { label: 'Development', path: '/services' },
      { label: 'E-commerce', path: '/services' },
      { label: 'Brand Identity', path: '/services' },
    ],
    social: [
      { label: 'Instagram', handle: '@webbuilderstudio' },
      { label: 'LinkedIn', handle: 'Web Builder Studio' },
      { label: 'Behance', handle: 'webbuilderstudio' },
      { label: 'Dribbble', handle: 'webbuilderstudio' },
    ],
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-block mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-black tracking-tight"
              >
                WEB BUILDER<span className="text-gray-400">STUDIO</span>
              </motion.div>
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              We craft bold digital experiences for forward-thinking brands. 
              From concept to launch, we turn your vision into stunning reality.
            </p>
            
            <div className="flex items-center gap-6">
              <motion.a
                href="mailto:hello@webbuilderstudio.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">hello@webbuilderstudio.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white mb-6 tracking-wide">COMPANY</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white mb-6 tracking-wide">SERVICES</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <h3 className="font-bold text-white mb-6 tracking-wide">CONNECT WITH US</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerLinks.social.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="cursor-pointer group"
              >
                <div className="font-medium text-white group-hover:text-gray-300 transition-colors">
                  {social.label}
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  {social.handle}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Let's discuss your project and bring your vision to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-200 transition-colors group"
            >
              START YOUR PROJECT
              <MessageCircle 
                size={18} 
                className="group-hover:rotate-12 transition-transform" 
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 Web Builder Studio. All rights reserved.
            </motion.div>
            
            <div className="flex items-center gap-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-900 hover:bg-gray-800 transition-colors rounded-full group"
                aria-label="Scroll to top"
              >
                <ArrowUp 
                  size={16} 
                  className="group-hover:-translate-y-0.5 transition-transform" 
                />
              </motion.button>
              
              <div className="flex gap-4 text-sm text-gray-400">
                <motion.a
                  href="#"
                  whileHover={{ y: -1 }}
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -1 }}
                  className="hover:text-white transition-colors"
                >
                  Terms
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;