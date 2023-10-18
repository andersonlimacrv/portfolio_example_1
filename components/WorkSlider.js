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

const WorkSlider = () => {
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
        modules={[Pagination, Autoplay]}
        className="h-[280px] sm:h-[480px]">
        {
            workSlider.slides.map((slide, index) => {
                return <SwiperSlide key={index}>
                    slide
                </SwiperSlide>
            })
        } </Swiper>;

};

export default WorkSlider;