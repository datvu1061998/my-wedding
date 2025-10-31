import * as React from "react";
import "./styles.scss";

export default function Map({ check = false }) {
  return (
    <div className="p-[20px] md:p-[40px] w-full flex flex-col gap-[30px]">
      <div className="">
        <h2 className="font-merienda text-[5svh] md:text-[8svh] font-bold text-shadow-lg text-shadow-[#0003]">
          Nơi tổ chức tiệc
        </h2>
        {!check && (
          <>
            <p className="text-[15px] md:text-[2svh] text-shadow-lg font-merienda text-shadow-[#0003]">
              <span className="bg-[#221e1e] leading-[160%] px-[10px]">
                Đối diện trường tiểu học Nguyễn Trung Trực
              </span>
            </p>
            <p className="text-[15px] md:text-[2svh] text-shadow-lg font-merienda text-shadow-[#0003]">
              <span className="bg-[#221e1e] leading-[160%] px-[10px]">
                (Tà lài - Tân Phú - Đồng Nai)
              </span>
            </p>
          </>
        )}
        <p className="text-[15px] md:text-[2svh] text-shadow-lg font-merienda text-shadow-[#0003]">
          <span className="bg-[#221e1e] italic leading-[160%] px-[10px]">
            Chỗ quen thuộc, dễ tìm, đỗ xe chill chill – tới là thấy tiệc luôn!
            🚗💃
          </span>
        </p>
      </div>
      {check ? (
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8050306468604!2d106.16274317638566!3d10.749504559687033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310add8ab13b5b91%3A0x138b7f4f0243ca28!2zU-G7rWEgeGUgTWluaCBU4bqlbg!5e0!3m2!1svi!2s!4v1761906550788!5m2!1svi!2s"
          style={{ border: 0 }}
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.46281930470946!2d107.37911398625658!3d11.36778695156368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31747caeb61bed2b%3A0x915960a0b57ff3fd!2zVHLGsOG7nW5nIFRp4buDdSBo4buNYyBOZ3V54buFbiBUcnVuZyBUcuG7sWM!5e0!3m2!1svi!2s!4v1761845488319!5m2!1svi!2s"
          style={{ border: 0 }}
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
}
