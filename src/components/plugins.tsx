import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Download,
  Code,
  ArrowRight,
  Terminal,
  Server,
  Shield,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Plugins() {
  const officialPlugins = [
    {
      title: "check_disk",
      description: "Check disk space and inode usage on Unix/Linux systems",
      platform: "Unix/Linux",
      category: "System",
      downloads: "125K",
    },
    {
      title: "check_http",
      description: "Check HTTP/HTTPS services and validate responses",
      platform: "Cross-platform",
      category: "Network",
      downloads: "180K",
    },
    {
      title: "check_load",
      description: "Check system load average on Unix/Linux systems",
      platform: "Unix/Linux",
      category: "System",
      downloads: "95K",
    },
  ];

  const categories = [
    {
      name: "Network Plugins",
      icon: <Server className="w-6 h-6" />,
      count: 156,
    },
    {
      name: "System Plugins",
      icon: <Terminal className="w-6 h-6" />,
      count: 89,
    },
    {
      name: "Security Plugins",
      icon: <Shield className="w-6 h-6" />,
      count: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-orange-500/10 to-[#061220] pt-12 pb-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-white">Nagios Plugins</h1>
              <p className="text-lg text-gray-300">
                Official monitoring plugins for Nagios Core and compatible
                monitoring solutions
              </p>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="Search plugins..."
                  className="bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="official" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12">
              <TabsTrigger value="official">Official Plugins</TabsTrigger>
              <TabsTrigger value="community">Community Plugins</TabsTrigger>
            </TabsList>

            <TabsContent value="official" className="space-y-8">
              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {categories.map((category) => (
                  <Card
                    key={category.name}
                    className="bg-[#0c2137] border-[#1e3a5f] text-white"
                  >
                    <CardContent className="pt-6">
                      <div className="text-center space-y-2">
                        <div className="p-3 bg-orange-600/10 rounded-lg w-fit mx-auto">
                          {category.icon}
                        </div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-400">
                          {category.count} plugins available
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Plugins List */}
              <div className="space-y-4">
                {officialPlugins.map((plugin) => (
                  <motion.div
                    key={plugin.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl flex items-center gap-2">
                              <Code className="w-5 h-5 text-orange-400" />
                              {plugin.title}
                            </CardTitle>
                            <p className="text-sm text-gray-400 mt-1">
                              {plugin.platform}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Download className="h-4 w-4" />
                            <span className="text-sm">{plugin.downloads}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300">{plugin.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm px-2 py-1 rounded-full bg-orange-600/20 text-orange-400">
                            {plugin.category}
                          </span>
                          <Button
                            variant="ghost"
                            className="text-orange-400 hover:text-orange-300 hover:bg-orange-600/10"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <Card className="bg-[#0c2137] border-[#1e3a5f] text-white p-8">
                <div className="text-center space-y-4">
                  <Terminal className="w-12 h-12 mx-auto text-orange-400 opacity-50" />
                  <h3 className="text-xl font-semibold">Community Plugins</h3>
                  <p className="text-gray-400 max-w-lg mx-auto">
                    Discover and share community-created plugins through the
                    Nagios Exchange platform.
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 mt-4">
                    Visit Nagios Exchange
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Plugins;
