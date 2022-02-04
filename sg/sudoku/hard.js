function add(div) {
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
const checkColumnsArr = [];
function checkColumns(matrix) {
  let temp, z;
  for (let i = 0; i < matrix.length; i++) {
    checkColumnsArr.splice(0, z);
    for (let j = 1; j < matrix[i].length; j++) {
      temp = matrix[0][i];
      checkColumnsArr.push(matrix[j][i]);
      z = matrix[j].length - 1;
    }
    const x = new Set(checkColumnsArr);
    let y = temp;
    for (let props of x) {
      if (props === y || x.size != z) {
        console.log(false);
        break;
      }
    }
  }
}

// const checkRowsArr = [];
// function checkRows(matrix) {
//   let temp, z;
//   for (let i = 0; i < matrix.length; i++) {
//     checkRowsArr.splice(0, z);
//     for (let j = 1; j < matrix[i].length; j++) {
//       temp = matrix[i][0];
//       checkRowsArr.push(matrix[i][j]);
//       z = matrix[i].length - 1;
//     }
//     const x = new Set(checkRowsArr);
//     let y = temp;
//     for (let props of x) {
//       if (props === y || x.size != z) {
//         console.log(false);
//         break;
//       }
//     }
//   }
// }
const checkGridArr = [];
function checkGrid(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      checkGridArr.push(matrix[i][j]);
    }
    let x = new Set(checkGridArr);

    for (let props of x) {
      if (x.size != checkGridArr.length) {
        answers.push(false);
        break;
      }
    }
  }
}

let hard = document.querySelector('.hard');

for (let i = 0; i < 9; i++) {
  let div1 = document.createElement('div');
  div1.classList.add('grid');
  hard.appendChild(div1);
}

let inner = document.querySelectorAll('.hard>div');

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let div2 = document.createElement('div');
    inner[j].appendChild(div2);
  }
}

let grid = document.querySelectorAll('.grid');

for (let i = 0; i < grid.length; i++) {
  add(grid[i].children);
}

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
const checkRowsArr = [];
let answers = [];
function checkRows(matrix) {
  let z;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArr.splice(0, z);
    for (let j = 0; j < matrix[i].length; j++) {
      if (!Number.isNaN(matrix[i][j])) {
        checkRowsArr.push(matrix[i][j]);
      }
      z = checkRowsArr.length;
    }
    console.log(checkRowsArr);
    const x = new Set(checkRowsArr);
    if (x.size != z) {
      console.log(false);
    }
  }
}
let checkBtn = document.querySelector('.checkHard');

// check.addEventListener('click', () => {
for (let i = 0; i <= 8; i++) {
  for (let j = 0; j <= 8; j++) {
    // if (grid[i].children[j].innerHTML != '') {
    arr.push(parseInt(grid[i].children[j].innerHTML));
    // }
  }
}
split(arr, 3);
// console.log(grid[1].children[1].innerHTML);
let newmatrix = [];
let newarr = [];
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
// while (answers[0] === false) {
checkBtn.addEventListener('click', () => {
  checkRows(newmatrix2);
});
checkBtn.addEventListener('click', () => {
  newmatrix2.length = 0;
  // arr.length = 0;
  // checkColumnsArr.length = 0;
  checkRowsArr.length = 0;
  // checkGridArr.length = 0;
  // answers.length = 0;
});

// let bg = [8, 1, NaN, NaN, NaN, 8, NaN, NaN, NaN];
// let df = new Set(bg);
// console.log(df);

// let matrix3 = [];    //matrix without NANs
// for (let i = 0; i < newmatrix2.length; i++) {
//   matrix3.push(Array.from(new Set(newmatrix2[i].filter((item) => !Number.isNaN(item)))));
// }
// let matrix4 = matrix3.flat(); //matrix flattened
// console.log(matrix4);
// for (let i = 0; i < grid.length; i++) {
//   //   if (grid[i].children[i].innerHTML != '') {
//   // grid[i].children[i].innerHTML = matrix4[i];
//   console.log(grid[i].children[i].innerHTML);
//   //   }
// }
// console.log(matrix3);
