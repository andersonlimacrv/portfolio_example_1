// data
const workData = {
    slides: [
        {
            images: [
                {
                    title: 'Personalized t-shirt generator with the help of artificial intelligence and 3d modeling.',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />, <TbBrandOpenai key="openai-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: 'https://github.com/andersonlimacrv/3d-saas-shirt',
                    linkPreview: 'https://chooseyourtshirt.allcode.app/',
                    path: '/project1.jpg',
                },
                {
                    title: 'User administration, password recovery via token and UX with a attractive UI & responsive design',
                    tecnology: [<FaPython key="python-icon" />, <SiDjango key="django-icon" />, <SiJavascript key="js-icon" />, <SiBootstrap key="bootstrap-icon" />, <SiHtml5 key="html-icon" />, <SiCss3 key="css-icon" />],
                    codeIcon: <RiLock2Fill key="locked-icon" />,
                    previewIcon: <RiLock2Fill key="locked-icon" />,
                    linkCode: '',
                    linkPreview: '',
                    path: '/project2_ed.jpg',
                },
                {
                    title: 'Project of the Landing Page for Youth Institute "Dom Antônio Zattera" - Charity Volunteer Work',
                    tecnology: [<SiJavascript key="js-icon" />, <SiHtml5 key="html-icon" />, <SiCss3 key="css-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: 'https://github.com/andersonlimacrv/ProjetoIntegrador4A',
                    linkPreview: 'https://andersonlimacrv.github.io/ProjetoIntegrador4A/',
                    path: '/project3_ed.jpg',
                },
                {
                    title: 'title4',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: '',
                    linkPreview: '',
                    path: '/thumb4.jpg',
                },
            ],
        },
        {
            images: [
                {
                    title: 'title5',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: '',
                    linkPreview: '',
                    path: '/thumb4.jpg',
                },
                {
                    title: 'title6',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: '',
                    linkPreview: '',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title7',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: '',
                    linkPreview: '',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title8',
                    tecnology: [<SiJavascript key="js-icon" />, <SiReact key="react-icon" />, <SiTailwindcss key="tailwind-icon" />, <SiFramer key="framer-icon" />, <SiThreedotjs key="three-icon" />],
                    codeIcon: <AiFillGithub key="github-icon" />,
                    previewIcon: <BiWorld key="world-icon" />,
                    linkCode: '',
                    linkPreview: '',
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
import { AiFillGithub } from "react-icons/ai";
import { RiCodepenFill, RiLock2Fill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import {
    FaHtml5,
    FaPython,
    FaCss3,
    FaReact,
    FaBootstrap,
    FaPhoenixFramework,
} from "react-icons/fa";

import { TbBrandOpenai } from "react-icons/tb";
import {
    SiNextdotjs,
    SiFramer,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiDjango,
    SiFastapi,
    SiPostgresql,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiHeroku,
    SiAmazonaws,
    SiCplusplus,
    SiElixir,
    SiMqtt,
    SiReact,
    SiThreedotjs,
    SiBootstrap,
    SiHtml5,
    SiCss3,

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
                workData.slides.map((slide, index) => {
                    return <SwiperSlide key={index}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:gap-6'>
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
                                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-2 group-hover:xl:-translate-y-8 transition-all duration-300'>
                                                <div className='flex flex-col items gap-x-2'>
                                                    {/* title part 1 */}
                                                    <div className='text-center text-xs lg:text-[15px] delay-100 lg:pb-2 leading-[1] lg:leading-[1.5] px-max-w-[320px]'>{image.title}</div>
                                                    {/* title part 2 */}
                                                    <div className='hidden md:flex pb-2 gap-x-2 items-center justify-center translate-y-[500%] group-hover:translate-y-0 transition-all delay-200 duration-300 text-[20px]'>{image.tecnology}</div>
                                                    {/* icon / source code */}
                                                    <div className='text-xs lg:text-lg translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300'>
                                                        {image.linkCode ? (
                                                            <a className="text-[#272A58] hover:underline" href={image.linkCode} target="_blank">
                                                                {/* Conteúdo quando linkCode é verdadeiro */}
                                                                <div className='flex items-center gap-x-2 font-bold justify-center'>
                                                                    {image.codeIcon} Source Code
                                                                </div>
                                                            </a>
                                                        ) : (
                                                            <span>
                                                                {/* Conteúdo quando linkCode é falso ou vazio */}
                                                                <div className='flex items-center gap-x-2 font-bold justify-center'>
                                                                    {image.codeIcon} Source Code
                                                                </div>
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Icon / Preview Code */}
                                                    <div className='text-xs lg:text-lg translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300'>
                                                        {image.linkPreview ? (
                                                            <a className="text-[#272A58] hover:underline" href={image.linkPreview} target="_blank">
                                                                {/* Conteúdo quando linkPreview é verdadeiro */}
                                                                <div className='flex items-center gap-x-2 font-bold justify-center'>
                                                                    {image.previewIcon} Live Preview
                                                                </div>
                                                            </a>
                                                        ) : (
                                                            <span>
                                                                {/* Conteúdo quando linkPreview é falso ou vazio */}
                                                                <div className='flex items-center gap-x-2 font-bold justify-center'>
                                                                    {image.previewIcon} Live Preview
                                                                </div>
                                                            </span>
                                                        )}
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