"use client";

import React, { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import {
  LightbulbIcon,
  BookOpenIcon,
  WrenchIcon,
  ShieldIcon,
  SunIcon,
  ClipboardCheckIcon,
} from "lucide-react";

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 }
    );

    const node = titleRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const services = [
    {
      title: "Power & Energy Advisory Services",
      description:
        "Shaping strategic energy decisions for long-term value creation through expert advisory services on energy policy, regulatory frameworks, and investment strategy.",
      icon: <LightbulbIcon size={28} />,
      delay: 100,
    },
    {
      title: "Capacity Development & Sector Training",
      description:
        "Empowering institutions, utilities, and professionals through knowledge transfer with customized workshops and technical training.",
      icon: <BookOpenIcon size={28} />,
      delay: 200,
    },
    {
      title: "Engineering Design & EPC Services",
      description:
        "Precision-driven design, execution, and project delivery covering the full project cycle from feasibility studies to commissioning.",
      icon: <WrenchIcon size={28} />,
      delay: 300,
    },
    {
      title: "Owner's Engineer & Technical Representation",
      description:
        "Safeguarding your project objectives with technical oversight, ensuring compliance with specifications throughout project development.",
      icon: <ShieldIcon size={28} />,
      delay: 400,
    },
    {
      title: "Renewable & Off-Grid Energy Solutions",
      description:
        "Designing and deploying solar mini-grids, hybrid energy systems, and standalone solar installations for remote and off-grid locations.",
      icon: <SunIcon size={28} />,
      delay: 500,
    },
    {
      title: "Energy Project Management & Execution",
      description:
        "Delivering energy projects on time, on budget, and to global standards with full-cycle project management and disciplined execution.",
      icon: <ClipboardCheckIcon size={28} />,
      delay: 600,
    },
  ];

  return (
    <section id="services" className=" bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end solutions in power and renewable energy,
            bridging the energy gap through engineering excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
