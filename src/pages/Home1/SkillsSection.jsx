import {Text} from "../../components";
import UserProfile1 from "components/UserProfile";
import React, {Suspense} from "react";

const techSkillGrid = [
    {userImage: "../../../public/images/html.png", userDescription: "HTML"},
    {userImage: "../../../public/images/css.png", userDescription: "CSS"},
    {userImage: "../../../public/images/js.png", userDescription: "JavaScript"},
    {userImage: "../../../public/images/php.png", userDescription: "PHP"},
    {userImage: "../../../public/images/figma.png", userDescription: "Figma"},
    {userImage: "../../../public/images/laravel.png", userDescription: "React"}, //replace img react
    {userImage: "../../../public/images/flutter.png", userDescription: "Flutter"},
    {userImage: "../../../public/images/git.png", userDescription: "Git"},
   
];

export default function SkillsSection(){
    return(
        <>
            {/* skills section */}
            <div>
                <div className="flex h-[700px] items-center justify-center bg-[#292f36] bg-[url(/public/images/Skills.png)] bg-cover bg-no-repeat py-24 md:h-auto md:py-5}">
                    <div className="container-xs flex justify-center px-14 md:px-5">
                        <div className="flex w-[64%] flex-col items-center gap-[78px] md:w-full md:gap-[58px] sm:gap-[39px]">
                            <div className="flex w-[16%] flex-col items-center gap-[22px] md:w-full">
                                <Text size="text3xl" as="p" className="mt-1 text-[45px] font-normal capitalize !text-[#12f7d6] md:text-[41px] sm:text-[35px]">
                                    Skills
                                </Text>
                                <div className="h-[24px] w-full self-stretch bg-[#12f7d6]" />
                            </div>
                            <div className="grid grid-cols-4 justify-center gap-[100px] self-stretch md:grid-cols-2 sm:grid-cols-1">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {techSkillGrid.map((d, index) => (
                                        <UserProfile {...d} key={"gridhtmlone" + index} />
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