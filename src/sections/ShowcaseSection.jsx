import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://fastai-app.netlify.app" target="_blank">
              <img src="/images/fast-ai-.png" alt="Fast AI screenshot" />
              </a>
            </div>
            <div className="text-content">
              <h2>
               Fast-AI is a SaaS for content creator and it helps user generate best content with the help of Gemini AI.
              </h2>
              <p className="text-white-50 md:text-xl">
                An web app with Nextjs, Clerk Authentication, Drizzle ORM, Gemini API.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://roomify-one.vercel.app/" target="_blank">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
                </a>
              </div>
              <h2>Roomify, a web app for book and host for free Room or Appartment.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://lbs-beta.vercel.app/">
                <img src="/images/project3.png" alt="LBS-Consult" target="_blank"/>
                </a>
              </div>
              <h2>LBS-Consult, is web app for student who can check the result of the test exam to Lomé Business School University</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
