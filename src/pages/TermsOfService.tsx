import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FileText className="h-16 w-16 text-[#0A74DA] mx-auto mb-6" />
          <h1 className="text-4xl font-montserrat font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using QS Incorporation's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations, including Quebec's Consumer Protection Act and Canada's Competition Act.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">2. Use of Services</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">Acceptable Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use our services in compliance with all applicable laws</li>
                <li>Maintain accurate account information</li>
                <li>Protect your account credentials</li>
                <li>Report any unauthorized access</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Prohibited Activities</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Engage in fraudulent activities</li>
                <li>Attempt to gain unauthorized access</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our website and services are owned by QS Incorporation and are protected by Canadian and international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">4. Limitation of Liability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Scale className="h-8 w-8 text-[#0A74DA] mb-4" />
                <h3 className="text-lg font-bold mb-2">Warranty Disclaimer</h3>
                <p className="text-gray-600">Our services are provided "as is" without any warranty or condition, express, implied or statutory.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-[#0A74DA] mb-4" />
                <h3 className="text-lg font-bold mb-2">Liability Limits</h3>
                <p className="text-gray-600">We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">5. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Quebec and Canada, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">6. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">7. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                For any questions about these Terms, please contact us at:<br /><br />
                Email: legal@qsinc.com<br />
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

export default TermsOfService;