import Header from "./Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

function Assets() {
  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">
          Nagios Documentation
        </h1>

        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="user">User Guide</TabsTrigger>
            <TabsTrigger value="admin">Admin Guide</TabsTrigger>
            <TabsTrigger value="core">Core Quickstart</TabsTrigger>
            <TabsTrigger value="log">Log Server</TabsTrigger>
            <TabsTrigger value="analyzer">Network Analyzer</TabsTrigger>
          </TabsList>

          <TabsContent value="user" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Essential information for new users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Dashboard Overview
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        The dashboard provides a comprehensive view of your
                        monitored infrastructure: - Home dashboard with
                        customizable widgets - Quick-access tactical overview -
                        Network health statistics - Recent alerts and
                        notifications
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Access detailed monitoring information: - Host and
                        service status views - Network outage history -
                        Performance graphs and trends - Scheduled downtime
                        management
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Generate and schedule reports: - Availability reports -
                        Alert history - Trend analysis - Custom report creation
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Administration</CardTitle>
                <CardDescription>
                  System configuration and management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        System Configuration
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Essential system settings: - Core configuration
                        management - User and group administration -
                        Authentication settings - Email and notification setup
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Monitoring Configuration
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Configure monitoring settings: - Host and service
                        definitions - Check commands and plugins - Notification
                        rules - Advanced monitoring options
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        System Maintenance
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Maintain system health: - Backup and recovery -
                        Performance optimization - Database management - System
                        updates and upgrades
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="core" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nagios Core Quickstart</CardTitle>
                <CardDescription>
                  Getting started with Nagios Core 4
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Installation Overview
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Key steps for installing Nagios Core: - Install required
                        packages - Create Nagios user and group - Download and
                        compile Nagios Core - Install the Nagios Plugins -
                        Configure web interface access
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Configuration Basics
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Essential configuration steps: - Define hosts and
                        services - Set up monitoring commands - Configure
                        notifications - Verify configuration - Start the Nagios
                        service
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="log" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Log Server Installation</CardTitle>
                <CardDescription>
                  Manual installation guide for Nagios Log Server
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Prerequisites
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        System requirements: - RHEL/CentOS 7 or 8 - 4 CPU cores
                        minimum - 8GB RAM minimum - 500GB storage minimum -
                        SELinux disabled
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Installation Steps
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Key installation steps: - Configure firewall settings -
                        Install dependencies - Set up Elasticsearch - Install
                        Nagios Log Server - Configure instance
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analyzer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Network Analyzer Installation</CardTitle>
                <CardDescription>
                  Manual installation guide for Nagios Network Analyzer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        System Requirements
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Minimum requirements: - Linux OS (RHEL/CentOS
                        recommended) - 4GB RAM - 2 CPU cores - 100GB storage -
                        Network interface in promiscuous mode
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        Installation Process
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Installation steps: - Configure network settings -
                        Install required packages - Set up database - Configure
                        web interface - Initialize network monitoring
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default Assets;
