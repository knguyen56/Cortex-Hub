import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Book,
  Box,
  Clock,
  Code,
  Globe,
  HeartHandshake,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Core Monitoring",
      description:
        "Open-Source monitoring solution for servers, networks, and applications. Click here to learn more about Nagios Core!",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Toolkit",
      description:
        "Advanced tools for automation, customization, and API integrations.",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Documentation",
      description:
        "Comprehensive guides and documentation for all Nagios products.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network Monitoring",
      description:
        "Comprehensive network analysis and bandwidth monitoring tools.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Community Support",
      description:
        "Active community forum and professional support options available.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Contact Us!",
      description:
        "Reach out to a team member with any questions you may have!",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-900 dark:text-white"
              >
                Welcome to Nagios Cortex Hub
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
              >
                The ultimate resource hub for IT infrastructure monitoring.
                Discover powerful monitoring solutions, connect with the
                community, and access expert knowledge to ensure your systems
                run flawlessly.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="bg-gray-50 dark:bg-[#0c2137]/50 p-4 rounded-lg border border-gray-200 dark:border-[#1e3a5f] text-center">
                  <div className="text-gray-900 dark:text-white font-semibold mb-2">
                    Monitor
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enterprise-grade tools and plugins for comprehensive system
                    monitoring
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-[#0c2137]/50 p-4 rounded-lg border border-gray-200 dark:border-[#1e3a5f] text-center">
                  <div className="text-gray-900 dark:text-white font-semibold mb-2">
                    Learn
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Expert documentation and community knowledge to enhance your
                    skills
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-[#0c2137]/50 p-4 rounded-lg border border-gray-200 dark:border-[#1e3a5f] text-center">
                  <div className="text-gray-900 dark:text-white font-semibold mb-2">
                    Connect
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join a global community of IT professionals and monitoring
                    experts
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <Link to="/installation">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 relative"
            >
              <div className="w-full h-[400px] relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-[#0c2137] dark:to-[#061220] shadow-2xl border border-gray-200 dark:border-[#1e3a5f]">
                {/* Abstract Network Pattern */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-blue-400"
                      style={{
                        width: Math.random() * 100 + 50 + "px",
                        height: Math.random() * 100 + 50 + "px",
                        left: Math.random() * 100 + "%",
                        top: Math.random() * 100 + "%",
                        transform: "translate(-50%, -50%)",
                        animation: `pulse ${Math.random() * 2 + 2}s infinite`,
                      }}
                    />
                  ))}
                </div>
                {/* Connecting Lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="line-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1={Math.random() * 100 + "%"}
                      y1={Math.random() * 100 + "%"}
                      x2={Math.random() * 100 + "%"}
                      y2={Math.random() * 100 + "%"}
                      stroke="url(#line-gradient)"
                      strokeWidth="1"
                    />
                  ))}
                </svg>
                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-blue-400 text-8xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                      <path d="M16 16l-4-2" />
                      <path d="M8 16l4-2" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Comprehensive Monitoring Solutions
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f] text-gray-900 dark:text-white h-full shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-600/10 rounded-lg w-fit">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-16 border-t border-gray-200 dark:border-[#1e3a5f]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                500K+
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Active Installations
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                20+
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Years of Excellence
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                100K+
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Community Members
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
