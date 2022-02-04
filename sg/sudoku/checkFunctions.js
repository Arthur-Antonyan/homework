// import { answers } from './script';
// export let matrix = [];
// export let arr = [];

// export function checkColumns(matrix) {
//   let temp, z;
//   for (let i = 0; i < matrix.length; i++) {
//     checkColumnsArr.splice(0, z);
//     for (let j = 1; j < matrix[i].length; j++) {
//       temp = matrix[0][i];
//       checkColumnsArr.push(matrix[j][i]);
//       z = matrix[j].length - 1;
//     }
//     const x = new Set(checkColumnsArr);
//     let y = temp;
//     for (let props of x) {
//       if (props === y || x.size != z) {
//         answers.push(false);
//         break;
//       }
//     }
//   }
// }

// let matrix = [[1, 2, 3], [(4, 5, 6)], [(7, 8, 9)]];
// const checkColumnsArr = [];
// const checkRowsArr = [];
// function checkRows(matrix) {
//   let temp1, temp2, z;
//   for (let i = 0; i < matrix.length; i++) {
//     checkRowsArr.splice(0, z);
//     for (let j = 1; j < matrix[i].length; j++) {
//       temp1 = matrix[i][0];
//       temp2 = matrix[0][i];
//       checkRowsArr.push(matrix[i][j]);
//       checkColumnsArr.push(matrix[j][i]);
//       z = matrix[i].length - 1;
//     }
//     const x = new Set(checkRowsArr);
//     const q = new Set(checkColumnsArr);
//     let y = temp1;
//     let h = temp2;
//     for (let props of x) {
//       if (props === y || x.size != z) {
//         // answers.push(false);
//         console.log(false);
//         break;
//       }
//     }
//     for (let props of q) {
//       if (props === h || q.size != z) {
//         //   answers.push(false);
//         console.log(false);
//         break;
//       }
//     }
//   }
// }
// checkRows(matrix);
// const checkGridArr = [];
// export function checkGrid(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       checkGridArr.push(matrix[i][j]);
//     }
//     let x = new Set(checkGridArr);

//     for (let props of x) {
//       if (x.size != checkGridArr.length) {
//         answers.push(false);
//         break;
//       }
//     }
//   }
// }
