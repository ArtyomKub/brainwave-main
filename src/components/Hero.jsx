import {curve} from "../assets";
import Button from "./Button";
import Section from "./Section";
import {BottomLine, Gradient} from "./design/Hero";
import {heroIcons} from "../constants";
import {ScrollParallax} from "react-just-parallax";
import {useRef} from "react";
import CompanyLogos from "./CompanyLogos";
import RobotModel from "./3dModel/RobotModel/RobotModel.jsx";
import {useTranslation} from "react-i18next";
import Generating from "./Generating.jsx";
import Notification from "./Notification";
import LeftAnswer from "./LeftAnswer.jsx";

const Hero = () => {
    const {t, i18n} = useTranslation();
    const parallaxRef = useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
            <span className="inline-block relative">
              {t("agentAI")}{" "}
                <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={355}
                    height={5}
                    alt="Curve"
                />
            </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        {t("agentAItext")}
                    </p>
                    <Button href="https://t.me/realtAI_bot" white>
                        {t('buttonStarted')}
                    </Button>

                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1rem] bg-n-10 rounded-t-[0.9rem]"/>
                            <div
                                className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/290] lg:aspect-[1024/490]">
                                <ScrollParallax isAbsolutelyPositioned={true}>
                                    <Generating
                                        className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[55rem] md:-translate-x-1/2"/>
                                    <div
                                        className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 w-[18rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                        <LeftAnswer/>
                                    </div>
                                </ScrollParallax>
                                <RobotModel/>
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className="hidden absolute -right-[5.5rem] bottom-[7rem] w-[28rem] xl:flex"/>
                                </ScrollParallax>
                            </div>
                        </div>

                        <Gradient/>
                    </div>
                    <div
                        className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        {/*<img*/}
                        {/*  src={heroBackground}*/}
                        {/*  className="w-full"*/}
                        {/*  width={1440}*/}
                        {/*  height={1800}*/}
                        {/*  alt="hero"*/}
                        {/*/>*/}
                    </div>

                    {/*<BackgroundCircles />*/}
                </div>

                <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
            </div>

            <BottomLine/>
        </Section>
    );
};

export default Hero;
