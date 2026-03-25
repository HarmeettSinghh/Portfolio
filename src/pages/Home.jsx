import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { Cover } from '../components/ui/cover';
import devLoop from '../assets/mainvdo.mp4';
import { useState, useEffect } from 'react';
import DecryptedText from '../components/DecryptedText';

const Home = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '30px 30px' }}
    >

      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-creme)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-10 md:py-0">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-brand-creme)] font-medium tracking-wider text-sm uppercase mb-4 block">
              Welcome to my portfolio
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6"
            >
              Hi, I'm <br />
              <Cover><span className="text-gradient">Harmeet Singh</span></Cover>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light mb-8"
            >
              <DecryptedText
                text="Full Stack Web Developer"
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
              />
            </motion.h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
              Somewhere between git init and git push lives every idea worth building. Code written deliberately, ruthlessly — with nothing wasted and nothing left broken.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[var(--color-brand-creme)] text-black font-semibold rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-gray-700 text-white font-medium rounded-full hover:border-[var(--color-brand-creme)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View Work <FaArrowDown className="text-sm" />
            </motion.a>
          </motion.div>
        </div>

        {/* Animated Developer Video — now visible on ALL screen sizes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex items-center justify-center relative w-full"
        >
          <div className="relative flex justify-center items-center">
            {/* Glowing backdrop */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-[#F5F5DC]/10 blur-3xl rounded-full"
            />

            {/* Video container — responsive sizes: small → medium → large */}
            <div className="relative flex justify-center items-center overflow-hidden rounded-xl w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]">
              <motion.video
                src={devLoop}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: { duration: 4, repeat: Infinity }
                }}
                className="w-[200px] sm:w-[280px] md:w-[420px] rounded-xl scale-114"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
