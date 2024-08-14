import Card from "./Card";
import Caseconst from "./Caseconst"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Style.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function createCard(Cases) {
  return (
    <Card
      key={Cases.id}
      logo={Cases.logo}
      companyname={Cases.companyname}
      CaseStudy= {Cases.CaseStudy}
      butt={Cases.button}
      paragraph={Cases.paragraph}
      industryname={Cases.industryname}
      img1={Cases.img1}
      img2={Cases.img2}
      img3={Cases.img3}
      img4={Cases.img4}
    />
  );
}

function CaseStudies() {
  console.log(Caseconst);

  return (
    <div className="mt-20 mb-20">
    <div className="mb-10 mt-10">
    <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-left text-head2 text-center">LATEST PROJECT</h2>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center">Our Latest Case Studies</h1>
    </div>
    <Swiper
      
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
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
    >
      {Caseconst.map((Cases) => (
        <SwiperSlide key={Cases.id} className='h-96 w-96'>
          <div className="App">
            {createCard(Cases)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default CaseStudies;
