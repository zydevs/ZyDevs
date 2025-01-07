import {Heading, Img, Text} from "../../components";
import React from "react";

export default function AboutMeSection(){
    return(
        <>
            {/*about me section*/}
            <div>
                <div className="h-[700px] bg-[#1a1e23] bf-[url(/public/images/AboutMe.png)] bg-cover bg-no-repeat px-14 py-[76px] md:h-auto md:p-5">
                    <div className="flex items-center md:flex-col">
                        <div className="relative z"></div>
                    </div>
                </div>
            </div>
        </>
    )
}