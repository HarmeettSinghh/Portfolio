import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaCode, FaTrophy, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';

const achievementsData = [
  {
    title: 'Solved 100+ DSA Problems on LeetCode',
    description: 'Strengthening problem-solving, optimization, and coding efficiency skills on LeetCode. (Mar \'26)',
    icon: FaCode
  },
  {
    title: 'Secured 2nd Position in TechForge’25',
    description: 'Participated and ranked 2nd in a National Level Hackathon held at Lovely Professional University. (Apr \'25)',
    link: 'https://drive.google.com/file/d/1kiDsjzF89w2rIb90HwjJ25cl-akUZ4b9/view',
    icon: FaTrophy
  },
  {
    title: 'Top 100 INDIA SBI College Youth Ideathon',
    description: 'Selected among the Top 100 innovators at SBI College Youth Ideathon 2025 held at IIT Delhi. (Apr \'25)',
    link: 'https://drive.google.com/file/d/1DxyrXJg3SY0yZbS6f3uf9hzP1yR8Qd1s/view',
    icon: FaMedal
  }
];

const AchievementsEvents = () => {
  return (
    <section id="achievements" className="py-24 relative bg-[var(--color-brand-card)]/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Achievements & Recognition" 
          subtitle="Milestones, recognitions, and hackathons" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[var(--color-brand-card)] p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] hover:border-gray-600 flex flex-col items-center text-center h-full group"
            >
              <div className="w-16 h-16 bg-gray-900/80 rounded-full flex items-center justify-center mb-6 text-3xl text-gray-400 group-hover:text-[var(--color-brand-creme)] group-hover:scale-110 transition-all duration-300 shadow-inner">
                <item.icon />
              </div>
              
              <h3 className="text-xl font-bold font-heading text-white mb-4 group-hover:text-[var(--color-brand-creme)] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-creme)] hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Document <FaExternalLinkAlt size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsEvents;
