import Link from "next/link";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PowerEnergyAdvisory() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col justify-between px-0 py-0">
      <SecondaryNavigation />
      <main className="max-w-8xl mx-auto w-full px-6 py-10 sm:px-20">
        <nav className="text-sm mb-6">
          <Link href="/" className="text-primary hover:underline">Home</Link> 
          <Link href="/services" className="text-primary hover:underline ml-2">Services</Link> 
          <span className="text-muted-foreground ml-2">Power & Energy Advisory Services</span>
        </nav>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Power & Energy Advisory Services</h1>
        
        <div className="mb-12">
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Power & Energy Advisory Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">
            Shaping strategic energy decisions for long-term value creation.
          </p>
          
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Service Overview</h2>
            <p className="text-muted-foreground mb-4">
              Our Power & Energy Advisory Services provide comprehensive strategic guidance to help organizations navigate the complex energy landscape. We combine deep technical expertise with market insights to deliver actionable recommendations that drive value and support sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Key Service Areas</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Energy policy and regulatory frameworks</li>
                <li>Market entry and investment strategy</li>
                <li>Tariff design and financial analysis</li>
                <li>Data-driven, technically-viable decisions</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We work closely with clients to understand their unique challenges and objectives, providing customized advisory services that align with their strategic goals and operational realities.
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
                  <h3 className="font-semibold">Strategic Clarity</h3>
                  <p className="text-sm text-muted-foreground">Clear roadmap for energy investments and initiatives</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Risk Mitigation</h3>
                  <p className="text-sm text-muted-foreground">Identification and management of potential challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Optimized Returns</h3>
                  <p className="text-sm text-muted-foreground">Maximized value from energy investments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">Adherence to local and international standards</p>
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