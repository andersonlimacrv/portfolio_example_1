import React, { useState } from "react";

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 key="html-icon" />,
                    <FaCss3 key="css-icon" />,
                    <FaJs key="js-icon" />,
                    <FaReact key="react-icon" />,
                    <SiNextdotjs key="next-icon" />,
                    <SiFramer key="framer-icon" />,
                    <FaWordpress key="wordpress-icon" />,
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma key="figma-icon" />, <SiAdobexd key="adobe-xd-icon" />, <SiAdobephotoshop key="photoshop-icon" />],
            },
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: 'Webby Awards - Honoree',
                stage: '2011 - 2012',
            },
            {
                title: 'Adobe Design Achievement Awards - Finalist',
                stage: '2009 - 2010',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
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
                        className='h2 max-w-[500px]'>Optimizing <span className='text-accent drop-shadow-3xl'>design</span> and <span className='text-accent drop-shadow-3xl'>performance</span>:</motion.h2>
                    <motion.p
                        variants={fadeIn('right', '0.4')}
                        initial='hidden'
                        opacity='0'
                        animate='show'
                        exit='hidden'
                        className='text-md max-w-[500px] mx-auto xl:mx-0 sm:mb-1 md:mb-3 xl:mb-12 md:text-2xl xl:text-4xl font-extrabold drop-shadow-5xl'
                    >The secret key for digital success.
                    </motion.p>
                    {/* counters */}
                    <motion.div
                        variants={fadeIn('right', '0.6')}
                        initial='hidden'
                        opacity='0'
                        animate='show'
                        exit='hidden'
                        className='flex flex-col max-w-xl xl:max-w-none mx auto ml:mx-0 mb-8'
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
                    className='flex flex-col w-full xl:max-w-[50%] h-[480px]'
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
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                >
                                    {/* title */}
                                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    <div>{item.stage}</div>
                                    <div className='flex gap-x-4'>
                                        {/* icons */}
                                        {item.icons?.map((icon, iconIndex) => {
                                            return <div className='text-2xl text-white hover:scale-150 transition-all duration-300 hover:text-accent' key={iconIndex}>{icon}</div>;
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
