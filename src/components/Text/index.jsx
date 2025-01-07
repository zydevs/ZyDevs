import React from "react";

const sizes = {
    textxs: "text-[17px] font-normal",
    texts: "text-[20px] font-normal",
    textmd: "text-[24px] font-normal md:text-[22px]",
    text3x1: "text-[45px] font-normal md:text-[41px] sm:text-[35px]",
    text4x1: "text-[64px] font-normal md:text-[48px]",
    text5x1: "text-[85px] font-normal md:text-[48px]",
};

const Text = ({ children, className = "", as, size="textxs", ...restProps}) => {
    const Component = as || "p";

    return(
        <Component className={`text-[#ffffff] font-[IBM_Plex_Mono] ${className} $sizes[size]} `} {...restProps}>
            {children}
        </Component>
    );
};

export{Text};