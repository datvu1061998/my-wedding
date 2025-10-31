import * as React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperSlider() {
  return (
    <div className="flex-1 relative flex flex-col justify-between">
      <div className="p-[20px] md:p-[40px]">
        <h2
          style={{ textShadow: "2px 2px 2px #0009" }}
          className="font-merienda text-[6svh] md:text-[8svh] font-bold text-shadow-[#0003]"
        >
          Lễ cưới
        </h2>
        <p className="text-[15px]  md:text-[2svh] text-shadow-lg font-merienda text-shadow-[#0003]">
          <span className="bg-[#221e1e] leading-[160%] px-[10px]">
            Chào mừng đến với &apos;chapter mới&apos; của chúng mình! Đám cưới
            đã &apos;upgrade&apos; thành hiện thực tại Nhà thờ Thuận Phát – nơi
            tình yêu chính thức &apos;log in&apos; vĩnh cửu. Swipe qua để xem
            ảnh &apos;hot&apos; nhất nhé! 💍✨
          </span>
        </p>
        <p className="text-[20px] md:text-[30px] text-shadow-lg font-merienda text-shadow-[#0003] ">
          <span className="bg-[#221e1e] leading-[160%] px-[10px]">
            (06-09-2025)
          </span>
        </p>
      </div>
      <div className="box my-auto">
        <div className="main-box md:!w-[30svh]">
          <div className="item">
            <img src="/imgs/church-1.webp" />
          </div>
          <div className="item">
            <img src="/imgs/church-2.webp" />
          </div>
          <div className="item">
            <img src="/imgs/church-3.webp" />
          </div>
          <div className="item">
            <img src="/imgs/church-4.webp" />
          </div>
          <div className="item">
            <img src="/imgs/church-5.webp" />
          </div>
          <div className="item">
            <img src="/imgs/church-6.webp" />
          </div>
          <div className="item">
            <img src="/imgs/church-7.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
