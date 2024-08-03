# 순서가 있을땐 [배열]

배열은 순서가 있는 자료를 저장하는 용도로 만드어진 자료구조.

# key 사용엔 {일반객체}

임의의 **key**를 사용해야 한다면 배열보단 일반 객체 {}가 적합한 자료구조일 확률이 높습니다.

## push

맨 끝에 요소 추가

## shift

젤 앞 요소 제거

## unshift

젤 앞에 요소 추가

## pop

끝 요소를 추출

### stack

요소를 더하거나 빼는 자료구조

### toString

배열을 문자열로 반환

```
let arr = [1, 2, 3];

alert( arr ); // 1,2,3

alert( String(arr) === '1,2,3' )
```

## splice

해당 index 의 key 와 value 삭제해준다.

arr.splice(0,1) : index 의 0번째부터 1번째까지 삭제

## slice

기존은 배열을 건드리지 않으면서 새오운 배열의 복사본은 만들수있다.

arr.splice(0,1) : index 의 0번째부터 1번째를 제외한 복사한 새로운 배열을 반환

## concat

기존 배열에 새로운 요소를 추가할때,
기존 배열을 사용해 새로운 배열을 만들때.

```
let arr = [1,2];
alert(arr.concat([3,4]))// 1,2,3,4 반환
```

## forEach

배열 각각에 실행할수있게해준다.

`arr.forEach(function)`

```
["a","b","c"].forEach(alert);
```

## arr.indexOf(item,from)

from index 부터 시작해서 item 요소를 찾는고 있으면 index 를 반환한다.

## arr.includes(item,from)

from index 부터 시작해 item 요소를 찾고 있으면 true 를 반환한다.

## arr.find(finction)

특정 조건에 부합하는 객체를 배열에서 찾을때
`users.find(item => item.id == 1);`

## arr.filter(funtion)

단 하나의 요소를 찾을떼
`users.filter(item => item.id < 3);`

## arr.map

배열 내부 요소 전체를 대상을 함수를 호출, 결과를 배열로 반환
`let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item);`

## arr.sort()

역순 재정렬.
배열 자체 변경되며 배열 정렬해준다.

## arr.revers

arr 요소를 연순으로 정렬

## str.split(',')

구분자를 기준으로 문자열으로 쪼개준다.

```
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');
alert(arr);
```

## str.join('+')

split 과 반대로 배열 요소를 합쳐서 하나의 문자열로 만든다.

```
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join('+');

alert(str)
```

## reduce

아 너무 어렵다 reduce

## arr.isArray

배열 여부 알아내기
reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨
