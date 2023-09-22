//next image
import Image from 'next/image';

//componensts
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import CircuitComponent from '../components/background-main';

//from motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';


const Home = () => {
    return (
        <div className='h-full'>
            {/* text*/}
            <div className="w-full h-full">
                <div className='text-center flex flex-col ml-auto lg:mr-[10%] xl:mr-[20%] xxl:mr-[10%] justify-center xl:pt-28 xl:text-right h-full container'>
                    {/* title */}
                    <motion.h1
                        variants={fadeIn('down', '0.2')}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h1'
                    >
                        Transforming Ideas <br /> Into {' '}
                        <span className='text-accent drop-shadow-3xl'> Digital Reality</span>
                    </motion.h1>
                    {/* title */}
                    <motion.p
                        variants={fadeIn('down', '0.3')}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-sm xl:max-w-xl mx-auto mb-10 xl:mb-16 xl:ml-auto xl:mr-0 xxl:mr-0 font-medium lg:text-[20px] xl:text-[22px]">'
                    >
                        I’m a frontend developer with a particular interest in making things simple and automating daily tasks.
                        I try to keep up with security and best practices, and am always looking for new things to learn.
                    </motion.p>
                    {/* btn */}
                    <div className='flex justify-center xl:hidden relative mx-auto xl:mr-10 z-10'>
                        <ProjectsBtn />
                    </div>
                    <motion.div
                        variants={fadeIn('down', '0.4')}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden xl:flex justify-end z-10 mr-40'
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>
            {/* image */}
            <div className='w-full h-full absolute right-0 bottom-0'>
                {/* bg img */}
                <div className='absolute translate-z-0'>
                </div>
                {/* particles */}
                <CircuitComponent />
                {/* <ParticlesContainer /> */}
                {/* avatar img */}
                <motion.div
                    variants={fadeIn('up', '0.5')}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='mix-blend-color-dodge w-full h-full max-w-[768px] max-h-[768px] xxl:w-full xxl:h-full absolute -bottom-32 lg:bottom-0 lg:left-[1%] xxl:left-[5%]'>
                    <Avatar />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
