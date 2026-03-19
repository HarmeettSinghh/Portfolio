import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const CertificateCard = ({ title, issuer, date, image, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-[var(--color-brand-card)] rounded-2xl p-1 border border-gray-800 hover:border-[var(--color-brand-creme)]/50 transition-all group"
    >
      <div className="bg-[var(--color-brand-bg)] rounded-xl h-full p-6 flex flex-col relative overflow-hidden">
        {/* Decorative subtle background icon */}
        <FaCertificate className="absolute -right-6 -bottom-6 text-9xl text-gray-800/30 opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[var(--color-brand-creme)]">
              <FaCertificate size={18} />
            </div>
            <div>
              <h4 className="font-medium text-white text-sm leading-tight group-hover:text-[var(--color-brand-creme)] transition-colors">{issuer}</h4>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
          </div>
          
          <h3 className="text-lg font-heading font-bold mb-4 flex-grow pr-4">
            {title}
          </h3>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
            {link ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Credential <FaExternalLinkAlt size={10} />
              </a>
            ) : (
              <span className="text-xs font-medium text-gray-600 flex items-center gap-2">
                Verified Credential
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
