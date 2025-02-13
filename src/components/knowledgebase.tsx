import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Book,
  FileText,
  ArrowRight,
  Bookmark,
  HelpCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Knowledgebase() {
  const articles = [
    {
      title: "How to Install Nagios Core",
      category: "Installation",
      views: 15420,
      lastUpdated: "2024-01-15",
    },
    {
      title: "Configuring Email Notifications",
      category: "Configuration",
      views: 12840,
      lastUpdated: "2024-01-10",
    },
    {
      title: "Understanding Host and Service Checks",
      category: "Monitoring",
      views: 9650,
      lastUpdated: "2024-01-08",
    },
    {
      title: "Troubleshooting Common Issues",
      category: "Troubleshooting",
      views: 18920,
      lastUpdated: "2024-01-12",
    },
  ];

  const categories = [
    { name: "Installation", count: 45 },
    { name: "Configuration", count: 78 },
    { name: "Monitoring", count: 92 },
    { name: "Troubleshooting", count: 63 },
    { name: "Plugins", count: 51 },
    { name: "Security", count: 34 },
    { name: "Glossary", count: 108 },
  ];

  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-green-500/10 to-[#061220] pt-12 pb-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-white">
                Nagios Knowledge Base
              </h1>
              <p className="text-lg text-gray-300">
                Find answers, tutorials, and solutions to common questions
              </p>
              <div className="flex gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="Search knowledge base..."
                  className="bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="space-y-6">
              <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant="ghost"
                      className="w-full justify-between text-gray-300 hover:text-green-400 hover:bg-green-600/10"
                      onClick={() =>
                        category.name === "Glossary"
                          ? (window.location.href = "/glossary")
                          : null
                      }
                    >
                      {category.name}
                      <span className="text-sm text-gray-400">
                        {category.count}
                      </span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <HelpCircle className="w-8 h-8 mx-auto text-green-400" />
                    <div className="space-y-2">
                      <h3 className="font-semibold">Need Help?</h3>
                      <p className="text-sm text-gray-400">
                        Contact our support team for assistance
                      </p>
                      <Button className="w-full bg-green-600 hover:bg-green-700 mt-2">
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles List */}
            <div className="lg:col-span-3 space-y-6">
              <Tabs defaultValue="articles" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="glossary">Glossary</TabsTrigger>
                </TabsList>

                <TabsContent value="articles">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {articles.map((article) => (
                      <Card
                        key={article.title}
                        className="bg-[#0c2137] border-[#1e3a5f] text-white"
                      >
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {article.title}
                          </CardTitle>
                          <p className="text-sm text-gray-400">
                            Category: {article.category}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <div className="space-y-1 text-sm text-gray-400">
                              <div>{article.views.toLocaleString()} views</div>
                              <div>Updated: {article.lastUpdated}</div>
                            </div>
                            <Button
                              variant="ghost"
                              className="text-green-400 hover:text-green-300 hover:bg-green-600/10"
                            >
                              Read Article
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                      <CardContent className="pt-6">
                        <div className="text-center space-y-2">
                          <Book className="w-8 h-8 mx-auto text-green-400" />
                          <h3 className="font-semibold">Getting Started</h3>
                          <p className="text-sm text-gray-400">
                            New to Nagios? Start here
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                      <CardContent className="pt-6">
                        <div className="text-center space-y-2">
                          <FileText className="w-8 h-8 mx-auto text-green-400" />
                          <h3 className="font-semibold">Documentation</h3>
                          <p className="text-sm text-gray-400">
                            Technical guides & manuals
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
                      <CardContent className="pt-6">
                        <div className="text-center space-y-2">
                          <Bookmark className="w-8 h-8 mx-auto text-green-400" />
                          <h3 className="font-semibold">Popular Articles</h3>
                          <p className="text-sm text-gray-400">
                            Most viewed solutions
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="glossary">
                  <div className="space-y-4">
                    {[
                      {
                        term: "Active Check",
                        definition:
                          "A check that is initiated and performed by Nagios Core or Nagios XI - usually on a pre-determined schedule. Plugins are used to perform active checks.",
                      },
                      {
                        term: "Agent",
                        definition:
                          "Software that is installed on servers/workstations so they can be monitored. Agents are available for Windows and Linux machines/servers. In contrast, agentless monitoring refers to the ability to monitor a machine without having to install an agent on it - usually using SNMP or WMI.",
                      },
                      {
                        term: "AIX",
                        definition:
                          "A UNIX operating system. There are plugins for monitoring AIX with Nagios Core and Nagios XI.",
                      },
                    ].map((item) => (
                      <Card
                        key={item.term}
                        className="bg-[#0c2137] border-[#1e3a5f] text-white"
                      >
                        <CardHeader>
                          <CardTitle className="text-lg">{item.term}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300">{item.definition}</p>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="flex justify-center mt-6">
                      <Button className="bg-green-600 hover:bg-green-700">
                        View All Terms
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Knowledgebase;
