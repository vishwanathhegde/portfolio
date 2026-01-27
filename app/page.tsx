'use client';

import Navigation from '@/components/Navigation';
import Chatbot from '@/components/Chatbot';
import Image from 'next/image';
import { useState } from 'react';
import { 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [imageError, setImageError] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Pattern with Speckles */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
          backgroundSize: '100% 100%',
          animation: 'pulse 15s ease-in-out infinite'
        }}></div>
        {/* White speckles/stars effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(2px 2px at 90% 60%, white, transparent),
                           radial-gradient(1px 1px at 33% 80%, white, transparent),
                           radial-gradient(1px 1px at 70% 40%, white, transparent)`,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%, 100% 100%, 50% 50%, 80% 10%, 90% 60%, 33% 80%, 70% 40%',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      <Navigation />
      <Chatbot />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center px-4 md:px-16 lg:px-24 pt-20 md:pt-20 pb-20 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              {/* Greeting */}
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-3 md:mb-4">
                <motion.span 
                  className="text-4xl sm:text-5xl md:text-6xl"
                  animate={{
                    rotate: [0, 14, -8, 14, -8, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
                <span className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-blue-50 px-4 md:px-6 py-2 md:py-3 rounded-full" style={{ fontFamily: 'var(--font-fredoka), sans-serif' }}>Hello, I&apos;m</span>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-2 md:mb-4 text-black leading-tight text-center md:text-left">
                Vishwanath<br />Hegde
              </h1>

              {/* Title with Gradient */}
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-6 text-center md:text-left">
                <span className="gradient-text">Full Stack Developer</span>
              </p>

              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-2.5 md:px-4 py-1 md:py-2 mb-2 md:mb-4 mx-auto md:mx-0">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 text-[10px] sm:text-xs md:text-sm font-medium">3+ Years Industry Experience</span>
              </div>

              {/* Availability Info */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 bg-blue-50 border border-blue-200 px-2 md:px-3 py-0.5 md:py-1 rounded-full">Available Immediately</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 bg-blue-50 border border-blue-200 px-2 md:px-3 py-0.5 md:py-1 rounded-full">Open to Relocate</span>
              </div>
            </motion.div>

            {/* Right Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center md:justify-end mt-6 md:mt-0 group"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] transition-transform duration-300 group-hover:scale-105">
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                {/* Multiple visible concentric animated rings - concurrent animation */}
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute rounded-full"
                    style={{
                      borderWidth: '2px',
                      borderColor: `rgba(59, 130, 246, ${0.5 + index * 0.08})`,
                      top: `${index * 10}px`,
                      left: `${index * 10}px`,
                      right: `${index * 10}px`,
                      bottom: `${index * 10}px`,
                      borderStyle: 'solid',
                    }}
                    animate={{
                      scale: [1, 1.04, 1],
                      opacity: [0.4 + index * 0.1, 0.7 + index * 0.05, 0.4 + index * 0.1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                ))}
                {/* Photo frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                  {/* 
                    TO ADD YOUR PHOTO:
                    1. Place your photo in the 'public' folder
                    2. Name it 'profile-photo.jpg' (or change the src below)
                    3. Recommended: Square photo, 800x800px or larger
                  */}
                  {!imageError ? (
                    <Image 
                      src="/profile-photo.jpg" 
                      alt="Vishwanath Hegde" 
                      width={550}
                      height={550}
                      className="w-full h-full object-cover grayscale"
                      style={{ filter: 'grayscale(100%)' }}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center flex">
                      <div className="text-center">
                        <div className="w-64 h-64 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-7xl font-bold shadow-xl">
                          VH
                        </div>
                        <p className="text-gray-600 text-sm">Your Photo Here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Down Animation - Inside Home Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center items-center"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-1.5 md:gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
            >
              <span className="text-xs md:text-sm font-medium">Explore More</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <ChevronDown size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <p className="text-lg text-black leading-relaxed">
                Master&apos;s student in Applied Computer Science with <span className="text-black font-bold">3+ years</span> of industry experience as a Software Engineer building and maintaining production-scale web and mobile applications.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Strong expertise in <span className="text-black font-bold">Angular, Flutter, and TypeScript</span>, with a proven record of delivering scalable features, improving performance, and collaborating across cross-functional teams.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Currently seeking a <span className="text-black font-bold">Working Student (Werkstudent)</span> role to contribute immediately while continuing studies in Germany.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: 'Frontend & Mobile' },
                { icon: Briefcase, label: '3+ Years Experience' },
                { icon: GraduationCap, label: 'Master\'s Student' },
                { icon: Award, label: 'Production Apps' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-xl hover:scale-105 transition-transform border border-blue-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <p className="text-sm text-black font-medium">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div {...fadeInUp} className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: 'Frontend & Mobile',
                  skills: ['Angular (13+)', 'Flutter', 'Ionic', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'Tailwind CSS']
                },
                {
                  category: 'Backend & APIs',
                  skills: ['Node.js', 'Express.js', 'REST APIs']
                },
                {
                  category: 'Tools & Platforms',
                  skills: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Jira', 'MongoDB', 'MySQL']
                },
                {
                  category: 'AI and Tools',
                  skills: ['OpenAI GPT-4', 'Langchain', 'RAG', 'Pinecone', 'n8n', 'Cursor', 'Claude', 'Ollama']
                }
              ].map((group, idx) => (
                <div key={idx} className="glass p-6 rounded-xl border border-blue-200">
                  <h4 className="text-xl font-semibold mb-4 text-blue-600">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <motion.div {...fadeInUp} className="glass p-6 md:p-8 rounded-2xl max-w-4xl mx-auto border border-blue-200">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                <Briefcase className="text-white" size={32} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">Software Engineer</h3>
                <p className="text-blue-600 text-base md:text-lg mb-2 font-semibold">Robosoft Technologies, India</p>
                <p className="text-gray-700 mb-6 text-sm md:text-base">Full-time position with production-scale responsibilities</p>
              </div>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {[
                'Owned end-to-end development of production-grade features for large-scale Flutter and Angular applications',
                'Designed scalable UI architectures using clean architecture principles, improving maintainability and reducing regression issues',
                'Implemented Google Analytics and event tracking to enable data-driven decisions and increase user engagement by 20%',
                'Developed and optimized FinTech workflows including SIP, Lumpsum, goal planning, and profile management',
                'Led Angular upgrades (13+) and performance optimizations, improving long-term stability',
                'Collaborated with backend, QA, and product teams to integrate REST APIs and resolve production issues'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 md:space-x-3">
                  <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-black text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Selected Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'PGIM India Mutual Funds',
                tech: 'Angular',
                description: 'Developed investor and distributor workflows with self-certification modules and role-based access control.',
              },
              {
                title: 'UTI Mutual Fund',
                tech: 'Angular',
                description: 'Implemented transaction and non-transaction flows, smart search functionality, dashboards, and comprehensive API integrations.',
              },
              {
                title: 'Afiya – Healthcare App',
                tech: 'Flutter',
                description: 'Built appointment booking and management system, integrated analytics, and handled Android/iOS store releases.',
              },
              {
                title: 'Lixil Tomcat – Health Tracking',
                tech: 'Flutter',
                description: 'Implemented Bluetooth device communication and real-time health data visualization for health tracking applications.',
              },
              {
                title: 'Flaira - AI Content Management Platform',
                tech: 'AI/RAG',
                description: 'AI Content Management Platform using RAG-based learning to generate authentic, voice-consistent posts, preserves a user\'s personal or brand voice.',
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-xl hover:scale-105 transition-transform group hover:shadow-xl border border-blue-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">{project.title}</h3>
                <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 mb-4 font-medium hover:bg-blue-100 transition-colors">
                  {project.tech}
                </span>
                <p className="text-black leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                degree: 'M.Sc. Applied Computer Science',
                institution: 'Hochschule Schmalkalden, Germany',
                period: 'Oct 2025 – Present',
                status: 'Current'
              },
              {
                degree: 'B.E. Information Science and Engineering',
                institution: 'Bapuji Institute of Engineering and Technology, India',
                period: 'Aug 2018 – Jul 2022',
                status: 'Completed'
              }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-xl border border-blue-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-black">{edu.degree}</h3>
                    <p className="text-blue-600 text-lg mb-2 font-semibold">{edu.institution}</p>
                    <p className="text-gray-700 mb-4">{edu.period}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${
                      edu.status === 'Current' 
                        ? 'bg-blue-100 text-blue-700 border-blue-300' 
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-12 md:py-24 px-4 md:px-16 lg:px-24 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 gradient-text">Achievements & Activities</h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Technical Workshops',
                description: 'Conducted technical workshops on Flutter and programming fundamentals',
                icon: Award,
              },
              {
                title: 'Mentorship',
                description: 'Mentored undergraduate students in technical and interview preparation for campus placements',
                icon: Sparkles,
              },
              {
                title: 'Performance Impact',
                description: 'Increased user engagement by 20% through data-driven decisions and analytics implementation',
                icon: Award,
              },
              {
                title: 'Production Experience',
                description: 'Delivered multiple production-grade applications for major financial institutions',
                icon: Briefcase,
              }
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="glass p-4 md:p-6 rounded-xl hover:scale-105 transition-transform hover:shadow-xl border border-blue-200 text-center md:text-left"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 md:mb-4 shadow-lg mx-auto md:mx-0">
                  <achievement.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{achievement.title}</h3>
                <p className="text-sm md:text-base text-black leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Available immediately for Working Student positions (20 hrs/week). Open to relocation within Germany.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeInUp} className="glass p-6 md:p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 gradient-text text-center md:text-left">Contact Information</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { icon: Mail, text: 'vishwanathmhegde23@gmail.com', href: 'mailto:vishwanathmhegde23@gmail.com' },
                  { icon: Phone, text: '+49 155 10733721', href: 'tel:+4915510733721' },
                  { icon: MapPin, text: 'Schmalkalden, Germany', href: null },
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href || undefined}
                    className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 text-black hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <contact.icon className="text-white" size={18} />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-center sm:text-left break-all">{contact.text}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-blue-200">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-blue-600 text-center sm:text-left">Connect With Me</h4>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a
                    href="https://www.linkedin.com/in/vishwanath-m-hegde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white border border-blue-200 flex items-center justify-center hover:bg-white hover:border-blue-400 hover:scale-110 hover:shadow-lg transition-all"
                  >
                    <Linkedin className="text-blue-600" size={20} />
                  </a>
                  <a
                    href="https://github.com/vishwanathhegde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white border border-blue-200 flex items-center justify-center hover:bg-white hover:border-blue-400 hover:scale-110 hover:shadow-lg transition-all"
                  >
                    <Github className="text-blue-600" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 lg:px-24 border-t border-blue-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} Vishwanath Hegde</p>
        </div>
      </footer>
    </main>
  );
}
