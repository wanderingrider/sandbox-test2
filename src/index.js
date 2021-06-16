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

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
