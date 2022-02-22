import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './style.scss';
import Slide from './Slide';
import { contentWithGeneratedId } from './constant';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider() {
  // eslint-disable-next-line max-len
  const sliderContent = contentWithGeneratedId.map(({head, text, img, color, id}) => (
    <SwiperSlide key={id}>
      <Slide
        head={head}
        text={text}
        img={img}
        key={id}
        color={color}
      />
    </SwiperSlide>
  ));
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {sliderContent}
    </Swiper>
  );
}
