import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="font-sans h-screen bg-background text-foreground flex flex-col justify-between">
      <main className="flex flex-col gap-16 w-full px-0 py-0">
        <HeroSection />
        {/* About Us Section */}
        <div className="py-8  px-6 sm:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                About CircuitPath Projects Solutions
              </h2>
              <p className="text-muted-foreground mb-4">
                CircuitPath Projects Solutions Limited is a full-service energy
                infrastructure company offering innovative, end-to-end solutions
                in power and renewable energy. Our core focus is to bridge the
                energy gap through engineering excellence, sustainable energy
                systems, and strategic consulting tailored to Africa&apos;s
                dynamic power landscape.
              </p>
              <p className="text-muted-foreground mb-8">
                Our core focus is to bridge the energy gap through engineering
                excellence, sustainable energy systems, and strategic consulting
                tailored to Africa&apos;s dynamic power landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 rounded-lg px-5 py-3 border-l-4 border-blue-600">
                  <p className="text-blue-800 font-medium">
                    Engineering Excellence
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg px-5 py-3 border-l-4 border-green-600">
                  <p className="text-green-800 font-medium">
                    Sustainable Solutions
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg px-5 py-3 border-l-4 border-amber-600">
                  <p className="text-amber-800 font-medium">
                    Strategic Consulting
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/about"
                  className="bg-primary text-primary-foreground hover:bg-secondary px-6 py-3 rounded-full font-medium transition-colors text-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  // src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Energy Infrastructure"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Core Services Section */}
        {/* <div className="py-8 max-w-6xl mx-auto px-6 sm:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">1. Power & Energy Advisory Services</h3>
              <p className="text-muted-foreground mb-4">
                Shaping strategic energy decisions for long-term value creation.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">2. Engineering Design & EPC Services</h3>
              <p className="text-muted-foreground mb-4">
                Precision-driven design, execution, and project delivery.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">3. Renewable & Off-Grid Energy Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Decentralized energy systems for rural and underserved communities.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block bg-primary text-primary-foreground hover:bg-secondary px-6 py-3 rounded-full font-medium transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div> */}
        <Services />
        {/* Features Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8  px-6 sm:px-20"> 
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Solar Panel Installation</h3>
            <p className="text-muted-foreground">
              Professional installation of high-efficiency solar panels for homes and businesses.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Energy Storage Solutions</h3>
            <p className="text-muted-foreground">
              Advanced battery systems to store solar energy for use day and night.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
            <p className="text-muted-foreground">
              Comprehensive maintenance services to keep your system running at peak efficiency.
            </p>
          </div>
        </div> */}{" "}
        {/*max-w-6xl mx-auto*/}
        {/* CTA Section */}
        <div className="bg-primary mt-32 rounded-2xl p-8 md:p-12 text-center text-primary-foreground max-w-6xl mx-auto px-6 sm:px-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who have reduced their energy
            costs and environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
