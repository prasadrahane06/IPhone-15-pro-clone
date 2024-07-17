import React from "react";
import { watchImg, rightImg } from "../utils";

import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";

import { animateWithGsap } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    animateWithGsap(".link", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc "
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between  ">
          <h1 id="title" className="section-heading ">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link ">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link ">
              Watch the event
              <img src={rightImg} alt="rightImg" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
