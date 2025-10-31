import * as React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="text-center text-[3svh] md:text-[4svh] font-bold text-shadow-lg text-shadow-[#0003] px-[40px] pt-[15%]">
        <span className="bg-[#221e1e] italic leading-[160%] px-[10px]">
          Sự hiện diện của bạn
        </span>
        <br />{" "}
        <span className="bg-[#221e1e] italic leading-[160%] px-[10px]">
          là niềm hạnh phúc
        </span>
        <br />
        <span className="bg-[#221e1e] italic leading-[160%] px-[10px]">
          của chúng mình
        </span>
      </div>
      <div className="mt-[40px] gb font-the-nautigal font-bold text-[12svh]">
        Hẹn gặp nhé!
      </div>
      <img className="max-w-[700px] w-full mx-auto" src="imgs/footer.webp" />
    </div>
  );
}
