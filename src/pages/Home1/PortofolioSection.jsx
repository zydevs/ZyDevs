import {Text} from "../../components";
import UserProfile1 from "components/UserProfile1";
import React, {Suspense} from "react";

const portfolioProjectsGrid = [
    {userImage: "../../../public/images/porto-1.png", websiteText: "Website Cipsmart"},
    {userImage: "../../../public/images/porto-2.png", websiteText: "Website Halalin"},
    {userImage: "../../../public/images/porto-2.png", websiteText: "Website Halalin"},
    {userImage: "../../../public/images/app-1.png", websiteText: "Aplikasi Pakuan Link"},
    {userImage: "../../../public/images/app-2.png.png", websiteText: "Aplikasi Learnify Unpak"},
];

export default function PortfolioSection(){
    return(
        <>
            {/* portfolio section */}
            <div>
                <div className="flex h-[1084px] items-center justify-center bg-[#1aa1e23] bg-[url(/public/images/AboutMe.png)] bg-cover bg-no-repeat py-10 md:h-auto sm:py-5}">
                    <div className="container-xs mb-[42px] flex justify-center md:px-5">
                        <div className="flex w-full flex-col items-center gap-14 px-1.5 sm:gap-7">
                            <div className="flex w-[12%] flex-col items-center gap-[22px] md:w-full">
                                <Text size="text3xl" as="p" className="mt-1 text-[45px] font-normal capitalize !text-[#12f7d6] md:text-[41px] sm:text-[35px]">
                                    Works
                                </Text>
                                <div className="h-[24px] w-full self-stretch bg-[#12f7d6]" />
                            </div>
                            <div className="grid grid-cols-2 justify-center gap-[86px] self-stretch md:grid-cols-1">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {portfolioProjectsGrid.map((d, index) => (
                                        <UserProfile1 {...d} key={"gridportone" + index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}