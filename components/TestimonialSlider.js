// testimonial data
const testimonialData = [
    {
        image: '/t-avt-1.png',
        name: 'Anne Smith',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-2.png',
        name: 'Jane Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-3.png',
        name: 'Jhon Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
];


// import swiper reaxt components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';


const TestimonialSlider = () => {
    return (
        <Swiper
            navigation
            slidesPerView={1}
            autoplay={{
                delay: 4500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="h-[400px]">
            {
                testimonialData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                                {/* Avatar, name, position */}
                                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                                    <div className="flex flex-col justify-center text-center">
                                        {/* Avatar */}
                                        <div className="mb-2 mx-auto">
                                            <Image src={person.image} alt={person.name} width={100} height={100} />
                                        </div>
                                        {/* Name */}
                                        <div className="text-xl">
                                            {person.name}</div>
                                        {/* Position */}
                                        <div className="text-[12px] uppercase font-extralight">
                                            {person.position}
                                        </div>
                                    </div>
                                </div>
                                { /* quote & message */}
                                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                                    {/* quote icon */}
                                    <div className="mb-4">
                                        <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                                    </div>
                                    {/* message */}
                                    <div className="">
                                        {person.message}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            } </Swiper>
    )
};

export default TestimonialSlider;