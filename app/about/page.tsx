import Link from "next/link";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col justify-between px-0 py-0">
      <SecondaryNavigation />
      <main className="max-w-8xl mx-auto w-full px-6 py-10 sm:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">About Us</h1>
        
        <div className="mb-12">
          <p className="text-muted-foreground mb-4">
            CircuitPath Projects Solutions Limited is a full-service energy infrastructure company offering innovative, end-to-end solutions in power and renewable energy. Our core focus is to bridge the energy gap through engineering excellence, sustainable energy systems, and strategic consulting tailored to Africa's dynamic power landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To deliver innovative energy infrastructure solutions that empower communities and businesses across Africa with reliable, sustainable power systems.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              We envision a future where sustainable energy powers every home and business across Africa, reducing dependence on fossil fuels and contributing to a cleaner, greener planet for future generations.
            </p>
          </div>
        </div>
        
        <div className="bg-accent p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Full-service energy infrastructure company with end-to-end solutions</li>
            <li>Focus on bridging the energy gap in Africa's dynamic power landscape</li>
            <li>Engineering excellence and sustainable energy systems</li>
            <li>Strategic consulting tailored to African markets</li>
            <li>Expertise in both traditional and emerging energy markets</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}