import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import "./Slider.scss";
import Slide from "./Slide";
import slideOne from "../../UI/sliderImages/slide_1.jpg";
import slideTwo from "../../UI/sliderImages/slide_2.jpg";
import slideThree from "../../UI/sliderImages/slide_3.jpg";
import slideFour from "../../UI/sliderImages/slide_4.jpg";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const content = [
  {
    head: 'Бесплатная парковка',
    text:
      `Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.`,
    img: slideOne,
    color: 'default',
  },
  {
    head: 'Страховка',
    text: 'Полная страховка автомобиля',
    img: slideTwo,
    color: 'aqua',
  },
  {
    head: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    img: slideThree,
    color: 'red',
  },
  {
    head: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    img: slideFour,
    color: 'violet',
  },
];
export default function Slider() {
  const sliderContent = content.map((el, i) => (
    <SwiperSlide key={el.text.length * i}>
      <Slide head={el.head} text={el.text} img={el.img} key={i} color={el.color} />
    </SwiperSlide>
  ));
  return (
    <Swiper loop={true} slidesPerView={1} navigation pagination={{ clickable: true }}>
      {sliderContent}
    </Swiper>
  );
}