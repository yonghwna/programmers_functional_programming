//es5 순회방식
const list = [1, 2, 3, 4, 5];
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}
//유사배열의 순회방식
const str = "hello";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}
//es6 순회방식
for (const a of list) {
  console.log(a);
}
//더 간결해졌고, 더 선언적이다.
for (const a of str) {
  console.log(a);
}
//선언적이다? 라는것을 무엇인가?
//선언적이다는것은 어떻게 하는지가 아닌 무엇을 하는지에 집중하는것이다.
//기존에는 i도 만들고 length로 제한하고 i증가시키는 등 어떻게 하는지에 집중했지만
//for of문은 배열을 순회하는것에 집중한다.
