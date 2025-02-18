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
        "Install Apache, PHP and required packages",
        "Download Nagios Core and extract it",
        "Run ./configure script and compile",
        "Create Nagios user/group",
        "Install binary files, CGIs, and HTML files",
        "Install daemon init config file",
        "Install command mode config file",
        "Install Apache config files",
        "Create nagiosadmin user account",
        "Start Apache and Nagios services",
      ],
      requirements: [
        "Linux OS (RHEL/CentOS/Ubuntu/Debian)",
        "Apache 2.4+",
        "PHP 7.4+ with GD extensions",
        "GCC compiler and development libraries",
        "2GB RAM minimum",
        "20GB disk space",
      ],
      commands: [
        "yum install -y gcc glibc glibc-common wget unzip httpd php gd gd-devel perl postfix",
        "cd /tmp && wget https://github.com/NagiosEnterprises/nagioscore/archive/nagios-4.4.6.tar.gz",
        "tar xzf nagios-4.4.6.tar.gz",
        "cd nagioscore-nagios-4.4.6",
        "./configure --with-httpd-conf=/etc/httpd/conf.d",
        "make all",
        "make install",
        "make install-daemoninit",
        "make install-commandmode",
        "make install-config",
        "make install-webconf",
      ],
    },
    {
      title: "Nagios XI",
      icon: <Server className="w-6 h-6" />,
      steps: [
        "Download VMware Workstation Player",
        "Download Nagios XI VM image",
        "Import VM into VMware Player",
        "Power on the virtual machine",
        "Access web interface using displayed IP",
        "Complete initial setup wizard",
        "Apply system updates",
        "Configure monitoring targets",
      ],
      requirements: [
        "VMware Workstation Player 15+",
        "4GB RAM minimum (8GB recommended)",
        "40GB free disk space",
        "2 CPU cores minimum",
        "Network adapter in bridged mode",
        "DHCP server on network (optional)",
      ],
      commands: [
        "# Download latest XI VM image from assets.nagios.com",
        "# Import .ovf file into VMware Player",
        "# Start VM and wait for IP address",
        "# Access https://<VM_IP>/nagiosxi/",
        "# Follow web-based setup wizard",
      ],
    },
    {
      title: "Log Server",
      icon: <Database className="w-6 h-6" />,
      steps: [
        "Download VMware Workstation Player",
        "Download Log Server VM image",
        "Import VM into VMware Player",
        "Configure VM settings (RAM, CPU)",
        "Power on virtual machine",
        "Access web interface using displayed IP",
        "Complete initial configuration",
        "Configure log sources and retention",
      ],
      requirements: [
        "VMware Workstation Player 15+",
        "8GB RAM minimum (16GB recommended)",
        "500GB storage minimum",
        "4 CPU cores minimum",
        "Network adapter in bridged mode",
        "DHCP server on network (optional)",
      ],
      commands: [
        "# Download Log Server VM from assets.nagios.com",
        "# Import .ovf file into VMware Player",
        "# Allocate minimum 8GB RAM",
        "# Configure network adapter to bridged",
        "# Start VM and note IP address",
        "# Access https://<VM_IP>/nagiosls/",
      ],
    },
    {
      title: "Network Analyzer",
      icon: <Network className="w-6 h-6" />,
      steps: [
        "Download VMware Workstation Player",
        "Download Network Analyzer VM",
        "Import VM into VMware Player",
        "Configure VM resources",
        "Set network adapter to bridged",
        "Power on virtual machine",
        "Access web interface",
        "Configure network sources",
      ],
      requirements: [
        "VMware Workstation Player 15+",
        "4GB RAM minimum",
        "100GB storage minimum",
        "2 CPU cores minimum",
        "Network adapter in promiscuous mode",
        "SPAN/mirror port configuration",
      ],
      commands: [
        "# Download Network Analyzer VM",
        "# Import .ovf file into VMware Player",
        "# Configure network settings",
        "# Enable promiscuous mode",
        "# Start VM and wait for IP",
        "# Access https://<VM_IP>/nagiosna/",
      ],
    },
    {
      title: "Fusion",
      icon: <Terminal className="w-6 h-6" />,
      steps: [
        "Download VMware Workstation Player",
        "Download Fusion VM image",
        "Import VM into VMware Player",
        "Configure VM settings",
        "Power on virtual machine",
        "Access web interface",
        "Complete initial setup",
        "Add Nagios servers to monitor",
      ],
      requirements: [
        "VMware Workstation Player 15+",
        "4GB RAM minimum",
        "50GB storage minimum",
        "2 CPU cores minimum",
        "Network adapter in bridged mode",
        "Access to Nagios Core/XI servers",
      ],
      commands: [
        "# Download Fusion VM from assets.nagios.com",
        "# Import .ovf file into VMware Player",
        "# Configure network to bridged mode",
        "# Start VM and note IP address",
        "# Access https://<VM_IP>/nagiosfusion/",
        "# Follow setup wizard to add servers",
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
