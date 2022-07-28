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

/*
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
*/

/*
// for

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`); // <- hello1～10を表示できる(``で囲うことに注意)
}
*/

/*
// while

// HPが100あるキャラが15ずつダメージを受ける計算
// let hp = 100; 

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }
// 条件に関する処理(今回で言うとhp -= 15;)を書き忘れると無限ループになって最悪PCを再起動することになるので注意

// 最初からマイナスでもHPを表示する方法
let hp = -50; 

do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);
*/

// continue, break
/*
for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
  // if (i % 3 === 0) { // %は倍数を表現するのによく使う
  //   continue; // continueはループを1回スキップするのによく使う
  // }
  if (i === 4) {
    break; // ループを途中で終了させるのに使う
  }
  console.log(i);
}
*/

/*
// 関数で処理をまとめる

function showAd() {
  console.log('----------');
  console.log('--- Ad ---');
  console.log('----------');
} // {}内の内容をまとめることができる。呼び出すときはshowAd();。修正するときも便利。

showAd();
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd();
*/

// 引数
/*
function showAd(message ='Ad') { // 仮引数
  console.log('----------');
  console.log(`--- ${message} ---`); // テンプレートリデラル(``)を使用する
  console.log('----------');
} // {}内の内容をまとめることができる。呼び出すときはshowAd();。修正するときも便利。

showAd('Header Ad'); // 実引数
console.log('Tom is great!');
console.log('Bob is great!');
// showAd('Ad');
showAd(); // messageに=Adが事前に設定されているためshowAd();と空欄で入力した場合は自動でAdが付く。
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');
*/

// returnで値を返す
/*
function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}

// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
console.log(total);
*/

/* 関数式

【関数宣言】
function 関数名(仮引数, 仮引数, ...) {
  処理;
  処理;
  return 返り値;
}

【呼び出し】
関数名(実引数, 実引数, ...);

【関数式】
const 定数名 = function(仮引数, 仮引数, ...) {  // 関数名がない場合は無名関数と呼ばれる
  処理;
  処理;
  return 返り値;
};

【呼び出し】
定数名(実引数, 実引数, ...);


const sum = function(a, b, c) {
  return a + b + c;
};

const total = sum(1, 2, 3) + sum(3, 4, 5);  // 答えは18
console.log(total);
*/

/*
// アロー関数

// const sum = (a, b, c) =>  a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);  // 答えは18
// console.log(total);

// const double = function(a) {
//   return a * 2;
// };

const double = (a) => a * 2;
console.log(double(12));
*/

/*
// スコープ

const x = 2;

function f() {
  // const x = 1  // <- ここに設定が入っていない場合は外の数値が反映される。
  console.log(x);
}

f();
console.log(x);
*/

// コードブロック
/*
// indexとmsのどちらにもconst xがある場合{}で囲わないとエラーになるので注意
{
  const x = 100
  console.log(x);
}
*/

