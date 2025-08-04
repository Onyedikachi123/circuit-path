"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay,
  link
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("translate-y-0", "opacity-100");
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const node = cardRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-lg p-8 transition-all duration-700 transform translate-y-16 opacity-0 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="bg-emerald-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6 text-[#059669]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6">
        {/* ✅ CHANGED: Dynamic href based on service title */}
        <Link
          href={link}
          className="text-[#059669] font-medium flex items-center hover:text-[#059669] transition-colors"
        >
          Learn more
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
