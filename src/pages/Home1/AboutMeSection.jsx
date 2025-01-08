import {Heading, Img, Text} from "../../components";
import React from "react";

export default function AboutMeSection(){
    return(
        <>
            {/*about me section*/}
            <div>
                <div className="h-[700px] bg-[#1a1e23] bf-[url(/public/images/AboutMe.png)] bg-cover bg-no-repeat px-14 py-[76px] md:h-auto md:p-5">
                    <div className="flex items-center md:flex-col">
                        <div className="relative z-[1] flex flex-1 flex-col items-start gap-6 py-4 md:self-stretch">
                            <div className="flex rounded-br-[40px] border-4 border-solid border-[#12f7d6] bg-[#292f36] p-3.5">
                                <Text 
                                    size="text3xl"
                                    as="p"
                                    className="text-[45px] font-normal capitalize md:text-[41px] sm:text-[35px]"
                                >
                                    About me
                                </Text>
                            </div>
                            <div className="mb-16 flex w-[88%] flex-col items-start gap-2.5 rounded-[40px] bg-[#292f36] px-10 py-2 md:w-full sm:px-5">
                                <Text as="p" className="mt-3.5 text-[14px] font-normal !text-[#97f9eb]">
                                    &lt;p&gt;
                                </Text>
                                <Text as="p" className="w-full text-[17px] font-normal leading-5">
                                    <span className="text-[33px] font-medium capitalize text-[#12f7d6]">
                                        <>
                                            Hello <br />
                                        </>
                                    </span>
                                    <span className="text-[#ffffff]">Saya Muhamad Hafizi, Mahasiswa S1&nbsp;</span>
                                    <span className="text-[#12f7d6]">Ilmu Komputer</span>
                                    <span className="text-[#ffffff]">&nbsp;di&nbsp;</span>
                                    <span className="text-[#12f7d6]">Universitas Pakuan</span>
                                    <span className="text-[#ffffff]">
                                        &nbsp;dengan pengtalaman dalam pengembangan Web dan Pengembangan Aplikasi Mobile. Dalam pengembangan 
                                        web, saya menguasai teknologi seperti&nbsp;
                                    </span>
                                    <span className="text-[#12f7d6]">HTML</span>
                                    <span className="text-[#ffffff]">&nbsp;</span>
                                    <span className="text-[#12f7d6]">CSS</span>
                                    <span className="text-[#ffffff]">&nbsp;</span>
                                    <span className="text-[#12f7d6]">JavaScript</span>
                                    <span className="text-[#ffffff]">&nbsp;</span>
                                    <span className="text-[#12f7d6]">PHP</span>
                                    <span className="text-[#ffffff]">&nbsp;dan&nbsp;</span>
                                    <span className="text-[#12f7d6]">React</span>
                                    <span className="text-[#ffffff]">
                                        &nbsp;Untuk membangun aplikasi web yang responsif dan dinamis. Di bidang pengembangan aplikasi
                                        mobile, saya terbiasa menggnakan &nbsp;
                                    </span>
                                    <span className="text-[#12f7d6]">
                                        Flutter untuk menciptakan aplikasi berbasis Android maupun lintas platform.
                                    </span>
                                </Text>
                                <Text as="p" className="text-[14px] font-normal !text-[#97f9eb]">
                                    &lt;/p&gt;
                                </Text>
                            </div>
                        </div>
                        <div className="relative mb-[1020px] ml-[-28px] flex w-[42%] justify-center self-end md:ml-0 md:w-full">
                            <div className="flex w-full flex-col items-center gap-3.5">
                                <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                                    <Img src="../../../public/images/webdev.png" alt="Webdev" className="h-[224px] w-[56%] object-contain sm:w-full" />
                                    <Img src="../../../public/images/mobiledev.png" alt="Mobiledev" className="h-[250px] w-[30%] object-contain sm:w-full" />
                                </div>
                                <Heading size="text2xl" as="h1" className="text-[32px] font-medium capitalize md:text-[30px] sm:text-[28px]">
                                    Web & App Mobile Development
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}