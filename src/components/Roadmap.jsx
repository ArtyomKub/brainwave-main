import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import {Gradient} from "./design/Roadmap";
import {useTranslation} from "react-i18next";



const Roadmap = () => {
    const {t, i18n} = useTranslation();
    return (
        <Section className="overflow-hidden" id="roadmap">
            <div className="container md:pb-10">
                <Heading tag={t("roadmapHeading")} title={t("roadmapHeadingTitle")}/>
                <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient"`}>
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="absolute top-0 left-0 max-w-full">
                                <img className="w-full" src="/src/assets/grid.png" width={550} height={550} alt='grid'/>
                            </div>
                            <div className="relative z-1">
                                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                    <Tagline>{t("roadmapDate")}</Tagline>
                                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <img className="mr-2.5" src="/src/assets/loading.png" width={16} height={16} alt='loading'/>
                                        <div className="tagline">progress</div>
                                    </div>
                                </div>
                                <div className="mb-10 -my-10 -mx-15">
                                    <img
                                        className="w-full"
                                        src="/src/assets/roadmap/image-1.png"
                                        width={628}
                                        height={426}
                                        alt='image-1'
                                    />
                                </div>
                                <h4 className="h4 mb-4">{t("roadmapTitle")}</h4>
                                <p className="body-2 text-n-4">{t("roadmapDescription")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient"`}>
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="absolute top-0 left-0 max-w-full">
                                <img className="w-full" src="/src/assets/grid.png" width={550} height={550} alt='grid'/>
                            </div>
                            <div className="relative z-1">
                                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                    <Tagline>{t("roadmapDate2")}</Tagline>
                                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <img className="mr-2.5" src="/src/assets/loading.png" width={16} height={16} alt='loadig'/>
                                        <div className="tagline">progress</div>
                                    </div>
                                </div>
                                <div className="mb-10 -my-10 -mx-15">
                                    <img
                                        className="w-full"
                                        src="/src/assets/roadmap/image-2.png"
                                        width={628}
                                        height={426}
                                        alt='image-2'
                                    />
                                </div>
                                <h4 className="h4 mb-4">{t("roadmapTitle2")}</h4>
                                <p className="body-2 text-n-4">{t("roadmapDescription2")}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient"`}>
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="absolute top-0 left-0 max-w-full">
                                <img className="w-full" src="/src/assets/grid.png" width={550} height={550} alt='grid'/>
                            </div>
                            <div className="relative z-1">
                                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                    <Tagline>{t("roadmapDate3")}</Tagline>
                                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <img className="mr-2.5" src="/src/assets/loading.png" width={16} height={16} alt='loading'/>
                                        <div className="tagline">progress</div>
                                    </div>
                                </div>
                                <div className="mb-10 -my-10 -mx-15">

                                    <img
                                        className="w-full"
                                        src="/src/assets/roadmap/image-3.png"
                                        width={628}
                                        height={426}
                                        alt='image-3'
                                    />
                                </div>
                                <h4 className="h4 mb-4">{t("roadmapTitle3")}</h4>
                                <p className="body-2 text-n-4">{t("roadmapDescription3")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient"`}>
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="absolute top-0 left-0 max-w-full">
                                <img className="w-full" src="/src/assets/grid.png" width={550} height={550} alt='grid'/>
                            </div>
                            <div className="relative z-1">
                                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                    <Tagline>{t("roadmapDate4")}</Tagline>
                                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <img className="mr-2.5" src="/src/assets/loading.png" width={16} height={16} alt='loading'/>
                                        <div className="tagline">progress</div>
                                    </div>
                                </div>
                                <div className="mb-10 -my-10 -mx-15">
                                    <img
                                        className="w-full"
                                        src="/src/assets/roadmap/image-4.png"
                                        width={628}
                                        height={426}
                                        alt='image-4'
                                    />
                                </div>
                                <h4 className="h4 mb-4">{t("roadmapTitle4")}</h4>
                                <p className="body-2 text-n-4">{t("roadmapDescription4")}</p>
                            </div>
                        </div>
                    </div>
                    <Gradient/>
                </div>
            </div>
        </Section>
    )
}


//
// const Roadmap = () => (
//     <Section className="overflow-hidden" id="roadmap">
//         <div className="container md:pb-10">
//             <Heading tag="Ready to get started" title="What we’re working on"/>
//             <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
//                 {roadmap.map((item) => {
//                     const status = item.status === "done" ? "Done" : "In progress";
//                     return (
//                         <div
//                             className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
//                                 item.colorful ? "bg-conic-gradient" : "bg-n-6"
//                             }`}
//                             key={item.id}
//                         >
//                             <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
//                                 <div className="absolute top-0 left-0 max-w-full">
//                                     <img
//                                         className="w-full"
//                                         src={grid}
//                                         width={550}
//                                         height={550}
//                                         alt="Grid"
//                                     />
//                                 </div>
//                                 <div className="relative z-1">
//                                     <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
//                                         <Tagline>{item.date}</Tagline>
//
//                                         <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
//                                             <img
//                                                 className="mr-2.5"
//                                                 src={item.status === "done" ? check2 : loading1}
//                                                 width={16}
//                                                 height={16}
//                                                 alt={status}
//                                             />
//                                             <div className="tagline">{status}</div>
//                                         </div>
//                                     </div>
//
//                                     <div className="mb-10 -my-10 -mx-15">
//                                         <img
//                                             className="w-full"
//                                             src={item.imageUrl}
//                                             width={628}
//                                             height={426}
//                                             alt={item.title}
//                                         />
//                                     </div>
//                                     <h4 className="h4 mb-4">{item.title}</h4>
//                                     <p className="body-2 text-n-4">{item.text}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//
//                 <Gradient/>
//             </div>
//
//             {/*<div className="flex justify-center mt-12 md:mt-15 xl:mt-20">*/}
//             {/*  <Button href="/roadmap">Our roadmap</Button>*/}
//             {/*</div>*/}
//         </div>
//     </Section>
// );

export default Roadmap;
