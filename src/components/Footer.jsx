import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-brand-bg)] py-12 border-t border-gray-800/50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex space-x-6 mb-8"
        >
          <a href="https://github.com/HarmeettSinghh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors p-2 hover:bg-white/5 rounded-full">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/harmeett28/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors p-2 hover:bg-white/5 rounded-full">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:harmeettsinghh28@gmail.com" className="text-gray-400 hover:text-[var(--color-brand-creme)] transition-colors p-2 hover:bg-white/5 rounded-full">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-sm font-light text-center"
        >
          &copy; {currentYear} Developer Portfolio. Built with React & Tailwind CSS.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
