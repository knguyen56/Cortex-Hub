import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Download, Star, ArrowRight, Filter, Tags } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Exchange() {
  const plugins = [
    {
      title: "Check_MK",
      description: "Comprehensive monitoring solution for Nagios",
      downloads: "125K",
      rating: 4.8,
      author: "tribe29",
      category: "Monitoring",
    },
    {
      title: "NRPE",
      description: "Execute plugins on remote Linux/Unix machines",
      downloads: "250K",
      rating: 4.9,
      author: "NagiosEnterprises",
      category: "Remote Execution",
    },
    {
      title: "NSClient++",
      description: "Windows monitoring agent for Nagios",
      downloads: "180K",
      rating: 4.7,
      author: "mickem",
      category: "Windows",
    },
    {
      title: "PNP4Nagios",
      description: "Performance data analyzer and grapher",
      downloads: "95K",
      rating: 4.6,
      author: "lingej",
      category: "Graphing",
    },
    {
      title: "check_oracle_health",
      description: "Oracle database monitoring plugin",
      downloads: "75K",
      rating: 4.5,
      author: "lausser",
      category: "Database",
    },
    {
      title: "check_mk_agent",
      description: "Agent for Check_MK monitoring system",
      downloads: "85K",
      rating: 4.7,
      author: "tribe29",
      category: "Agent",
    },
  ];

  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-yellow-500/10 to-[#061220] pt-12 pb-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-white">Nagios Exchange</h1>
              <p className="text-lg text-gray-300">
                Discover and share plugins, addons, and extensions for Nagios
              </p>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="Search plugins, addons, and extensions..."
                  className="bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400"
                />
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  <Search className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-600/10"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="plugins" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="plugins">Plugins</TabsTrigger>
              <TabsTrigger value="addons">Add-ons</TabsTrigger>
              <TabsTrigger value="config">Config</TabsTrigger>
            </TabsList>

            <TabsContent value="plugins" className="space-y-8">
              {/* Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Monitoring",
                  "Network",
                  "Security",
                  "Database",
                  "System",
                  "Web",
                  "Cloud",
                  "Other",
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="border-yellow-600/30 text-yellow-600 hover:bg-yellow-600/10"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Plugins Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plugins.map((plugin) => (
                  <motion.div
                    key={plugin.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold">
                              {plugin.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                              by {plugin.author}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm">{plugin.rating}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300">{plugin.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Download className="h-4 w-4" />
                            <span className="text-sm">{plugin.downloads}</span>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-600/10"
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

            <TabsContent value="addons" className="space-y-6">
              <div className="text-center text-gray-400 py-12">
                <Tags className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No add-ons available at the moment</p>
              </div>
            </TabsContent>

            <TabsContent value="config" className="space-y-6">
              <div className="text-center text-gray-400 py-12">
                <Tags className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No configuration templates available at the moment</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default Exchange;
