import {Heading, Img} from "./..";
import React from "react";

export default function UserProfile1({
    userImage = "images/porto_1.png",
    websiteText = "Website Cipsmart",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-[30px]`}>
            <div className="flex self-stretch rounded-br-[32px] rounded-t1-[32px] border-4 border-solid border-[#12f7d6] bg-[#292f36] p-5">
                <Img src={userImage} alt="Portoone" className="h-[296px] w-[98%] rounded-[10px] object-contain" />
            </div>
            <Heading as="p" className="text-[25px] font-medium capitalize">
                {websiteText}
            </Heading>
        </div>
    );
}