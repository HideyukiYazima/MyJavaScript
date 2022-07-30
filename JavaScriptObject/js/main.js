'use scrict';

// オブジェクト編
// 配列
/*
{
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;
// 上記は以下の通りまとめることができる
  const scores = [80, 90, 40];
  console.log(scores);
}
*/

// 配列の要素にアクセス
/*
{
  const scores = [80, 90, 40];
  // console.log(scores[1]);  //[]内にいれた数字でscoresにアクセスできる([1]なら90)

  // scores[2] = 44;  // [2]に該当する箇所の数字が44となる。(今回の場合40が44に変わる)
  // console.log(scores);

  console.log(scores.length); // 要素の数を表示できる(今回の場合は3となる)
}
*/

// 配列とループ処理の組み合わせ
/*
{
  const scores = [80, 90, 40];
  
  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

  //上記と同じ結果になる
  for (let i = 0; i < 3; i++) { // <- ループ処理
    console.log(`Score: ${scores[i]}`);
  }
}

{
  const scores = [80, 90, 40, 70]; // 数が増えた場合
  
  for (let i = 0; i < scores.length; i++) { // scores.lengthを使うと4を入れなくても自動計算する
    console.log(`Score ${i}: ${scores[i]}`);
  }
}
*/

/*
// 配列要素の変更

{
  const scores = [80, 90, 40, 70];
  scores.push(60, 50); // pushは末尾に要素を追加できる
  scores.shift(); // shiftは先頭から要素を削除できる
  // [80, 90, 40, 70]  から  [90, 40, 70, 60, 50] となる
  
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);    
  }
}
*/

/*
// splice()で配列を変更する

// splice(変化が開始する位置, 削除数, 追加する要素, ...)

{
  const scores = [80, 90, 40, 70];
  scores.splice(1, 1, 40, 50);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);    
  }
}
*/

/*
// スプレット構文

{
  const otherScores = [10, 20];
  const scores = [80, 90, 40, 70, ...otherScores];
  // console.log(scores);

  function sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores)
  // sum(10, 20); と同じ意味になる
}
*/

/*
// 分割代入

{
  const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a); // 80
  // console.log(b); // 90
  // console.log(c); // 40
  // console.log(d); // 70

  // const [a, b, ...others] = scores;
  //   console.log(a); // 80
  //   console.log(b); // 90
  //   console.log(others); // 40, 70

  // 値の交換をするときは以下の通り
  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}
*/

// forEach()

{
  const scores = [80, 90, 40, 70];
}