import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="mb-6" />
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <div className="flex flex-col">
                  <a href="mailto:quamrul@qsincorporation.com" className="hover:text-accent-400">quamrul@qsincorporation.com</a>
                  <a href="mailto:yusha@qsincorporation.com" className="hover:text-accent-400">yusha@qsincorporation.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <div className="flex flex-col">
                  <a href="tel:+15145180615" className="hover:text-accent-400">+1 (514) 518-0615</a>
                  <a href="tel:+15145739615" className="hover:text-accent-400">+1 (514) 573-9615</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-400" />
                <div className="flex flex-col">
                  <span>Montreal, Quebec, Canada</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-accent-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-accent-400 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-accent-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="hover:text-accent-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-accent-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-accent-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-sm text-white/80">
            © {new Date().getFullYear()} QS Incorporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;