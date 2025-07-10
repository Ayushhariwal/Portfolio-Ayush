import { words } from "../../Constants";
import AnimatedCounter from "../AnimatedCounter";
import Button from "../Button";
import HeroExperience from "../HeroModels/HeroEXperience";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";





const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y : 50,
                opacity : 0,
            }, {
            y : 0,
            opacity : 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
            }
        )
    })
  return (
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/* left side hero content */}

            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Shaping 
                            <span className="slide">
                                <span className="wrapper">{
                                    words.map((word) => (
                                        <span key={word.text} className="flex items-center mid:gap-3  gap-1 pb-2">
                                        <img 
                                            src={word.imgPath} 
                                            alt={word.text}  
                                            className="xl:size-12 mid:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                            <span>{word.text}</span>
                                        </span>
                                    ))
                                    }

                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className="text-white-50 mid:text-xl relative z-10 pointer-events-none">Hi , I am AYUSH, a developer based in Delhi, India. <br /> I specialize in creating websites and applications that are not only <br />visually appealing but also highly functional.</p>
                                    <Button className="md:w-80 md:h-16 w-60 h-12" 
                                    id="button"
                                    text="see my work"
                                    ></Button>
                </div>
            </header>

            {/* right side 3d model */}

            <figure>
                <div className="hero-3d-layout">
                                <HeroExperience></HeroExperience>
                </div>
            </figure>
        </div>

        <AnimatedCounter/>
      </section>
      
  );
}

export default Hero;