import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import ReviewData from "./ReviewData";
import { motion, useScroll, useTransform } from "framer-motion";
import Testimoniallogo from "../../../../assets/Homepage/testimonial.png"

function createCard(Reviews) {
  return <Card key={Reviews.id} review={Reviews.review} name={Reviews.name} />;
}

function Review() {
  console.log(ReviewData);

  const variants = {
    initial: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildern: 1,
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-3xl border-2 border-zinc p-5"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
    <center><div><img className="h-24" src={Testimoniallogo} /></div></center>
      <Swiper
        slidesPerView={1} // default value
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {ReviewData.map((Reviews) => (
          <SwiperSlide className="-mt-10" key={Reviews.id}>
            <div className="">{createCard(Reviews)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default Review;
