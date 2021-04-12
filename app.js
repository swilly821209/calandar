let Year = document.querySelector('#year');
let Month = document.querySelector('#month');
let lastYear = document.querySelector('#lastYear');
let nextYear = document.querySelector('#nextYear');
let lastMonth = document.querySelector('#lastMonth');
let nextMonth = document.querySelector('#nextMonth');

let newDate = new Date();

let nowYear = newDate.getFullYear();
Year.textContent = nowYear;

let nowMonth = newDate.getMonth();
let month = nowMonth + 1;
Month.textContent = month;


let whichMonth = new Date(nowYear, nowMonth);
let firstDayWeek = whichMonth.getDay();

lastYear.addEventListener('click', toLastYear);
nextYear.addEventListener('click', toNextYear);

function manyDay(year, month) {
  let d = new Date(year, month, 1, 0, 0, 0);
  console.log(d);
  let lastDay = new Date(d - 1000);
  return lastDay.getDate();
}

function enterdate(firstDayWeek, dayNum) {
  for (let j = 1; j <= 42; j++) {
    let clear = document.querySelector(`.item${j}`);
    clear.textContent = '';
  }
  firstDayWeek++;
  let itemNum = firstDayWeek + dayNum;
  for (let i = firstDayWeek; i < itemNum; i++) {
    let item = document.querySelector(`.item${i}`);
    item.textContent = i - firstDayWeek + 1;
  }
}
enterdate(firstDayWeek, manyDay(nowYear, month));
function toLastYear() {
  year.textContent--;
  let nowYear = year.textContent;
  let nowMonth = Month.textContent;
  let daynum = manyDay(nowYear, nowMonth);
  nowMonth--;
  let newFirstWeek = new Date(nowYear, nowMonth).getDay();
  enterdate(newFirstWeek, daynum);
}
function toNextYear() {
  Year.textContent++;
  let nowYear = year.textContent;
  let nowMonth = Month.textContent;
  let daynum = manyDay(nowYear, nowMonth);
  nowMonth--;
  let newFirstWeek = new Date(nowYear, nowMonth).getDay();
  enterdate(newFirstWeek, daynum);
}

lastMonth.addEventListener('click', toLastMonth);
nextMonth.addEventListener('click', toNextMonth);

function toLastMonth() {
  Month.textContent--;
  let nowYear = year.textContent;
  let nowMonth = Month.textContent;
  let daynum = manyDay(nowYear, nowMonth);
  nowMonth--;
  let newFirstWeek = new Date(nowYear, nowMonth).getDay();
  enterdate(newFirstWeek, daynum);
}

function toNextMonth() {
  Month.textContent++;
  let nowYear = year.textContent;
  let nowMonth = Month.textContent;
  let daynum = manyDay(nowYear, nowMonth);
  nowMonth--;
  let newFirstWeek = new Date(nowYear, nowMonth).getDay();
  enterdate(newFirstWeek, daynum);
}
