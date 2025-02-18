import Header from "../Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, HardDrive } from "lucide-react";

export default function LogServerGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Database className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Nagios Log Server Installation Guide</h1>
          </div>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">System Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
              <ul className="list-disc pl-6 space-y-2">
                <li>VMware Workstation Player 15 or later</li>
                <li>8GB RAM minimum (16GB recommended)</li>
                <li>500GB storage minimum</li>
                <li>4 CPU cores minimum</li>
                <li>Network adapter in bridged mode</li>
                <li>DHCP server on network (optional)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Installation Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Prepare Environment</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Download VMware Workstation Player</li>
                  <li>Download Nagios Log Server VM image</li>
                  <li>Ensure adequate system resources</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. VM Configuration</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Import VM into VMware Player</li>
                  <li>Configure RAM allocation (minimum 8GB)</li>
                  <li>Set CPU cores (minimum 4)</li>
                  <li>Configure network adapter to bridged mode</li>
                  <li>Verify storage allocation</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3. Initial Setup</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Power on virtual machine</li>
                  <li>Wait for initial boot and configuration</li>
                  <li>Note the IP address displayed on console</li>
                  <li>Access web interface at https://<VM_IP>/nagiosls/</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Configuration Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Initial Configuration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete web-based setup wizard</li>
                  <li>Create administrator account</li>
                  <li>Configure email settings</li>
                  <li>Set up initial instance settings</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Log Source Configuration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Add log sources</li>
                  <li>Configure log parsing rules</li>
                  <li>Set up log retention policies</li>
                  <li>Configure alerts and notifications</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Post-Installation Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Configure backup repository</li>
                <li>Set up log rotation</li>
                <li>Configure additional users and roles</li>
                <li>Set up dashboards</li>
                <li>Configure automated reporting</li>
                <li>Test log collection and alerting</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
