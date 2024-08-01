import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import {useTranslation} from "react-i18next";


const Benefits = () => {
    const {t, i18n} = useTranslation();
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title={t('titleHeading')}
                />
                <div className="flex flex-wrap gap-10 mb-10">
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                         style={{backgroundImage: `url(${"./src/assets/benefits/card-1.svg"})`,}}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{t("firstCard")}</h5>
                            <p className="body-2 mb-6 text-n-3">{t("firstCardText")}</p>
                            <div className="flex items-center mt-auto">
                                <img src={"./src/assets/benefits/icon-1.svg"} width={48} height={48}/>
                                {/*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*/}
                                {/*  Explore more*/}
                                {/*</p>*/}
                                {/*<Arrow/>*/}
                            </div>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                <img src={"./src/assets/benefits/image-2.png"} width={380} height={362}
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                         style={{backgroundImage: `url(${"./src/assets/benefits/card-2.svg"})`,}}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{t("secondCard")}</h5>
                            <p className="body-2 mb-6 text-n-3">{t("secondCardText")}</p>
                            <div className="flex items-center mt-auto">
                                <img src={"/src/assets/benefits/icon-2.svg"} width={48} height={48}/>
                                {/*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*/}
                                {/*  Explore more*/}
                                {/*</p>*/}
                                {/*<Arrow/>*/}
                            </div>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                <img src={"/src/assets/benefits/image-2.png"} width={380} height={362}
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                         style={{backgroundImage: `url(${"./src/assets/benefits/card-3.svg"})`,}}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{t("thirdCard")}</h5>
                            <p className="body-2 mb-6 text-n-3">{t("thirdCardText")}</p>
                            <div className="flex items-center mt-auto">
                                <img src={"/src/assets/benefits/icon-3.svg"} width={48} height={48}/>
                                {/*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*/}
                                {/*  Explore more*/}
                                {/*</p>*/}
                                {/*<Arrow/>*/}
                            </div>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                <img src={"/src/assets/benefits/image-2.png"} width={380} height={362}
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                         style={{backgroundImage: `url(${"./src/assets/benefits/card-4.svg"})`,}}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{t("fourCard")}</h5>
                            <p className="body-2 mb-6 text-n-3">{t("fourCardText")}</p>
                            <div className="flex items-center mt-auto">
                                <img src={"/src/assets/benefits/icon-4.svg"} width={48} height={48}/>
                                {/*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*/}
                                {/*  Explore more*/}
                                {/*</p>*/}
                                {/*<Arrow/>*/}
                            </div>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                <img src={"/src/assets/benefits/image-2.png"} width={380} height={362}
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                         style={{backgroundImage: `url(${"./src/assets/benefits/card-5.svg"})`,}}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{t("fiveCard")}</h5>
                            <p className="body-2 mb-6 text-n-3">{t("fiveCardText")}</p>
                            <div className="flex items-center mt-auto">
                                <img src={"/src/assets/benefits/icon-1.svg"} width={48} height={48}/>
                                {/*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*/}
                                {/*  Explore more*/}
                                {/*</p>*/}
                                {/*<Arrow/>*/}
                            </div>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                <img src={"/src/assets/benefits/image-2.png"} width={380} height={362}
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                         style={{backgroundImage: `url(${"./src/assets/benefits/card-6.svg"})`,}}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{t("sixCard")}</h5>
                            <p className="body-2 mb-6 text-n-3">{t("sixCardText")}</p>
                            <div className="flex items-center mt-auto">
                                <img src={"/src/assets/benefits/icon-2.svg"} width={48} height={48}/>
                                {/*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*/}
                                {/*  Explore more*/}
                                {/*</p>*/}
                                {/*<Arrow/>*/}
                            </div>
                        </div>
                        <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                <img src={"/src/assets/benefits/image-2.png"} width={380} height={362}
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <ClipPath/>
                    </div>
                </div>


                {/*<div className="flex flex-wrap gap-10 mb-10">*/}
                {/*    {benefits.map((item) => {*/}
                {/*            return (*/}
                {/*                <div*/}
                {/*                    className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"*/}
                {/*                    style={{backgroundImage: `url(${item.backgroundUrl})`,}}*/}
                {/*                    key={item.id}*/}
                {/*                >*/}
                {/*                    <div*/}
                {/*                        className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">*/}
                {/*                        <h5 className="h5 mb-5">{item.title}</h5>*/}
                {/*                        <p className="body-2 mb-6 text-n-3">{item.text}</p>*/}
                {/*                        <div className="flex items-center mt-auto">*/}
                {/*                            <img*/}
                {/*                                src={item.iconUrl}*/}
                {/*                                width={48}*/}
                {/*                                height={48}*/}
                {/*                                alt={item.title}*/}
                {/*                            />*/}
                {/*                            /!*<p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">*!/*/}
                {/*                            /!*  Explore more*!/*/}
                {/*                            /!*</p>*!/*/}
                {/*                            <Arrow/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    {item.light && <GradientLight/>}*/}
                {/*                    <div*/}
                {/*                        className="absolute inset-0.5 bg-n-8"*/}
                {/*                        style={{clipPath: "url(#benefits)"}}*/}
                {/*                    >*/}
                {/*                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">*/}
                {/*                            {item.imageUrl && (*/}
                {/*                                <img*/}
                {/*                                    src={item.imageUrl}*/}
                {/*                                    width={380}*/}
                {/*                                    height={362}*/}
                {/*                                    alt={item.title}*/}
                {/*                                    className="w-full h-full object-cover"*/}
                {/*                                />*/}
                {/*                            )}*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <ClipPath/>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    )}*/}
                {/*    (*/}
                {/*</div>*/}
            </div>
        </Section>
    );
};

export default Benefits;
