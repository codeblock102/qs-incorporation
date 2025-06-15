import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      name="contact" 
      method="POST" 
      data-netlify="true"
      className="space-y-4"
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
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:border-[#C9A66B] focus:ring-1 focus:ring-[#C9A66B] text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:border-[#C9A66B] focus:ring-1 focus:ring-[#C9A66B] text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:border-[#C9A66B] focus:ring-1 focus:ring-[#C9A66B] text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#0A74DA] hover:bg-[#0A74DA]/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm