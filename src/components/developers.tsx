import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  GitBranch,
  Puzzle,
  Terminal,
  Webhook,
  ArrowRight,
  BookOpen,
  Boxes,
} from "lucide-react";

function Developers() {
  const quickStartGuides = [
    {
      title: "5-Minute API Integration",
      description: "Quick guide to integrate with Nagios Cortex API",
      language: "Python",
    },
    {
      title: "Automation Script Example",
      description: "Automate monitoring setup with our SDK",
      language: "JavaScript",
    },
    {
      title: "Custom Plugin Tutorial",
      description: "Create your first monitoring plugin",
      language: "Go",
    },
  ];

  const sdkLanguages = [
    { name: "Python", version: "2.1.0" },
    { name: "JavaScript", version: "1.8.2" },
    { name: "Go", version: "1.4.0" },
    { name: "Java", version: "3.0.1" },
    { name: "Ruby", version: "2.2.0" },
    { name: "PHP", version: "2.0.3" },
  ];
  const devTools = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "CLI Tools",
      description: "Command-line interfaces for automation and integration",
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: "REST APIs",
      description: "Comprehensive APIs for all Nagios products",
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Plugin SDK",
      description: "Development kit for creating custom monitoring plugins",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Integration Tools",
      description: "Tools for third-party system integration",
    },
  ];

  const resources = [
    {
      title: "API Documentation",
      icon: <Code />,
      items: [
        "REST API Reference",
        "Authentication Guide",
        "Rate Limits",
        "Webhooks",
      ],
    },
    {
      title: "Development Guides",
      icon: <BookOpen />,
      items: [
        "Plugin Development",
        "Custom Scripts",
        "Event Handlers",
        "Automation",
      ],
    },
    {
      title: "Integration Examples",
      icon: <Boxes />,
      items: ["Docker", "Kubernetes", "Cloud Platforms", "Third-party Tools"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-500/10 to-[#061220] pt-12 pb-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-white">
                Developer Portal
              </h1>
              <p className="text-lg text-gray-300">
                Build with Nagios APIs, SDKs, and Developer Tools
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
                >
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Start Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickStartGuides.map((guide) => (
              <Card
                key={guide.title}
                className="bg-[#0c2137] border-[#1e3a5f] text-white"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{guide.title}</h3>
                    <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded">
                      {guide.language}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{guide.description}</p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-600/10"
                  >
                    View Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SDK Section */}
          <h2 className="text-2xl font-bold text-white mb-6">Official SDKs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {sdkLanguages.map((sdk) => (
              <Card
                key={sdk.name}
                className="bg-[#0c2137] border-[#1e3a5f] text-white"
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold mb-1">{sdk.name}</h3>
                  <p className="text-xs text-purple-400">v{sdk.version}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-white">
                Developer Resources
              </h1>
              <p className="text-lg text-gray-300">
                Tools, APIs, and documentation for building with Nagios
              </p>
            </motion.div>
          </div>
        </div>

        {/* Developer Tools Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devTools.map((tool) => (
              <Card
                key={tool.title}
                className="bg-[#0c2137] border-[#1e3a5f] text-white"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-purple-600/10 rounded-lg w-fit">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-600/10"
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documentation Sections */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((section) => (
              <Card
                key={section.title}
                className="bg-[#0c2137] border-[#1e3a5f] text-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {section.icon}
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-300 hover:text-purple-400 cursor-pointer"
                      >
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Developers;
