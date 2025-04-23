import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Shield className="h-16 w-16 text-[#0A74DA] mx-auto mb-6" />
          <h1 className="text-4xl font-montserrat font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              QS Incorporation ("we", "our", or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Quebec's Law 25 (Act to Modernize Legislative Provisions Respecting the Protection of Personal Information).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">2. Information We Collect</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Payment information (processed securely through authorized payment processors)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you service-related communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">4. Your Rights Under Quebec's Law 25</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Lock className="h-8 w-8 text-[#0A74DA] mb-4" />
                <h3 className="text-lg font-bold mb-2">Right to Access</h3>
                <p className="text-gray-600">You can request access to your personal information and obtain a copy in a structured format.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Eye className="h-8 w-8 text-[#0A74DA] mb-4" />
                <h3 className="text-lg font-bold mb-2">Right to Rectification</h3>
                <p className="text-gray-600">You can request corrections to your personal information if it's inaccurate or incomplete.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information, including encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For any privacy-related questions or to exercise your rights, please contact our Privacy Officer at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
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

export default PrivacyPolicy;