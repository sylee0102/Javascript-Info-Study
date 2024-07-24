# 객체

## 원시형 primitive type

문자열, 숫자만 담을수있다.

## 객체형

다양한 데이터를 담을수있다.
`{key:value}` 서랍장

## 객체를 만드는 방법

```jsx
// 객체 생성자
let user = new Object();
혹은;
// object literal
let user = {};
```

## 대괄호 표기법 = {}

대괄호에는 키와 어떤 문자열이 와도 상관없다.

- 점 표기법: obj.property
- 대괄호 표기법 obj["property"]. 대괄호 표기법을 사용하면 obj[varWithKey]같이 변수에서 키를 가져올 수 있습니다.

# [computed property]

키가 대괄호로 둘러싸인 경우.
프로퍼티 이름과 값의 제약을 없애준다.

# 프로퍼티 값 단축 구문(property value shorthand)

```
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age,  // age: age 와 같음
    // ...
  };
}
```

# 프로퍼티 존재 여부 확인

`"key" in object`
in 왼쪽엔 반드시 프로퍼티 이름.

# ‘for…in’ 반복문

```
for (key in object) {
  // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
}
```

# 객체 복사

```
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
}

```

# 병합 Object.assign

```
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```

동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값이 덮어씌워 집니다.

# 깊은 복사(deep cloning)

```
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes );
```
