import Header from "./Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Terminal,
  Server,
  Shield,
  Database,
  Network,
} from "lucide-react";

function InstallationGuide() {
  const products = [
    {
      title: "Nagios Core",
      icon: <Shield className="w-6 h-6" />,
      steps: [
        "Install required packages",
        "Create Nagios user and group",
        "Download and compile Nagios Core",
        "Install the Nagios Plugins",
        "Configure web interface access",
      ],
      requirements: [
        "Linux OS (RHEL/CentOS recommended)",
        "Apache Web Server",
        "PHP 7.4 or later",
        "GCC compiler",
      ],
    },
    {
      title: "Nagios XI",
      icon: <Server className="w-6 h-6" />,
      steps: [
        "Download XI installation script",
        "Run installation wizard",
        "Configure system settings",
        "Import initial configuration",
        "Set up monitoring targets",
      ],
      requirements: [
        "Linux OS (RHEL/CentOS recommended)",
        "4GB RAM minimum",
        "20GB storage minimum",
        "2 CPU cores minimum",
      ],
    },
    {
      title: "Log Server",
      icon: <Database className="w-6 h-6" />,
      steps: [
        "Configure system prerequisites",
        "Install Elasticsearch",
        "Deploy Log Server components",
        "Configure instance settings",
        "Set up log sources",
      ],
      requirements: [
        "Linux OS (RHEL/CentOS 7 or 8)",
        "8GB RAM minimum",
        "500GB storage minimum",
        "4 CPU cores minimum",
      ],
    },
    {
      title: "Network Analyzer",
      icon: <Network className="w-6 h-6" />,
      steps: [
        "Configure network settings",
        "Install required packages",
        "Set up database",
        "Configure web interface",
        "Initialize network monitoring",
      ],
      requirements: [
        "Linux OS (RHEL/CentOS recommended)",
        "4GB RAM",
        "100GB storage",
        "Network interface in promiscuous mode",
      ],
    },
    {
      title: "Fusion",
      icon: <Terminal className="w-6 h-6" />,
      steps: [
        "Prepare system environment",
        "Install Fusion components",
        "Configure database connection",
        "Set up monitoring sources",
        "Configure dashboards",
      ],
      requirements: [
        "Linux OS (RHEL/CentOS recommended)",
        "4GB RAM minimum",
        "50GB storage minimum",
        "2 CPU cores minimum",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Installation Guides
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Step-by-step instructions for installing and configuring Nagios
            products
          </p>
        </motion.div>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-5 mb-8">
            {products.map((product) => (
              <TabsTrigger
                key={product.title}
                value={
                  product.title.toLowerCase().split(" ")[1] ||
                  product.title.toLowerCase()
                }
              >
                {product.title.split(" ")[1] || product.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent
              key={product.title}
              value={
                product.title.toLowerCase().split(" ")[1] ||
                product.title.toLowerCase()
              }
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        {product.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        Installation Steps
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      {product.steps.map((step, index) => (
                        <li
                          key={step}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <span className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                      View Full Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Server className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        System Requirements
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {product.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}

export default InstallationGuide;
