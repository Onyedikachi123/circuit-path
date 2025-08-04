import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1440940627368-bd68a386bb73"
          alt="Energy Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navigation - Semi-transparent and positioned on top */}
      <div className="relative z-10 mx-auto max-w-8xl">
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6 sm:px-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Powering Africa&apos;s Future
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto">
            Innovative energy infrastructure solutions for sustainable development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-energy-green hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium text-lg transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
