"use client"
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-6 px-6 sm:px-20">
      <div className="text-2xl font-bold text-white">CircuitPath</div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="text-white hover:text-secondary transition-colors">Home</Link>
        <Link href="/about" className="text-white hover:text-secondary transition-colors">About Us</Link>
        
        {/* Services Dropdown */}
        <div className="relative" ref={servicesRef}>
          <button 
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="text-white hover:text-secondary transition-colors flex items-center"
          >
            Services
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isServicesOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
              <Link 
                href="/services/power-energy-advisory" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Power & Energy Advisory Services
              </Link>
              <Link 
                href="/services/capacity-development" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Capacity Development & Sector Training
              </Link>
              <Link 
                href="/services/engineering-design-epc" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Engineering Design & EPC Services
              </Link>
              <Link 
                href="/services/owners-engineer" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Owner&apos;s Engineer & Technical Representation
              </Link>
              <Link 
                href="/services/renewable-offgrid" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Renewable & Off-Grid Energy Solutions
              </Link>
              <Link 
                href="/services/energy-project-management" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                Energy Project Management & Execution Support
              </Link>
              <div className="border-t border-gray-200 my-1"></div>
              <Link 
                href="/services" 
                className="block px-4 py-2 text-primary font-medium hover:bg-gray-100 transition-colors"
                onClick={() => setIsServicesOpen(false)}
              >
                View All Services
              </Link>
            </div>
          )}
        </div>
        
        <Link href="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
      </div>
      
      <div className="hidden md:block">
        <Link 
          href="/contact" 
          className="bg-white text-energy-green hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-800 hover:text-secondary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-800 hover:text-secondary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="border-t border-gray-200 pt-4">
              <button 
                className="flex justify-between items-center w-full text-gray-800 hover:text-secondary transition-colors py-2"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span>Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileServicesOpen && (
                <div className="mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                  <Link 
                    href="/services/power-energy-advisory" 
                    className="block text-gray-600 hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    Power & Energy Advisory
                  </Link>
                  <Link 
                    href="/services/capacity-development" 
                    className="block text-gray-600 hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    Capacity Development
                  </Link>
                  <Link 
                    href="/services/engineering-design-epc" 
                    className="block text-gray-600 hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    Engineering Design & EPC
                  </Link>
                  <Link 
                    href="/services/owners-engineer" 
                    className="block text-gray-600 hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    Owner&apos;s Engineer
                  </Link>
                  <Link 
                    href="/services/renewable-offgrid" 
                    className="block text-gray-600 hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    Renewable & Off-Grid
                  </Link>
                  <Link 
                    href="/services/energy-project-management" 
                    className="block text-gray-600 hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    Project Management
                  </Link>
                  <Link 
                    href="/services" 
                    className="block text-primary font-medium hover:text-secondary transition-colors py-2"
                    onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/contact" 
              className="block text-gray-800 hover:text-secondary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="block bg-energy-green text-white hover:bg-secondary px-6 py-3 rounded-full font-medium transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}