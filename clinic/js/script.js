
const img_src  = [
  "/hospital/img/s1.jpg",
  "/hospital/img/s2.jpg",
  "/hospital/img/m3_back.jpg",
  "/hospital/img/m2.jpg"
];

let num = -1;

function slide_time() {
  if (num === 3) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 1300);