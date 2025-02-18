import Header from "../Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Monitor } from "lucide-react";

export default function FusionGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Terminal className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Nagios Fusion Installation Guide</h1>
          </div>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">System Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
              <ul className="list-disc pl-6 space-y-2">
                <li>VMware Workstation Player 15+</li>
                <li>4GB RAM minimum</li>
                <li>50GB storage minimum</li>
                <li>2 CPU cores minimum</li>
                <li>Network adapter in bridged mode</li>
                <li>Access to Nagios Core/XI servers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">Installation Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Preparation</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Download VMware Workstation Player</li>
                  <li>Download Fusion VM image from assets.nagios.com</li>
                  <li>Ensure system meets requirements</li>
                  <li>Prepare network information</li>
                </ol>
              </div>

