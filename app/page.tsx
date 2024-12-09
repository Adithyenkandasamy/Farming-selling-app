import { Button } from "@/components/ui/button";
import { Sprout, ShoppingCart, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-5xl font-bold text-green-800 dark:text-green-100 mb-6">
                Fresh Farm Products Direct to Your Door
              </h1>
              <p className="text-xl text-green-600 dark:text-green-200 mb-8">
                Connect directly with local farmers, buy fresh produce, and support sustainable agriculture.
              </p>
              <div className="flex gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                alt="Farm"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShoppingCart className="w-8 h-8" />}
              title="Direct Purchase"
              description="Buy fresh produce directly from local farmers with no middlemen"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Community"
              description="Join a growing community of farmers and conscious consumers"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Growth"
              description="Support sustainable farming and help local agriculture thrive"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-green-50 dark:bg-green-800 rounded-lg text-center">
      <div className="inline-block p-3 bg-green-100 dark:bg-green-700 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}