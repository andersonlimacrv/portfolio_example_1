// data
const workSlider = {
    slides: [
        {
            images: [
                {
                    title: 'Descrição breve',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: 'https://github.com/andersonlimacrv/3d-saas-shirt',
                    linkPreview: '',
                    path: '/project1.jpg',
                },
                {
                    title: 'title2',
                    tecnology: '',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title3',
                    tecnology: '',
                    path: '/thumb3.jpg',
                },
                {
                    title: 'title4',
                    tecnology: '',
                    path: '/thumb4.jpg',
                },
            ],
        },
        {
            images: [
                {
                    title: 'title5',
                    tecnology: '',
                    path: '/thumb4.jpg',
                },
                {
                    title: 'title6',
                    tecnology: '',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title7',
                    tecnology: '',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title8',
                    tecnology: '',
                    path: '/thumb3.jpg',
                },
            ],
        },
    ],
};

// import swiper reaxt components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from 'next/image';

// icons
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { RiGithubLine, RiCodepenFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { RiLock2Fill } from 'react-icons/ri';

// icons
import {
    FaHtml5,
    FaPython,
    FaCss3,
    FaReact,
    FaFigma,
    FaBootstrap,
    FaPhoenixFramework,
    FaCodepen,
} from "react-icons/fa";

import { TbBrandThreejs } from "react-icons/tb";

import {
    SiNextdotjs,
    SiFramer,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiCanva,
    SiDjango,
    SiFastapi,
    SiPostgresql,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiHeroku,
    SiAmazonaws,
    SiMiro,
    SiCplusplus,
    SiElixir,
    SiMqtt,
    SiReact,
    SiThreedotjs,

} from "react-icons/si";

const WorkSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 4500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="h-[280px] sm:h-[480px]">
            {
                workSlider.slides.map((slide, index) => {
                    return <SwiperSlide key={index}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:gap-4'>
                            {slide.images.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                                        <div className='flex items-center justify-center relative overflow-hidden group'>
                                            {/* image */}
                                            <Image
                                                src={image.path}
                                                width={500}
                                                height={300}
                                                alt=''
                                            />
                                            {/* Overlay gradient */}
                                            <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#00acac] to-[#272A58] opacity-0 group-hover:opacity-95 transition-all duration-700'>
                                            </div>
                                            {/* title */}
                                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-5 group-hover:xl:-translate-y-10 transition-all duration-300'>
                                                <div className='flex flex-col items gap-x-2 text-[15px]'>
                                                    {/* title part 1 */}
                                                    <div className='delay-100 pb-2'>{image.title}</div>
                                                    {/* title part 2 */}
                                                    <div className='pb-2 gap-x-2 flex items-center translate-y-[500%] group-hover:translate-y-0 transition-all delay-200 duration-300 text-[20px]'>{image.tecnology}</div>
                                                    {/* icon / source code */}
                                                    <div className='text-lg translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300'>
                                                        <a className="text-[#272A58] hover:underline" href='{image.linkCode}' target="_blank">
                                                            <div className='flex items-center gap-x-2 font-bold'>
                                                                {image.codeIcon} Source Code
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* icon / preview code */}
                                                    <div className='text-lg translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300'>
                                                        <a className="text-[#272A58] hover:underline" href='{image.linkPreview}'>
                                                            <div className='flex items-center gap-x-2 font-bold'>
                                                                {image.previewIcon} Live
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </SwiperSlide>
                })
            } </Swiper>
    )
};

export default WorkSlider;