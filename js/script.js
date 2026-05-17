let elHour = document.querySelector(".hour");
let elMinute = document.querySelector(".minute");
let elSecond = document.querySelector(".second");

setInterval(() => {
  let time = new Date();

  let hour = String(time.getHours()).padStart(2, "0");
  let minute = String(time.getMinutes()).padStart(2, "0");
  let second = String(time.getSeconds()).padStart(2, "0");

  elHour.innerHTML = hour;
  elMinute.innerHTML = minute;
  elSecond.innerHTML = second;
}, 1000);
