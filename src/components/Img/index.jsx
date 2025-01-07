import React from "react";

const Img = ({className, src = "defaultNoData.png", alt ="testImg", ...restProps}) => {
    return <img className={className} src={src} {...restProps} loading={"lazy"} />;
};
export {Img};