// スライド
'use strict';

const pics_src = 
["/Users/h.shirai/Desktop/port/hospital/img/s1.jpg",
"/Users/h.shirai/Desktop/port/hospital/img/s2.jpg",
"/Users/h.shirai/Desktop/port/hospital/img/s3.jpg",
"/Users/h.shirai/Desktop/port/hospital/img/s4.jpg"];

let num = -1;
 
function slideTime() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideTime, 3000);
