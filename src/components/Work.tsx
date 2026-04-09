import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
    const projects = [
    {
      title: "Style By Alif",
      category: "Fashion Ecommerce",
      tools: "Shopify, Liquid, Custom CSS",
      link: "https://www.stylebyalif.com/",
      image: "/images/stylebyalif.png",
    },
    {
      title: "Alif Dukan",
      category: "Online Marketplace",
      tools: "Shopify, Shopify Apps, UI/UX",
      link: "https://alifdukan.com/",
      image: "/images/alifdukan.png",
    },
    {
      title: "Shopzone",
      category: "Multi-vendor Store",
      tools: "Shopify, Liquid, JavaScript",
      link: "https://shopzone.com.pk/",
      image: "/images/shopzone.png",
    },
    {
      title: "Bilal Mart",
      category: "Grocery Ecommerce",
      tools: "Shopify, Payment Integration",
      link: "https://bilalmarth7.pk/",
      image: "/images/bilalmart.png",
    },
    {
      title: "SaniveC Pharma",
      category: "Pharmaceutical Business",
      tools: "Web Development, SEO, Branding",
      link: "https://sanivecpharma.com/",
      image: "/images/sanivecpharma.png",
    },
    {
      title: "Qivo",
      category: "Tech & Services",
      tools: "React, GSAP, Modern UI",
      link: "https://qivo.pk/",
      image: "/images/qivo.png",
    },
  ];

  useGSAP(() => {
    const flexElement = document.querySelector(".work-flex") as HTMLElement;
    const workSection = document.querySelector(".work-section") as HTMLElement;

    const getScrollAmount = () => {
      if (!flexElement) return 0;
      // Calculate how much we need to scroll to show the last item fully
      return flexElement.scrollWidth - window.innerWidth + 100;
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: workSection,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(flexElement, {
      x: () => -getScrollAmount(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
