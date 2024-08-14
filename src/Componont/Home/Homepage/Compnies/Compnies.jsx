import Cards from "./Cards";
import CompaniesConst from "./CompaniesConst.jsx"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function createCard(Company) {
  return (
    <Cards
      key={Company.id} 
      img={Company.img}
    />
  );
}

function Compnies() {
  console.log(CompaniesConst);

  return (
    <div className="mt-28">
      <div className=" mt-20">
      <center><h1 className="max-h-10 max-w-4xl sm:text-lg md:text-3xl font-black text-center text-head2 mt-3"> 30+ Companies & Organisations TRUST EditQuasar</h1></center>
      </div>
      <Swiper
        slidesPerView={2} 
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {CompaniesConst.map((Company) => (
          <SwiperSlide key={Company.id} className='  h-60  mt-24 mb-20 ml-10'>
            <div className="App">
              {createCard(Company)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Compnies;