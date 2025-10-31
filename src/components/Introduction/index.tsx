import Image from "next/image";
import * as React from "react";
import "~/components/Introduction/styles.scss";

export interface IIntroductionProps {
  src: string;
  name: string;
  desc: React.ReactNode;
}

export default function Introduction({ src, name, desc }: IIntroductionProps) {
  return (
    <div className="px-[40px] max-md:px-[20px] flex flex-col w-full">
      <div className="pt-[40px] pb-[20px] pl-[7%]">
        <div className="img-hanger md:!w-[40svh]">
          <Image
            src={src}
            width={600}
            height={800}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="font-merienda font-extrabold linear text-white rounded-[10px] p-[10px] flex-1 mb-[10px]">
        <h2 className="mb-[20px] text-[4svh] tracking-[1px]">{name}</h2>
        <p className="text-[15px] md:text-[2svh] font-normal">{desc}</p>
      </div>
    </div>
  );
}
