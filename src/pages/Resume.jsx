import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative bg-[var(--color-brand-card)] border-y border-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 bg-[var(--color-brand-bg)] border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 border border-[var(--color-brand-creme)] rounded-full animate-ping opacity-20" />
            <FaFileAlt className="text-3xl text-[var(--color-brand-creme)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white tracking-tight">
            My <span className="text-gradient hover:text-white transition-colors">Resume</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed">
            If you want the full picture — experience, projects, all of it — my resume's right here.
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1StX90PJ4MF8dUtl4NllvsW3sj2ASt-na/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-creme)] text-black font-semibold rounded-full hover:bg-white transition-all shadow-lg shadow-[var(--color-brand-creme)]/10"
          >
            <FaDownload /> View Resume
          </motion.a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Resume;
