import Header from "../Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Terminal } from "lucide-react";

export default function CoreGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Nagios Core Installation Guide
            </h1>
          </div>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Before beginning the installation, ensure your system meets
                these requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Linux OS (RHEL/CentOS/Ubuntu/Debian)</li>
                <li>Apache 2.4+</li>
                <li>PHP 7.4+ with GD extensions</li>
                <li>GCC compiler and development libraries</li>
                <li>2GB RAM minimum</li>
                <li>20GB disk space</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Detailed Installation Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  1. Install Required Packages
                </h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <code className="text-green-400 text-sm font-mono">
                    yum install -y gcc glibc glibc-common wget unzip httpd php
                    gd gd-devel perl postfix
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  2. Download and Extract Nagios Core
                </h3>
                <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                  <code className="text-green-400 text-sm font-mono block">
                    cd /tmp
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    wget
                    https://github.com/NagiosEnterprises/nagioscore/archive/nagios-4.4.6.tar.gz
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    tar xzf nagios-4.4.6.tar.gz
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    cd nagioscore-nagios-4.4.6
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  3. Compile and Install
                </h3>
                <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                  <code className="text-green-400 text-sm font-mono block">
                    ./configure --with-httpd-conf=/etc/httpd/conf.d
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    make all
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    make install
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    make install-daemoninit
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    make install-commandmode
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    make install-config
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    make install-webconf
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  4. Create User Account
                </h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <code className="text-green-400 text-sm font-mono">
                    htpasswd -c /usr/local/nagios/etc/htpasswd.users nagiosadmin
                  </code>
                </div>
                <p>
                  Enter a password when prompted. Remember this password as
                  you'll need it to access the web interface.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  5. Start Services
                </h3>
                <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                  <code className="text-green-400 text-sm font-mono block">
                    systemctl start httpd
                  </code>
                  <code className="text-green-400 text-sm font-mono block">
                    systemctl start nagios
                  </code>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  6. Access Web Interface
                </h3>
                <p>Open your web browser and navigate to:</p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <code className="text-green-400 text-sm font-mono">
                    http://localhost/nagios
                  </code>
                </div>
                <p>
                  Log in with username 'nagiosadmin' and the password you set
                  earlier.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-[#0c2137] border-gray-200 dark:border-[#1e3a5f]">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 dark:text-white">
                Post-Installation Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600 dark:text-gray-300">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Configure your first host and service checks</li>
                <li>Set up notifications</li>
                <li>Configure additional users and permissions</li>
                <li>Install additional plugins as needed</li>
                <li>Set up regular backups of configuration files</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
