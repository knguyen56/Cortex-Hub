import Header from "../Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Monitor } from "lucide-react";

export default function XIGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Server className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Nagios XI Installation Guide</h1>
          </div>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">VMware Installation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Download Required Software</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Download VMware Workstation Player from vmware.com</li>
                  <li>Download the latest Nagios XI VM image from assets.nagios.com</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Import Virtual Machine</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open VMware Workstation Player</li>
                  <li>Click 'Open a Virtual Machine'</li>
                  <li>Navigate to the downloaded .ovf file</li>
                  <li>Follow the import wizard</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3. Configure VM Settings</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Allocate at least 4GB RAM (8GB recommended)</li>
                  <li>Ensure 40GB disk space is available</li>
                  <li>Configure network adapter to bridged mode</li>
                  <li>Enable hardware virtualization if available</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Initial Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Start Virtual Machine</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Power on the virtual machine</li>
                  <li>Wait for the boot process to complete</li>
                  <li>Note the IP address displayed on the console</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Access Web Interface</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open a web browser</li>
                  <li>Navigate to https://<VM_IP>/nagiosxi/</li>
                  <li>Accept the SSL certificate warning</li>
                  <li>Begin the web-based setup wizard</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3. Complete Setup Wizard</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create admin account</li>
                  <li>Configure email settings</li>
                  <li>Set up initial monitoring configuration</li>
                  <li>Review and apply system settings</li>
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
                <li>Apply any available system updates</li>
                <li>Configure backup settings</li>
                <li>Set up additional user accounts</li>
                <li>Configure monitoring targets</li>
                <li>Set up notifications and alerts</li>
                <li>Review security settings</li>
                <li>Configure dashboards and views</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
