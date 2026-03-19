import { motion } from 'framer-motion';

const SkillCard = ({ name, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[var(--color-brand-card)] border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 group hover:border-[var(--color-brand-creme)] transition-colors cursor-default"
    >
      {Icon && (
        <div className="text-4xl text-gray-400 group-hover:text-[var(--color-brand-creme)] transition-colors">
          <Icon />
        </div>
      )}
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
