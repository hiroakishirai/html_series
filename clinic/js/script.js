// スライド
'use strict';

const pics_src = 
["https://hiroakishirai.github.io/port/clinic/img/s1.jpg",
"https://hiroakishirai.github.io/port/clinic/img/s2.jpg",
"https://hiroakishirai.github.io/port/clinic/img/s3.jpg",
"https://hiroakishirai.github.io/port/clinic/img/s4.jpg"];

let num = -1;
 
 
function slideshow_timer(){
  if (num === 3){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slide_time, 1300);
