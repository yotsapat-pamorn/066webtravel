
const track = document.getElementById("slideTrack");
const dots = document.getElementById("dots");

const total = track.children.length;

let index = 0;

// ระยะเวลาที่หยุดแสดงรูปภาพ
const delay = 3000;

// ระยะเวลาในการเลื่อนรูปภาพ
const speed = 500;

// คัดลอกรูปแรกไว้ท้ายสุด เพื่อให้วนซ้ำได้
const firstImage = track.children[0].cloneNode(true);

firstImage.alt = "";
firstImage.setAttribute("aria-hidden", "true");

track.appendChild(firstImage);

// สร้างจุดตามจำนวนรูปภาพ
for (let i = 0; i < total; i++) {

    const dot = document.createElement("span");

    dot.className = "dot";

    if (i === 0) {
        dot.classList.add("active");
    }

    dots.appendChild(dot);
}

// อัปเดตจุดแสดงตำแหน่ง
function updateDots() {

    document.querySelectorAll(".dot").forEach((dot, i) => {

        dot.classList.toggle("active", i === index % total);

    });
}

// ฟังก์ชันเลื่อนไปรูปถัดไป
function nextSlide() {

    index++;

    track.style.transition = `transform ${speed}ms ease-in-out`;

    track.style.transform = `translateX(-${index * 100}%)`;

    updateDots();

    setTimeout(() => {

        // เมื่อถึงรูปสุดท้าย ให้วนกลับรูปแรก
        if (index === total) {

            track.style.transition = "none";

            index = 0;

            track.style.transform = "translateX(0)";

        }

        // หยุดแสดงภาพก่อนเลื่อนต่อ
        setTimeout(nextSlide, delay);

    }, speed);
}

// เริ่มทำงานอัตโนมัติ
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    setTimeout(nextSlide, delay);

}
