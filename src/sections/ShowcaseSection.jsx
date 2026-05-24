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
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>

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
                  <img src="/images/project2.png" alt="Library Management" />
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
                  <img src="/images/project3.png" alt="YC Directory" />
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
