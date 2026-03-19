import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaJava, FaDatabase 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiCplusplus, SiC, SiExpress, SiXampp
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const categories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: FaPython },
      { name: 'SQL', icon: FaDatabase },
    ]
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ]
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'XAMPP', icon: SiXampp },
      { name: 'AWS', icon: FaAws },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Skills" 
          subtitle="Technologies and tools I work with" 
          centered={true}
        />

        <div className="mt-16 space-y-16 max-w-5xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-heading font-medium text-white mb-6 border-b border-gray-800 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    delay={(catIndex * 0.1) + (skillIndex * 0.05)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
