import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import spotImage from '../assets/spot.png';
import luminaImage from '../assets/lumina.png';
import mehfilImage from '../assets/mehfil.jpg';
import linkEngineImage from '../assets/linkengine_new.png';

const projectsData = [
  {
    title: 'SpotMyStay – Accommodation Discovery Platform',
    description: 'A full-stack accommodation discovery platform with secure JWT auth, role-based access, RESTful APIs, and MongoDB-powered filtering for hostels, reviews, and visit requests.',
    image: spotImage,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/HarmeettSinghh/SpotMyStay',
    liveLink: 'https://spot-my-stay.vercel.app/',
  },
  {
    title: 'Lumina – Psychological Support System',
    description: 'A role-based mental health web app with appointment booking, counselor dashboards, JWT authorization, and an AI chatbot powered by the Groq API for real-time support.',
    image: luminaImage,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq API'],
    githubLink: 'https://github.com/HarmeettSinghh/Lumina',
    liveLink: 'https://lumina-peace.vercel.app/',
  },
  {
    title: 'Mehfil – Mood-Based Radio Web App',
    description: 'A radio web application that curates and plays songs according to your vibe and mood.',
    image: mehfilImage,
    techStack: [],
    githubLink: 'https://github.com/HarmeettSinghh/Mehfil',
    liveLink: 'https://mehfil-radio.vercel.app/',
  },
  {
    title: 'LinkEngine – URL Shortener & Analytics',
    description: 'A robust URL shortener that provides detailed analytics for tracked links, built with Java and Spring Boot.',
    image: linkEngineImage,
    techStack: ['Java', 'Spring Boot'],
    githubLink: 'https://github.com/HarmeettSinghh/LinkEngine',
    liveLink: 'https://link-engine-seven.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-[var(--color-brand-card)]/30 overflow-hidden">
      {/* Ambient glow — same as Achievements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              inProgress={project.inProgress}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/HarmeettSinghh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[var(--color-brand-bg)] border border-gray-700 text-[var(--color-brand-creme)] font-medium rounded-full hover:bg-[var(--color-brand-creme)] hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
