"use client";

import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Web Developer",
  "Mobile App Developer",
];

export function RoleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setNextIndex((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden">
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .role-current {
          animation: ${isTransitioning ? "slideOut" : "none"} 0.5s ease-in-out;
        }

        .role-next {
          animation: ${isTransitioning ? "slideUp" : "none"} 0.5s ease-in-out;
        }
      `}</style>

      <span className="role-current inline-block transition-all duration-500">
        {roles[currentIndex]}
      </span>
      {isTransitioning && (
        <span className="role-next absolute left-0 top-0 inline-block">
          {roles[nextIndex]}
        </span>
      )}
    </span>
  );
}
