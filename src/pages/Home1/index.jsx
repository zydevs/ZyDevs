import { Helmet } from "react-helmet";
import { Button, Img, Input, Text } from "components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutMeSection from "./AboutMeSection";
import PortfolioSection from "./PortofolioSection";
import SkillsSection from "./SkillsSection";
import React from "react";

export default function Home1Page(){
    return (
        <>
            <Helmet>
                <title>Hafizi - Full-stack Developer | ZyDevs</title>
                <meta name="description" content="Meet Hafizi, a skilled Full-stack developer at ZyDevs. Explore my Portfolio!"/>
            </Helmet>
            <div className="w-full bg-[#292f36] py-3">
                <Header />
                <div className="mx-[62px] mt-1 flex items-center justify-center md:mx-0 md:flex-col">
                    <Img src="../../../public/images/image_4.png" alt="img" className="h-[488px] w-[24%] object-contain md:w-full" />
                    <div className="flex w-[70%] justify-end md:w-full md:px-5">
                        <div className="flex w-[86%] flex-col items-start md:w-full">
                            <Text size="text5xl" as="p" className="text-[85px] font-normal capitalize !text-[#97f9eb] md:text-[48px]">
                                Developer
                            </Text>
                            <div className="relative mt-[-12px] flex flex-col gap-5 self-stretch">
                                <div className="ml-2 flex flex-col gap-[22px] md:ml-0">
                                    <div className="flex flex-col items-start">
                                        <Text as="p" className="text-[14px] font-normal !text-[#97f9eb]">
                                            &lt;h1&gt;
                                        </Text>
                                        <div className="self-stretch px-4">
                                            <div>
                                                <div className="flex flex-col items-start">
                                                    <Text size="text4xl" as="p" className="text-[64px] font-normal capitalize md:text-[48px]">
                                                        Hey
                                                    </Text>
                                                    <Text size="text4xl" as="p" className="relative mt-[14px] text-[64px] font-normal capitalize md:text-[48px]">
                                                        I'm Hafizi
                                                    </Text>
                                                </div>
                                                <div className="relative mt-[-10px] flex flex-wrap items-center justify-center gap-[17px]">
                                                    <Text size="text4xl" as="p" className="text-[64px] font-normal capitalize md:text-[48px]">
                                                        Full-stack Developer
                                                    </Text>
                                                    <Text as="p" className="mb-3.5 self-end text-[14px] font-normal !text-[#97f9eb">
                                                        &lt;/h1&gt;
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2">
                                        <Text as="p" className="text-[14px] font-normal !text[#97f9eb]">
                                            &lt;p&gt;
                                        </Text>
                                        <div className="flex justify-center self-stretch px-6 sm:px-5">
                                            <Text size="texts" as="p" className="text-[20px] font-normal">
                                                Crafting Tommorow&#39;s Solutions, From Code to Creative.
                                            </Text>
                                        </div>
                                        <Text as="p" className="mb-3 text-[14px] font-normal !text[#97f9eb]">
                                            &lt;/p&gt;
                                        </Text>
                                    </div>
                                </div>
                                <div className="mx-2 flex gap-[25px] md:mx-0">
                                    <Button shape="circle" className="w-[40px] roundeed0[20px] px-2">
                                        <Img src="../../../public/images/email.svg" />
                                    </Button>
                                    <Button shape="circle" className="w-[40px] roundeed0[20px] px-2">
                                        <Img src="../../../public/images/instagram.svg.svg" />
                                    </Button>
                                    <Button shape="circle" className="w-[40px] roundeed0[20px] px-2">
                                        <Img src="../../../public/images/github.svg" />
                                    </Button>
                                    <Button shape="circle" className="w-[40px] roundeed0[20px] px-2">
                                        <Img src="../../../public/images/linkedin.svg" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-1 5 mt-[68px]">
                    
                    <AboutMeSection/>
                    <SkillsSection />
                    <PortfolioSection />

                    <div className="mt-[70px] flex flex-col items-center gap-[76px] md:gap-[57px] sm:gap-[38px]">
                        <div className="container-xs md:px-5">
                            <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
                                <div className="flex w-[14%] flex-col items-center gap-5 md:w-full">
                                    <Text size="text3xl" as="p" className="mt-1.5 text-[45px] font-normal capitalize !text-[#12f7d6] md:text-[41px] sm:text-[35px]">
                                        Contact
                                    </Text>
                                    <div className="h-[2px] w-full self-stretch bg-[#12f7d6]" />
                                </div>
                                <div className="flex flex-col items-center gap-[62px] self-stretch sm:gap-[31px]">
                                    <div className="flex self-stretch md:flex-col">
                                        <div className="flex flex-1 flex-col items-start gap-[18px] md:self-stretch">
                                            <Text size="texts" as="p" className="text-[16px] font-light !text-[#12f7d6]">
                                                Nama *
                                            </Text>
                                            <Input shape="square" name="input_one" placeholder={`Masukan nama`} className="w-[78%] !border-b px-3" />
                                        </div>
                                        <div className="flex w-[44%] flex-col items-start gap-5 md:w-full">
                                            <Text size="texts" as="p" className="text-[16px] font-light !text-[#12f7d6]">
                                                Email *
                                            </Text>
                                            <Input shape="square" type="email" name="email" placeholder={`Masukan email`} className="self-stretch !border-b px-3" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 self-stretch">
                                        <div className="flex">
                                            <Text size="texts" as="p" className="text-[16px] font-light !text-[#12f7d6]">
                                                Pesan *
                                            </Text>
                                        </div>
                                        <Input variant="fill" shape="square" name="enter_your" placeholder={`Masukan pesan`} className="px-3" />
                                    </div>
                                    <Button color="teal_A400" size="md" rightIcon={ <Img src="../../../public/images/icon-send.svg" alt="iconsend" className="h-[24px] w-[24px] object-contain" /> 
                                        } className="min-w-[210px] gap-4 rounded-[28px] px-8 capitalize sm:px-5" >
                                        Kirim Pesan
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}