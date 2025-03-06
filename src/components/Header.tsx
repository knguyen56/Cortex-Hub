import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-[#061220] border-b border-gray-200 dark:border-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Nagios
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 dark:text-gray-200">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-2 p-4 bg-white dark:bg-[#0c2137]">
                      {[
                        {
                          title: "Nagios Core",
                          sections: [
                            "Installation",
                            "Configuration",
                            "User Guide",
                            "Administration",
                            "Backup & Restore",
                            "API",
                            "Troubleshooting",
                            "FAQ",
                          ],
                        },
                        {
                          title: "Nagios XI",
                          sections: [
                            "Installation",
                            "Configuration",
                            "User Guide",
                            "Administration",
                            "Backup & Restore",
                            "API",
                            "Troubleshooting",
                            "FAQ",
                          ],
                        },
                        {
                          title: "Log Server",
                          sections: [
                            "Installation",
                            "Configuration",
                            "User Guide",
                            "Administration",
                            "API",
                            "Troubleshooting",
                            "FAQ",
                          ],
                        },
                        {
                          title: "Network Analyzer",
                          sections: [
                            "Installation",
                            "Configuration",
                            "User Guide",
                            "Administration",
                            "API",
                            "Troubleshooting",
                            "FAQ",
                          ],
                        },
                        {
                          title: "Fusion",
                          sections: [
                            "Installation",
                            "Configuration",
                            "User Guide",
                            "Administration",
                            "API",
                            "Troubleshooting",
                            "FAQ",
                          ],
                        },
                      ].map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md bg-gray-50 dark:bg-[#1e3a5f] p-3 no-underline outline-none focus:shadow-md"
                              href={`/products/${product.title.toLowerCase().replace(" ", "-")}`}
                            >
                              <div className="mb-2 text-base font-medium text-gray-900 dark:text-white">
                                {product.title}
                              </div>
                              <ul className="text-xs leading-tight text-gray-500 dark:text-gray-300 grid grid-cols-2 gap-1">
                                {product.sections.map((section) => (
                                  <li
                                    key={section}
                                    className="hover:text-blue-500 dark:hover:text-blue-400"
                                  >
                                    {section}
                                  </li>
                                ))}
                              </ul>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 dark:text-gray-200">
                    Common Topics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[200px] lg:w-[350px] lg:grid-cols-[.75fr_1fr] bg-white dark:bg-[#0c2137]">
                      {[
                        "Monitoring Concepts",
                        "Best Practices",
                        "Integrations",
                        "Development",
                        "Glossary",
                      ].map((topic) => (
                        <li key={topic} className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-[#1e3a5f] text-gray-900 dark:text-white"
                              href={`/common-topics/${topic.toLowerCase().replace(" ", "-")}`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {topic}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 dark:text-gray-200">
                    Developers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[100px] lg:w-[400px] bg-white dark:bg-[#0c2137]">
                      {[
                        {
                          title: "API Reference",
                          description:
                            "Complete API documentation for all products",
                        },
                        {
                          title: "SDKs & Libraries",
                          description: "Official SDKs in multiple languages",
                        },
                        {
                          title: "Plugin Development",
                          description: "Create custom monitoring plugins",
                        },
                        {
                          title: "CLI & DevOps Tools",
                          description:
                            "Command-line and infrastructure automation",
                        },
                        {
                          title: "Monitoring Simulator",
                          description: "Test and debug your integrations",
                        },
                        {
                          title: "Extension Marketplace",
                          description: "Share and discover community plugins",
                        },
                      ].map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-[#1e3a5f] text-gray-900 dark:text-white"
                              href={`/developers/${item.title.toLowerCase().replace(" ", "-")}`}
                            >
                              <div className="text-sm font-medium leading-none mb-1">
                                {item.title}
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/archives"
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2 block"
                  >
                    Archives
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div
              className={`relative transition-all duration-300 ease-in-out ${isSearchExpanded ? "w-[300px]" : "w-[150px]"}`}
            >
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <Input
                type="search"
                placeholder={
                  isSearchExpanded ? "Search documentation..." : "Search..."
                }
                className="pl-8 w-full bg-gray-50 dark:bg-[#1e3a5f] border-gray-200 dark:border-[#2e4a6f] text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300"
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
