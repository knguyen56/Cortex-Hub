import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  return (
    <header className="w-full bg-[#061220] border-b border-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Nagios
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="/assets"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                Assets
              </a>
              <a
                href="/exchange"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Exchange
              </a>
              <a
                href="/knowledgebase"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                KnowledgeBase
              </a>
              <a
                href="/library"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                Library
              </a>
              <a
                href="/plugins"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Plugins
              </a>
              <a
                href="/support"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                Support
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`relative transition-all duration-300 ease-in-out ${isSearchExpanded ? "w-[300px]" : "w-[150px]"}`}
            >
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder={
                  isSearchExpanded ? "Search Cortex Hub" : "Search..."
                }
                className="pl-8 w-full bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400 transition-all duration-300"
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
