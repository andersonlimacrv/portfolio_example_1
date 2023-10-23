//components
import Circles from '/components/Circles';
import { BsFillSendCheckFill, BsCheck2All } from 'react-icons/bs';


//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants';


const Contact = () => {
    return (
        <div className='h-full bg-primary/30'>
            <div className='container mx-auto text-center py-32 xl:text-left flex items-center justify-center h-full'>
                <div className='flex flex-col w-full max-w-[700px]'>
                    { /* text & form */}
                    <motion.h2
                        variants={fadeIn('up', '0.3')}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-8'>
                        {/* text */}
                        Let&rsquo;s <span className='text-accent'>connect</span>.
                    </motion.h2>
                    <motion.div
                        variants={fadeIn('up', '0.5')}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='mb-4 max-w-[700px] mx-auto px-4 text-center'
                    >
                        {/* text */}
                        <p className='text-sm md:text-xl'>
                            Need a <span className='text-accent'>system</span> or <span className='text-accent'>automation / bot</span> ?
                        </p>
                        <p className='text-sm md:text-xl mb-4'>
                            I can help you with that.
                        </p>
                        { /* text only showered on large screen */}

                        <div className='hidden xl:block'>
                            <div className='flex justify-center items-center px-2'>
                                <BsCheck2All className='mr-2 text-accent' />Need a bot(robot)?
                            </div>
                            <ul className='list-disc max-w-[500px] mx-auto text-white/50 text-left hidden md:block'>
                                <li> Describe in detail what needs to be automated (which manual steps you would like to automate). </li>
                                <li> Mention the website and the steps/processes you would like to automate.</li>
                            </ul>
                            <div className='flex justify-center items-center px-2'>
                                <BsCheck2All className='mr-2 text-accent' />Need a system ?
                            </div>
                            <ul className='list-disc max-w-[500px] mx-auto text-white/50 text-left hidden md:block'>
                                <li>Describe the overarching goals or vision for the system.</li>
                                <li>Specify the desired functionalities, such as X, Y, and Z.</li>
                                <li>Clarify the user capabilities the system should provide.</li>
                            </ul>
                        </div>
                    </motion.div>
                    { /* form */}
                    <form className='flex flex-col flex-1 gap-1 md:gap-4 w-full mx-auto'>
                        { /* group */}
                        <motion.div
                            variants={fadeIn('up', '0.7')}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='flex flex-col xl:flex-row gap-x-4 gap-y-1 md:gap-y-4'
                        >
                            <input type='text' placeholder='Name' className='input' />
                            <input type='text' placeholder='Email' className='input' />
                        </motion.div>
                        <motion.input
                            variants={fadeIn('up', '0.9')}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            type='text' placeholder='Subject' className='input' />
                        <motion.textarea
                            variants={fadeIn('up', '1.1')}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            placeholder='How can I help you?' className='textarea h-[90px] md:h-full' />
                        <motion.button
                            variants={fadeIn('up', '0.5')}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className=' bg-black/20 btn rounded-full border border-white/50 w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300'>
                                Send Message
                            </span>
                            <BsFillSendCheckFill className='text-accent translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-center text-[24px] mx-auto' />
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;
