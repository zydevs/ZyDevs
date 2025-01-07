import React from "react";

const sizes = {
    textmd: "text-[21px] font-medium",
    textlg: "text-[22px] font-medium",
    textxl: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
    text2xl: "text-[32px] font-medium md:text-[30px] sm:text-[28px]",
};

const Heading = ({children, className = "", size = "textxl", as, ...restProps}) => {
    const Component = as || "h6";

    return (
        <Component className={`text-[#12f7d6] font-['IBM_Plex_Mono'] ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export {Heading};