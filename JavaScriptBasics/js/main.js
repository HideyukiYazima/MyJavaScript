'use scrict';  // ←を書いておくとエラーを発見しやすくなる

// コメント

/*
コメント
コメント
コメント
*/
// 複数行をコメントにしたい場合は上記

/*
console.log('Hello World from main.js!');
console.log("hello");

// console.log('it's me!'); ←’’内で’を使用するとエラーになるのでその場合は””または\を使用する
console.log("it's me!");
console.log('it\'s me!');


// console.log('hel\nlo wor\tld'); ← \の特殊な使い方(\nで改行、\tでスペース)

console.log('hello' + 'world');

console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.333...
console.log(10 % 3); // 1になる
console.log(10 ** 3); // 10の3乗なので1000になる

console.log(2 + 10 * 3); // 32
console.log((2 + 10) * 3); // 36
*/

/*
// 定数 const  基本は変数よりも定数を使用するのが一般的
console.log(150 * 140);
console.log(150 * 160);

const price = 150;

console.log(price * 140);
console.log(price * 160);
*/

/*
// 変数 let (varを使う場合もあるが古いので最近は使わない)
let price = 150
console.log(price * 140);
console.log(price * 160);


price = 170;
console.log(price * 140);
console.log(price * 160);

let price = 500;

// price = price + 100;
price += 100; // 600

// price = price * 2;
price *= 2; // 1200

// price = price + 1;
// price += 1; // 1201
price++;

// price -= 1;
price--; // 1200

console.log(price);
*/

/*
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // ブラウザツール上ではobjectと表示されるが有名なバグなのでこれでOK
*/

/*
console.log('5' * 3);
console.log('5' - '3');
console.log('5' + 3); // +を使用した場合は文字列として認識されるため文字として53となる
console.log(parseInt('5', 10) + 3); // どうしても計算がしたい場合はparseIntを使用すれば計算ができる
console.log(parseInt('hello', 10)); // ’’内に数値を使用しなかった場合、NaNという表示が出る
*/

/* 比較演算
const price = 1200;

console.log(price > 1000); // true　～より大きい
console.log(price < 1000); // false　～より小さい
console.log(price >= 1000); // true　～以上
console.log(price <= 1000); // false　～以下
console.log(price === 1000); // false　～と等しい
console.log(price !== 1000); // true　～と異なる

// false <- 0, null, undefined, '', false
// true <- それ以外

console.log(Boolean(0));
console.log(Boolean('hello'));
*/

// if
/*
const score = 70;

if (score >= 80) {
  console.log('Great!');
} else if (score >= 60) {
  console.log('Good.');
} else {
  console.log('OK...');
}
*/

// 条件演算
/*
const score = 85;

if (score >= 80) {
  console.log('Great!');
} else {
  console.log('OK...');
}

score >= 80 ? console.log('Great!') : console.log('OK...'); // 上記と同じ結果が出る
*/

// 論理演算
/*
const score = 60;
const name = 'taguchi';

if (score >= 50) {
  if (name === 'taguchi') {
    console.log('Good job!');
  }
}

// && なおかつ（AND）
// || もしくは（OR）
// ! ～ではない（NOT）

if (score >= 50 && name === 'taguchi') {
  console.log('Good job!');
}   //上記と同じ結果が出る
*/

// switch

const signal = 'red';

// if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!');
// } else if (signal === 'blue') {
//   console.log('Go!');
// }

switch (signal) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green': // 青または緑にしたい場合はこの行の通り緑追加
    console.log('Go!');
    break;
  default:
    console.log('Wrong signal!');
    break;
}