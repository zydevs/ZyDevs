import {Button, Img, Text} from "./..";
import React from "react";

export default function Footer({...props}) {
    return(
        <footer {...props} className={`${props.className} flex self-strech`}>
            <div className="flex w-full flex-col items-center gap-4">
                <div className="h-px w-full self-stretch bg-[#43454d]" />
                    <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <div className="flex w-[60%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex px-6 sm:px-5">
                            <Text size="texts" as="p" className="text-[16px] font-light">
                                © 2024 ZyDevs. All rights reserved.
                            </Text>
                        </div>
                        <div className="flex w-[40%] justify-between gap-5 sm:w-full">
                            <Button shape= "circle" className="w-[40px] rounded-[20px] px-2">
                                <Img src="images/email.svg" />
                            </Button>
                            <Button shape= "circle" className="w-[40px] rounded-[20px] px-2">
                                <Img src="images/instagram.svg" />
                            </Button>
                            <Button shape= "circle" className="w-[40px] rounded-[20px] px-1.5">
                                <Img src="images/github.svg" />
                            </Button>
                            <Button shape= "circle" className="w-[40px] rounded-[20px] px-1.5">
                                <Img src="images/linkedin.svg" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}