// // // var val1 = "var変数";
// // // console.log(val1);

// // // val1 = "var変数上書き";
// // // console.log(val1);

// // // var val1 = "var1を再宣言";
// // // console.log(val1);

// // let val2 = "let変数";
// // console.log(val2);

// // val2 = "let変数を上書き";
// // console.log(val2);

// // let val2 = "letを再宣言";

// // const val3 = "const変数";
// // console.log(val3);

// // // val3 = "conset.変数を上書き";

// // const val3 = "constを再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "小さな森",
//   age: 30
// };
// val4.name = "smallforest";
// val4.address = "Shiga";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/** テンプレート文字列 */
// const name = "　小さな森";
// const age = 30;
// //「私の名前は小さな森です年齢は30歳です。」
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/** アロー関数 */
//　従来の関数
// function func1(str){
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myprofile = {
//   name: "小さな森",
//   age: 30
// };

// const message1 = `私は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// const {name, age} = myprofile;
// const message2 = `私は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myprofile = ["リク", 39];

// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myprofile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("リク");

/**
 * スプレッド構文...
 */

//配列の展開

// const arr1 = [1, 2];
// //  console.log(arr1);
// //  console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100
// console.log(arr4);
