import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Testimonial() {
  const testimonialData = [
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
    {
      name: "SomeOne Famous",
      job: "Creative Designer",
      message:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consequuntur eius hic quod doloremque ipsa unde adipisci, isteexpedita, eos optio corporis dolorum recusandae atque doloribusquasi, vitae aut laboriosam! Nemo?",
      photourl: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
  ];

  const CardLoaders = () => {
    return testimonialData.map((onecard, index) => (
      <SwiperSlide>
        <div className="one-testimonial">
          <i
            className="fa-solid fa-quote-right"
            style={{ color: "#ffffff" }}
          ></i>
          <p>{onecard.message}</p>
          <div className="whowrotethat">
            <img src={onecard.photourl} alt="" />
            <span>
              <h3>{onecard.name}</h3>
              <p>{onecard.job}</p>
            </span>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="Testimonial">
      <h1 className="heading">Testimonials</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {CardLoaders()}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Testimonial;
