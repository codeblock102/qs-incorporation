import React from 'react';
import { ArrowRight, Shield, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from '../components/Carousel';

const carouselSlides = [
  {
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'International Sourcing Excellence',
    description: 'Premium garment sourcing with hassle-free production and swift communication between Canada and Bangladesh.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Quality Assurance',
    description: 'Maintaining premium standards of service with emphasis on quality control and timely delivery.',
  },
  {
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Global Operations',
    description: 'Dedicated teams in Canada and Bangladesh ensuring seamless production and communication.',
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel slides={carouselSlides} />
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-montserrat font-bold mb-6 gradient-text">
              Why Choose QS Inc.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality sourcing and efficient communication ensures a seamless 
              experience for all our international partners.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-soft p-8 shadow-soft group-hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                  <feature.icon className="h-12 w-12 text-[#0A74DA] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-montserrat font-bold mb-6 gradient-text">
                International Sourcing Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our presence in both Canada and Bangladesh allows us to provide comprehensive 
                sourcing solutions with efficient communication and quality assurance.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="h-2 w-2 bg-[#0A74DA] rounded-full mr-4" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-[#0A74DA] font-medium mt-8 hover:text-[#0A74DA]/80 transition-colors"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Premium garment sourcing"
                className="rounded-soft shadow-soft"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-soft shadow-lg max-w-sm border border-gray-100">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600">On-time delivery with quality assurance</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 gradient-primary opacity-90" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-6 text-white">
            Ready to Experience Premium Sourcing?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Partner with us for hassle-free production and efficient communication
            across our international operations.
          </p>
          <Link
            to="/contact"
            className="btn-secondary text-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const stats = [
  { value: '2', label: 'Global Offices' },
  { value: '100%', label: 'Quality Assurance' },
  { value: '24/7', label: 'Communication' },
  { value: '100%', label: 'On-Time Delivery' },
];

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Maintaining premium standards through rigorous quality control and inspection processes.',
  },
  {
    icon: Zap,
    title: 'Swift Communication',
    description: 'Dedicated teams in Canada and Bangladesh ensuring efficient and timely communication.',
  },
  {
    icon: Leaf,
    title: 'Hassle-Free Production',
    description: 'Streamlined sourcing process with emphasis on timely delivery and quality standards.',
  },
];

const benefits = [
  'International quality standards',
  'Efficient communication channels',
  'On-time shipment guarantee',
  'Premium service standards',
  'Global sourcing expertise',
];

export default Home;