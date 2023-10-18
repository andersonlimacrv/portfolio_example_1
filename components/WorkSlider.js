// data
const workSlider = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title',
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

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';

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
                        <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:gap-4 cursor-pointer'>
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
                                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                                                <div className='pr-20 flex-items-center gap-x-2 text-[13px]'>
                                                    {/* title part 1 */}
                                                    <div className='delay-100'>title part 1</div>
                                                    {/* title part 2 */}
                                                    <div className='translate-y-[500%] group-hover:translate-y-0'>title part 2</div>
                                                    {/* icon */}
                                                    <div className=''>icon</div>
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