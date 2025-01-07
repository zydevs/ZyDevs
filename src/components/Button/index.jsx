import React, { Children } from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[22px]",
    circle: "rounded-[50%]",
};
const variants = {
    fill: {
        teal_A400: "bg-[#12f7d6], text-[#292f36]",
        gray_800: "bg-[#43454d]",
    },
};
const sizes = {
    sm: "h-[44px] px-6 text-[20px]",
    md: "h-[56px] px-8 text-[20px]",
    xs: "h-[40px] px-2",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "gray_800",
    ...restProps
}) => {
    return (
        <button 
            className="{`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} $variant && variants[variant]?.[color]}`}"
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!! rightIcon && rightIcon}
        </button>
    );
};

Button.proTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round", "circle"]),
    size: PropTypes.oneOf(["sm", "md", "xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["teal_A400", "gray_800"]),
};

export { Button };