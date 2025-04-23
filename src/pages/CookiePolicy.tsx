import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Cookie className="h-16 w-16 text-[#0A74DA] mx-auto mb-6" />
          <h1 className="text-4xl font-montserrat font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Cookie Policy explains how QS Incorporation uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">2. What Are Cookies</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <Info className="h-8 w-8 text-[#0A74DA] mb-4" />
              <p className="text-gray-700">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Essential Cookies</h3>
                <p className="text-gray-700">Required for the operation of our website. They include cookies that enable you to log into secure areas.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Analytics Cookies</h3>
                <p className="text-gray-700">Allow us to analyze how visitors use our website, helping us improve its functionality and user experience.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Functionality Cookies</h3>
                <p className="text-gray-700">Used to recognize you when you return to our website, enabling us to personalize content and remember your preferences.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">4. Your Cookie Choices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Settings className="h-8 w-8 text-[#0A74DA] mb-4" />
                <h3 className="text-lg font-bold mb-2">Browser Settings</h3>
                <p className="text-gray-600">You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-[#0A74DA] mb-4" />
                <h3 className="text-lg font-bold mb-2">Cookie Preferences</h3>
                <p className="text-gray-600">You can adjust your cookie preferences through our cookie consent banner when you first visit our website.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">5. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">6. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                If you have questions about our use of cookies, please contact us at:<br /><br />
                Email: privacy@qsinc.com<br />
                Phone: +1 (416) 555-0123<br />
                Address: 100 Innovation Drive, Toronto, ON M5V 2Y1
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;