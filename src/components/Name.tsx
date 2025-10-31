"use client";
import { useSearchParams } from "next/navigation";

import * as React from "react";

export default function Name() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return name ? (
    <div
      style={{ animationDelay: `2.5s`, textShadow: "2px 2px 7px #000" }}
      className="font-the-nautigal right-to-left text-[40px] md:text-[8svh] text-shadow-lg font-[700]"
    >
      <span className="text-[40px]">
        Trân trọng kính mời: {name.length > 14 && <br />}
      </span>{" "}
      {name.replaceAll("-", " ")}
    </div>
  ) : (
    ""
  );
}
