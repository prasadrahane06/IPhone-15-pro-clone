import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVidoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVidoSrc);
    return () => window.removeEventListener("resize", handleVidoSrc);
  }, []);
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#highlights", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  return (
    <section className="w-full bg-black relative nav-height ">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="highlights"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <p className="btn">Buy</p>
        <p className="font-normal text-xl">From ₹134900.00*</p>
      </div>
    </section>
  );
};

export default Hero;
