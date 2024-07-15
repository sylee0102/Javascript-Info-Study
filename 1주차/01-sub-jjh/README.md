# 자바스크립트 기본

# Hello, world!

HTML 에 직접 스크립트 작성은 아주 간단할때만 사용한다.
별도의 스크립트에 작성하면 캐시에 저장되기때문에 성능상 이점이 있다.

## scrtipt src 속성 : 외부 스크립트 파일 사용

`<script src="…">`는 외부 파일을 연결용으로만 따라서 쓰이며 내부 코드는 무시된다.

```jsx
<script src="file.js"></script>

<script>
  alert(1);
</script>
```

# 코드 구조

ctrl / : 한 줄짜리 주석은 두 개의 슬래시 //로 시작한다.
ctrl shift / : 여러 줄의 주석은 슬래시와 별표 /_로 시작해 별표와 슬래시 _/로 끝난다.
주석을 중첩해 쓰면 에러가 발생.

# 엄격 모드 se strict

ES5에서는 새로운 기능이 추가되고 기존 기능 중 일부가 변경되면서 생기는 호환성 문제를 보완하기 위해
변경사항 대부분은 ES5의 기본 모드에선 활성화되지 않도록 설계.

- "use strict"는 반드시 최상단에 위치.
- 일단 엄격 모드가 적용되면 돌이킬 방법은 없습니다.

# 변수와 상수

## 함수형 언어

함수형(functional) 프로그래밍 언어는 변숫값 변경을 금지합니다.
다른 값을 저장하고 싶다면 새로운 상자를 만들어야(새 변수를 선언해야)만 합니다. 이전 변수를 재사용할 수 없습니다.

## 대문자 상수

기억하기 힘든 값을 변수에 할당해 별칭으로 사용.
대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 사용하면 됩니다.

# 자료형

자바스크립트에는 여덟 가지 기본 자료형이 있습니다.
숫자형(int), 문자열(string), 불린형, null, Undefined, object, typeof,
BigInt : 나타낼수없는 정수 끝에 'n'이 붙으면 BigInt형 자료입니다.

## 문자 표현식

`${name}`

```jsx
let name = "Ilya";

alert(`hello ${1}`); // int

alert(`hello ${"name"}`); // string

alert(`hello ${name}`); // string
```

# alert, prompt, confirm을 이용한 상호작용

## prompt

prompt 함수는 두 개의 인수를 받습니다.

`result = prompt(title, [default]);`

- title
  사용자에게 보여줄 문자열
- default
  입력 필드의 초깃값(선택값)
  대괄호 [...]의 의미

## confirm

사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여집니다. 사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환합니다.
`result = confirm(question);`

```jsx
let age = prompt("age", 100);
alert(`${age}`);

let isAge = confirm("100?");
alert(isAge);
```

# 형변환

## 문자형으로 변환

String(value)

## 숫자형으로 변환

Number(value)

## 불린형으로 변환

Boolean(value)

# 연산자

- 나머지 연산자 %
  `alert( 5 % 2 ); // 5를 2로 나눈 후의 나머지인 1을 출력`
- 거듭제곱 연산자 **
  `alert( 2 ** 2 ); // 4 (2 \* 2)`

## 단항 연산자 +와 숫자형으로의 변환

```
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
alert( +apples + +oranges ); // 5
```

## 증가(increment) 연산자 ++는 변수를 1 증가

```
let counter = 2;
counter++;      // counter = counter + 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
alert( counter ); // 3
```

## 감소(decrement) 연산자 --는 변수를 1 감소

```
let counter = 2;
counter--;      // counter = counter - 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
alert( counter ); // 1
```

- counter++와 같이 피연산자 뒤에 올 때는, '후위형(postfix form)'이라고 부릅니다.
- ++counter와 같이 피연산자 앞에 올 때는, '전위형(prefix form)'이라고 부릅니다.

값을 증가시키고 난 후, 증가한 값을 바로 사용하려면 전위형 증가 연산자를 사용하면 됩니다.

let counter = 0;
alert( ++counter ); // 1

값을 증가시키지만, 증가 전의 기존값을 사용하려면 후위형 증가 연산자를 사용하면 됩니다.

let counter = 0;
alert( counter++ ); // 0

## 일치 연산자(strict equality operator)

===를 사용하면 형 변환 없이 값을 비교할 수 있습니다.
엄격한(strict) 동등 연산자입니다. 자료형의 동등 여부까지 검사합니다.

# 물음표(question mark) 연산자 = 조건부 연산자 ‘?’

if(조건){결과}

## 삼항 연산자

let result = condition ? value1 : value2;

# 논리 연산자

||(OR), &&(AND), !(NOT)

## ||(OR)

- or 연산자는 주건중 하나라도 참인지를 테스트한다.
- 여러개 chaining 을 하는 경우 첫번째 truthy 를 반환한다. truthy 가 하나도 없다면 마지막 피연산자를 반환한다.

## &&(AND)

- 두 연산자가 모두 참일때 true 를 반환한다. 그외는 false 를 반환한다.
- chaining 하는 겅우 첫번째 falsy 를 반환한다. 그외 falsy 가 없다면 마지막 값을 반환한다.

## ! (NOT)

- true/false 로 변환한다.

### !! 불린형으로 변환

- NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.

```jsx
alert(!!"non-empty string"); // true
alert(!!null); // false
```

Boolean을 사용하면 !!을 사용한 것과 같은 결과를 도출할 수 있습니다

```jsx
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false
```

# nullish 병합 연산자 '??'

- 그 중 값이 확정되어있는 변수
- a ?? b의 평가 결과는 다음과 같습니다.
  a가 null도 아니고 undefined도 아니면 a
  그 외의 경우는 b

## '??'와 '||'의 차이

||는 첫 번째 truthy 값을 반환합니다.
??는 첫 번째 정의된(defined) 값을 반환합니다.

??는 변수에 기본값을 할당하는 용도로 사용할 수 있습니다.

```jsx
// height가 null이나 undefined인 경우, 100을 할당
height = height ?? 100;
```

# while 반복문

condition(조건)이 truthy 이면 반복문 본문의 코드가 실행됩니다.

반복문 본문이 한 번 실행되는 것을 반복(iteration, 이터레이션) 이라고 부릅니다.

# for 반복문

for 안에있는걸 반복.

지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나올 수 있습니다.
