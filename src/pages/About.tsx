import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Award, Users, Rocket, Heart, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-accent-400 mx-auto" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 sm:mb-8 leading-tight">
              Crafting Fashion
              <span className="block text-accent-400">Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Where precision craftsmanship meets sustainable fashion manufacturing
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              {['Quality', 'Innovation', 'Sustainability'].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base hover:bg-white/20 transition-colors"
                >
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6 text-primary-900">
              Our Journey
            </h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600" />
            
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-8 md:mb-16`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-glossy hover:shadow-glossy-lg transition-all duration-300 border border-gray-100">
                      <div className="text-accent-500 font-bold mb-2">{item.year}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary-900 mb-3 sm:mb-4">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4">
                    <div className="w-full h-full bg-accent-500 rounded-full shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-glossy hover:shadow-glossy-lg transition-all duration-300 p-8 border border-gray-100">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-300" />
                  <value.icon className="h-10 w-10 sm:h-12 sm:w-12 text-accent-500 mb-6 relative z-10" />
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-4 relative z-10">{value.title}</h3>
                  <p className="text-gray-600 relative z-10">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6 text-primary-900">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're dedicated to revolutionizing the fashion industry through sustainable practices
              and innovative manufacturing solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-glossy hover:shadow-glossy-lg transition-all duration-300 p-8 border border-gray-100">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-300" />
                  <commitment.icon className="h-12 w-12 text-accent-500 mb-6 relative z-10" />
                  <h3 className="text-xl font-bold text-primary-900 mb-4 relative z-10">{commitment.title}</h3>
                  <p className="text-gray-600 mb-6 relative z-10">{commitment.description}</p>
                  <ul className="space-y-3 relative z-10">
                    {commitment.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-accent-500" />
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary-900/50 to-primary-900" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-6 text-white">
            Ready to Transform Your Fashion Brand?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Join us in revolutionizing fashion through innovation and sustainability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-all transform hover:-translate-y-1 shadow-glossy hover:shadow-glossy-lg text-lg"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const timeline = [
  {
    year: '2016',
    title: 'Company Inauguration',
    description: 'Founded with a vision to revolutionize fashion manufacturing through innovation and sustainability.',
  },
  {
    year: '2017',
    title: 'First Order Delivered',
    description: 'Established our premium quality control systems and sustainable manufacturing processes.',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Expanded our presence to serve fashion brands across North America and Europe.',
  },
  {
    year: '2022',
    title: 'Sustainability Focus',
    description: 'Achieved significant milestones in sustainable manufacturing practices.',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Pioneered sustainable fashion manufacturing initiatives with a focus on long-term growth and innovation',
  },
];

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge technology and creative solutions in fashion manufacturing.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating positive change through sustainable fashion manufacturing practices.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Maintaining the highest standards in every garment we produce.',
  },
];

const commitments = [
  {
    icon: Target,
    title: 'Sustainable Manufacturing',
    description: 'Leading the industry in eco-conscious production methods and materials.',
    points: [
      'Zero-waste manufacturing processes',
      'Renewable energy powered facilities',
      'Water conservation initiatives',
      'Eco-friendly material sourcing'
    ]
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Maintaining exceptional standards through rigorous quality control.',
    points: [
      'Multi-point inspection system',
      'Advanced quality testing protocols',
      'Certified quality control team',
      'Regular audit processes'
    ]
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Building lasting relationships through exceptional service.',
    points: [
      'Dedicated account management',
      'Transparent communication',
      'Customized solutions',
      'On-time delivery guarantee'
    ]
  },
  {
    icon: Heart,
    title: 'Social Responsibility',
    description: 'Making a positive impact on communities and the environment.',
    points: [
      'Fair labor practices',
      'Community development programs',
      'Environmental stewardship',
      'Ethical sourcing policies'
    ]
  }
];

export default About;