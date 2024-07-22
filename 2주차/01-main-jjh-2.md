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
