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
import { Pagination, FreeMode } from "swiper";


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
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="h-[240px] sm:h-[340px">
        {
            serviceData.map((item, index) => {
                return <SwiperSlide key={index}>
                    <div>
                        { /* icon */}
                        <div className='text-accent text-3xl mb-4'>{item.icon}</div>
                        {/* title & description */}
                        <div className='h3'>{item.title}</div>
                        <p>{item.description}</p>
                    </div>
                </SwiperSlide>
            })
        } </Swiper>;

};

export default ServiceSlider;
