import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/Models/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import resume from "../assets/Kier_Brian_Reyes_Full_Stack_Web_Developer_Resume.pdf";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      },
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Result</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl">
              Hi, I'm Kier Brian, I build full-stack tools that ship fast and
              hold up under real use. Recent work: CI/CD pipeline on Railway
              that cut deploy time from 2 hours to 10 minutes, a Shopify
              platform Lighthouse score raised from 64 to 91, and async cart fix
              that had gone unresolved for months. I work remotely with 3 active
              clients across different stacks.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
            <Button
              href={resume}
              download="Kier_Brian_Reyes_Full_Stack_Web_Developer_Resume.pdf"
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="Download Resume"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <div className="flex flex-col items-center gap-3 mt-10">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
