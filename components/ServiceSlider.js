// import swiper reaxt components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { Autoplay, Pagination, FreeMode } from "swiper";


// service data
export const serviceData = [
    {
        icon: <RxCrop />,
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxPencil2 />,
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxDesktop />,
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxReader />,
        title: 'Copywriting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <RxRocket />,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const ServiceSlider = () => {
    return <Swiper breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 30,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }}
        freeMode={true}
        autoplay={{
            delay: 4500,
            disableOnInteraction: true,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="h-[240px] sm:h-[340px]">
        {
            serviceData.map((item, index) => {
                return <SwiperSlide key={index}>
                    <div className='bg-black/10 backdrop-blur-sm h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(39,42,88,0.3)] transition-all duration-200'>
                        { /* icon */}
                        <div className='text-accent text-4xl mb-4'>{item.icon}</div>
                        {/* title & description */}
                        <div className='mb-8'>
                            <div className='mb-4 text-lg'>{item.title}</div>
                            <p className='max-w-[400px] leading-normal'>{item.description}</p>
                        </div>
                        {/* Arrow */}
                        <div className='text-3xl'>
                            <RxArrowTopRight className='group-hover:rotate-45 transition-all duration-300 group-hover:text-accent' />
                        </div>
                    </div>
                </SwiperSlide>
            })
        } </Swiper>;

};

export default ServiceSlider;
