import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';

const experienceData = [
  {
    date: 'Jun 2025 - Jul 2025',
    title: 'Data Structures and Algorithms Training',
    subtitle: 'Cipher Schools (Edtech Company)',
    description: 'Underwent comprehensive training emphasizing problem-solving, algorithms, and writing efficient code.',
    bullets: [
      'Applied concepts including arrays, linked lists, stacks, queues, trees, sorting, searching, and recursion.',
      'Strengthened coding proficiency in C++ through practical exercises and challenges.'
    ],
    link: 'https://drive.google.com/file/d/1ztK2aFp4JivI-lIAkgwwdT_xFlRavYXB/view'
  },
  {
    date: 'Jan 2023 - Present',
    title: 'Software Engineer',
    subtitle: 'Tech Solutions Inc.',
    description: 'Core developer for the main enterprise product suite, improving system performance and introducing newly requested features.',
    bullets: [
      'Spearheaded the migration from a monolithic architecture to microservices using Node.js and Docker.',
      'Optimized React frontend rendering, reducing average page load time by 35%.',
      'Mentored 3 junior developers and established code review best practices.'
    ]
  },
  {
    date: 'Jun 2021 - Dec 2022',
    title: 'Frontend Developer',
    subtitle: 'Creative Web Agency',
    description: 'Developed responsive, accessible, and high-performance web applications for diverse e-commerce and corporate clients.',
    bullets: [
      'Built custom React components and integrated headless CMS solutions (Sanity, Contentful).',
      'Implemented complex animations using Framer Motion and GSAP.',
      'Collaborated closely with the design team to ensure pixel-perfect implementation of Figma prototypes.'
    ]
  },
  {
    date: 'Jan 2020 - May 2021',
    title: 'Web Development Intern',
    subtitle: 'Startup Hub',
    description: 'Assisted in developing MVP features for various startup projects.',
    bullets: [
      'Developed REST APIs using Express.js and MongoDB.',
      'Created responsive UI layouts using Tailwind CSS.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[var(--color-brand-card)]/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey" 
        />

        <div className="max-w-4xl mx-auto mt-16">
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              bullets={exp.bullets}
              delay={index * 0.2}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
