import React from 'react';
import { ArrowRight, Shield, Zap, Leaf, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from '../components/Carousel';

const productSlides = [
  {
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Premium Garment Manufacturing',
    description: 'Expert craftsmanship and precision engineering delivering unparalleled quality in every piece.',
  },
  {
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Fashion Excellence',
    description: 'State-of-the-art facilities combining innovation with meticulous attention to detail.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Sustainable Production',
    description: 'Leading the industry with eco-conscious manufacturing practices and innovative materials.',
  }
];

const Products = () => {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel slides={productSlides} />
      </section>

      {/* Product Categories */}
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
              Our Product Lines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From performance wear to sustainable fashion, our diverse product lines
              cater to the evolving needs of global fashion brands.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-soft shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {category.description}
                    </p>
                    <ul className="space-y-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/80">
                          <Check className="h-5 w-5 text-[#C9A66B] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-montserrat font-bold mb-6 gradient-text">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence through our innovative and sustainable
              manufacturing approach.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-soft p-8 shadow-soft h-full border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold gradient-text mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-8 w-8 text-[#0A74DA]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-montserrat font-bold mb-6 gradient-text">
                Excellence in Every Detail
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality drives us to continuously improve our manufacturing 
                processes, ensuring the highest standards in every garment we produce.
              </p>
              <div className="space-y-6">
                {innovations.map((innovation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <innovation.icon className="h-6 w-6 text-[#0A74DA]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{innovation.title}</h3>
                      <p className="text-gray-600">{innovation.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Garment manufacturing excellence"
                className="rounded-soft shadow-soft"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-soft shadow-lg max-w-sm border border-gray-100">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600">Quality assurance through expert inspection</div>
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
            Ready to Elevate Your Fashion Brand?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Partner with us to transform your designs into reality with our
            premium manufacturing solutions.
          </p>
          <Link to="/contact" className="btn-secondary text-lg">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const categories = [
  {
    name: 'Sports Wear',
    description: 'Advanced athletic apparel engineered for peak performance',
    image: 'https://images.unsplash.com/photo-1551479460-5e76c686816a?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Moisture-wicking fabric',
      'Four-way stretch',
      'Anti-microbial treatment',
      'UV protection',
    ],
  },
  {
    name: 'Executive Collection',
    description: 'Premium business attire crafted with innovative materials',
    image: 'https://images.unsplash.com/photo-1604298044934-183b970aa1df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Wrinkle-resistant',
      'Temperature regulation',
      'Enhanced durability',
      'Eco-friendly materials',
    ],
  },
  {
    name: 'Smart Casual',
    description: 'Contemporary designs meeting comfort and style',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Breathable fabrics',
      'Stretch comfort',
      'Stain-resistant',
      'Quick-dry technology',
    ],
  },
  {
    name: 'Technical Outerwear',
    description: 'Weather-adaptive gear with cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Waterproof membrane',
      'Heat retention',
      'Wind resistance',
      'Breathable design',
    ],
  },
  {
    name: 'Essential Basics',
    description: 'Premium basics reimagined for modern lifestyle',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Sustainable materials',
      'Advanced comfort',
      'Versatile design',
      'Wide range of premium apparel',
    ],
  },
  {
    name: 'Sustainable Collection',
    description: 'Eco-conscious designs using revolutionary materials',
    image: 'https://images.unsplash.com/photo-1739131886213-7a9580cbc4e1?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Recycled materials',
      'Zero-waste process',
      'Biodegradable options',
      'Water conservation',
    ],
  },
];

const process = [
  {
    title: 'Design & Development',
    description: 'Our expert team works closely with clients to transform designs into perfectly crafted garments, incorporating the latest fashion trends.',
  },
  {
    title: 'Premium Production',
    description: 'Advanced manufacturing systems ensure precise execution, maintaining the highest quality standards while optimizing efficiency.',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control measures guarantee that every garment meets our exceptional standards before delivery.',
  },
];

const innovations = [
  {
    icon: Shield,
    title: 'Expert Quality Control',
    description: 'Comprehensive inspection systems ensure perfect quality in every garment.',
  },
  {
    icon: Zap,
    title: 'Efficient Manufacturing',
    description: 'Real-time monitoring and precise manufacturing processes for optimal efficiency.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Production',
    description: 'Eco-friendly materials and zero-waste manufacturing processes.',
  },
];

export default Products;