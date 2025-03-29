import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Briefcase, GraduationCap, Award, Code, Network, Server, Brain, ChevronDown, Medal, Users, MapPin } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [activeSkill, setActiveSkill] = useState('');

  const skills = {
    networking: ['TCP/IP', 'DNS', 'DHCP', 'VLANs', 'Subnetting', 'Firewalls', 'VPNs', 'IDS/IPS'],
    monitoring: ['Wireshark', 'Zabbix', 'Nagios', 'PRTG', 'SolarWinds'],
    scripting: ['Python', 'PowerShell', 'Bash'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Hyper-V'],
    aiml: ['TensorFlow', 'PyTorch', 'OpenCV']
  };

  // Optimized animation variants for faster transitions
  const sidebarVariants = {
    initial: { x: -300, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, duration: 0.2 }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 8 }
    },
    tap: { scale: 0.95 }
  };

  const contentVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      x: -50,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.2
      }
    }
  };

  const renderContent = () => {
    const content = {
      about: (
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-xl"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <motion.div 
              className="relative w-48 h-48"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform rotate-6 scale-105"></div>
              <img
                src="https://raw.githubusercontent.com/theshivammaheshwari/cv/main/shivam.jpg"
                alt="Shivam Maheshwari"
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
              />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                IT and Network Support Engineer with 10+ years of experience in network administration, troubleshooting, and IT infrastructure support. 
                Skilled in network security, cloud services, virtualization, and automation. 
                Adept at diagnosing and resolving technical issues to optimize system performance and ensure security.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Jaipur, India</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span>+91-9468955596</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <span>theshivammaheshwari@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Linkedin className="w-5 h-5 text-blue-600 mr-2" />
                  <a href="https://linkedin.com/in/theshivammaheshwari" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    linkedin.com/in/theshivammaheshwari
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Github className="w-5 h-5 text-blue-600 mr-2" />
                  <a href="https://github.com/theshivammaheshwari" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    github.com/theshivammaheshwari
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
      experience: (
        <motion.div className="space-y-6">
          {[
            {
              company: "Zentity a.s.",
              role: "Infrastructure & Support Engineer",
              period: "09/2022 - 12/2024",
              type: "Remote",
              achievements: [
                "Automated tasks using Python & Bash scripts, cutting manual efforts by 30%",
                "Monitored and analyzed systems using Zabbix, identifying and addressing 150+ critical incidents",
                "Managed log and error analysis to troubleshoot issues, minimizing system downtime by 25%"
              ]
            },
            {
              company: "The LNM Institute of Information Technology",
              role: "Technical Support Engineer",
              period: "09/2014 - 08/2022",
              type: "On-site",
              achievements: [
                "Managed network infrastructure for 450+ devices, ensuring 99% uptime",
                "Conducted training sessions on advanced IT tools, improving team productivity by 30%",
                "Delivered end-user IT support, resolving 50+ technical issues per month"
              ]
            }
          ].map((job, index) => (
            <motion.div 
              key={job.company}
              className="bg-white p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">{job.company}</h3>
              </div>
              <p className="text-blue-600 mb-4 font-semibold">{job.role} | {job.type} | {job.period}</p>
              <ul className="space-y-3 text-gray-700">
                {job.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="text-blue-600 mr-2">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      ),
      skills: (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Networking & Security', icon: Network, skills: skills.networking },
            { title: 'Scripting & Automation', icon: Code, skills: skills.scripting },
            { title: 'Cloud & Virtualization', icon: Server, skills: skills.cloud },
            { title: 'AI/ML', icon: Brain, skills: skills.aiml }
          ].map((category) => (
            <motion.div 
              key={category.title}
              className="bg-white p-8 rounded-2xl shadow-xl cursor-pointer overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveSkill(activeSkill === category.title ? '' : category.title)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <category.icon className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: activeSkill === category.title ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-blue-600" size={24} />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeSkill === category.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.2 }}
                    className="flex flex-wrap gap-2 mt-4"
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      ),
      education: (
        <motion.div className="space-y-6">
          {[
            {
              degree: "M.Tech, Computer Science",
              institution: "The LNM Institute of Information Technology Jaipur",
              score: "79.61%",
              period: "08/2022 - 08/2024"
            },
            {
              degree: "B.Tech, Information Technology",
              institution: "Govt. Engineering College Bikaner",
              score: "72.33%",
              period: "08/2010 - 08/2014"
            }
          ].map((edu) => (
            <motion.div 
              key={edu.degree}
              className="bg-white p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
              </div>
              <p className="text-gray-700 text-lg">{edu.institution}</p>
              <p className="text-blue-600 font-semibold mt-2">{edu.score} | {edu.period}</p>
            </motion.div>
          ))}
        </motion.div>
      ),
      projects: (
        <motion.div className="space-y-6">
          {[
            {
              title: 'Enterprise Network Security & Monitoring',
              tech: 'Wireshark, pfSense, Zabbix, Linux',
              description: 'Deployed intrusion detection systems (IDS) and configured firewalls (pfSense), enhancing network security and reducing unauthorized access attempts by 40%.'
            },
            {
              title: 'Cloud-Based Network Deployment',
              tech: 'AWS VPC, OpenVPN, Terraform, Linux',
              description: 'Designed a secure Virtual Private Cloud (VPC) for remote office connectivity, improving network accessibility by 60%.'
            },
            {
              title: 'PC Application Control Through Air Gestures',
              tech: 'Python, OpenCV, Arduino',
              description: 'Developed an innovative solution for computer control via hand gestures, improving accessibility by 30%.'
            }
          ].map((project) => (
            <motion.div 
              key={project.title}
              className="bg-white p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">Technologies: {project.tech}</p>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      ),
      certifications: (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Google - Technical Support Fundamentals',
            'CDAC Mohali - Network Security Engineering',
            'ECB - Certification of Linux & Network Security',
            'IIT Kanpur - Internet of Things Certification',
            'IIT Kanpur - Online Certification Course On Crash Course in Python',
            'NIIT - Certificate of Data Structure & Algorithms'
          ].map((cert) => (
            <motion.div 
              key={cert}
              className="bg-white p-6 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center">
                <Award className="text-blue-600 mr-3" size={24} />
                <p className="text-gray-700 font-semibold">{cert}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ),
      awards: (
        <motion.div className="space-y-6">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <Medal className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Appreciation of Outstanding Performance [LNMIIT]</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Recognized for outstanding performance on the 15th, 16th, and 17th Foundation Days of the Institute consecutively for three years, as well as on the 21st Foundation Day.
            </p>
          </motion.div>
        </motion.div>
      ),
      volunteering: (
        <motion.div className="space-y-6">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-4">
              <Users className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">National Cadet Corps</h3>
            </div>
            <p className="text-blue-600 mb-4 font-semibold">NCC "B" and "C" Certification · Cadet | 06/2012 - 05/2014</p>
            <p className="text-gray-700 leading-relaxed">
              Defence includes rescue work, first aid, firefighting, and maintenance of essential services such as motor transport, pioneering, and engineering services. Water supply, power supply, and traffic control. Administration and running of camps.
            </p>
          </motion.div>
        </motion.div>
      )
    };

    return content[activeSection as keyof typeof content];
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar */}
      <motion.div 
        className="w-80 bg-white shadow-2xl p-8 fixed h-full overflow-y-auto"
        variants={sidebarVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Shivam Maheshwari
          </h1>
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { icon: Mail, href: "mailto:theshivammaheshwari@gmail.com" },
              { icon: Phone, href: "tel:+919468955596" },
              { icon: Linkedin, href: "https://linkedin.com/in/theshivammaheshwari" },
              { icon: Github, href: "https://github.com/theshivammaheshwari" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Infrastructure Engineer | Python Automation | IT Security & Monitoring | AI & ML Solutions
          </p>
        </motion.div>

        <nav className="space-y-2">
          {[
            'about', 
            'experience', 
            'education', 
            'projects', 
            'skills', 
            'certifications',
            'awards',
            'volunteering'
          ].map((section, index) => (
            <motion.button
              key={section}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              custom={index}
              onClick={() => setActiveSection(section)}
              className={`w-full text-left px-6 py-3 rounded-xl transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-blue-100 text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 ml-80 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;