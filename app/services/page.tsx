import Link from "next/link";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col justify-between px-0 py-0">
      <SecondaryNavigation />
      <main className="max-w-8xl mx-auto w-full px-6 py-10 sm:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Our Core Services</h1>
        
        <div className="mb-12">
          <p className="text-xl text-muted-foreground mb-8">
            As a full-service energy infrastructure company, we offer innovative, end-to-end solutions in power and renewable energy. Our services are tailored to bridge the energy gap through engineering excellence, sustainable energy systems, and strategic consulting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Power & Energy Advisory Services</h2>
              <p className="text-muted-foreground mb-4">
                Shaping strategic energy decisions for long-term value creation.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Energy policy and regulatory frameworks</li>
                <li>Market entry and investment strategy</li>
                <li>Tariff design and financial analysis</li>
                <li>Data-driven, technically-viable decisions</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services/power-energy-advisory"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Capacity Development & Sector Training</h2>
              <p className="text-muted-foreground mb-4">
                Empowering institutions, utilities, and professionals through knowledge transfer.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Customized workshops and training programs</li>
                <li>Regulatory compliance and operational optimization</li>
                <li>Technical proficiency development</li>
                <li>Public and private energy sector focus</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services/capacity-development"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Engineering Design & EPC Services</h2>
              <p className="text-muted-foreground mb-4">
                Precision-driven design, execution, and project delivery.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Full project cycle from feasibility to commissioning</li>
                <li>HV/LV networks and substations</li>
                <li>Transmission/distribution lines</li>
                <li>Electrification schemes</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services/engineering-design-epc"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Owner&apos;s Engineer & Technical Representation</h2>
              <p className="text-muted-foreground mb-4">
                Safeguarding your project objectives with technical oversight.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Contractor management and compliance</li>
                <li>Engineering quality validation</li>
                <li>Full project development oversight</li>
                <li>From conception to completion</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services/owners-engineer"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Renewable & Off-Grid Energy Solutions</h2>
              <p className="text-muted-foreground mb-4">
                Decentralized energy systems for rural and underserved communities.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Solar mini-grids and hybrid energy systems</li>
                <li>Standalone solar installations</li>
                <li>Reliability and environmental sustainability</li>
                <li>Built for remote and off-grid locations</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services/renewable-offgrid"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Energy Project Management & Execution Support</h2>
              <p className="text-muted-foreground mb-4">
                Delivering energy projects on time, on budget, and to global standards.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Full-cycle project management</li>
                <li>Scheduling, procurement, risk mitigation</li>
                <li>Monitoring & evaluation</li>
                <li>From mobilization to final handover</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services/energy-project-management"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-accent p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
              <h3 className="font-semibold">Consultation</h3>
              <p className="text-sm text-muted-foreground">Energy needs assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
              <h3 className="font-semibold">Design</h3>
              <p className="text-sm text-muted-foreground">Custom system planning</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
              <h3 className="font-semibold">Installation</h3>
              <p className="text-sm text-muted-foreground">Professional setup</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm text-muted-foreground">Ongoing maintenance</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}