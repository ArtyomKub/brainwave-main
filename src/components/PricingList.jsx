import {check} from "../assets";
import {pricing} from "../constants";
import Button from "./Button";
import {useTranslation} from "react-i18next";

const PricingList = () => {
    const {t, i18n} = useTranslation();
    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            <div
                className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                <h4 className="h4 mb-4 text-center">{t("priceOne")}</h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{t("priceOneTitle")}</p>
                <div className="flex items-center h-[5.5rem] mb-6">
                    <>
                        <div className="h3">$</div>
                        <div className="text-[5.5rem] leading-none font-bold">
                            Free
                        </div>
                    </>
                </div>
                <Button className="w-full mb-6" href={"mailto:biteamsoft@gmail.com"}>GET STARTED</Button>
                <ul>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceOneDescription1")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceOneDescription2")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceOneDescription3")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceOneDescription4")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceOneDescription5")}</p>
                    </li>
                </ul>
            </div>
            <div
                className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                <h4 className="h4 mb-4 text-center">{t("priceTwo")}</h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{t("priceTwoTitle")}</p>
                <div className="flex items-center h-[5.5rem] mb-6">
                    <>
                        <div className="h3">$</div>
                        <div className="text-[5.5rem] leading-none font-bold">
                            49.99
                        </div>
                    </>
                </div>
                <Button className="w-full mb-6" href={"mailto:biteamsoft@gmail.com"}>GET STARTED</Button>
                <ul>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceTwoDescription1")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceTwoDescription2")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceTwoDescription3")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceTwoDescription4")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">WEB UI</p>
                    </li>
                </ul>
            </div>
            <div
                className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                <h4 className="h4 mb-4 text-center">{t("priceThree")}</h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{t("priceThreeTitle")}</p>
                <div className="flex items-center h-[5.5rem] mb-6">
                    <>
                        <div className="h3"></div>
                        <div className="text-[5.5rem] leading-none font-bold">

                        </div>
                    </>
                </div>
                <Button className="w-full mb-6" href={"mailto:biteamsoft@gmail.com"}>CONTACT US</Button>
                <ul>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceThreeDescription1")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceThreeDescription2")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceThreeDescription3")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceThreeDescription4")}</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">WEB UI</p>
                    </li>
                    <li className="flex items-start py-5 border-t border-n-6">
                        <img src={check} width={24} height={24} alt="Check"/>
                        <p className="body-2 ml-4">{t("priceThreeDescription5")}</p>
                    </li>
                </ul>
            </div>


            {/*<div className="flex gap-[1rem] max-lg:flex-wrap">*/}
            {/*    {pricing.map((item) => (*/}
            {/*        <div*/}
            {/*            key={item.id}*/}
            {/*            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"*/}
            {/*        >*/}
            {/*            <h4 className="h4 mb-4">{item.title}</h4>*/}

            {/*            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">*/}
            {/*                {item.description}*/}
            {/*            </p>*/}

            {/*            <div className="flex items-center h-[5.5rem] mb-6">*/}
            {/*                {item.price && (*/}
            {/*                    <>*/}
            {/*                        <div className="h3">$</div>*/}
            {/*                        <div className="text-[5.5rem] leading-none font-bold">*/}
            {/*                            {item.price}*/}
            {/*                        </div>*/}
            {/*                    </>*/}
            {/*                )}*/}
            {/*            </div>*/}

            {/*            <Button*/}
            {/*                className="w-full mb-6"*/}
            {/*                href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}*/}
            {/*                white={!!item.price}*/}
            {/*            >*/}
            {/*                {item.price ? "Get started" : "Contact us"}*/}
            {/*            </Button>*/}

            {/*            <ul>*/}
            {/*                {item.features.map((feature, index) => (*/}
            {/*                    <li*/}
            {/*                        key={index}*/}
            {/*                        className="flex items-start py-5 border-t border-n-6"*/}
            {/*                    >*/}
            {/*                        <img src={check} width={24} height={24} alt="Check"/>*/}
            {/*                        <p className="body-2 ml-4">{feature}</p>*/}
            {/*                    </li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}


        </div>


    )
        ;
};

export default PricingList;
