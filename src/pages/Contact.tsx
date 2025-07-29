import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, MessageCircle, User, Briefcase, Phone } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkdzpvd");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  

  const projectTypes = [
    'Web Design',
    'Web Development',
    'E-commerce',
    'Brand Identity',
    'Full Package',
    'Other',
  ];
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-24 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Send size={32} className="text-black" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Message Sent!</h2>
          <p className="text-gray-400 mb-8">
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setFormData({ name: '', email: '', projectType: '', message: '' });
            }}
            className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
          >
            Send Another Message
          </motion.button>
        </div>
      </motion.div>
    );
  }

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
            LET'S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              SOMETHING COOL
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
          >
            Hit us up with your ideas. We'll do the rest.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <User 
                    size={20} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-900 border border-gray-700 pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <Mail 
                    size={20} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Email"
                    className="w-full bg-gray-900 border border-gray-700 pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="relative">
                  <Briefcase 
                    size={20} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 pl-12 pr-4 py-4 text-white focus:border-white focus:outline-none transition-all duration-300 appearance-none"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </motion.select>
                </div>

                <div className="relative">
                  <MessageCircle 
                    size={20} 
                    className="absolute left-4 top-6 text-gray-400" 
                  />
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-gray-900 border border-gray-700 pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 resize-none"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: state.submitting ? 1 : 1.05 }}
                  whileTap={{ scale: state.submitting ? 1 : 0.95 }}
                  className={`w-full py-4 text-lg font-bold tracking-wide transition-all duration-300 ${
                    state.submitting
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {state.submitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full"
                    />
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      START YOUR PROJECT
                      <Send size={20} />
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Ready to turn your vision into reality? We're excited to hear about your project 
                  and discuss how we can help bring your ideas to life.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail size={20} className="text-gray-400" />
                    <span>webbuildersstudio9@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageCircle size={20} className="text-gray-400" />
                    <span>Available for quick chats</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={20} className="text-gray-400" />
                    <span>9719 351 076 , 7906 293 268</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'We Review', desc: 'Your message lands in our inbox and we review your project details.' },
                    { step: '02', title: 'We Respond', desc: 'Within 24 hours, we\'ll reach out to discuss your vision.' },
                    { step: '03', title: 'We Plan', desc: 'Together, we\'ll create a roadmap for your digital success.' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="text-2xl font-black text-gray-700">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <div className="flex gap-6">
                  {[
                    { name: 'Instagram', handle: '@webbuilderstudio' },
                    { name: 'LinkedIn', handle: 'Web Builder Studio' },
                    { name: 'Behance', handle: 'webbuilderstudio' },
                  ].map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="cursor-pointer"
                    >
                      <div className="font-medium">{social.name}</div>
                      <div className="text-gray-400 text-sm">{social.handle}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;