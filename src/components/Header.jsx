import {useLocation} from "react-router-dom";
import {disablePageScroll, enablePageScroll} from "scroll-lock";
import {brainwave} from "../assets";
import {navigation} from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import {HamburgerMenu} from "./design/Header";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t, i18n} = useTranslation();
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
            openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={brainwave} width={190} height={40} alt="Brainwave"/>
                </a>
                <nav
                    className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        <a href={"#features"} onClick={handleClick}
                           className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-2  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                            {t("navFeatures")}
                        </a>
                        <a href={"#pricing"} onClick={handleClick}
                           className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-2  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                            {t("navPricing")}
                        </a>
                        <a href={"#how-to-use"} onClick={handleClick}
                           className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-2  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                            {t("navUse")}
                        </a>
                        <a href={"#roadmap"} onClick={handleClick}
                           className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-2  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                            {t("navRoadmap")}
                        </a>
                    </div>


                    {/*<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">*/}
                    {/*  {navigation.map((item) => (*/}
                    {/*    <a*/}
                    {/*      key={item.id}*/}
                    {/*      href={item.url}*/}
                    {/*      onClick={handleClick}*/}
                    {/*      className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-2 ${*/}
                    {/*        item.onlyMobile ? "lg:hidden" : ""*/}
                    {/*      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${*/}
                    {/*        item.url === pathname.hash*/}
                    {/*          ? "z-2 lg:text-n-2"*/}
                    {/*          : "lg:text-n-2/50"*/}
                    {/*      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}*/}
                    {/*    >*/}
                    {/*      {item.title}*/}
                    {/*    </a>*/}
                    {/*  ))}*/}
                    {/*</div>*/}
                    <HamburgerMenu/>
                </nav>

                <ul className="flex gap-5 flex-wrap">
                    <button className="hidden lg:flex" href="#login" onClick={() => changeLanguage("pl")}>
                        PL
                    </button>
                    <button className="hidden lg:flex" href="#login" onClick={() => changeLanguage("ru")}>
                        RU
                    </button>
                    <button className="hidden lg:flex" href="#login" onClick={() => changeLanguage("en")}>
                        EN
                    </button>
                </ul>


                <a href="#signup" className="button hidden mr-8 text-n-2/50 transition-colors hover:text-n-1 lg:block">
                    {/*<div>{t("newAccount")}</div>*/}

                </a>
                <Button className="hidden lg:flex" href="#login">
                    {t("signIn")}
                </Button>
                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation}/>
                </Button>
            </div>
        </div>
    );
};

export default Header;
