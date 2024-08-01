import React from "react";
import Section from "./Section";
import {socials} from "../constants";
import Button from "./Button.jsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
                <p>biteamsoft@gmail.com</p>
                <ul className="flex gap-5 flex-wrap">
                    {/*<button className="hidden lg:flex" href="#login" onClick={()=>changeLanguage("pl")}>*/}
                    {/*    PL*/}
                    {/*</button>*/}
                    {/*<button className="hidden lg:flex" href="#login" onClick={()=>changeLanguage("ru")}>*/}
                    {/*    RU*/}
                    {/*</button>*/}
                    {/*<button className="hidden lg:flex" href="#login" onClick={()=>changeLanguage("en")}>*/}
                    {/*    EN*/}
                    {/*</button>*/}
                </ul>


                {/*<ul className="flex gap-5 flex-wrap">*/}
                {/*  {socials.map((item) => (*/}
                {/*    <a*/}
                {/*      key={item.id}*/}
                {/*      href={item.url}*/}
                {/*      target="_blank"*/}
                {/*      className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"*/}
                {/*    >*/}
                {/*      <img src={item.iconUrl} width={16} height={16} alt={item.title} />*/}
                {/*    </a>*/}
                {/*  ))}*/}
                {/*</ul>*/}
            </div>
        </Section>
    );
};

export default Footer;
