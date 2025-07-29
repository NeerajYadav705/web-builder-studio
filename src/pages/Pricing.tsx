import { motion } from 'framer-motion';
import { Check, Zap, Star, Heart, Shield } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹10,000',
      duration: 'One-time',
      description: 'Perfect for small businesses getting started online',
      features: [
        '3-5 Page Website',
        'Domain or Hosting Included',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        '3 Months Free Maintenance',
        'Contact Form Integration'
      ],
      popular: false,
      icon: Zap
    },
    {
      name: 'Business',
      price: '₹18,000',
      duration: 'One-time',
      description: 'Ideal for growing businesses needing more features',
      features: [
        '5-10 Page Website',
        'Domain or Hosting Included',
        'Admin Dashboard',
        'Advanced SEO',
        '6 Months Free Maintenance',
        'Social Media Integration',
        'Basic Analytics Setup'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise',
      price: '₹30,000+',
      duration: 'Custom',
      description: 'For large businesses with complex requirements',
      features: [
        '20+ Page Website',
        'E-commerce Functionality',
        'Custom Admin Panel',
        'Premium Hosting',
        '1 Year Maintenance',
        'Advanced Security',
        'Priority Support',
        'Custom Integrations'
      ],
      popular: false,
      icon: Shield
    }
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
            SIMPLE, TRANSPARENT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              PRICING
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
          >
            Quality web solutions at prices that work for you. We believe in fair pricing and exceptional value.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {/* <Heart className="text-red-500" size={24} /> */}
            <p className="text-lg text-center max-w-2xl">
              "We value relationships more than transactions. All prices are negotiable - we'd rather have a happy customer than a perfect price."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative ${plan.popular ? 'border-2 border-yellow-400' : 'border border-gray-800'} bg-gray-900/50 p-8 rounded-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <plan.icon size={32} className={plan.popular ? 'text-yellow-400' : 'text-white'} />
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== 'Enterprise' && (
                    <span className="text-gray-400 ml-2">one-time</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 font-bold tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
                
                {plan.name === 'Enterprise' && (
                  <p className="text-center text-gray-400 text-sm mt-4">
                    Custom pricing based on your specific needs
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-8"
            >
              NEED SOMETHING MORE CUSTOM?
            </motion.h2>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 mb-12"
            >
              We specialize in tailor-made solutions. Whether you need an e-commerce platform, 
              enterprise system, or something completely unique - we'll craft the perfect solution 
              at a price that makes sense for your business.
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 text-lg font-bold tracking-wide hover:bg-gray-200 transition-colors"
              >
                Get Custom Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-8 py-4 text-lg font-bold tracking-wide hover:bg-white hover:text-black transition-colors"
              >
                Chat With Our Team
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-gray-900/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-center mb-16"
          >
            WHY CHOOSE US?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Flexible Pricing",
                description: "We work with your budget to deliver maximum value. Prices are always negotiable.",
                icon: Heart
              },
              {
                title: "No Hidden Costs",
                description: "What you see is what you pay. No surprises, just honest pricing.",
                icon: Shield
              },
              {
                title: "Long-term Value",
                description: "Our solutions grow with your business, ensuring your investment lasts.",
                icon: Zap
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;