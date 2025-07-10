import { use, useRef } from "react"
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {

        const projects = [ project1Ref.current, project2Ref.current, project3Ref.current ];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            { y: 50 , opacity: 0 },
            { y : 0 , opacity: 1 , duration: 1,
                 delay: 0.5 * (index + 0.8) ,
                 scrollTrigger: { trigger: card , start : 'top bottom-=100' } }
        )
    })

        gsap.fromTo(sectionRef.current, {
            opacity: 0
        } , {opacity: 1 , duration: 1.5} )

      
    } , [])

    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2023/04/WTNY_SlackCanvas-1.jpg?w=1024" alt="Project1" />
                        </div>
                        <div className="text-content">
                            <h2>description of your project</h2>
                            <p className="text-white-50 bd:text-lg">Brief description of your project goes here.</p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="https://www.codica.com/static/912ba116a5a351ee1dce23f5a6124e28/4aafe/Airbnb_Accomodation_Search_min_dfe42c2427.jpg" alt="project2" />
                            </div>
                            <h2>description of this one</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7db]">
                                <img src="https://www.codica.com/static/912ba116a5a351ee1dce23f5a6124e28/4aafe/Airbnb_Accomodation_Search_min_dfe42c2427.jpg" alt="project2" />
                            </div>
                            <h2>description of this one</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection