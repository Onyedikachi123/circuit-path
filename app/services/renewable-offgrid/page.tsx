import Link from "next/link";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RenewableOffGrid() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col justify-between px-0 py-0">
      <SecondaryNavigation />
      <main className="max-w-8xl mx-auto w-full px-6 py-10 sm:px-20">
        <nav className="text-sm mb-6">
          <Link href="/" className="text-primary hover:underline">Home</Link> 
          <Link href="/services" className="text-primary hover:underline ml-2">Services</Link> 
          <span className="text-muted-foreground ml-2">Renewable & Off-Grid Energy Solutions</span>
        </nav>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Renewable & Off-Grid Energy Solutions</h1>
        
        <div className="mb-12">
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Renewable & Off-Grid Energy Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">
            Decentralized energy systems for rural and underserved communities.
          </p>
          
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Service Overview</h2>
            <p className="text-muted-foreground mb-4">
              Our Renewable & Off-Grid Energy Solutions provide sustainable power access to communities and facilities not connected to the main electricity grid. We design and implement customized renewable energy systems that are reliable, cost-effective, and environmentally friendly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Solution Areas</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Solar mini-grids and hybrid energy systems</li>
                <li>Standalone solar installations</li>
                <li>Reliability and environmental sustainability</li>
                <li>Built for remote and off-grid locations</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We conduct comprehensive site assessments to understand energy needs and environmental conditions. Our solutions integrate the most appropriate renewable technologies to provide reliable power while minimizing environmental impact and operational costs.
              </p>
            </div>
          </div>
          
          <div className="bg-accent p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Energy Access</h3>
                  <p className="text-sm text-muted-foreground">Reliable power for communities without grid access</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Environmental Impact</h3>
                  <p className="text-sm text-muted-foreground">Reduced carbon footprint and environmental preservation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Economic Development</h3>
                  <p className="text-sm text-muted-foreground">Enabling business growth and improved quality of life</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Low Maintenance</h3>
                  <p className="text-sm text-muted-foreground">Durable systems with minimal operational requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}