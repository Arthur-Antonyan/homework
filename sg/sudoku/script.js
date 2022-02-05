import { addRandom } from './addRandom.js';
import { checkGrid, checkRowsArr, checkGridArr, checkColumnsArr } from './checkFunctions.js';
import { start, pause, reset } from './stopwatch.js';
export let answers = [];
let div = document.querySelectorAll('.board>div');
let startGamebtn = document.querySelector('.change');
let check = document.querySelector('.check');

let modalOk = document.querySelector('.modalBtn');
const reg = /\d\d\:\d\d\:\d\d/;

for (let i = 0; i < div.length; i++) {
  div[i].classList.add(i + 1);
}

startGamebtn.addEventListener('click', () => {
  for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = '';
  }
});
startGamebtn.addEventListener('click', addRandom);

let matrix = [];
let arr = [];

function split(arr, len) {
  let i, n;
  (i = 0), (n = arr.length);
  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}

check.addEventListener('click', () => {
  for (let i = 0; i <= 8; i++) {
    arr.push(parseInt(div[i].innerHTML));
  }
  split(arr, 3);
});

check.addEventListener('click', () => {
  checkGrid(matrix);
});

let modal = document.querySelector('.modal');
let span = document.querySelector('.modal>span');
let res = [];
let name = document.querySelector('#name');
let scoreNames = document.querySelectorAll('.name>li');
let scoreSecs = document.querySelectorAll('.score>li');

check.addEventListener('click', () => {
  modal.style.visibility = 'visible';

  if (answers[0] != false && answers[1] != false && answers[2] != false) {
    span.innerHTML = 'win  Your score is ' + document.getElementById('display').innerHTML;
  } else span.innerHTML = 'fail your score is ' + document.getElementById('display').innerHTML;
});

modal.onclick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    modal.style.visibility = 'hidden';
  } else modal.style.visibility = 'visible';
};

startGamebtn.addEventListener('click', () => {
  matrix.length = 0;
  arr.length = 0;
  checkColumnsArr.length = 0;
  checkRowsArr.length = 0;
  checkGridArr.length = 0;
  answers.length = 0;
});

startGamebtn.addEventListener('click', start);
check.addEventListener('click', pause);
modalOk.addEventListener('click', reset);

modalOk.addEventListener('click', () => {
  if (answers[0] != false && answers[1] != false && answers[2] != false) {
    let arr4 = span.innerHTML
      .match(reg)
      .toString()
      .split(':')
      .map((item) => parseInt(item));

    arr4[0] *= 6000;
    arr4[1] *= 100;
    res.push([name.value, span.innerHTML, arr4.reduce((acc, item) => acc + item)]);
    let arg2 = res.sort((a, b) => a[2] - b[2]);
    console.log(arg2);
    for (let i = 0; i < scoreNames.length; i++) {
      scoreNames[i].innerHTML = arg2[i][0];
      scoreSecs[i].innerHTML = arg2[i][1].match(reg).toString();
    }
  }
});
