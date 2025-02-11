import Header from "./Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  MessageCircle,
  Users,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

function Support() {
  const categories = [
    {
      title: "General Discussion",
      description: "General discussion about Nagios products and services",
      topics: 1250,
      posts: 5840,
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      title: "Installation & Configuration",
      description: "Help with installing and configuring Nagios products",
      topics: 3420,
      posts: 15280,
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Monitoring",
      description: "Questions about monitoring hosts, services, and networks",
      topics: 2840,
      posts: 12450,
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Plugins & Addons",
      description: "Discussions about Nagios plugins and addons",
      topics: 1980,
      posts: 8340,
      icon: <Star className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#061220]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Nagios Support Forum
          </h1>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search forums..."
                className="w-full bg-[#1e3a5f] border-[#2e4a6f] text-white placeholder:text-gray-400"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Search
              <Search className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="bg-[#0c2137] border-[#1e3a5f] text-white"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-blue-600/10 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400">
                      Topics: {category.topics}
                    </div>
                    <div className="text-sm text-gray-400">
                      Posts: {category.posts}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-600/10"
                  >
                    View Forum
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-400">23.5K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-400">9.4K+</h3>
                <p className="text-gray-400">Topics</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#0c2137] border-[#1e3a5f] text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-400">41.9K+</h3>
                <p className="text-gray-400">Total Posts</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Support;
