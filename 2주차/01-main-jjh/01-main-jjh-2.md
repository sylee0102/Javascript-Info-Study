# 메서드와 this

객체는 개체 entity 를 표현할때 생성된다.

## 메서드(method)

객체 프로퍼티에 할당된 함수.

```
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!
```

## this

메서드 내부에서 this 키워드를 사용하면 객체에 접근.

```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  }

};

user.sayHi(); // John
```

유동적인 객체 참조로 this 는 복사 할당된 다른 객체의 오류를 막는다.

객체가 없어도 this를 쓸수있는데 이때 undefined 를 출력한다.

화살표 함수에서는 this 가 참조되지 않는다. 사용하면 외부 함수를 가져온다.

# new 연산자와 생성자 함수

# 생성자 함수 constructor function

- 함수 이름의 첫 글자는 대문자로 시작합니다.
- 반드시 'new' 연산자를 붙여 실행합니다.

생성자의 목적은 재사용할 수 있는 객체 생성 코드를 구현하는 것이다.
재사용은 막으면서 코드를 캡슐화 할 수 있다.

생성자 함수엔 보통 return 문이 없습니다. 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요가 없습니다.

- 생성자 함수는 일반 함수와 구분하기 위해 함수 이름 첫 글자를 대문자로 씁니다.
- 생성자 함수는 반드시 new 연산자와 함께 호출해야 합니다.

### .read()

내용을 동기적 혹은 비동기적으로 잀는다.

# 옵셔널 체이닝 '?.'

여러 정보 중 없는 정보를 가져왔을때 에러가 발생하는데
에러 방지를 위해 && 연산자를 사용하면 에러대신 undefined 를 출력해주지만 코드가 길어지기에 등장.

```
let user = {}; // 주소 정보가 없는 사용자

alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않습니다.
```

?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 **undefined**를 반환합니다.

```
let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.
```

?.는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.

## 단락 평가

?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춥니다.

- obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
- obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
  Q. ([]는 {object} 와 [array]의 차이인가?)
- obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함

# 심볼형

'심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용합니다.
심볼형 값은 다른 자료형으로 암시적 형 변환(자동 형 변환)되지 않습니다.

```
// id는 새로운 심볼이 됩니다.
let id = Symbol();
```

## ‘숨김’ 프로퍼티

심볼을 이용하면 ‘숨김(hidden)’ 프로퍼티를 만들 수 있습니다. 숨김 프로퍼티는 외부 코드에서 접근이 불가능하고 값도 덮어쓸 수 없는 프로퍼티입니다.
키가 심볼인 프로퍼티는 for..in 반복문에서 배제됩니다.

## 전역 심볼 레지스트리(global symbol registry)

전역 심볼 레지스트리 안에 심볼을 만들고 해당 심볼에 접근하면, 이름이 같은 경우 항상 동일한 심볼을 반환해줍니다.

```
// 전역 레지스트리에서 심볼을 읽습니다.
let id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듭니다.

// 동일한 이름을 이용해 심볼을 다시 읽습니다(좀 더 멀리 떨어진 코드에서도 가능합니다).
let idAgain = Symbol.for("id");

// 두 심볼은 같습니다.
alert( id === idAgain ); // true
```

## 심볼 찾기 메서드

`Symbol.for(key)` `Symbol.keyFor`

```
// 이름을 이용해 심볼을 찾음
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 심볼을 이용해 이름을 얻음
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

# 객체를 원시형으로 변환하기

원시값을 기대하는 내장 함수나 연산자를 사용할 때 객체-원시형으로의 형 변환이 자동으로 일어납니다.

객체-원시형으로의 형 변환은 hint를 기준으로 세 종류로 구분할 수 있습니다.

"string" (alert 같이 문자열을 필요로 하는 연산)
"number" (수학 연산)
"default" (드물게 발생함)

obj.toString()만 사용해도 '모든 변환’을 다 다룰 수 있다.

# 원시값의 메서드

## 원시값

문자(string), 숫자(number), bigint, 불린(boolean), 심볼(symbol), null, undefined

## 객체

{name : "John", age : 30}
다양한 종류의 값을 저장

### str.toUpperCase()

인수로 받은 문자열의 모든 글자를 대문자로 바꿔주는 메서드

```
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
```

### toFixed(n)

원하는 자리에서 소수점 아래 숫자를 반올림

```
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
```

#### IEEE 754

컴퓨터에서 부동 소수점 숫자를 표현하고 계산하는 데 사용되는 국제 표준입니다.
