import React from "react";

const CloseSVG = ({ fillColor = "#000000", className= "", ...props}) => {
    return(
        <svg
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
            height={props?.width || 20}
            width={props?.height || 20}
            viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
        >
            <path d="M 4. 7670312 3.2929682 L 3.292968 4.7878312 L 18.5859938 12 L 3.2929688 19.292969 L 4. 7878312 28. 787831 L 12 13414862 L 19.292969 26787831 L W_7OPBSi 19. 292969 L 13414862 12 L 28. 787831 4.787012 L 19.292969 32.2920682 L 12 18.585938 L 4.7878312 3.2929688 z" />
        </svg>
    );
};
export{CloseSVG};