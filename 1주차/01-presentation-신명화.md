# [자스인 1주차] 신명화

[👀 발표할 부분](#-발표할-부분)

# 👀 발표할 부분
## 2.1 [Hello, world!](https://ko.javascript.info/hello-world)

**<script> 태그 = HTML 내에 스크립트 삽입 태그**

```jsx

<!DOCTYPE HTML>
<html>

<body>

  <p>스크립트 전</p>

  <script> 
    alert( 'Hello, world!' );
  </script>

  <p>스크립트 후</p>

</body>

</html>
```

### 속성(attribute)

**<script type="module" src="index.js"></script>** index.js에 다른 js 함수(모듈화)들 import해서 모듈로 외부 js 파일을 가져오겠다. 

## 2.2 [코드 구조](https://ko.javascript.info/structure)

### 문(statement) - 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미

### 식 - 함수 표현식 등 계산해서 값이 나오는 계산식

```jsx
a + b 
```

## 2.3 [엄격 모드](https://ko.javascript.info/strict-mode)(use strict)

예약어 사용 방지 등 **엄격 모드는 다양한 실수를 방지하고, 코드의 안전성과 성능을 향상시키기 위해** 사용한다.

### 지금은 사용하지 않음 JS 모듈로 사용하면 엄격모드 자동 적용됨.

## 2.4 [변수와 상수](https://ko.javascript.info/variables)✅

### 변수 (데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소) - let

```jsx
let message;

message = 'Javascript Info'
```

값이 변함 

```jsx
let message;

message = 'Hello!';

message = 'World!'; // 값이 변경되었습니다. 이전 값 없음.

alert(message); // World!
```

### 상수 (변화하지 않는 변수) - const

 값이 변경되는 것을 방지

```jsx
const message;

message = 'Hello!';

message = 'World!';
alert(message); 
```

- 결과는 ?
    - ERROR !!
        
        왜 ? - `const` 키워드는 변수를 선언하면서 초기값을 반드시 할당해야 한다. 하지만 이 코드에서는 초기값을 할당하지 않았기 때문에 SyntaxError가 발생함. 
        
        ```jsx
        const message = 'Hello'; // 초기값을 줘야 에러가 아님 빈 공간 불가
        ```
        
        2번째 에러 구간
        
        초기값을 줘서 어찌 넘어가도 또 에러임 const 변수는 재할당이 불가능하므로 TypeError가 발생
        
        ```jsx
        message = 'World!';: // 재할당 절대 안된다. 값이 안 바뀌어서 Const 쓰는 것이다.
        ```
        

### 면접 질문

- let / var / const 차이를 설명하시오
    
    가장 중요한 차이는 **스코프차이 (호이스팅 차이도 있는데 추후 호이스팅 부분에서 자세히 다룹니다.)**
    
    var - 함수 스코프 (함수 내에서 즉, function내에서 자유롭게 사용 상위 하위 구분 없이 막 갖다 쓸 수 있다. 너무 자유분방해서 예기치 못한 작동을 할때가 있어서 let이 만들어 진 것.)
    
    ```jsx
    function test() {
        var x = 1;
        if (true) {
            var x = 2; // 같은 함수 스코프 내에서 변수 재선언
            console.log(x); // 2
        }
        console.log(x); // 2
    }
    test();
    
    ```
    
    let/const - 블록 스코프(function 안이어도 {} 내가 속한 중괄호 안에서만 가능)
    
    ```jsx
    if (true) {
        let x = 1;
        console.log(x); // 1
    }
    console.log(x); // ReferenceError: x is not defined
    ```
    
    그럼 이렇게 쓰면 `?
    
    ```jsx
    function test() {
        let x = 1;
        if (true) {
            var y = 2; 
            
            alert(x); // 결과는 ?
        }
        console.log(x); // 2
        
    }
    ```
    
    - 답
        
        여전히 가능 ! 왜 ? 저긴 함수 내이기도 하지만 내가 존재하는 곳은 상위 레벨의 {} 블록 내이기 때문에 그 안의 하위 레벨 {} 에서 사용 가능
        
        안되는 케이스 
        
        ```jsx
        function test() {
            let x = 1; // 함수 스코프 (전체 함수 블록 내에서 유효)
            if (true) {
                var y = 2; // 함수 스코프 (전체 함수 블록 내에서 유효)
                let z = 3; // 블록 스코프 (if 블록 내에서만 유효)
                alert(x); // 1 (test 함수 블록 내에서 유효)
                alert(y); // 2 (test 함수 블록 내에서 유효)
                alert(z); // 3 (if 블록 내에서 유효) // 하위 레벨에서 만든거 상위에서 사용 불가
            }
            console.log(x); // 1 (test 함수 블록 내에서 유효)
            console.log(y); // 2 (test 함수 블록 내에서 유효)
            console.log(z); // ReferenceError: z is not defined (if 블록 밖에서는 유효하지 않음)
        }
        ```
        
        즉, **상위 레벨에서 선언 한 let 변수 하위 레벨에서 사용가능 / 하위 레벨에서 선언한 let 변수 상위에서 사용 불가 !!!!!**
        
    
    **let / const 사이의 차이는 ?**
    
    let - 변수라서 값이 재할당된다. 초기값 선언 안 해도 쓸 수 있다.
    
    const - 상수이기에 값이 재할당되지 못 한다. 초기값 선언 필수다.
    

## 2.5 [자료형](https://ko.javascript.info/types) ✅

면접 질문 - 데이터 타입에 대해 설명해주세요. 

### **원시 타입: `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`**

1. Number : 진짜 숫자
2. String : **`'Hello'`, `"World"`, ``Template literals`` 문자열** 
3. Boolean : True/false
4. null : 의도적으로 비어 있음을 나타내는 값 (이거랑 관련된 재밌는 영상[https://www.youtube.com/watch?v=Ncl9VfjRyZg&pp=ygURbnVsbCDslaDtlIzsvZTrlKk%3D](https://www.youtube.com/watch?v=Ncl9VfjRyZg&pp=ygURbnVsbCDslaDtlIzsvZTrlKk%3D))
5. undefined : 값이 할당되지 않은 변수 정의되지 않음 
6. Symbol : 고유하고 변경 불가능한 값을 생성하는 데 사용
7. BigInt : 겁나 큰 정수 1234567890123456789012345678901234567890n

### **객체 타입: `Object`, `Array`, `Function`, `Date`, `RegExp`, `Map`, `Set`**

1. 일반 객체(Object):키-값 쌍의 집합으로, 중괄호(`{}`)로 정의.예: `{ name: 'John', age: 30 }`
2. 배열(Array):순서가 있는 값들의 집합으로, 대괄호(`[]`)로 정의.예: `[1, 2, 3, 4, 5]`
3. 함수(Function): 재사용 가능한 코드 블록으로, `function` 키워드 또는 화살표 함수(`=>`)로 정의. 
4. 날짜(Date):날짜와 시간을 나타낼 때.
5. 정규 표현식(RegExp):패턴 매칭을 위해 사용.예: `/\d+/`
6. Map: 키-값 쌍의 집합으로, 키의 순서를 기억.예: `new Map([['key1', 'value1'], ['key2', 'value2']])`
7. Set: 값의 집합으로, 중복을 허용 불가.예: `new Set([1, 2, 3, 4, 5])`

### **매우 특별한 타입 (NaN)**

```jsx
console.log(typeof NaN); // Number
```

Not a Number라면서 왜 Number가 나오냐 - **자바스크립트의 설계 상의 특징**

**매우 특이하네**

**NaN은 자신과 같지 않은 유일한 값. 즉, `NaN === NaN`은 `false`를 반환함.NaN은 숫자형 연산에서 발생할 수 있음 즉, 자바스크립트의 `Number` 타입에 속함 .**

```jsx
console.log(NaN);                // NaN
console.log("abc" / 2);          // NaN
console.log(0 / 0);              // NaN
console.log(Math.sqrt(-1));      // NaN
console.log(NaN === NaN);        // false
console.log(isNaN(NaN));         // true
```

## 2.6 [alert, prompt, confirm을 이용한 상호작용](https://ko.javascript.info/alert-prompt-confirm)

### alert - 확인 버튼 누를 때까지 떠있음

<img src='/assets/smh/alert.png'>

### prompt - **간단한 입력 창을 띄워 사용자가 텍스트를 입력. `prompt` 함수는 사용자가 입력한 값을 문자열로 반환, 사용자가 입력을 취소하면 `null`을 반환.**

```jsx
const userInput = prompt("여기에 메시지를 입력하세요:");
console.log(userInput);
```

<img src='/assets/smh/prompt.png'>

### confirm - **`question(질문)`과 확인 및 취소 버튼이 있는 모달 창을 띄움.사용자가 확인 버튼을 누르면 `true`, 그 외의 경우는 `false`를 반환.**

<img src='/assets/smh/confirm.png'>

## 2.7 형 변환

### 문자형으로 변환

**String(value);**

```jsx
let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value); // string
```

### 숫자형으로 변환

**Number(value);**

```jsx
let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.

alert(typeof num); // number
```

**Number(’문자열’);**

```jsx
let age = Number("임의의 문자열 123");

alert(age); // NaN, 형 변환이 실패합니다.
```

```jsx
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

**명시적이지 않은 방법**

```jsx
alert( "6" / "2" ); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행
```

| 전달받은 값 | 형 변환 후 |
| --- | --- |
| undefined | NaN |
| null | 0 |
| true and false | 1 과 0 |
| string | 문자열의 처음과 끝 공백이 제거됩니다. 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽습니다. 변환에 실패하면 NaN이 됩니다. |

### 불린형으로 변환

**Boolean(value)**
• 숫자 `0`, 빈 문자열, `null`, `undefined`, `NaN`과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 `false`

```jsx
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환됩니다.
```

| 전달받은 값 | 형 변환 후 |
| --- | --- |
| 0, null, undefined, NaN, "" | false |
| 그 외의 값 | true |

## 2.8 [기본 연산자와 수학](https://ko.javascript.info/operators)

- 덧셈 연산자 `+`, - 냅다 더해줌
- 뺄셈 연산자  `-`, - 냅다 빼줌
- 곱셈 연산자  `*`, - 냅다 곱하기
- 나눗셈 연산자 `/`, - 나누기 몫 가져옴
- 나머지 연산자 `%`, - 나누고 나눠서 남은 나머지 가져오기. ex) 5/2 = 1 출력
- 거듭제곱 연산자 `*` - 2x2x2 - 2의 3승

### 덧셈 연산자로 문자열 연결하기

```jsx
let s = "my" + "string";
alert(s); // mystring

//숫자랑 문자열 연결해서 문자열 받기
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

//숫자형으로 바꿔버리기
// 숫자형이 아닌 피연산자는 숫자형으로 변화.
alert( +true ); // 1
alert( +"" );   // 0
```

# 2.9 [비교 연산자](https://ko.javascript.info/comparison)✅

`a > b`, `a < b` 이것도 비교 연산자이지만 중요한건

### 같아 아니야 ? ==

```jsx
let a = 0; //나는 숫자 0 이니까
alert( Boolean(a) ); // false

let b = "0"; //나는 0이지만 문자열인걸
alert( Boolean(b) ); // true

alert(a == b); // true! 진짜 짜증난

// 하지만 이렇게 하면 ?

alert(a === b); // false 
```

### **일치 연산자(strict equality operator) `===` 빡세게 확인할게**

<img src='/assets/smh/couple.png'>

```jsx
alert( 0 == false ); // true
alert( 0 === false ); //false 형태가 다르잖아 .. 

//동등 연산자는 null과 undefined를 '각별한 커플’처럼 취급한데 .. 둘이 커플
alert( null == undefined ); // true
alert( null === undefined ); // false
```

null이랑 undefined는 서로를 제외하곤 모두와 false가 나옴 (일치연산자는 형태까지 확인해서 false임)

undefined ?

```jsx
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

그럼  null == 0 ?

```jsx
alert( null > 0 );  // (1) false 
alert( null == 0 ); // (2) false 
alert( null >= 0 ); // (3) true

//기타 비교 연산자의 동작 원리에 따라 null이 숫자형으로 변환돼 0이 된다.
```

`point`  - 형 변환 종류 
1. 문자열 변환 
2. 숫자변환
3. 불리언 변환
4. 객체 변환
5. 비교연산자와 타입강제 변환
6. 논리 연산자와 타입 강제 변환 


# 2.10 [if와 '?'를 사용한 조건 처리](https://ko.javascript.info/ifelse)

### if(…) 괄호 안이 true면 {} 블록코드 실행

```jsx

let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
alert( '정답입니다!' )
} else if (year > 2015) {

alert('다시 생각해봐요')
}
else {
alert('그것도 모르세요?')
}
;
```

### [**조건부 연산자 ‘?’**](https://ko.javascript.info/ifelse#ref-12)

```jsx
let result = condition ? value1 : value2; // 컨디션 참이면 1번 아니면 2번
```

### [**다중 ‘?’**](https://ko.javascript.info/ifelse#ref-13)

```jsx
let age = prompt('나이를 입력해주세요.', 18);

let message = 
	(age < 3) ? '아기야 안녕?' : //3살보다 어려? 맞으면 '아기야 안녕?' 아니면
  (age < 18) ? '안녕!' : //18살보다 어려 ? 맞으면 '안녕!' 아니면
  (age < 100) ? '환영합니다!' : // 100살보다 어려 ? '환영합니다!' 아니면 
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!'; // 나이가 100살 이상인걸 의심

alert( message ); 
```

