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
