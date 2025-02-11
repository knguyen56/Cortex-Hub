import Header from "./Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

const glossaryTerms = [
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
  {
    term: "AngularJS",
    definition:
      "AngularJS is a client-side Javascript library and development framework use in web applications. It is used by Kibana and is part of Nagios Log Server. The panels in Nagios Log Server dashboard are developed using AngularJS.",
  },
  {
    term: "Apache",
    definition:
      "An Open Source web server that can run on Linux and Windows. Nagios Core and Nagios XI are both capable of monitoring Apache, and Apache is used on both Core and XI server to provide the web interfaces to each.",
  },
  {
    term: "Auto-Discovery Wizard",
    definition:
      "Nagios XI has a builtin Auto-Discovery wizard. When running an Auto-Discovery job the user will enter an network of addresses they would like to scan and a job is created which utilizes fping and nmap to scan the network defined for alive machines and then performs an nmap scan on the host to determine which ports it is listening on. The results of the Auto-Discovery scan additionally report the OS of the machine discovered as well as all of the ports the host is listening on. A user can then optionally pass these results into a wizard that will monitor to make sure all of these ports continue to be responsive.",
  },
  {
    term: "Availability",
    definition:
      "A measure of what percentage of time (or how much time) a service, application, or device was working properly. Nagios XI and Core both have availability reports. See also SLA",
  },
  {
    term: "Backup Repository",
    definition:
      "In Nagios Log Server the Backup Repository is a shared filesystem accessible to all data instances in the cluster. Daily backups are made of the previous days index and stored in the Backup Repository. All instances in the cluster must have access to the shared filesystem for backups to work successfully.",
  },
  {
    term: "Bandwidth",
    definition:
      "A measure of how much data has been transferred in/out of or to/from a network switch, device, or server. Nagios XI can monitor bandwidth (using the switch/router wizard).",
  },
  {
    term: "Bash",
    definition:
      "Bash is a Linux/Unix shell that is installed by default on CentOS, RHEL, and other Linux/Unix distributions. It can be used for running scripts, commands, and applications and is commonly used by system administrators for performing maintenance or obtaining system information.",
  },
  {
    term: "Business Process",
    definition:
      "A high level concept of determining how well a certain area of a business' operation is working (e.g. the ecommerce service). Business processes are normally dependent on sub-components / sub-systems like web servers, database servers, etc. The Nagios BPI (business process intelligence) addon allows users to monitor business processes.",
  },
  {
    term: "CentOS",
    definition:
      "A Linux distribution based on derived from the sources of the Red Hat Enterprise Linux (RHEL). More info is available at www.centos.org.",
  },
  {
    term: "Component",
    definition:
      "A software addon package for Nagios XI that extends its native capabilities. Components can add additional notification method, dashlets, menu items, or other features in a Nagios XI installation. Additional components for Nagios XI are available on Nagios Exchange.",
  },
  {
    term: "Config Snapshots",
    definition:
      "When the configuration is applied in Nagios XI a snapshot is made of the current configuration. These configuration snapshot are stored and used to automatically roll back to the last known good configuration if a configuration cannot be applied. Additionally, the configuration snapshots can be used to store good configurations and allow users to roll back to previously know good configurations.",
  },
  {
    term: "Dashboard",
    definition:
      "In Nagios XI: A customizable page on which dashlets can be placed. Nagios XI offers each user the ability to have multiple dashboards for customized views of important data. In Nagios Log Server: A customizable page for displaying query results. Dashboard can contain graphs and tables to make understanding log data easier.",
  },
  {
    term: "Dashlet",
    definition:
      "A moveable container that can be placed on a dashboard in Nagios XI. Different dashlets provide performance graphs, custom HTML, and other data.",
  },
  {
    term: "Database",
    definition: "A software application and storage mechanism.",
  },
  {
    term: "Distributed Monitoring",
    definition:
      "A method of scaling Nagios Xi and Nagios Core to monitor a lot of devices / machines - sometimes across different networks. Large organizations often want distributed monitoring, as do MSPs. Nagios Fusion's central dashboard can be ideal for distributed monitoring solutions. Both Nagios XI and Nagios Core can be configured for distributed monitoring.",
  },
  {
    term: "Elasticsearch",
    definition:
      "Elasticsearch is the database indexing engine behind Nagios Log Server. It is responsible for handing queries, indexes, and replication. Elasticsearch is 'E' in the ELK stack.",
  },
  {
    term: "ELK Stack",
    definition:
      "The ELK stack is a combination of Elasticsearch, Logstash, and Kibana. These components act as a foundation for a log monitoring solution. Nagios Log Server utilizes the ELK stack.",
  },
  {
    term: "ESXi Server",
    definition:
      "VMware ESXi (formerly ESX) server is a enterprise class hypervisor used to run virtual machines. Nagios XI can monitor both ESX hosts and Guest VM's on ESX and vCenter servers with easy to run VMware monitoring wizard.",
  },
  {
    term: "Event Logs",
    definition:
      "Generally refers to log files on Microsoft Windows machines / servers. Many people want to monitor Windows Event logs to watch for security alerts, etc.",
  },
  {
    term: "Failover",
    definition:
      "A method of ensuring that if a server crashes (stops working), another one will start up and assume its duties, with minimal or no visible interruption to the end-user. Users often want failover monitoring to ensure their systems are always monitored.",
  },
  {
    term: "Firewall",
    definition:
      "Either software or hardware (e.g. a network device) that protects a network and a computer system on the network from outside attacks and connection attempts. Many routers include a firewall.",
  },
  {
    term: "Flow",
    definition:
      "Flow is a sequence of packets from a source devie to a destination device.",
  },
  {
    term: "High Availability (HA)",
    definition: "Generally the same as failover. See Failover.",
  },
  {
    term: "HP-UX",
    definition: "A UNIX operating system.",
  },
  {
    term: "Hyper-V",
    definition:
      "Microsoft's product for running virtual machines. A newer version of their Virtual Server product.",
  },
  {
    term: "IIS (Internet Information Server)",
    definition: "Microsoft's web servers.",
  },
  {
    term: "IP Address",
    definition:
      "A unique identifier for a workstation, server, or network devices that allows other devices to communicate with it.",
  },
  {
    term: "IPv4",
    definition:
      "The current version (4) of the Internet Protocol. Most Nagios plugins use IPv4 to communicate with servers and applications.",
  },
  {
    term: "IPv6",
    definition:
      "The next generation/version (6) of the Internet Protocol. Some plugins support IPv6.",
  },
  {
    term: "JRuby",
    definition:
      "JRuby is a Java implementation of the Ruby programming language. JRuby is used by Elasticsearch and is therefore used by Nagios Log Server.",
  },
  {
    term: "Kibana",
    definition:
      "Kibana is the frontend to Elasticsearch and allows you to run queries, visualize results, and create dashboards. It is the 'K' in the ELK stack and is part of Nagios Log Server.",
  },
  {
    term: "KVM",
    definition:
      "An Open Source product / project for running virtual machines.",
  },
  {
    term: "LAMP Stack",
    definition:
      "LAMP stack refers to a combination of Linux, Apache, MySQL, and PHP. It serves as a foundation for building and running web applications.",
  },
  {
    term: "LAN",
    definition:
      "LAN (Local Area Network) generally refers to small home/office networks. See WAN for contrast.",
  },
  {
    term: "Linux",
    definition:
      "Open Source operating system. Different distributions (variants) include RedHat, CentOS, SuSE, Debian, Ubuntu, and openSuSe.",
  },
  {
    term: "Log Files",
    definition:
      "Refers to the records that are kept by applications and servers to store information on access, security alerts, and more. Users often want to monitor log files for important info (e.g security alerts).",
  },
  {
    term: "Logstash",
    definition:
      "Logstash is a tool for managing events and logs. It is used to collect logs, parse log data, and store them for later use in searches, etc. It is the 'L' in the ELK stack and is part of Nagios Log Server",
  },
  {
    term: "MongoDB",
    definition:
      "A document oriented database classifies as a NoSQL database. Nagios XI can monitor MongoDB Servers as well as MongoDB databases.",
  },
  {
    term: "MSP",
    definition:
      "MSPs (Managed Service Providers) are companies that provide outsourced monitoring / management of computer and network services for their clients' remote networks. MSPs sometimes have VPN connections to their remote clients, but may need an agent like NCPA to effectively monitor machines behind a NAT.",
  },
  {
    term: "MSSQL",
    definition:
      "Microsoft SQL Server (MSSQL) is Microsoft's commercial database.",
  },
  {
    term: "MySQL",
    definition:
      "Open Source database. XI uses MySQL as a database backend and can monitor MySQL databases.",
  },
  {
    term: "Nagios Exchange",
    definition:
      "Nagios Exchange is the central place where you'll find all types of Nagios projects - plugins, addons, documentation, extensions, and more. Nagios Exchange is designed for the Nagios Community to share its Nagios creations. Have a new project for Nagios that you'd like to share? Just create an account and add it to the directory. Nagios Exchange",
  },
  {
    term: "Nagios Fusion",
    definition:
      "Nagios Fusion is a powerful tool for visualizing operational status and enabling faster problem resolution across an organization's entire IT infrastructure. Nagios Fusion can connect to Nagios Core and Nagios XI servers giving a unified view across your entire infrastructure.",
  },
  {
    term: "Nagios Incident Manager",
    definition:
      "Nagios Incident Manager is a powerful tool for managing infrastructure incidents and enabling faster problem resolution across an organization's entire IT infrastructure.",
  },
  {
    term: "Nagios Library",
    definition:
      "The Nagios Library serves as a central knowledge place for tutorials, videos, tech tips, downloads, and best practice information on all Nagios products and projects. Nagios Library",
  },
  {
    term: "Nagios Log Server",
    definition:
      "Nagios Log Server is a powerful enterprise-class log monitoring and management application that allows organizations to quickly and easily view, sort, and configure logs from any source on any given network. Log Server is designed to analyze, collect, and store log data based on custom specifications, and provide users with extended insight into the data on their network's infrastructure.",
  },
  {
    term: "Nagios Mobile",
    definition:
      "Nagios Mobile provides a flexible mobile interface for Nagios that works on iPhones, Android phones, and all other portable devices. Nagios mobile comes pre-installed with Nagios XI and can be found on the XI server at the path: /nagiosmobile/",
  },
  {
    term: "Nagios Network Analyzer",
    definition:
      "Nagios Network Analyzer is a commercial-grade network flow data analysis solution that provides organizations with extended insight into their IT infrastructure and network traffic. Network Analyzer allows you to be proactive in resolving outages, abnormal behavior, and security threats before they affect critical business processes.",
  },
  {
    term: "Nagios Reactor",
    definition:
      "Nagios Reactor is an advanced automation engine designed to save organizations time and money by reacting to problems without human interaction. Reactor allows organizations to rapidly develop, deploy, and manage complex automation tasks in and easy-to-understand manner.",
  },
  {
    term: "NAT",
    definition:
      "NAT (Network Address Translation) is a method of using 'private' IP addresses on home and office computer networks. NAT allows many computer systems to share a single 'public' IP address. Monitoring remote devices/computers behind a NAT (e.g. on another network) can be challenging and may require port forwarding, a persistent VPN connection, or an agent like NCPA.",
  },
  {
    term: "NCPA",
    definition:
      "NCPA is a cross-platform monitoring agent for Nagios Core and Nagios XI that runs on Windows, Linux/Unix, and Mac OS/X machines. Its features include both active and passive checks, remote management, and a local monitoring interface. More information on NCPA can be found on Nagios Exchange.",
  },
  {
    term: "NDOUtils",
    definition:
      "NDOUtils is an addon for Nagios Core that allows you to export current and historical data from one or more Nagios Core instances to a MySQL database. NDOUtils is included with Nagios XI. More information on NDOUtils can be found on Nagios Exchange.",
  },
  {
    term: "NetFlow",
    definition:
      "From Wikipedia: NetFlow is a feature that was introduced on Cisco routers that provides the ability to collect IP network traffic as it enters or exits an interface. By analyzing the data provided by NetFlow a network administrator can determine things such as the source and destination of traffic, class of service, and the causes of congestion. Nagios Network Analyzer collects and analyzes NetFlow data to report bandwidth usage and traffic patterns in network activity.",
  },
  {
    term: "NOC",
    definition:
      "NOC (Network Operations Center): In large companies or MSPs this is the main /central place where admins monitor the entire network. See also TAC.",
  },
  {
    term: "NPCD",
    definition:
      "NPCD or Nagios-Perfdata-C-Daemon is part of an addon for Nagios called PNP4nagios. The NPCP daemon is used to process performance data and place the performance data into RRD files. Nagios XI utilizes the NPCD daemon to process performance data received by the Nagios Core engine.",
  },
  {
    term: "NRDP",
    definition:
      "NRDP (Nagios Remote Data Processor) is PHP program designed to be a flexible data transport mechanism and processor for Nagios. It is most often used to submit passive checks to Nagios Core or Nagios XI from a remote Linux or UNIX machine. It uses standard ports protocols (HTTP(S) and XML) and can be implemented as a replacement for NSCA. NRDP is available from Nagios Exchange.",
  },
  {
    term: "NRDS",
    definition:
      "NRDS is a component pre-installed on a Nagios XI server that allows the administrator to create and manage configurations and plugins to be deployed with a passive agent that can be installed on a variety of operating systems including Windows, Linux, AIX & Solaris. The passive agent downloads the current configuration and the required plugin from the Nagios XI server and run the checks and posting the results to the XI server.",
  },
  {
    term: "NRPE",
    definition:
      "NRPE (Nagios Remote Plugin Executor) is an add-on allows you to remotely execute Nagios plugins on remote Linux/Unix machines. This allows you to monitor remote machine metrics (disk usage, CPU load, etc.). NRPE can also communicate with some Windows agent addons like NSClient++, so you can execute scripts and check metrics on remote Windows machines as well. More information on NRPE can be found on Nagios Exchange.",
  },
  {
    term: "NSCA",
    definition:
      "NSCA is an addon written in C that allows you to send passive check results to Nagios Core and Nagios XI. The NSCA addon consists of a daemon that runs on the Nagios system and accepts passive checks from remote send_nsca client scripts. More information on NSCA can be found on Nagios Exchange.",
  },
  {
    term: "NSClient++",
    definition:
      "A Windows agent for Nagios that allows users to monitor metrics (disk, CPU. and memory usage), service states, and more using Nagios, XI supports the NSCIient++ addon and uses it to monitor Windows machines. Many users prefer NCPA over NSClient++ for monitoring Windows machines.",
  },
  {
    term: "Open Source",
    definition:
      "Refers to free software (available at no cost as in 'free beer') which can be modified by end users and redistributed (as in 'free speech'). Open Source licenses include the GPL.",
  },
  {
    term: "Passive Check",
    definition:
      "A check that is performed by an external application, operating system, or device and is submitted to Nagios Core or Nagios XI for processing. Some monitoring agents - including NSCA, NCPA, and NRDP can be used to send passive checks to Nagios. An SNMP trap is also considered a passive check.",
  },
  {
    term: "Performance Counters",
    definition:
      "Performance counters are a feature of Windows-based operating systems that are used to provide information as to how well the operating system or an application, service, or driver is performing. Nagios XI can monitor performance counters on Windows machines using both the Windows Monitoring wizard and the NCPA monitoring wizard.",
  },
  {
    term: "Perl",
    definition:
      "Perl is a programming language that is most used in scripts designed for system administration or applications. It can also be used to develop web applications. Several Nagios plugins are written in Perl and there are components of various Nagios products that are written in Perl.",
  },
  {
    term: "PHP",
    definition:
      "PHP is a server-side scripting language designed used for building web applications. It is also used as a general-purpose programming language. Nagios XI and other Nagios products utilize PHP for their web interfaces.",
  },
  {
    term: "Plugin",
    definition:
      "A shell script, Perl script, compiled program, or other executable that is used by Nagios Core or Nagios XI to perform a monitoring check. Plugins perform the actual 'leg work' of monitoring devices and applications. They are used to extend the capabilities of Nagios Core and Nagios XI. Thousands of plugins are available on the Nagios Exchange.",
  },
  {
    term: "Polling",
    definition:
      "Refers to having Nagios actively check / re-check a website, service, device, etc. on a regular basis (e.g. on a 5 minute interval). See Active Checks.",
  },
  {
    term: "Port",
    definition:
      "Summarized From Wikipedia: A software construct serving as a communications endpoint in a computer's host operating system. The purpose of ports is to uniquely identify different applications or processes running on a single computer and thereby enable them to share information across a network. In the context of the Internet Protocol, a port is associated with an IP address of the host, as well as the type of protocol used for communication. Both TCP and UDP make use of ports to allow communication between different services, applications, and devices.",
  },
  {
    term: "Postgres",
    definition:
      "Open Source database. Nagios XI uses Postgres as one of its database backends and can monitoring Postgres databases.",
  },
  {
    term: "Python",
    definition:
      "Python is a programming language that is used for web application development, general application development, and system administration scripts. Some backend scripts of various Nagios products make use of Python.",
  },
  {
    term: "RAM Disk",
    definition:
      "From Wikipedia: A RAM drive (also called a RAM disk) is a block of RAM (primary storage or volatile memory) that a computer's software is treating as if the memory were a disk drive (secondary storage). With Nagios installations massive performance benefits have been achieved by using a RAM disk to reduce disk I/O. Utilizing a RAM Disk in Nagios XI.",
  },
  {
    term: "Redundant / Redundancy",
    definition: "Generally the same as Failover. See Failover.",
  },
  {
    term: "Remote Network",
    definition:
      "Generally refers to remote LANs that contain devices / servers / workstations the users want to monitor. Remote networks might be connected to the central LAN or NOC with a VPN.",
  },
  {
    term: "Root User",
    definition:
      "The root user on a Linux/UNIX server is the 'superuser' or administrator of the system. The root user can run any and all commands on a system - including starting, stopping, and restarting services, reconfiguring system parameters, managing file and directory permissions, and managing user permissions.",
  },
  {
    term: "Router",
    definition:
      "A network device that is used to 'route' data packets between computer networks. Example: A router is used to connect an office network to the greater internet.",
  },
  {
    term: "RRD File (round-robin database file)",
    definition:
      "Used to store and compress time series data such as Nagios plugin returned performance data. Nagios XI stores all the performance data that create graphs in RRD Files.",
  },
  {
    term: "Server",
    definition:
      "A dedicated computer system that generally runs databases, websites, etc. Servers are not used by people on a regular basis (as compared to workstations), but are rather used to run batch jobs, applications, and services.",
  },
  {
    term: "Shell",
    definition:
      "A construct on Linux/UNIX distributions that provides for low-level access to the operating system and the applications and services running on it. For people familiar with Windows, a Linux shell is somewhat comparable to the Windows command prompt. Many administrative actions on Linux/Unix systems require that a user has access to a shell (often as the root user).",
  },
  {
    term: "Shell Script",
    definition:
      "An executable program that can be run from a Linux/Unix shell (such as bash). Shell scripts are often bash scripts but can also include tcsh scripts and other 'true' shell scripts. More widely, shell scripts might include PHP, Python, or Perl scripts that are run from or executed from a shell prompt.",
  },
  {
    term: "SLA",
    definition:
      "SLA (Service Level Agreement): Refers to a client's requirement that servers / applications are online and working properly at least X percent of time (e.g. 99% uptime). See also Availability.",
  },
  {
    term: "SNMP",
    definition:
      "From Wikipedia: Simple Network Management Protocol (SNMP) is an 'Internet-standard protocol for managing devices on IP networks'. Devices that typically support SNMP include routers, switches, servers, workstations, printers, modem racks and more. SNMP is used mostly in network management systems to monitor network-attached devices for conditions that warrant administrative attention.A protocol/method for monitoring network devices and servers. Most switches and routers can be monitored using SNMP Some servers (Windows and Linux) can also be monitored with SNMP. Nagios XI support SNMP monitoring and includes SNMP wizards. SNMP is often used in 'agentless' monitoring of servers and devices. Nagios Core and Nagios XI are capable of monitoring devices using SNMP - both by processing SNMP traps and by actively polling SNMP-enabled devices.",
  },
  {
    term: "SNMP Trap",
    definition:
      "From Wikipedia: SNMP traps enable a router, switch, operating system, or application to notify a management station of significant events by way of an unsolicited SNMP message. Nagios Core and Nagios XI can receive and processing SNMP traps.",
  },
  {
    term: "snmptrapd",
    definition:
      "snmptrapd is an SNMP application that listens for and receives SNMP traps. It works in conjunction with SNMPTT - which further processes the traps that were received by snmptrapd.",
  },
  {
    term: "SNMPTT",
    definition:
      "SNMPTT (SNMP Trap Translator) is an SNMP trap handler written in Perl for use with the Net-SNMP / UCD-SNMP snmptrapd program (www.net-snmp.org). It performs post-processing on traps that are received via the snmptrapd application. SNMPTT is useful when processing SNMP traps with Nagios Core or Nagios XI",
  },
  {
    term: "Solaris",
    definition: "A UNIX operating system.",
  },
  {
    term: "Source",
    definition:
      "A source in Nagios Network Analyzer is the data collector. Outside of Nagios Network Analyzer a source is the location where data originates from.",
  },
  {
    term: "Source Group",
    definition:
      "A source group is a group of one or more sources (in Nagios Network Analyzer).",
  },
  {
    term: "SSL",
    definition:
      "SSL (Secure Sockets Layer): A method of encrypting / protecting data communications. NRPE and several addons support SSL to protect the data that they transmit.",
  },
  {
    term: "Sudo",
    definition:
      "Sudo allows system administrators on a Linux/Unix system to grant authority to non-administrator accounts to run certain privileged or restricted commands. An administrator assigns these permissions in the /etc/sudoers file.",
  },
  {
    term: "SuSE",
    definition: "A commercial Linux distribution.",
  },
  {
    term: "Switch",
    definition:
      "A device that is used to connect different computer systems and network devices together using network cables. A managed switch has an IP address and can be monitored, whereas an unmanaged switch does not have an address and cannot be monitored.",
  },
  {
    term: "Synthetic Transaction",
    definition: "See Web Transaction",
  },
  {
    term: "TAC",
    definition:
      "TAC (Technical Assistance Center): Sometimes used interchangeably with a NOC.",
  },
  {
    term: "TCP",
    definition:
      "Transmission Control Protocol (TCP) is one of the primary network transport protocols that enable data transfer across the Internet. It provides a connection-based transmission model, unlike UDP which provides a connectionless transmission model. Many network services and applications communicate on various TCP ports. Nagios Core and Nagios XI are capable of monitoring applications and services that communicate over TCP.",
  },
  {
    term: "Traps",
    definition: "See SNMP Traps.",
  },
  {
    term: "UDP",
    definition:
      "User Datagram Protocol (UDP) is one of the primary network transport protocols (along with TCP) that enable data transfer across the Internet. It provides a connectionless transmission model, unlike TCP which provides a connection-based transmission model. Many network services and applications communicate on various UDP ports. Nagios Core and Nagios XI are capable of monitoring applications and services that communicate over UDP.",
  },
  {
    term: "Unconfigured Objects",
    definition:
      "These are objects that check results in Nagios are being received (usually passively via NSCA or NRDP) however no configuration exists for the objects. Nagios XI stores a list of these items and can be easily added to the configuration from the Unconfigured Objects page.",
  },
  {
    term: "UNIX",
    definition:
      "A generic term used to cover multiple different UNIX-based operating systems (e.g. Solaris, AIX, HP-UX).",
  },
  {
    term: "User Experience Monitoring",
    definition:
      "Usually refers to monitoring how well web applications work for end users. See Web Transaction.",
  },
  {
    term: "View",
    definition:
      "In Nagios XI: Views are custom web pages that can be displayed within the Nagios XI interface. These pages can either be pages from Nagios XI or external URLs that an administrator may find useful to embed for quick access to important information. Nagios XI provides the ability to automatically rotate through views. This view rotation is often useful in NOCs where admins want to see information on various screens periodically.",
  },
  {
    term: "Virtual Machine",
    definition:
      "Refers to an operating system (e.g Windows XP, Windows Server 2003, Linux, etc) that runs under a special software program, rather than on a dedicated computer system.",
  },
  {
    term: "Virtual PC",
    definition:
      "Microsoft's free product for running virtual machines on XP and Windows 7 workstations.",
  },
  {
    term: "Virtual Server",
    definition:
      "[Generically, used interchangeably with virtual machine] Microsoft's commercial product for running virtual machines.",
  },
  {
    term: "Virtualbox",
    definition:
      "An Open Source product / project for running virtual machines.",
  },
  {
    term: "VMware",
    definition:
      "Refers to a suite of products that can be used to run and manage virtual machines. See Virtual Machines.",
  },
  {
    term: "VPN",
    definition:
      "VPN (Virtual Private Network): A secure 'tunnel' or network from one location to another that crosses an insecure middle ground (e.g. the general Internet), MSPs often have persistent VPN connections to the remote networks of their clients. A persistent VPN connection is a tunnel/connection that is always setup, whereas a non-persistent VPN is created/destroyed manually by an administrator.",
  },
  {
    term: "VPS",
    definition:
      "VPS (Virtual Private Server): Term generally used to refer to web servers that are hosted on the Internet and rented/leased to customers.",
  },
  {
    term: "vSphere",
    definition: "A Vmware product for running virtual servers. See VMware.",
  },
  {
    term: "WAN",
    definition:
      "WAN (Wide Area Network): Generally refers to larger networks that consist of LANs and VPNs.",
  },
  {
    term: "Web Transaction",
    definition:
      "Refers to monitoring web applications and making sure they work. Example: Adding an item to a shopping cart and making sure you can proceed to the checkout page. Nagios XI can monitor web transactions with the website transaction monitoring wizard.",
  },
  {
    term: "Website Defacement",
    definition:
      "Website defacement is an attack on a website that changes the visual appearance of the site or a webpage. These are typically the work of system crackers, who break into a web server and replace the hosted website with one of their own. Nagios XI can monitor for potential Website defacement using the Website Defacement monitoring wizard.",
  },
  {
    term: "Wizard",
    definition:
      "In Nagios XI wizards can be used to perform configuration of hosts and services through the Web UI. Wizards take the complicated matter of creating hosts and services, defining configuration parameters, assigning contacts, contact groups, hostgroups, servicegroups, etc, into an easy 6 step form in the Nagios XI UI.",
  },
  {
    term: "WMI",
    definition:
      "Windows Management Instrumentation (WMI) is a part of Windows operating systems and can provide management data and operational information about those systems. WMI can be used to automate administrative tasks on remote Windows-based computers. Nagios Core and Nagios XI are capable of monitoring Windows machines via WMI.",
  },
  {
    term: "Xen",
    definition:
      "An Open Source product / project for running virtual machines.",
  },
];

export default function Glossary() {
  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">
            Nagios Glossary
          </h1>

          <div className="flex gap-4 max-w-2xl mb-8">
            <Input
              placeholder="Search terms..."
              className="bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {glossaryTerms.map((item) => (
              <Card
                key={item.term}
                className="bg-[#0c2137] border-[#1e3a5f] text-white h-full"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
