import { motion } from 'framer-motion';
import clsx from 'clsx';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={clsx('mb-16', centered ? 'text-center' : 'text-left')}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight"
      >
        <span className="text-gradient hover:text-white transition-colors cursor-default">
          {title}
        </span>
        <span className="text-[var(--color-brand-creme)] ml-1">.</span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl font-light"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={clsx(
          "h-1 bg-[var(--color-brand-creme)] mt-6 rounded-full origin-left",
          centered ? "w-24 mx-auto origin-center" : "w-24"
        )}
      />
    </div>
  );
};

export default SectionTitle;
