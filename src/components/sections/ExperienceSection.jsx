import { div } from "three/tsl"
import { expCards } from "../../Constants"
import TitleHeader from "../HeroModels/TitleHeader"
import GlowCard from "../HeroModels/GlowCard"

const ExperienceSection = () => {
    

    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Professional work Experience" sub="My career overview"/>
            </div>

            <div className="mt-32 relative left-5">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card , index) => (
                        <div key={card.title} className="exp-card-wrapper">
                            {/* {card.title} */}
                            <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCard>
                            </div>

                            <div className="xl:w-4/6">
                            <div className="flex items-start">
                                <div className="timeline-wrapper">
                                    <div className="timeline-line" />
                                    <div className="gradient-line w-1 h-full"/>
                                </div>
                                <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                    <div className="timeline-logo">
                                        <img src={card.logoPath} alt="logo" />
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-xl">{card.title}</h1>
                                        <p className="my-5 text-white-50 ">{card.date}</p>

                                        <p className="text-[#839cb5] italic">Responsibilities</p>
                                        <ul className="list-disc ms-5 mt-5  flex flex-col gap-5 text-white-50">
                                            {card.responsibilities.map((responsibilities) => (
                                                <li key={responsibilities} className="text-lg">{responsibilities}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )

}

export default ExperienceSection