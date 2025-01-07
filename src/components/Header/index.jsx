import {Button, Text, Img} from "./..";
import React from "react";

export default function Header({ ...props}) {
    return (
        <header {...props} className={`${props.className} mx-20 md:mx-0`}>
            <div className="flex w-full flex-col items-center gap-2 5">
                <div className="mx-auto flex w-full max-w-[1182px] items-center justify-between gap-5 self-stretch md:flex-col md:px-5">
                    <Img src="images\header_logo.png" alt="Headerlogo" className="h-[76px] w-[80px] object-contain" />
                    <div className="flex w-[66%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <ul className="flex flex-wrap gap-8">
                            <li>
                                <a href="#" className="md:text-[22px]">
                                    <Text size="textmd" as="p" className="text-[24px] font-normal capitalize !text-[#12f7d6]">
                                        ZyDevs
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="cursor pointer md:text-[22px]">
                                    <Text size="textmd" as="p" className="text-[24px] font-normal capitalize !text-[#12f7d6]">
                                        Skils
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="cursor pointer md:text-[22px]">
                                    <Text size="textmd" as="p" className="text-[24px] font-normal capitalize !text-[#12f7d6]">
                                        Works
                                    </Text>
                                </a>
                            </li>
                        </ul>
                        <Button
                            color="teal_A400"
                            size="sm"
                            shape="round"
                            className="min-w-[166px] rounded-[22px] px-6 font-['IBM_Plex_Mono'] capitalize sm:px-5"
                        >
                            Say Hello!
                        </Button>
                    </div>
                </div>
                <div className="h-px w-full self-stretch bg-[#43454d]" />
            </div>
        </header>
    );
}