setTimeout(() => {

   setInterval(() => {
      const bookActive = document.querySelector(".book .sheet.active");

      if (bookActive) {
         const last = document.querySelector(".book .sheet:last-child");

         document.querySelector(".book .cover").innerHTML = bookActive.innerHTML;
         bookActive.classList.remove("active");
         bookActive.style.zIndex = -1;
         last.after(bookActive);

      }

      const books = document.querySelectorAll(".book .sheet");
      books[0].style.zIndex = 1001;
      books[0].classList.add("active");

      books.forEach((b, index) => {
         if (b.classList.contains("active")) return;
         b.style.zIndex = books.length - index
      });
   }, 3000)
}, 3000)

function swipeRight() {
   let items = document.querySelectorAll(".main-box .item");
   document.querySelector(".main-box").prepend(items[items.length - 1])
}

function swipeLeft() {
   let items = document.querySelectorAll(".main-box .item");
   document.querySelector(".main-box").appendChild(items[0])
}

let swiperInterval = setInterval(() => {
   swipeRight()
}, 2000);

const mainBox = document.querySelector(".main-box");
mainBox.addEventListener("mouseover", () => {
   clearInterval(swiperInterval);
})
mainBox.addEventListener("mouseout", () => {
   swiperInterval = setInterval(() => {
      swipeRight()
   }, 2000);
})

const element = document.querySelector('.box');
let isDragging = false;
let startX = 0;
let direction = "";

// Sự kiện đè chuột: Bắt đầu kéo
element.addEventListener('mousedown', (e) => {
   isDragging = true;
   startX = e.clientX;  // Lưu vị trí X ban đầu
});

// Sự kiện di chuyển chuột: Phát hiện hướng
element.addEventListener('mousemove', (e) => {
   if (!isDragging) return;

   const currentX = e.clientX;
   const deltaX = currentX - startX;

   if (deltaX > 0) {  // Ngưỡng để tránh nhiễu (vuốt phải ít nhất 10px)
      direction = 'right';

   } else if (deltaX < 0) {  // Vuốt trái
      direction = 'left';
   }
});

// Sự kiện thả chuột: Kết thúc kéo
element.addEventListener('mouseup', () => {
   if (isDragging) {
      isDragging = false;
      if (direction === "right") {
         swipeRight();
      }
      if (direction === "left") {
         swipeLeft();
      }
   }
});
element.addEventListener("mouseout", () => {
   isDragging = false;
})