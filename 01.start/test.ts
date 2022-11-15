let a: number;
//  = 'Mark';

// a = "Mark";
a = 39;

// 빨간 줄의 으미 >> 컴파일을 하다 문제가 생긴것
// number 형식은 string에 할당할 수 없다.

// 선언만 하게 되면 any라는 타입을 가지게 됨, any의 형태만 들어올 수 있다는 것

// 타입 Annotation >>> 내가 직접 타입을 지정해주는 것

function hello(b : number) {
}

hello(3);
// hello("hello");