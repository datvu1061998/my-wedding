import React from "react";
import "~/components/book/styles.scss";

const lIST = [
  ["/imgs/book-3.webp", "/imgs/book-4.webp"],
  ["/imgs/book-5.webp", "/imgs/book-6.webp"],
  ["/imgs/book-7.webp", "/imgs/book-8.webp"],
  ["/imgs/book-1.webp", "/imgs/book-2.webp"]
];

function Book() {
  return (
    <div className="mb-[60px]">
      <div className="book w-[200px] md:w-[25svh] aspect-3/4">
        <div className="cover">
          <img src={"/imgs/book-2.webp"} />
          <img src={"/imgs/book-1.webp"} />
        </div>
        {lIST.map((l, index) => {
          return (
            <div
              key={index}
              style={{ zIndex: lIST.length - index }}
              className={`sheet ${index === 0 ? "first" : ""}`}
            >
              {l.map((src, index) => (
                <img key={index} src={src} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Book;
