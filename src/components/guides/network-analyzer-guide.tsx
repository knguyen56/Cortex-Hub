import Header from "../Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Activity } from "lucide-react";

export default function NetworkAnalyzerGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Network className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Nagios Network Analyzer Installation Guide</h1>
          </div>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
              <ul className="list-disc pl-6 space-y-2">
                <li>VMware Workstation Player 15+</li>
                <li>4GB RAM minimum</li>
                <li>100GB storage minimum</li>
                <li>2 CPU cores minimum</li>
                <li>Network adapter in promiscuous mode</li>
                <li>SPAN/mirror port configuration on network switches</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">VM Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Download and Import</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Download Network Analyzer VM from assets.nagios.com</li>
                  <li>Open VMware Workstation Player</li>
                  <li>Import the .ovf file</li>
                  <li>Review and accept VM settings</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Configure VM Settings</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Set RAM to minimum 4GB</li>
                  <li>Configure network adapter to bridged mode</li>
                  <li>Enable promiscuous mode on network adapter</li>
                  <li>Verify storage allocation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Network Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Switch Configuration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Configure SPAN/mirror port on network switch</li>
                  <li>Direct network traffic to monitoring interface</li>
                  <li>Verify traffic mirroring is working</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Initial Setup</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Power on virtual machine</li>
                  <li>Note the IP address from console</li>
                  <li>Access web interface at https://<VM_IP>/nagiosna/</li>
                  <li>Complete initial setup wizard</li>
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Basic Configuration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Configure administrator account</li>
                  <li>Set up email notifications</li>
                  <li>Configure time zone settings</li>
                  <li>Set up data retention policies</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Network Monitoring Setup</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Configure network interfaces</li>
                  <li>Set up traffic analysis rules</li>
                  <li>Configure bandwidth monitoring</li>
                  <li>Set up alerts and thresholds</li>
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
                <li>Verify traffic capture is working</li>
                <li>Set up custom reports</li>
                <li>Configure dashboards</li>
                <li>Set up user accounts and permissions</li>
                <li>Configure backup settings</li>
                <li>Test alerting system</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
