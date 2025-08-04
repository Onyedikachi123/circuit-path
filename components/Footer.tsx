"use client";

import { useEffect, useState } from "react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6">CircuitPath</h3>
            <p className="text-gray-400 mb-6">
              A full-service energy infrastructure company offering innovative
              solutions in power and renewable energy.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => {
                  const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <li key={item}>
                      <a
                        href={href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                {
                  name: "Energy Project Management",
                  slug: "energy-project-management",
                },
                { name: "Capacity Development", slug: "capacity-development" },
                { name: "Engineering Design", slug: "engineering-design-epc" },
                { name: "Owners Engineer", slug: "owners-engineer" },
                { name: "Renewable Energy", slug: "renewable-offgrid" },
                {
                  name: "Power Energy Advisory",
                  slug: "power-energy-advisory",
                },
              ].map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon
                  size={20}
                  className="mr-3 text-blue-500 flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">
                  123 Energy Avenue, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon
                  size={20}
                  className="mr-3 text-blue-500 flex-shrink-0"
                />
                <span className="text-gray-400">+234 814 530 1414</span>
              </li>
              <li className="flex items-center">
                <MailIcon
                  size={20}
                  className="mr-3 text-blue-500 flex-shrink-0"
                />
                <span className="text-gray-400">
                  circuit.path.solutions@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 my-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {year ?? "----"} CircuitPath Projects Solutions Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
