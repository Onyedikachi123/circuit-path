import Link from "next/link";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function EngineeringDesignEPC() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col justify-between px-0 py-0">
      <SecondaryNavigation />
      <main className="max-w-8xl mx-auto w-full px-6 py-10 sm:px-20">
        <nav className="text-sm mb-6">
          <Link href="/" className="text-primary hover:underline">Home</Link> 
          <Link href="/services" className="text-primary hover:underline ml-2">Services</Link>  
          <span className="text-muted-foreground ml-2">Engineering Design & EPC Services</span>
        </nav>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Engineering Design & EPC Services</h1>
        
        <div className="mb-12">
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Engineering Design & EPC Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">
            Precision-driven design, execution, and project delivery.
          </p>
          
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Service Overview</h2>
            <p className="text-muted-foreground mb-4">
              Our Engineering Design & EPC (Engineering, Procurement, and Construction) Services provide end-to-end solutions for energy infrastructure projects. From conceptual design to commissioning, we ensure projects are delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Service Areas</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Full project cycle from feasibility to commissioning</li>
                <li>HV/LV networks and substations</li>
                <li>Transmission/distribution lines</li>
                <li>Electrification schemes</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We combine innovative engineering solutions with rigorous project management to deliver reliable and efficient energy infrastructure. Our multidisciplinary teams work collaboratively to ensure seamless project execution from design through construction.
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
                  <h3 className="font-semibold">Single Point of Responsibility</h3>
                  <p className="text-sm text-muted-foreground">One contractor accountable for entire project</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Cost Control</h3>
                  <p className="text-sm text-muted-foreground">Fixed-price contracts with clear deliverables</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">Rigorous standards throughout project lifecycle</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Timely Delivery</h3>
                  <p className="text-sm text-muted-foreground">Efficient project management for on-time completion</p>
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