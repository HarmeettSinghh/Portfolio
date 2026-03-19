import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors"
                  placeholder="Hello!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-creme)] focus:ring-1 focus:ring-[var(--color-brand-creme)] transition-colors resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-[var(--color-brand-creme)] text-black font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
