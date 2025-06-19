import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setFormError('Please complete the reCAPTCHA.');
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaResponse = await fetch('/.netlify/functions/verify-recaptcha', {
        method: 'POST',
        body: JSON.stringify({ recaptchaValue }),
      });

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success) {
        setFormError('Failed to verify reCAPTCHA. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const form = e.target as HTMLFormElement;
      const data = new URLSearchParams({
        "form-name": "contact",
        ...formData,
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
      });

      console.log("Form successfully submitted");
      setFormSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setFormError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
    }
  };

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
              <Mail className="h-12 w-12 sm:h-16 sm:w-16 text-accent-400 mx-auto" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 sm:mb-8 leading-tight">
              Let's Connect for
              <span className="block text-accent-400">Quality Sourcing</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Reach out to our teams in Canada and Bangladesh for premium garment sourcing solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-primary-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our teams are ready to assist you with your garment sourcing needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-glossy hover:shadow-glossy-lg transition-all duration-300 p-8 border border-gray-100">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-300" />
                  <method.icon className="h-10 w-10 text-accent-500 mb-6 relative z-10" />
                  <h3 className="text-xl font-bold text-primary-900 mb-4 relative z-10">{method.title}</h3>
                  <p className="text-gray-600 mb-4 relative z-10">{method.description}</p>
                  {method.contacts && (
                    <div className="space-y-2">
                      {method.contacts.map((contact, idx) => (
                        <a
                          key={idx}
                          href={contact.link}
                          className="block text-accent-600 hover:text-accent-700 transition-colors relative z-10 font-medium"
                        >
                          {contact.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-glossy p-8 md:p-12 border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-accent-500/5" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-montserrat font-bold mb-4 text-primary-900">Send Us a Message</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Whether you're interested in our sourcing services or have questions about our process,
                  we're here to help.
                </p>
              </div>
              {formSubmitted ? (
                <div className="text-center py-8">
                  <Mail className="h-12 w-12 text-accent-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  data-netlify-honeypot="website"
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field - hidden from real users but visible to bots */}
                  <div className="hidden">
                    <label htmlFor="website" className="sr-only">Website</label>
                    <input 
                      type="text" 
                      id="website" 
                      name="website" 
                      tabIndex={-1} 
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 text-gray-900 placeholder-gray-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 text-gray-900 placeholder-gray-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 text-gray-900 placeholder-gray-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 text-gray-900 placeholder-gray-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 text-gray-900 placeholder-gray-500 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      theme="light"
                    />
                  </div>

                  {formError && (
                    <div className="text-center text-red-500">
                      {formError}
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-full transition-all transform hover:-translate-y-0.5 shadow-glossy hover:shadow-glossy-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-primary-900 mb-6">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices in Canada and Bangladesh, we ensure seamless communication
              and efficient sourcing operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
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
                  <Globe className="h-8 w-8 text-accent-500 mb-4 relative z-10" />
                  <h3 className="text-xl font-bold text-primary-900 mb-2 relative z-10">{office.city}</h3>
                  <p className="text-gray-600 relative z-10 whitespace-pre-line">{office.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Our team is here to help',
    contacts: [
      {
        text: '+1 (514) 518-0615',
        link: 'tel:+15145180615'
      },
      {
        text: '+1 (514) 573-9615',
        link: 'tel:+15145739615'
      }
    ]
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch with our team',
    contacts: [
      {
        text: 'quamrul@qsincorporation.com',
        link: 'mailto:quamrul@qsincorporation.com'
      },
      {
        text: 'yusha@qsincorporation.com',
        link: 'mailto:yusha@qsincorporation.com'
      }
    ]
  },
  {
    icon: MapPin,
    title: 'Our Locations',
    description: 'Visit our offices',
    contacts: [
      {
        text: 'Montreal, Canada',
        link: '#'
      },
      {
        text: 'Dhaka, Bangladesh',
        link: '#'
      }
    ]
  }
];

const offices = [
  {
    city: "Montreal, Canada",
    address: "Montreal, Quebec\nCanada"
  },
  {
    city: "Dhaka, Bangladesh",
    address: "Dhaka\nBangladesh"
  }
];

export default Contact;