import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Book,
  FileText,
  Video,
  ArrowRight,
  Bookmark,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Library() {
  const resources = [
    {
      title: "Getting Started with Nagios Core",
      type: "Documentation",
      description:
        "Learn the basics of Nagios Core installation and configuration",
      readTime: "15 min",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Network Monitoring Best Practices",
      type: "Guide",
      description: "Comprehensive guide to monitoring network infrastructure",
      readTime: "25 min",
      icon: <Book className="w-6 h-6" />,
    },
    {
      title: "Advanced Plugin Development",
      type: "Tutorial",
      description: "Create custom plugins for specific monitoring needs",
      readTime: "45 min",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Nagios XI Administration",
      type: "Documentation",
      description: "Complete guide to managing Nagios XI environments",
      readTime: "30 min",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-pink-500/10 to-[#061220] pt-12 pb-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-white">Nagios Library</h1>
              <p className="text-lg text-gray-300">
                Comprehensive documentation, guides, and learning resources
              </p>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="Search documentation..."
                  className="bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400"
                />
                <Button className="bg-pink-600 hover:bg-pink-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="bg-[#0c2137] border-[#1e3a5f] text-white h-full">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="p-3 bg-pink-600/10 rounded-lg">
                          {resource.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {resource.title}
                          </CardTitle>
                          <p className="text-sm text-gray-400">
                            {resource.type}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">
                          {resource.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-400">
                            Read time: {resource.readTime}
                          </div>
                          <Button
                            variant="ghost"
                            className="text-pink-400 hover:text-pink-300 hover:bg-pink-600/10"
                          >
                            Read Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="docs" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.type === "Documentation")
                  .map((resource) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Card className="bg-[#0c2137] border-[#1e3a5f] text-white h-full">
                        <CardHeader className="flex flex-row items-start gap-4">
                          <div className="p-3 bg-pink-600/10 rounded-lg">
                            {resource.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              {resource.title}
                            </CardTitle>
                            <p className="text-sm text-gray-400">
                              {resource.type}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4">
                            {resource.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-400">
                              Read time: {resource.readTime}
                            </div>
                            <Button
                              variant="ghost"
                              className="text-pink-400 hover:text-pink-300 hover:bg-pink-600/10"
                            >
                              Read Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            {/* Quick Links */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Bookmark className="w-8 h-8 mx-auto text-pink-400" />
                    <h3 className="font-semibold">Quick Start Guides</h3>
                    <p className="text-sm text-gray-400">
                      Get up and running quickly
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Video className="w-8 h-8 mx-auto text-pink-400" />
                    <h3 className="font-semibold">Video Tutorials</h3>
                    <p className="text-sm text-gray-400">
                      Learn through visual guides
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Book className="w-8 h-8 mx-auto text-pink-400" />
                    <h3 className="font-semibold">API Documentation</h3>
                    <p className="text-sm text-gray-400">
                      Technical references
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Library;
