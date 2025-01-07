import React from "react";
import PropTypes from "prop-types";

const shapes ={
    square: "rounded-[0px]",
};

const variants = {
    fill: {
        teal_A100: "bg-[#97f9eb] text-[#ffffff]",
    },
    underline: {
        teal_A100: "text-[#ffffff] border-b border-[#97f9eb] border-solid",
    },
};

const sizes = {
    xs: "h-[28px] px-3 text-[16px]",
};

const Input = React.forwardRef(
 (
    {
        className = "",
        name = "",
        placeholder = "",
        type = "",
        label = "",
        prefix,
        suffix,
        onChange,
        shape,
        variant = "underline",
        size = "xs",
        color = "teal_A100",
        ...restProps
    },
    ref,
 ) => {
    return(
        <label
        className={`${className} flex items-center justify-center cursor-text text-[#fffff] text-[16px] font-light ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
        >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!! suffix && siffix}
        </label>
    );
 },
);
Input.propTypes ={
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string, 
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill", "underline"]),
    color: PropTypes.oneOf(["teal_A100", "teal_A100"]),
};

export {input};