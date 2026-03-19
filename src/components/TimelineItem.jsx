import { motion } from 'framer-motion';

const TimelineItem = ({ title, subtitle, date, description, bullets, link, delay = 0, isLast = false }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop Layout - Alternating or Left aligned (we'll use left aligned for cleaner look) */}
      <div className="md:grid md:grid-cols-[1fr_2fr] gap-8 mb-12 relative">
        
        {/* Timeline Line & Dot */}
        <div className="absolute left-[-1.5rem] md:left-[calc(33.333%-1.5rem)] top-1 flex flex-col items-center h-full">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.1 }}
            className="w-4 h-4 rounded-full bg-[var(--color-brand-bg)] border-2 border-[var(--color-brand-creme)] z-10"
          />
          {!isLast && (
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              className="w-px h-full bg-gray-800 mt-2 origin-top"
            />
          )}
        </div>

        {/* Date Section (Left on Desktop, top on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
          className="md:text-right mt-1 mb-2 md:mb-0 md:pr-12"
        >
          <span className="inline-block px-3 py-1 bg-[var(--color-brand-card)] border border-gray-800 text-[var(--color-brand-creme)] text-sm font-medium rounded-full">
            {date}
          </span>
        </motion.div>

        {/* Content Section (Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
          className="bg-[var(--color-brand-card)] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
        >
          <h3 className="text-xl font-bold text-white mb-1 font-heading">{title}</h3>
          <h4 className="text-[var(--color-brand-creme)] font-medium mb-4">{subtitle}</h4>
          
          {description && (
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {description}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="list-disc list-outside ml-4 text-gray-400 text-sm space-y-2 mb-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="pl-1">{bullet}</li>
              ))}
            </ul>
          )}

          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 mt-2 text-sm text-[var(--color-brand-creme)] hover:text-white transition-colors"
            >
              View Document &rarr;
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
