
//components 
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
    return (
        <div className='h-full bg-primary/30 py-32 flex items-center'>
            <Circles />
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    {/* text */}
                    <div className='text-center flex xl:w-[25vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2
                            variants={fadeIn('up', '0.3')}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2 xl:mt-8'
                        >
                            My work<span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', '0.5')}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-2 max-w-[500px] mx-auto lg:mx-0'
                        >
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn('down', '0.7')}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:max-w-[56%]'
                    >
                        {/* slider */}
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Work;
