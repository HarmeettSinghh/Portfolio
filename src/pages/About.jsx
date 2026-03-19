import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better" 
        />

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_2fr] lg:grid-cols-[0.7fr_2fr] gap-12 items-start mt-12">
          
          {/* Profile Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-4/5 sm:w-2/3 md:w-full mx-auto relative group"
          >
            {/* Decorative background block */}
            <div className="absolute inset-0 bg-[var(--color-brand-creme)] rounded-2xl md:-right-4 md:-bottom-4 transform translate-x-3 translate-y-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            
            <div className="relative aspect-square md:aspect-[3/4] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
               {/* Replace with actual image src in production */}
               <div className="w-full h-full flex flex-col items-center justify-center text-gray-700 bg-[var(--color-brand-card)]">
                 <span className="font-heading text-xl font-bold bg-gray-800 p-8 rounded-full mb-4">Picture</span>
               </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-2">
              Passionate developer turning ideas into reality.
            </h3>
            
            <div className="space-y-4 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Hey, I'm Harmeet — a CS undergrad who got way too into building things and never really stopped.
              </p>
              <p>
                I do full-stack web dev. React, Node.js, Express, MongoDB — that's my usual playground. I like writing code that actually makes sense to read later, and building stuff that holds up when real people use it.
              </p>
              <p>
                Outside of that, I'm grinding DSA, slowly getting into system design, and learning what I don't know yet — which is honestly still a lot.
              </p>
              <p>
                Always up for a good conversation about tech or really anything interesting. Let's connect.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {['Fast Learner', 'Problem Solver', 'Team Player', 'Creative Thinker'].map((trait, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[var(--color-brand-card)] border border-gray-800 rounded-full text-sm text-[var(--color-brand-creme)]"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
