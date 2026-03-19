import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';

const educationData = [
  {
    date: "Aug' 23 – Present",
    title: 'Bachelor of Technology - Computer Science and Engineering',
    subtitle: 'Lovely Professional University, Phagwara, Punjab',
    description: 'CGPA: 7.74',
  },
  {
    date: "Mar' 21 – July' 22",
    title: 'Intermediate (PCM)',
    subtitle: 'City Montessori School, Lucknow, Uttar Pradesh',
    description: 'Percentage: 86.75%',
  },
  {
    date: "Mar' 19 – May' 20",
    title: 'Matriculation',
    subtitle: 'City Montessori School, Lucknow, Uttar Pradesh',
    description: 'Percentage: 90.40%',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and qualifications" 
        />

        <div className="max-w-4xl mx-auto mt-16">
          {educationData.map((edu, index) => (
            <TimelineItem
              key={index}
              date={edu.date}
              title={edu.title}
              subtitle={edu.subtitle}
              description={edu.description}
              bullets={edu.bullets}
              delay={index * 0.2}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
