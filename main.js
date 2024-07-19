// Вычислить сумму элементов в двумерном массиве
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sum = 0;

for(let i = 0; i < array.length; i++) {
    for(let k = 0; k < array[i].length; k++) {
        sum += array[i][k];
    }
}
console.log(sum);

// //  Поиск элемента в двумерном массиве и его индекса
// // У тебя есть двумерный массив чисел. Напиши функцию,
// // которая будет искать заданное значение в этом массиве 
// // и возвращать объект с координатами (индексами) этого элемента, если он найден, или сообщение о том, что элемент не найден.

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// let a = 1;
// let a2 = 2;
// let a3 = 3;
// let a4 = 4;
// let a5 = 5;
// let a6 = 6;
// function findElement(){
//   for(let i = 0; i < arr.length; i++) {
//     for(let k = 0; k < arr[i].length; k++) {
//      if(arr[i][k] == a) {
//       return console.log(`Array element found`);
//     } else if(arr[i][k] == a2) {
//      return console.log(`Array element found`);
//      } else if(arr[i][k] == a3) {
//       return console.log(`Array element found`);
//      } else if(arr[i][k] == a4) {
//       return console.log(`Array element found`);
//      } else if(arr[i][k] == a5) {
//       return console.log(`Array element found`); 
//      } else if(arr[i][k] == a6) {
//       return console.log(`Array element found`);
//      } else {
//       console.log(`Array element not found`);
//      }
//     }
//   }
// }
// findElement();
let arr = [
  [1, 2, 3],
  [4, 5, 6]
]
let elementsToFind = [1, 2, 3, 4, 5, 6];

function findElements() {
  const results = [];

  for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k < arr[i].length; k++) {
      for(const element of elementsToFind) // внутренний цикл for of перебирают массив elementsToFind
        {
        if (arr[i][k] === element) {
          results.push({row: i, column: k}); // добавить коориднаты в results при совпадении 
          break;
        }
      }
    }
  }

  if (results.length === 0) {
    console.log('Array elements not found');
  } else {
    console.log('Found elements:')
    console.table(results);
  }
}
findElements();

// Перемещение нулей в конец массива: Напиши
// функцию, которая принимает массив чисел и
// перемещает все нули в конец массива, сохраняя
// порядок остальных элементов. Например, для
// массива [0,1,0,3,12] результатом будет
// [1,3,12,0,0]

let nus = [0, 1, 0, 3, 12];
let result = [];

// Перебор элементов массива nus
for (let i = 0; i < nus.length; i++) {
  // Проверка на элемент, не равный 0
  if (nus[i] !== 0) {
    // Добавление элемента в массив result
    result.push(nus[i]);
  }
}

// Добавление нулей в конец массива result
for (let i = 0; i < nus.length; i++) {
  if (nus[i] === 0) {
    result.push(0);
  }
}

console.log(result);

// Поиск пары с заданной суммой: Напиши функцию,
// которая принимает массив чисел и число k, и
// возвращает все пары элементов, сумма которых
// равна k. Например, для массива [1, 5, 7, -1, 5] и k
// = 6 результатом будет [(1, 5), (7, -1)].

let n = [1, 5, 7, -1, 5];
let m = 6;
function findPairs(n, m) {
  let pairs = [];

  for(i = 0; i < n.length; i++){
    for(let j = i + 1; j < n.length; j++) {
      if([n[i] + n[j] === m]) {
        pairs.push([n[i], n[j]]);
      }
    }
  }
  return pairs;
}
let pairs = findPairs(n, m);
console.log(pairs);

// Дан массив [1, 2, 3, 4, 5]. Используй
// деструктуризацию, чтобы присвоить первые два
// элемента переменным a и b, а остальные элементы
// массиву rest.

let massive = [1, 2, 3, 4, 5];
let [a, b, ...rest] = massive;
console.log(a);
console.log(b);
console.log(rest);

// with function 
let mas = [1, 2, 3, 4, 5];

function processMass(mas) {
  let [first, second, ...r] = mas;
  return {first,second,r};
}
let itog =  processMass(mas);
console.log(itog);

// Дан массив [1, [2, 3], 4, 5]. Используй
// деструктуризацию, чтобы присвоить значение 2
// переменной two, а значение 3 переменной three

 let array1 = [1, [2, 3], 4, 5];
 let [, [dva, tri]] = array1;
 console.log(dva);
 console.log(tri);

// Дан массив [1, 2, 3, 4, 5]. Используй
// деструктуризацию, чтобы присвоить значение 1
// переменной first, значение 3 переменной third, и
// значение 5 переменной fifth.
let array2 = [1, 2, 3, 4, 5];
let [first, , third, , fifth] = array2;

console.log(first);
console.log(third);
console.log(fifth);

