import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, techStack, githubLink, liveLink, inProgress = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[var(--color-brand-card)] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-60 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 font-heading text-sm">
            {inProgress ? 'Coming Soon' : 'Image Placeholder'}
          </div>
        )}
        {inProgress && (
          <span className="absolute top-3 right-3 z-20 px-3 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full">
            In Progress
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-heading mb-2 text-white group-hover:text-[var(--color-brand-creme)] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-brand-creme)] hover:text-white transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
