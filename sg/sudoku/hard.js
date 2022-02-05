// import { addRandom } from './addRandom.js';
import { checkGridFilled, answersFilled } from './checkFunctionsFilled.js';
let checkBtn = document.querySelector('.checkHard');
let randomBtn = document.querySelector('.addRandom');
function addRandom(div) {
  let arr = [];
  let arr2 = [];
  for (let i = div.length; i > 0; i--) {
    arr.push(Math.floor(Math.random() * div.length));
  }
  for (let i = 0; i < 3; i++) {
    div[arr[i]].innerHTML = Math.floor(Math.random() * div.length + 1);
  }
  for (let i = 0; i < div.length; i++) {
    if (div[i].innerHTML !== '') {
      div[i].setAttribute('contentEditable', 'false');
    } else div[i].setAttribute('contentEditable', 'true');
  }
  for (let i = 0; i < div.length; i++) {
    if (div[i].innerHTML !== '') {
      arr2.push(div[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (i !== j && parseInt(arr2[i].innerHTML) === parseInt(arr2[j].innerHTML)) {
        arr2[j].innerHTML = Math.floor(Math.random() * div.length + 1);
        break;
      }
    }
  }
}

///creating 9 divs
let hard = document.querySelector('.hard');
for (let i = 0; i < 9; i++) {
  let div1 = document.createElement('div');
  div1.classList.add('grid');
  hard.appendChild(div1);
}
// creating 81 divs
let inner = document.querySelectorAll('.hard>div');
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let div2 = document.createElement('div');
    inner[j].appendChild(div2);
  }
}
//filling grid with numbers
let grid = document.querySelectorAll('.grid');
function random() {
  arr.length = 0;
  matrix.length = 0;
  checkRowsArr.length = 0;
  newmatrix.length = 0;
  newarr.length = 0;
  answers.length = 0;

  checkColumnsArr.length = 0;

  for (let i = 0; i < grid.length; i++) {
    addRandom(grid[i].children);
  }
}

//   //empting grid cells
checkBtn.addEventListener('click', () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i].children[j].innerHTML = '';
    }
  }
});
////////////////////////////////////////////////
checkBtn.addEventListener('click', random);

let matrix = [];
let arr = [];
// filing array  with gird numbers
function fillArray(arr) {
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      arr.push(parseInt(grid[i].children[j].innerHTML));
    }
  }
  return arr;
}

checkBtn.addEventListener('click', () => {
  fillArray(arr);
});

////filing matrix  with gird numbers from array

function split(arr, len) {
  let i, n;

  (i = 0), (n = arr.length);
  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}

checkBtn.addEventListener('click', () => {
  split(arr, 3);
});
//checking dublicates in rows
const checkRowsArr = [];
const checkColumnsArr = [];
let answers = [];
function checkRows(matrix) {
  let z;
  let z1;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArr.splice(0, z);
    checkColumnsArr.splice(0, z1);
    for (let j = 0; j < matrix[i].length; j++) {
      if (!Number.isNaN(matrix[i][j])) {
        checkRowsArr.push(matrix[i][j]);
      }
      if (!Number.isNaN(matrix[j][i])) {
        checkColumnsArr.push(matrix[j][i]);
      }
      z = checkRowsArr.length;
      z1 = checkColumnsArr.length;
    }

    const x = new Set(checkRowsArr);
    const y = new Set(checkColumnsArr);
    if (y.size != z1 || x.size != z) {
      answers.push(false);
    }
  }
}
////creating new matrix from random elements
let newmatrix = [];
let newarr = [];
function createMatrix() {
  for (let i = 0; i < matrix.length; i++) {
    newarr = matrix[i].concat(matrix[i + 3], matrix[i + 6]);
    newmatrix.push(newarr);
  }
  let newmatrix2 = [];
  newmatrix2.push(
    newmatrix[0],
    newmatrix[1],
    newmatrix[2],
    newmatrix[9],
    newmatrix[10],
    newmatrix[11],
    newmatrix[18],
    newmatrix[19],
    newmatrix[20]
  );
  return newmatrix2;
}

checkBtn.addEventListener('click', () => {
  checkRows(createMatrix());
});

window.onmousemove = function () {
  while (answers[0] == false) {
    checkBtn.click();
  }
};

function zero() {
  arr.length = 0;
  matrix.length = 0;
  answers.length = 0;
  newmatrix.length = 0;
  newarr.length = 0;
}
randomBtn.addEventListener('click', () => {
  zero();
});

randomBtn.addEventListener('click', () => {
  fillArray(arr);
});
randomBtn.addEventListener('click', () => {
  split(arr, 3);
});

randomBtn.addEventListener('click', () => {
  console.log(createMatrix());
});
randomBtn.addEventListener('click', () => {
  checkGridFilled(createMatrix());
  //   console.log(answersFilled);
});
