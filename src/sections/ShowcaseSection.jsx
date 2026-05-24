import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100px" },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 }, //from
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* {LEFT} */}
          <div ref={project1Ref} className="first-project-wrapper">
            <a
              href="https://github.com/kiereyes0812/hrms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="HRMS" />
              </div>
            </a>

            <div className="text-content">
              <h2>
                Streamlining HR & Workforce Management with a Smart, All-in-One
                HRMS Platform.
              </h2>
              <p className="text-white-50 md:text-xl">
                An HRMS solution built for The Guest Posting Company to simplify
                employee management, attendance, payroll, leave tracking, and
                team operations in one seamless system.{" "}
              </p>
              {/* Private repo indicator — no dead link */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm text-white-50 flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Code available on request
                </span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <a
                href="https://selleruniverse.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="/images/project2.png" alt="Social Platform" />
                </div>
              </a>
              <h2>
                Scaling Marketplace Brands with Expert Growth Strategy &
                Execution
              </h2>
            </div>

            <div ref={project3Ref} className="project">
              <a
                href="https://fryktion-ecommerece-app-adt2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="E-commerce site" />
                </div>
              </a>

              <h2>
                A self-built e-commerce storefront selling field-grade
                protective gear and firefighting equipment.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
