alert("코롱이 바보");

let name = "john";
let admin = name;
alert(admin);

// let answer = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?", "");

if (answer == "ECMAScript") {
  alert("정답입니다!");
} else {
  alert("오답입니다!");
}

let answer = prompt("ID", "");
if ((answer = "Admin")) {
  let password = prompt("pass", "");
  if (password == "TheMaster") {
    alert("welcom");
  } else if (password == null || password == "") {
    alert("wrong");
  } else {
    alert("canceled");
  }
}

let a = +prompt("a?", "");

switch (a) {
  case a == 0:
    alert(0);
    break;
  case a == 1:
    alert(1);
    break;
  case a == 2 || a == 3:
    alert("2,3");
    break;
}

function checkAge(age) {
  age > 18 ? true : confirm("보호자 동의?");
}

function checkAge(age) {
  return age > 18 || confirm("보호자 동의?");
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
function min(a, b) {
  return a < b ? a : b;
}
