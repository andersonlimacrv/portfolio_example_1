import React, { useState } from "react";

// icons
import {
    FaHtml5,
    FaPython,
    FaCss3,
    FaReact,
    FaFigma,
    FaBootstrap,
    FaPhoenixFramework,
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

} from "react-icons/si";


//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Languages',
                icons: [
                    <FaPython key="python-icon" />,
                    <SiJavascript key="javascript-icon" />,
                    <SiTypescript key="typescript-icon" />,
                    <SiCplusplus key="c++-icon" />,
                    <SiElixir key="elixir-icon" />,
                ],
            },
            {
                title: 'Backend',
                icons: [
                    <SiNodedotjs key="nodejs-icon" />,
                    <SiDjango key="django-icon" />,
                    <SiFastapi key="fastapi-icon" />,
                    <SiExpress key="express-icon" />,
                    <SiPostgresql key="postgresql-icon" />,
                    <SiMongodb key="mongodb-icon" />,
                    <SiHeroku key="heroku-icon" />,
                    <SiAmazonaws key="aws-icon" />,
                    <SiMqtt key="mqtt-icon" />,

                ],
            },
            {
                title: 'Frontend',
                icons: [
                    <FaHtml5 key="html-icon" />,
                    <FaCss3 key="css-icon" />,
                    <FaReact key="react-icon" />,
                    <SiTailwindcss key="tailwind-icon" />,
                    <FaBootstrap key="bootstrap-icon" />,
                    <SiNextdotjs key="next-icon" />,
                    <SiFramer key="framer-icon" />,
                    <TbBrandThreejs key="threejs-icon" />,
                    <FaPhoenixFramework key="phoenix-icon" />,
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [
                    <FaFigma key="figma-icon" />,
                    <SiCanva key="canva-icon" />,
                    <SiMiro key="miro-icon" />,
                ],
            },
        ],
    },
    {
        title: 'courses',
        info: [
            {
                title: ' Onebitcode, Fullstack: - 2022',
                stage: 'HTML, CSS, Bootstrap, JS, TS, React, nodeJS, mongoDB.',

            },
            {
                title: 'CC50 Harvard Brasil: - 2022',
                stage: ' Data structure, Phyton, SQL, HTML, CSS, JavaScript ',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Full-stack Software Development - Allcode',
                stage: '2023 - Now',
            },
            {
                title: 'Full-stack Software Development - CESS',
                stage: '2022 - Now',
            },
            {
                title: 'Technical Support Analys -  Companytec',
                stage: '2014 - 2022',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'B.Sc - Analysis and Systems Development - UCPEL, BR',
                stage: '2022 - Now',
            },
            {
                title: 'Electronics - Federal Institute IFSul-Riograndense, BR',
                stage: '2007 - 2011',
            },
        ],
    },
];

//components

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer mottion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CouterUp from 'react-countup'
const About = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left w-full'>
            <Circles />
            {/*Avatar img*/}
            <motion.div
                variants={fadeIn('right', '0.2')}
                initial='hidden'
                opacity='0'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute bottom-0 xl:left-0 xxl:-left-[280px] max-w-[768px] max-h-[768px] xxl:w-full xxl:h-full'>
                <Avatar />
            </motion.div>
            <div className='container mx-auto md:pl-40 xl:mr-auto h-full flex flex-col items-center xxl:flex-row gap-x-6'>
                {/* text */}
                <div className='flex-1 flex flex-col justify-center xl:max-w-[60%] text-center'>
                    <motion.h2
                        variants={fadeIn('right', '0.2')}
                        initial='hidden'
                        opacity='0'
                        animate='show'
                        exit='hidden'
                        className='h2 max-w-[500px] lg:max-w-[700px] xxl:pl-5'>Optimizing <span className='text-accent drop-shadow-3xl'>design</span> and <span className='text-accent drop-shadow-3xl'>performance</span>:</motion.h2>
                    <motion.p
                        variants={fadeIn('right', '0.4')}
                        initial='hidden'
                        opacity='0'
                        animate='show'
                        exit='hidden'
                        className='max-w-[500px] lg:max-w-[700px] mx-auto xl:mx-0 mb-3 xl:mb-12 xl:text-4xl font-extrabold drop-shadow-5xl md:text-2xl'
                    >The secret key for digital success.
                    </motion.p>
                    {/* counters */}
                    <motion.div
                        variants={fadeIn('right', '0.6')}
                        initial='hidden'
                        opacity='0'
                        animate='show'
                        exit='hidden'
                        className='hidden md:flex flex-col max-w-xl xl:max-w-none mx auto ml:mx-0 mb-8'
                    >
                        <div className='text-white text-md xl:text-2xl drop-shadow-2xl font-bold mb-1'
                        >Years of Experience</div>
                        <div className='flex flex-1 xl:gap-x-6'>
                            {/* experience technology */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>

                                <div className='text-accent text-2xl xl:text-4xl font-extrabold text-shadow'>
                                    <CouterUp start={0} end={12} duration={2} delay={1.2} /> +
                                </div>
                                <div className='text-white/60 text-xs uppercase tracking-wider leading-[1.4]'>
                                    in <b>Technology</b> industries
                                </div>
                            </div>
                            {/* experience eletronic */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 p-1 xxl:pr-4'>
                                <div className='text-accent text-2xl xl:text-4xl font-extrabold'>
                                    <CouterUp start={0} end={10} duration={2} delay={1.2} /> +
                                </div>
                                <div className='text-white/60 text-xs uppercase tracking-wider leading-[1.4]'>
                                    working with <b>hardware</b> eletronic
                                </div>
                            </div>
                            {/* Desenvolvimento */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0'>
                                <div className='text-accent text-2xl xl:text-4xl font-extrabold'>
                                    <CouterUp start={0} end={4} duration={2} delay={1.2} /> +
                                </div>
                                <div className='text-white/60 text-xs uppercase tracking-wider leading-[1.4]'>
                                    experience with development
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* info */}
                <motion.div
                    variants={fadeIn('left', '0.4')}
                    initial='hidden'
                    opacity='0'
                    animate='show'
                    exit='hidden'
                    className='flex flex-col w-full xl:max-w-[45%] h-[480px]'
                >
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 font-extrabold'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`
                                        ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration:300'
                                        }
                                        cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:hover:bg-accent after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                                    {/* title */}
                                    <div className='font-bold mb-2 md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    <div className='italic'>{item.stage}</div>
                                    <div className='flex gap-x-4 pb-4'>
                                        {/* icons */}
                                        {item.icons?.map((icon, iconIndex) => {
                                            // Extract the key (iconKey) from the React element (icon)
                                            const iconKey = icon.key;
                                            return (
                                                <div className='relative text-2xl text-white hover:scale-150 transition-all duration-300 hover:text-accent group' key={iconKey}>
                                                    {icon}

                                                    <div className='capitalize'>
                                                        <div className='absolute font-extrabold text-xs/[10px] hidden group-hover:flex bg-white/20 items-center p-[2px] -left-[3px] rounded-[3px]'>{iconKey.replace('-icon', '')}</div>
                                                    </div>

                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
