import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    // Use the key from .env (which I updated with your new key)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset(); // Clear the form
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error("Error", data);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error("Submit Error", error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's build something amazing together" 
          centered={true}
        />

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-white">
              Contact Information
            </h3>
            
            <div className="flex items-start gap-4 text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-800 group-hover:border-[var(--color-brand-creme)] transition-colors">
                <FaEnvelope />
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                <a href="mailto:harmeettsinghh28@gmail.com" className="hover:underline">harmeettsinghh28@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-800 group-hover:border-[var(--color-brand-creme)] transition-colors">
                <FaLinkedin />
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-medium text-white mb-1">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/harmeett28/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/harmeett28/</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-800 group-hover:border-[var(--color-brand-creme)] transition-colors">
                <FaGithub />
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-medium text-white mb-1">GitHub</h4>
                <a href="https://github.com/HarmeettSinghh" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/HarmeettSinghh</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-800 group-hover:border-[var(--color-brand-creme)] transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-medium text-white mb-1">Location</h4>
                <p>Lucknow, Uttar Pradesh<br />Remote Available</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-[var(--color-brand-card)] p-8 rounded-2xl border border-gray-800"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors"
                  placeholder="Hello!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-[var(--color-brand-creme)] text-black font-semibold rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center mt-4 font-medium italic">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center mt-4 font-medium italic">Failed to send message. Please try emailing me directly.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
