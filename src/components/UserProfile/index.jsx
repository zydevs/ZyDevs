import {Heading, Img} from "./..";
import React from "react";

export default function UserProfile({userImage = "images/html.png", userDescription = "HTML", ...props}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-2`}>
            <Img src={userImage} alt="Html" className="h-[98px] w-full object-cover" />
            <Heading size="textlg" as="p" className="text-[22px] font-medium capitalize !text-[#e54f26]">
                {userDescription}
            </Heading>
        </div>
    );
}