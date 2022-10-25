//#JavaScript 기초

// console.log("hello JavaScript");

// ===============================================================================
// # DATA TYPE
// - 종류 : Nimber, Boolean, Null, Undefined, String, BigInt, Symbol

// ### Number type
// 값(Value) : 숫자(소수점 포함), NaN(Not a number), -Infinity, +Infinity

// -------------------------------------------------------------------------------
// console.log(3)
// console.log(3.14)

// console.log(NaN) //숫자가 아닌 숫자
// console.log(typeof NaN) //타입 알려주는 값 typeof //NaN

// console.log(100/"hello") //숫자 / 문자 > NaN
// console.log("hello"-1) //문자 - 숫자 > NaN

// console.log(Infinity);
// console.log(typeof Infinity); //infinity
// console.log(2/0);
// console.log(-2/0); 

// -------------------------------------------------------------------------------
// ### Boolean
// 값 : true or false

// console.log(true);
// console.log(typeof true); //boolean

// console.log(false);
// console.log(typeof false);

// -------------------------------------------------------------------------------
// ### Null
// -의도적으로 "없음", "무효"를 나타낸다.

// console.log(null); //null (log(null) > value가 없음)
// console.log(typeof null); //object

// -------------------------------------------------------------------------------
// ### Undefuined
// "정의되지 않음"

// var x; 
// console.log(x); //undefined (변수 선언 (var x;)하였지만 값이 없는 상태 / value(x)가 정의되지 않은 상태)
// console.log(typeof x); //undefined

// var x = null;  //x의 값까지 선언한 상태
// console.log(x); //null
// console.log(typeof x); //object

// -------------------------------------------------------------------------------
// ### String(문자열)

// console.log("hello");
// console.log('hello'); //''(홑따옴포), ""(쌍따옴표) 모두 가능

// console.log(""); //비어있는 문자열 출력
// console.log(typeof ""); //""(빈 문자열) > string

// console.log("2022")
// console.log(typeof "2022"); //string

// -------------------------------------------------------------------------------
// ### BigInt
// -(2^53 -1)~ (2^53 -1) 범위 밖의 숫자를 표현할 때 사용한다.
// 9000조

// -------------------------------------------------------------------------------
// ### Symbol
// ES6 (2015년) 에서 추가된 데이터 타입
// 객체의 속성키로 사용할 수 있다.

// ==================================================================================
// # 연산자(Operator)
// 종류 : 할당연산자, 수리연산자, 비교연산자, 논리연산자, 타입연산자

// -------------------------------------------------------------------------------
// ### 할당연산자(assignment Operator)
// 종류 : =, +=, -=, *=, /=(몫), %=(나머지), **=

// = 연산자
// var x = 1;
// console.log(x);

// +=
// var x=3;
// x +=2; 
// console.log(x);

// -------------------------------------------------------------------------------
// ### 수리연산자(arithmetic Operator)
// 종류 : +, -, *, /, ++, --, **, %

// var x =3;
// x++; //++, -- 뒤에 숫자 X
// console.log(x)

// console.log(2**8) 

// -------------------------------------------------------------------------------
// ### 비교연산자(Comparison Operator)
// 종류 : ==, ===, !=, !==, >, <, >=, <=, ?
// boolean을 return한다.

/*
==
value만 비교한다.
*/

// console.log(0==false) //false == 0
// console.log(1==true) //true ==1
// console.log(1==1) //true
// console.log(1=="1") //true (type다르지만 value만 비교하기 때문)
// console.log(null==undefined) //true
// console.log(""==false) //true
// console.log(""==0) //true

/*
===
value와 type 모두 비교한다. (엄격한 비교)
*/

// console.log(1==="1"); //false (type이 다르기 때문)
// console.log(0===false); //false
// console.log(null===undefined); //false (null > object형, undefined > undefined형)


/*
// !=
// value만 비교한다.
*/

// console.log(1 !="1"); //false (value값이 같이 때문에 두 값이 다르냐는 질문에 false 출력)
// console.log(0 != true);

/*
!==
value와 type 모두 비교한다.
둘 중에 하나라도 다르면 true
*/

// console.log(1 !=="1"); //true (type 다르기 때문. 둘 중 하나라도 다르면 true)
// console.log(0!==false); //true (0 > 숫자형, false > boolean형)

// ? (삼항연산자, Ternary)
// '조건' ? '참인 경우 출력 값' : '거짓인 경우 출력 값'

// var r= 1 > 5 ? "foo" : "bar"

// console.log(r)

// -------------------------------------------------------------------------------
// ### 논리연산자(Logical Operator)
// 종류 : &&, ||, !

//  && (and)

// var x = 1 > 0 && 1 > 2;
// console.log(x) // boolean형(true or false) 출력

// || (or)

// var x = 1 > 0 || 1<-1;
// console.log(x);

// ! (not/ 부정/ 반대)

// console.log(!true);
// console.log(!false);
// console.log(!(1<0)); //숫자는 () 괄호로 묶는 것이 좋다.
// console.log(!(1<0));

// -------------------------------------------------------------------------------
// ### 타입 연산자 (Type Operator)
// 종류 : typeof, instanceof
// value의 타입을 return한다.

// console.log(typeof 0);
// console.log(typeof null);
// console.log(typeof undefined);

// ==================================================================================
// #조건문 (Condition)
// if/ else/ elseif
// switch

// -------------------------------------------------------------------------------
// if/ else/ elseif

// if(1>0){                 
//     console.log("foo")   //조건(1>0)이 참인 경우 출력
// } 

// if(1>2){
//     console.log("foo")   //false인 경우 실행되지 않음
// }

// if(1>0){ 
//     console.log("foo")
// } else {
//     console.log("bar")
// }

/*
if(1>3){ //조건이 참인 경우 실행
    console.log("foo")
} else if(1>2) { //조건이 참인 경우 실행
    console.log("bar")
} else { //참이 없을 때 실행
    console.log("baz")
}
*/

// 조건 부분에 boolean이 아닌 데이터 타입이 올 경우

// console.log(1>0) //비교연산자는 boolean을 return한다.

// if (true) { 
//     console.log("foo")
// }


// if ("") { //조건에서 빈문자는 false로 취급한다. 
//     console.log("foo")
// }

// if ("hello") { //빈문자가 아닌 경우 true로 취급한다. 
//     console.log("foo")
// }

// if (null) { //조건에 null > false 
//     console.log("foo")
// }

// if (undefined) { //조건에 undefined > false 
//     console.log("foo")
// }

// var x;

// if (x) { //선언되었으나 정의되지 않은 문자 (undefined) > false
//     console.log("foo")
// }

// if(0){ // 0 = false
//     console.log("foo")
// }

// if(-2){ //true (빈문자가 아닌 경우 true로 취급)
//     console.log("bar")
// }

// if(1){ // 1 = true
//     console.log("baz")
// }

// -------------------------------------------------------------------------------
// Switch

// var result;

// // 엄격비교 (value(문자)와 type(데이터형) 모두 같아야 실행된다. (예)"3"_문자 <> 3_숫자)
// // === / !==
// switch("3"){ 
//     case 1:
//         result="foo";
//         break; //break 없으면 다음 case로 넘어간다. (break 또는 default가 나올 때까지)
//     case 2:
//         result="bar";
//         break;
//     case 3:
//         result ="baz";
//         break;
//     default:
//         result="null";
// }

// console.log(result);

// ====================================================================================
// # 반복문 (LOOP)
// For
// While
// -------------------------------------------------------------------------------
// For 반복문

// var sum = 0;

// // 1에서 10까지 더하기
// for (var i=0; i<=10; i++) {
//     sum += i;
// }

// console.log(sum);

// for 문에서 break와 continue 키워드

// for (var i=0; i<=10; i++) {
//     console.log(i); //반복적으로 실행 할 문장
// }

// for (var i=0; i<=10; i++) {
//     if(i===5){
//         break;
//     }
//     console.log(i); 
// }

// for(var i=1; i<=10; i++){
//     if (i===5){
//         continue; //
//     }
//     console.log(i);
// }
// -------------------------------------------------------------------------------
// While 반복문

// var sum=0;

// var i=1; //조건을 밖에 작성한다.(For 반복문과 차이)
// while (i<=10) {
//     sum +=i;
//     i++
// }

// console.log(sum)

// ==============================================================
// 문제
// 1부터 10까지의 숫자 중 짝수만 출력해보세요

// for(var i=1; i<=10; i++){
//     if(i%2 === 0){ 
//         console.log(i)
//     }
// }

// ======================================================================
// # 함수 (FUNCTION)
// 호출될 때만 실행되는 한 블록의 코드

// 함수를 선언하는 방식 (function declaration)
// 1 함수 선언식
// 2 함수 표현식
// 3 함수 표함수

// ----------------------------------------------------------------------------
// 함수 선언식 : function 함수이름() {block _ 함수 정의}
// function f() { 
//     // 함수 정의 (function definition)
//     console.log("foo")
// }

// // 호출
// f()
// ------------------------------------------------------------------------------
// 함수 표현식
// 변수에 익명 함수를 할당한다
// var f =  function() {
//     console.log("foo")
// }
// // 호출
// f()
// ------------------------------------------------------------------------------
// 화살표함수
// 함수 표현식의 변형
// var f = () => {
//     console.log("foo")
// }

// //호출
// f()
// ------------------------------------------------------------------------------
// Hosting(게양)

// 함수 호출
// f();

// // 함수 선언
// // 함수의 선언이 호출 시점보다 위로 올라간다.
// function f() {
//     console.log("foo")
// }

// console.log(f)
// f(); //undefined

// // Hosting이 되지 않는다
// var f = () => {
//     console.log("foo")
// }

// ------------------------------------------------------------------------------
// 함수에서의 return 

// function f() {
//     console.log("foo")
//     return //return 아래의 코드는 실행되지 않는다
//     console.log("bar")
// }

// f();

// function f() {
//     return console.log("foo") //foo 출력
//     console.log("bar")
// }

// f();

// ------------------------------------------------------------------------------
// 함수의 인자(parameter, argument)

// function f(data) {
//     console.log("argument: "+data) // (띄어쓰기 포함) 문자를 합친다
// }

// f("foo") //"foo" - argument(인자)

// function f(a,b){
//     return a+b;
// }

// console.log(f(1,2));

// ==============================================================================
// 문제
// Q. 사칙연산 함수를 만들어 보세요
// 함수 이름은 add, substract, multiply, divide
// 함수의 return값을 변수에 담아 출력해보세요.

// function add(a,b) {
//     return a+b;
// }
// function substract(a,b) {
//     return a-b;
// }
// function multiply(a,b) {
//     return a * b;
// }
// function divide(a,b) {
//     return a/b
// }

// var a=add(5,2);
// var b=substract(5,2);
// var c=multiply(5,2);
// var d=divide(5,2);

// console.log(a,b,c,d);

// =======================================================================================
// # Callback
// 다른 함수의 인자가 되는 함수

// function f1(callback) { // callback
//     var r= callback() // f1 함수의 내부에서 실행된다
//     console.log(r)
// }

// function f2() {
//     return "foo"
// }

// // 호출
// f1(f2); //f2는 f1의 callback이다. f(f(2)) > 잘못된 방법

// function f1(callback) {
//     var r = callback()
//     console.log(r)
// }

// f1(function() { // 익명함수가 callback일 때
//     return "foo"
// })

// function f1(callback) {
//     var r = callback()
//     console.log(r)
// }

// f1(function (){ 
//     return f2()  //익명함수로 호출할 때 (익명함수가 callback이다 )
// })

// ==========================================================================
// ==220907

// function f1(callback) {
//     let r=callback();
//     console.log(r);
// }

// function f2() {
//     return "foo";
// }

// f1(f2)

// function f(callback) {
//     let r = callback();
//     // f함수 내부에서 callback 함수를 실행
//     console.log(r);
// }

// // callback이 익명함수 일 때
// f(function(){
//     return "foo"
// })

// callback에 인자가 있을 때
// function f1(callback){
//     let r=callback()
//     console.log(r)
// }

// function f2(a,b){
//     return a+b;
// }

// // f1(f2(1,2))     //TypeError : callback is not a function > 숫자 뒤에 괄호가 붙은 형태 > 3()  Error > 익명함수를 사용해야 한다.

// f1(function(){
//     return f2(4,5)  //익명함수 사용 > f1(function(9)) > callback : function(9) > 9
// })

// function f1() {
//     var r = callback(1,2);  // var = let
//     console.log(r)
// }

// function f2(a,b){
//     return a+b;
// }

// f1(function(x,y){   //callback 함수 : function(x,y){return f2(x,y)}
//     return f2(x,y)
// })


// ==============================================================================================
// # 변수의 종류
// var, let, const

// ----------------------------------------------------------------------------------------------
// var
// 변수를 선언하고 값(value)을 정의한다.

// var foo = "bar"     
// console.log(foo)    

// console.log(foo)    

// var  foo;   //변수 선언
// foo = "bar" //값 정의

// console.log(foo)    //호출

// var foo;    //선언
// foo = "bar";    //정의
// foo="baz";      //다시 정의

// console.log(foo)    //최종 정의된 값으로 호출

// var foo = "bar";    //선언,  정의
// var foo ="baz";     //재선언, 재정의

// console.log(foo)

// ----------------------------------------------------------------------------------------------
// let

// let foo = "bar";    //선언 + 정의 > 초기화
// console.log(foo)

// let foo;    //선언 (let 이후 정의 > 선언)
// foo ="bar"  //정의 (변수에 값을 정의 > 정의)
// console.log(foo)

// let foo //선언
// foo="bar"   //정의
// foo="baz"   //다시 정의

// console.log(foo)    //최종 정의된 값으로 호출

// let foo ="bar"  //선언
// let foo="baz"   //재선언 불가

// console.log(foo) //SyntaxError: Identifier 'foo' has already been declared

// ----------------------------------------------------------------------------------------------
// const (constant, 상수)

// const foo ="bar"    //선언 및 정의(초기화)
// console.log(foo)

// const foo   //선언
// foo ="bar"  //정의 따로 불가

// console.log(foo)

// const foo="bar"
// const foo="baz" //재선언 불가

// console.log(foo)

//=================================================================================================
// 변수의 범위(scope)

// 전역 범위 : 함수나 블록 밖에서 선언된 변수의 범위
// 블록 범위 : 블록 안에서 선언된 변수의 범위
// 함수(지역) 범위 : 함수 안에서 선언된 변수의 범위

// -----------------------------------------------------------------------------------------------
// 전역 범위(global scope)
// const foo="bar" //const, var, let 모두 가능

// function f(){
//     // 함수 내부에서 전역변수에 접근 가능
//     console.log(foo)
// }
// f()

// {   //block (조건문, 반복문)
//     //블록 내부에서 전역변수에 접근 가능
//     console.log(foo)
// }

// // 함수, 블록이 아닌 범위에서 접근 가능
// console.log(foo)

// -----------------------------------------------------------------------------------------------
// 함수(지역) 범위

// function f(){
//     // 함수(지역)범위를 갖는 변수
//     let foo="bar"

//     console.log(foo)
// }
// f() //접근 가능

// // 함수 외부에서 지역변수에 접근 불가
// console.log(foo) 

// -----------------------------------------------------------------------------------------------
// 블록 범위(block) : 변수의  종류에 따라 다르다

// {
//     var foo="foo"
//     let bar="bar"
//     const baz="baz"
// }

// console.log(foo)    //접근가능
// console.log(bar)    //error
// console.log(baz)     //error

//=================================================================================================
// 함수의 범위

// 전역 범위 : 블록 또는 함수 외부에서 선언된 함수의 범위
// 불록 범위 : 블록 안에서 선언된 함수의 범위
// 함수(지역) 범위 : 함수의 안에서 선언된 함수의 범위

// -----------------------------------------------------------------------------------------------
// 전역범위
// function f() {}

// //블록 또는 함수 외부에서 접근 > 가능
// console.log(f)

// // 블록 내부에서 접근 > 가능
// {console.log(f)}

// // 함수 내부에서 접근 > 가능
// x()
// function x(){
//     console.log(f)
// }
// -----------------------------------------------------------------------------------------------
// 함수(지역)범위
// f1()
// function f1(){
//     // 지역범위를 갖는 함수
//     function f2(){}
//     console.log(f2)
// }
// f1()    //f2로 접근 가능

// console.log(f2)      //error
// -----------------------------------------------------------------------------------------------
// 블록 범위

// {
//     function f() {}
// }

// console.log(f)  //가능

// =====================================================================================
// Q. 콘솔에 현재 시간을 알려주는 시계를 만들어 보세요

// setInterval(callback,ms)

// ms간격으로 callback 실행
// 1s = 1000ms
// console.log(new Date().toLocaleTimeString()) //현재 시간 출력


// setInterval(function(){      //callback 함수 만들기
//     let time=new Date().toLocaleTimeString() 
//     console.log(time)
// }, 1000)

// =====================================================================================
// # Array (배열)
// 한 개 이상의 값을 가진 상태

// let arr=[10,20,30]

// console.log(arr)
// // 배열의 0번째(index) value에 접근
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr.length) //배열의 value 개수

// let arr = ["foo", 20, "baz"]

// console.log(arr)

// -----------------------------------------------------------------------------------------------
// update
// arr[1] ="bar"   //arr[변경할 값의 인덱스번호] = 변경 값

// console.log(arr)

// -----------------------------------------------------------------------------------------------
// // add
// arr[3]=40   
// console.log(arr)

// 반복문으로 Array 순회하기

// let arr = ["foo","bar","baz"]

// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }
// ==================================================================
// Q. 1부터 10까지의 숫자로 이루어진 배열을 만들어보세요

// let arr=[]

// for (let i=1; i<=10; i++) {
//     arr[i-1]=i
// }

// console.log(arr)

/*
for (let i=0; i<10; i++) {
    arr[i]=i+1
}
*/

// ==================================================================
// # Object
// 관련된 데이터와 함수의 집합

// cat object를 만든다. (속성, 메서드)
// const cat = {
//     // key(property, 속성) : value
//     name:"Kitty",
//     age:2,
//     home:null,
//     // value가 함수인 것을 메서드(method)라고 부른다
//     sound:function(){
//         return"meow"
//     }
// }

// --------------------------------------------------------------------------
// // 객체에 접근
// console.log(cat)
// // cat의 name 속성에 접근
// console.log(cat.name)
// // cat의 age 속성에 접근
// console.log(cat.age)
// // cat에 존재하지 않는 속성
// console.log(cat.collor) //undefined
// // string을 사용해서 cat의 home 속성에 접근 > 대괄호 안에 "속성" (["속성"]) 
// console.log(cat["home"])    //null
// // cat의 sound 메서드에 접근
// console.log(cat.sound())    //함수이므로 괄호() 표시 꼭! > sound()

// -------------------------------------------------------------------------
// 객체를 업데이트 하기

// const cat = {
//     name:"Kitty",
//     age:2,
//     home:null,
//     sound: function(){
//         return"meow"
//     }
// }
// // cat의 home 속성값 변경
// // cat.home="Mapo-gu"
// // console.log(cat)

// // cat의 age 속성 삭제
// // delete cat.age;
// // console.log(cat)

// // cat에 새로운 속성 color 추가
// cat.color="Mixed"
// console.log(cat)

// ==================================================================
// Q. 숫자를 대입하면 4칙연산의 결과값을 return하는 함수를 만들어 보세요

// function calc(a,b) {          //함수는 let, var 등 이용하여 따로 선언하지 않아도 됨.
//     return{
//         add : a+b,
//         sub :  a-b,
//         mul: a*b,
//         div: a/b
//     }
// }

// let r = calc(1,2)
// console.log(r)

// ==================================================================
// # 220914 에러와 에러처리

// app crashed 
//  f()

// try catch 구문을 이용한 에러 처리
// try {
//     // 코드를 작성한다
//     f();
// } catch (err){
//     // 에러가 발생할 경우 catch 블록에서 처리한다
//     console.error(err)
// }

// try{
//     false();    
// } catch (err) {
//     console.error(err)
// }

// try {
//     // SyntaxError(문법에러)는 compile 에러를 발생시킨다.
//     // compile : 컴파일러가 코드를 실행시키기 위해 읽는 단계
//     // try catch에서 compile 에러는 처리할 수 없다.
//     f());
// } catch (err){
//     console.error(err)
// }

// error 객체(object)의 종류
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError

// error 객체의 속성 (property)
// name
// message
// stack

// try {
//     f();
// } catch (err){
//     console.error("name:", err.name); // ReferenceError
//     console.error("message:", err.message); // f is not defined
//     // console.error("stack:", err.stack);
// }

// -----------------------------------------
// RangeError

// try{
//     const pi = Math.PI;

//     console.log(pi);
//     // RangeError : 값이 정해진 범위를 벗어났을 때 발생한다.
//     // toPrecision() 인자는 1에서 100 사이여야 한다.
//     // error > name :  message
//     // RangeError: toPrecision() argument must be between 1 and 100
//     console.log(pi.toPrecision(200))

// } catch(err) {
//     console.error(err)
// }

// -----------------------------------------
// ReferenceError

// try{
//     // ReferenceError
//     // 존재하지 않는 변수를 참조했을 때 발샌한다.
//     console.log(x);
// } catch(err) {
//     console.error(err)
// }

// -----------------------------------------
// SyntaxError

// try{
//     // SyntaxError (문법 에러)
//     // SyntaxError는 컴파일 에러를 발생시킨다
//     console.log(2022))
// } catch(err) {
//     console.error(err)
// }

// -----------------------------------------
// TypeError

// try{
//     // TypeError (타입 에러)
//     // 값이 예상된 타입이 아닐 때 발생한다.

//     // setInterval(callback, ms)
//     // TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received null
//     // callback은 함수여야 한다. null을 전달받았다.
//     setInterval(null,1000)
// } catch(err) {
//     console.error(err)
// }

// -----------------------------------------
// URIError

// try{
//     // URIError: URI malformed (URI가 잘못 형성되었다)
//     // uri > url 
//     decodeURI("%");
// } catch(err) {
//     console.error(err)
// }

// -----------------------------------------
// 커스텀 에러 객체(Object)로 커스텀 에러 발생시키기

// try {
//     const foo="baz";

//     if (foo !== "bar") {
//         // 커스텀 에러 객체를 생성한다
//         const err ={
//             name : "CustomError",
//             message : "bar만 가능합니다"
//         }
//         // 커스텀 에러 객체를 throw 한다
//         throw err;
//     }

// } catch(err){
//     console.error(err)
// }

// try {
//     console.log("foo")
// } catch (err) {
//     console.error(err)
// } finally {
//     // 에러 발생 유무와 상관없이 항상 실행된다.
//     console.log(".")
// }

// =================================================
// Q. 15살 소녀가 CU에서 술을 사려고 한다.
// 커스텀 에러를 발생시켜서 (어른으로서) 이 상황을 중단시켜보세요.

// try{
//     const age = 22;

//     if (age < 20) {
//         const err = {
//             name : "나이에러",
//             message: "청소년 이상 구입 가능합니다"
//         }

//         throw err;
//     }

//     console.log("술사기 성공")

// } catch (err) {
//     console.error(err)
// }

// const age = 22;
// try{
//     if (age < 20) {
//         const err = {
//             name : "나이에러",
//             message: "청소년 이상 구입 가능합니다"
//         }

//         throw err;
//     }
//     console.log("술사기 성공") //조건 외 발생
// } catch (err) {
//     console.error(err)
// }

// console.log(age) --->>> const age 를 try 밖으로 빼면 try 구문 밖에서 console.log(age) 입력


/* 강사님 답안 

try {
    const age = 15;

    console.log("15살 소녀가 술을 사러 CU 가고 있다");

    if (age<18) {
        // 커스텀 에러객체 생성
        const err={
            name:"나이에러",
            message:"3년 뒤에 다시 오세요"
        }

        // 커스텀 에러 객체를 throw한다
        throw err;
    }

    // throw 밑에 코드는 실행되지 않는다
    console.log("술 사기 성공!")

} catch(err) {
    console.error(err)
}
*/

// catch 없이 throw만 사용하면 app crashed 발생
// throw "Error!"

// =============================================================
// # class (첫 글자는 대문자여야 한다)
// 객체 생성을 위한 템플릿

// class Cat{ //첫 글자는 대문자

//     // constructor (생성자)
//     // 인스턴스를 생성하자마자 실행되는 특별한 메서드
//     // constructor는 아무 것도 return할 수 없다
//     // 인스턴스의 초기 속성을 설정하는 데 주로 사용된다
//      constructor(name,age) {
//         // ㄴ초기 속성 > name, age
//         this.name=name;
//         this.age=age;
//      }   
// } 

// // cat1은 Object 이다.
// // cat1은 Cat의 인스턴스이다.
// const cat1 = new Cat("Kitty",2);
// // cat2는 Object 이다.
// // cat2는 Cat의 인스턴스이다.
// const cat2 = new Cat("Alfredo",3);

// console.log(cat1)
// console.log(cat2)

// console.log(cat1 instanceof Cat)    // True
// console.log(cat2 instanceof Cat)    // True

// -----------------------------------------------------------
// class 속성과 메서드

// class MapoguCat {
//     // constructor(name) : 새로운 name 추가 가능. 나머지 속성과 메서드는 상속(inheritance)된다.

//     constructor(name) {
//         // ㄴ 초기속성 > name. 
//         this.name=name;
//     }
//     // MapoguCat의 속성
//     home="Mapo-gu";

//     // MapoguCat의 메서드
//     sound(){
//         return "meow"
//     }
// }

// const cat = new MapoguCat("Kitty")

// console.log(cat)
// // MapoguCat의 home 속성을 상속(inheritance)받았다
// console.log(cat.home);  //Mapo-gu
// // MapoguCat의 sound메서드를 상속받았다.
// console.log(cat.sound());   //meow , 메서드(함수)이기 때문에 cat.sound X > cat.sound()로 적용

// =================================================
// Q. 삼산동에 살고있는 하얀색 말티즈를 생성하기 위해 템플릿을 작성해보세요

// class SamsandongDog {
//     constructor(species,color) {
//         this.species=species;
//         this.color=color;
//     }

//     home = "Samsan-dong"

//     sound() {
//         return "멍멍"
//     }
// }

// const dog = new SamsandongDog("말티즈","white")

// console.log(dog)
// console.log(dog.sound())


/*강사님 답안

class SamsandongMaltese {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    // SamsandongMaltese의 속성
    home="Samsan-dong"
    color="White"

    // SamsandongMaltese의 메서드
    sound(){
        return "멍멍"
    }
}

// 인스턴스 만들기
const maltese = new SamsandongMaltese("멍멍이",2)

console.log(maltese)
// SamsandongMaltese의 속성과 메서드를 상속받았다
console.log(maltese.color)
console.log(maltese.sound())
*/

// Q. 평리단길에 있는 고양이를 생성하기 위한 템플릿을 생성해보세요
// 메서드에 인자를 전달해보세요

// class PyeongridangilCat {
//     // 생성자 메서드
//     constructor (name, age) {
//         this.name=name;
//         this.age=age;
//     }
//     // 속성
//     home = "Pyeongridan-Gil"

//     // 메서드
//     sound() {
//         return "Meow"
//     }
//     color(x){
//         return x;
//     }
// }

// // Cat의 인스턴스 생성
// const cat = new PyeongridangilCat("야옹이", 2)

// console.log(cat)

// // PyeongridangilCat의 sound 메서드 호출
// console.log(cat.sound())

// // PyeongridangilCat의 color 메서드 호출
// // PyeongridangilCat의 color 메서드에 인자를 전달한다.
// console.log(cat.color("yellow"))

// ==============================================================================
// == 220916 // #클래스의 static 속성과 static 메서드

// 클래스 자체의 속성과 메서드이다
// 인스턴스는 호출할 수 없다
// 클래스와 관련된 인스턴스 등에 유틸리티를 제공하는 역할을 한다.

// class Cat {
//     constructor(name, months) {
//         this.name=name;
//         this.months=months;
//     }

//     // static 속성
//     static description = "고양이는 18개월 이상이 되면 성체가 됩니다"

//     // static 메서드
//     static isAdult(months){
//         if (months < 18) {
//             return "아기 고양이"
//         } else {
//             return "성체 고양이"
//         }
//     }
// }

// const cat = new Cat("Kitty",1)

// console.log(cat)
// // cat의 인스턴스에서 static 속성과 static 메서드는 호출할 수 없다
// // console.log(cat.description)    //undefined
// // console.log(cat.isAdult())      //cat.isAdult is not a function >>TypeError

// // Cat클래스가 자체적으로 호출한다
// // Cat클래스 또는 Cat클래스의 인스턴스 등에 유틸리티를 제공한다
// console.log(Cat.description)
// console.log(Cat.isAdult(19))

// static 메서드로만 이루어진 클래스
//  class Calculateor {
//     static add(a,b){
//         return a+b
//     }
//     static substract(a,b){
//         return a-b
//     }
//     static multiply(a,b){
//         return a*b
//     }
//     static divide(a,b){
//         return a/b
//     }
//  }
// // console.log(클래스이름.static이름(입력할 값))
//     console.log(Calculateor.add(1,2))
//     console.log(Calculateor.substract(1,2))
//     console.log(Calculateor.multiply(1,2))
//     console.log(Calculateor.divide(1,2))

// ===================================================================
// # JavaScript의 미리 정해진 클래스 (빌트인 클래스)
// 종류
// 문자처리 : String
// 숫자 및 날짜 : Number, Math, Date
// Index collections : Array
// 에러 : Error, SyntaxError, ReferenceError, TypeError,...
// 기타 : Promise, JSON

// -----------------------------------------------------------
// 빌트인 클래스의 인스턴스 만들기
// 부제 : JavaScript에서 모든 데이터는 Object 이다

// const foo = new String("bar")
// console.log(foo)
// console.log(typeof foo)  //object

// String클래스의 인스턴스를 literal 표기법을 이용해 생성한다.
// foo변수는 메서드와 속성을 String으로부터 상속받았다.
// const foo = "bar"   //literal 표기법 (클래스를 호출하지 않고 값을 정의한다)
// console.log(foo)
// console.log(typeof foo)     //string >>foo 는 String 클래스의 인스턴스(object)이다.

// console.log("foo".toUpperCase())

// const num = new Number(2)
// console.log(num)
// console.log(typeof num) //object

// const num=2
// console.log(num)
// console.log(typeof num) //number >> number 타입도 object이다

// const date = new Date() //date클래스는 literal 표기법이 지원되지 않는다.
// console.log(date)

// const bool = new Boolean(true)
// const bool = true    //literal
// console.log(bool)

// const arr = new Array("foo","bar","baz")
// const arr = ["foo","bar","baz"]  //literal
// console.log(arr)

// const o = new Object({foo:"bar"})
// const o = {foo:"bar"}   //literal
// console.log(o)

// Math의 static 속성 'PI'
// const pi = Math.PI;
// console.log(pi)

// Error 클래스는 다양한 종류의  Error의 인스턴스 생성에 사용된다.
// const err = new Error("Something's broken!");
// // console.log(err)
// console.log(err.name)   //Error, 에러 인스턴스의 이름은 클래스와 같다
// console.log(err.message)    //Something's broken!

// 빌트인 클래스의 인스턴스로 커스텀 에러 발생시키기

// 사용자가 정의한 함수 f
// function f(data) {
//     if (typeof data !=="string"){
//         // throw : 커스텀 에러
//         // 빌트인 클래스의 인스텀스를 사용했다
//         throw new TypeError("인자는 문자여야만 합니다")     //Error 이름 변경 가능
//     }

//     // throw 아래 코드는 실행되지 않는다
//     console.log("인자:",data)
// }

// try{
//     // f함수 호출 > try 블록 안에서 처리한다.
//     f(4);
// } catch (err){
//     console.error(err)
// }
// ====================================================
// Q. 빌트인 클래스인 RangeError의 인스턴스를 사용해서
// 15세 소녀가 CU에서 술을 사려고 하는 것을 막아보세요

// function f(age) {
//     if (age <18) {
//         // Error의 name과 message를 한번에 적을 수 있다.
//         throw new RangeError ("청소년은 구입할 수 없습니다")    //이름을 RangeError로 변경하면 된다.
//     }

//     console.log("구입 가능합니다",age)
// }

// // try catch 구문을 이용한 에러 처리

// try{
//     f(10);
// } catch(err){
//     console.error(err)
// }

/**강사님 답안 
 try{
     const age = 15
 
     console.log("15세 소녀가 술을 사러 CU에 가고있다")
 
     if (age <18) {
         const err = new RangeError("3년 뒤에 오세요")   //RangeError : 값이 정해진 범위를 벗어남
         // throw : 커스텀 에러를 발생시킨다
         throw err;
     }
 
     console.log("15세 소녀가 술을 사는데 성공했다")
 } catch(err){
     console.log(err)
 }
 */

// =====================================================
// # 빌트인 클래스의 인스턴스들의 속성과 메서드 사용하기

// String

// const foo = "bar"
// console.log(foo.length) //문자열의 길이
// console.log(foo.toUpperCase())  //대문자로 변경
// console.log(foo.split("b")) //인자를 기준으로 문자열을 분할하여 Array의 형태로 return 한다. (인자는 제외)
// console.log(foo.replace("r","z"))   // .replace(a,b) 문자열 중에 a를 b로 대체한다

// Number
// const year = 2022;
// console.log(year)   //Number 타입
// console.log(year.toString())    //Number 타입을 String으로 변환한다.
// console.log(year.toString(2))   //toString(기수) 해당하는 기수법으로 변환한다.
// console.log(year.toPrecision(10))   //정밀도, 숫자의 개수를 인자에 맞게 출력한다.
// console.log(Number.isNaN(year)) //NaN(Not a Number), isNaN(인자) 인자가 NaN인지 판별한다. (year의 클래스 > Number를 적는다. Number.isNuN(year))

// Math
// console.log(Math.random())  //0에서 1사이의 소수를 random으로 return 한다
// console.log(Math.PI)    //PI
// console.log(Math.round(0.5))    //반올림
// console.log(Math.ceil(0.5)) //올림
// console.log(Math.floor(0.5))    //내림
// console.log(Math.pow(2,6))  //거듭제곱
// console.log(Math.sqrt(4))  //제곱근 (square root)
// console.log(Math.max(10,100))   //최대값
// console.log(Math.min(10,100))   //최소값

// Date
// const date = new Date()
// console.log(date)   //GMT시간 (그리니치 평균시)
// console.log(date.toLocaleString())  //현지시간(문자열로 출력)
// console.log(date.toLocaleTimeString())  //현지 시간만 출력 (문자열)

// ---------------------------------------------------
// Array
// const arr=["foo","bar"]
// console.log(arr)

// --------------------
// arr.push("baz") //새로운 item을 마지막에 추가한다.
// console.log(arr)

// --------------------
// const arr=["foo","bar","baz"]
// arr.pop()   //array의 마지막 item을 제거한다.
// console.log(arr)

// --------------------
// const arr =["foo","bar","baz"]
// const r = arr.slice(1,2)    //slice(시작(포함O),끝(미만/포함X)), 끝은 생략이 가능하다
// slice메서드는 새로운 Array를 return한다
// console.log(r)

// const r = arr.slice(1); //1번 인덱스 부터 끝까지 조회
// console.log(r)

// --------------------
// const arr = ["foo", "bar","baz"]
// // console.log(arr.sort())
// // =
// const r=arr.sort()  //기본형으로  사용할 때는 문자열 Array에만 정상적으로 작동한다
// console.log(r)  //알파벳 순서대로 정렬된다.

// const arr = [100, 2, 5]
// // console.log(arr.sort())
// const r = arr.sort()
// console.log(r)  //숫자는 문자열로 변환한뒤 비교하여 정렬하므로, 숫자 값의 크기 대로 정렬되지는 않는다.

// const arr = [20, 10,30, 5]

// // 숫자 정렬 할 때 > callback 함수 >>> desc : b-a로 하면 된다
// const r= arr.sort(function(a,b){
//     return b-a
// })

// console.log(r)

// const arr1 = ["foo","bar"]
// const arr2 = ["baz"]
// const arr3 = arr1.concat(arr2)  //arr1.concat(arr2) : arr1 뒤에 arr2를 연결한다.

// console.log(arr3)

// ===================================================================
// Q.slice 메서드를 사용해서 b부터 f로 구성된 Array를 만들어보세요
// const arr=["a","b","c","d","e","f","g"]

// const r= arr.slice(1,6)
// console.log(r)

// ==================================================================
// ==0919 map()
// const arr=["foo","bar","baz"];

// // map(callback)
// // callback 에 배열의 value, index, array를 인자로 전달한다.
// // Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다.
// // 새로운 Array를 return한다.

// const r = arr.map(function(value,index,array){  // 인자 : value를 주로 사용, index나 array를 사용하기도 한다.
//     return value.toUpperCase(); //toUpperCase(); 문자열(알파벳)을 대문자로 만든다
// })

// console.log(r);

// const arr=[1,2,3,4];

// const r = arr.map(function(value,index,array){
//     return value*10;
// })

// console.log(r)

// --------------------
// filter() > 조건과 함께
// const arr=["foo","bar","baz"];

// // Array를 순회하며 특정한 조건에 맞는 calue로 구성된 새로운 Array를 return한다.
// const r= arr.filter(function(value,index,array){
//     if (value.charAt(0)==='b') {    // chartAt(index) : 문자열에서 index에 해당하는 문자를 return한다./ 첫번째 글자가 'b'인 것
//         return value;
//     }
// })

// console.log(r);

// =============================================
// Object

// const o={prop1:"foo", prop2:"bar", prop3:"baz"};

// // Object의 key로 이루어진 Array를 return한다
// const r=Object.keys(o);

// console.log(r);

// const o={prop1:"foo", prop2:"bar", prop3:"baz"};    // 1500번 커서 + ctrl+c : 복사됨.

// // key와 value 쌍을 array의 형태로 return 한다
// const r=Object.entries(o);

// console.log(r)

// const arr=[1,2,3,4,5];

// const r=arr.filter(function(value,index) {
//     if (value > 2) {    // for 반복문 사용 가능
//         return value;
//     }
// })

// console.log(r)

// ===========================
// (map(), filter 이용)

// Q
// 1. origin으로만 구성된 Array를 만들어보세요
// 2/. 유럽 맥주로만 구성된 Array를 만들어보세요

// const beers= [
//     {name:"Heineken", origin:"Netherlands"},
//     {name:"Kloud", origin:"S.Korea"},
//     {name:"Guinness", origin:"Ireland"},
//     {name:"Asahi", origin:"Japen"}
// ]   
//value가 속성값을 가지고 있는 object

// //1. 

// // beers.map(function(value,index,array){
// //     console.log(value.origin)
// // })

// const origin = beers.map(function(beer){    //value 는 명칭을 바꿀 수 있다.
//     return beer.origin
// })

// console.log("World beers from", origin) 

// // 2.

// const europeanBeers = beers.filter(function(beer){
//     if (beer.origin === 'Netherlands'|| beer.origin==='Ireland')     // || (논리 연산자 OR)
//     return beer
// })

// console.log("Premium beers", europeanBeers)

// ========================
// # Destructing assignment (구조분해 할당)
// Array: Array의 item들을 개별적으로 변수에 담을 수 있게 한다.
// Object: Object의 속성들을 개별적으로 변수에 담을 수 있게 한다.

// Array
// const arr = ["foo","bar","baz"];    //string array : array의 item이 문자열

// 기존의 방법
// Array의 item들을 개별적으로 변수에 담았다.
// const item0 = arr[0]
// const item1 = arr[1]
// const item2 = arr[2]

// console.log(item0)
// console.log(item1)
// console.log(item2)


// const arr = ["foo","bar","baz"];    

// // 단순해진 문법
// const [item0, item1, item2] =arr;

// console.log(item0)
// console.log(item1)
// console.log(item2)

// function calculator (x,y) {  //함수를 array로
//     return [x+y,x-y,x*y,x/y]
// }

// const [add, substract,multiply,divide] = calculator(1,2)

// console.log("add",add)
// console.log("substract",substract)
// console.log("multiply",multiply)
// console.log("divide",divide)

// ============
// 구조분해 할당 방법을 사용하여 나라별 맥주 담기
// 인덱스 사용하지 않지만, 순서가 중요하다 

// const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Kloud", origin: "S.Korea" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japen" }
// ]

// const [DeutchBeer,KoreanBeer,IrishBeer,JapaneseBeer] = beers;

// console.log(IrishBeer)

// Object
// const o ={prop1:"foo",prop2:"bar",prop3:"baz"}  //속성이 3개인 Object

// // 기존방법
// const prop1=o.prop1 //속성(property), 속성 = key : value
// const prop2=o.prop2
// const prop3=o.prop3

// console.log(prop1)  //foo
// console.log(prop2)  //bar
// console.log(prop3)  //baz

// const o ={prop1:"foo",prop2:"bar",prop3:"baz"}  

// // 더 단순한 문법
// const {prop1,prop2,prop3} = o;

// console.log(prop1)  //foo
// console.log(prop2)  //bar
// console.log(prop3)  //baz

// 함수에서 Destructing 사용하기

// const o={prop1:"foo",prop2:"bar",prop3:"baz"}

// f(o);   //함수 선언을 함수 위에서 해도 된다.
// function f(props) {          //props = properties
//     const prop4=props.prop1;     //const prop1 (> name이 변경되어도 된다)= props.prop1;
//     const prop2=props.prop2;
//     const prop3=props.prop3;

//     console.log(prop4)
//     console.log(prop2)
//     console.log(prop3)
// }
// f(o);

// const o={prop1:"foo",prop2:"bar",prop3:"baz"}

// f(o)
// function f({prop1,prop2,prop3}) {               
//function f({object의 key값들(name이 꼭 같아야한다.다른 key값을 입력하면 error)})

//     // 더 단순한 문법
//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

// ==========================
// Q. 다음과 같은 문장을 출력하는 함수를 정의해보세요 (구조분해할당 사용하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at Ireland

// const irishBeer = { name: "Guinness", origin: "Ireland" }


// f(irishBeer)
// function f({ name, origin }) {
//     console.log(name + "is originated in the brewery at" + origin)
// }


// =======================
// Q. 원산지에 일치하는 맥주이름의 변수를 만들어보세요 (구조분해할당 사용)
// const origins = ["NetherIands", "S.Korea", "Ireland", "Japan"]

// const [Heineken, Kloud, Guinness, Asahi] = origins

// console.log(Kloud)

// ====================================================
// == 0921 # Sperad Syntax (전개 구문)
// Array : Array의 item을 간단하게 복사할 수 있다.
// Object : Object의 속성을 간단하게 복사할 수 있다.
// 구조: ...array이름, array에 array의 item추가

// Array
// push() 와 비슷한 역할. 
// const arr=["foo","bar"];
// const r=[...arr,"baz"]

// console.log(r)

// const arr1=["foo","bar"]
// const arr2=["baz"]

// concat() 와 비슷한 역할. concatenation(연결)
// const r=[...arr2, ...arr1]

// console.log(r)


// slice() 와 비슷한 역할
// const arr=["foo","bar","baz"]

// const [item0, ...rest] =arr;    //...rest : 나머지 array의 item

// console.log(item0)  //"foo"  (item)
// console.log(rest)   //['bar','baz']  (array)

// ======================================================
// Q. Spread 문법을 사용하여 일본 맥주를 추가해보세요
// const beers = [
//     {name:"heineken", origin:"Netherlands"},
//     {name:"Kloud", origin:"S.Korea"},
//     {name:"Guinness", origin:"Ireland"}
// ]

// const japaneseBeer = {name:"Asahi",origin:"Japan"}

// const r =[...beers, japaneseBeer]
// console.log(r)

// console.log([...beers,japaneseBeer])    // 바로 출력하는 방법

// ---------------------------------------------
// Object

// 속성 업데이트 
// const o={prop1:"foo",prop2:"bar",prop3:"baz"}
// const r={...o, prop2:null}  //...o: 기존 Object의 속성들

// console.log(r)

// 속성 추가
// const o ={prop1:"foo",prop2:"bar"}
// const r={...o, prop3:"baz"}

// console.log(r)

// ======================================================
// Q. dutchBeer에 현재 이용 가능한 맥주인지를 나타내는 새로운 속성
// available: true를 추가해보세요
// (Object의 Spread 문법 사용)

// const dutchBeer={name:"Heineken",origin:"Netherlands"}

// const r={...dutchBeer, available:true}

// console.log(r)

// console.log({...dutchBeer, available:true})

// Q. 기네스 맥주가 재입고가 되었다.
// Guinness 맥주의 available의 값을 true로 바꾸어보세요.
// map() 메서드와 Spread 문법 사용
// const beers=[
//     {name:"Heineken",origin:"Netherland",available:true},
//     {name:"Kloud",origin:"S.Korea",available:true},
//     {name:"Guinness",origin:"Ireland",available:false}
// ]

// const r=beers.map (beer =>{
//     return {...beer, available:true}
// })

// console.log(r)

// const r= beers.map(beer=>{   //=>(화살표함수)
//     if (beer.name=="Guinness"){
//         return {...beer, available:true}
//     }
//     return beer
// })

// console.log(r)
// -----------------------------------------------------
// const b=beers.map(function(value){
//     return {...value, available:true}   //나머지 value , available : true로 변경
// })

// console.log(b)

// const a = beers.map (function(value){
//     if (value.name =="Guinness") {          //guinness의 available 변경을 위해 guinness 조회.
//         return {...value, available:true}   //나머지 value는 그대로, available: true로 변경

//     }
//     return value
// })

// console.log(a)

// ================================================
// # JavaScript 비동기(Asynchronous) 프로그래밍
// 작업 과정에서 blocking(막힘)을 다루기 위한 방법이다.
// 비동기 함수로 실행된다.
// 호출 순서대로 실행되지 않는다.
// 가장 마지막에 실행된다.
// 출력 시간이 오래 걸리는 프로그램을 비동기 함수로 설정하면 실행되는 동안 나머지 프로그램들이 기다리지 않고 먼저 실행되므로 blocking 현상이 일어나지 않는다.
// callback 함수 중요하다

// 예) 서버로부터 데이터를 요청하는 것과 그 처리

// function f(callback) {
//     callback()
// }

// f 함수는 동기(synchronous)함수이다.
// 호출된 순서대로 실행된다
// f(() => {
//     console.log("foo")
// })

// console.log("bar")

// f(function(value){
//     console.log("foo")
// })


/**화살표함수
 
f(x){
  }
  
x => {
  }
f(()=>{

})
 **/

// setTimeout(callback, ms) : ms 후에 callback 실행, 1000ms = 1s
// setTimeout(() => {
//     console.log("foo")
// },1000)

// setTimeout(function(value){
//     console.log("foo")
// },1000)

// setTimeout : 대표적인 비동기 함수이다.
// 특징 ) 가장 마지막에 실행된다. => 출력 시간이 오래 걸리는 프로그램을 비동기 함수로 설정하면 실행되는 동안 나머지 프로그램들이 기다리지 않고 먼저 실행되므로 blocking 현상이 일어나지 않는다.
// setTimeout( () => {
//     console.log("foo")
// }, 1000)                   // 0으로 설정해도 아래 함수보다 늦게 출력됨. 

// console.log("bar")

// real world 예제
// 서버로부터 데이터 요청하기

// fetchData라는 비동기 함수 만들기
// 서버에 데이터를 요청하는 함수이다.
// function fetchData(callback) {
//     const o ={foo : "bar"};

//     setTimeout( ()=>{
//         callback(o)
//     }, 1000)
// }

// // 데이터를 가져오는데 1초가 걸린다고 가정
// fetchData(data =>{
//     console.log("data", data)
// })

// console.log("다른작업")

// -----------------------------------
// 비동기에서 에러 다루기

// function fetchData(id, callback){
//     if (!id) {              //!id === (id ===null), null의 반대 == true, !null = true, !undefined=true, !"" =true
//         const err = new Error("id is required");

//         setTimeout( ()=>{
//             callback(err, null)
//         }, 0)
//         return;
//     }

//     const o={foo:"bar"}

//     setTimeout(() => {
//         callback(null,o)
//     })
// }

// // fetchData() 함수 호출
// fetchData(4, (err,data)=>{
//     if (err){
//         throw err;
//     }
//     console.log("data",data)
// })

// =================================
// ==0926 복습

// function f(callback) {
//     callback()
// }

// f(() => {                   //동기(synchronous)함수 : 호출된 순서대로 실행된다
//     console.log("foo")
// })
// console.log("bar")

// function f(callback){
//     setTimeout( () =>{
//         callback()
//     },0)
// }

// f(()=>{                     //비동기(asynchronous)함수 : 호출순서와 상관없이 마지막에 실행된다.
//     console.log("foo")
// })
// console.log("bar")

// --------------------------------
// 실제 사용 예시

// function fetchData(callback){
//     const o={foo:"bar"}

//     setTimeout(()=>{
//         callback(o)
//     },1000)
// }

// fetchData((data)=>{             //서버에 데이터 요청
//     console.log("data",data)
// })
// console.log("다음작업")

// -----------------------------
// 비동기 함수에서 에러 처리

// 함수작성
// function fetchData(id,callback) {
//     if (!id){
//         const err=new Error("id is required")

//         // setTimeout(callback, ms) : ms 후에 callback 실행

//         setTimeout(()=>{
//             callback(err,null)
//         },0)
//         return;
//     }

//     const o={foo:"bar"}
    
//     setTimeout(()=>{
    
//         setTimeout(()=>{
//             callback(null,o)
//         },0)
    
//     })
// }

// 에러처리 : 비동기 함수를 사용한 방법
// // fetchData(id,callback)
// fetchData(null,(err,data)=>{             //callback 에서 error 처리(try-catch)
//     try{
//         if (err){
//             throw err;
//         }
//         console.log("data",data)
//     } catch(error){
//          console.error(error)
//     }
// })

// ===============
// # Promise
// Promise 객체는 비동기 작업의 성공/ 실패 여부와 그 결과값을 나타낸다.
// 상태와 결과값을 가지고있다.
// 비동기 작업의 가독성을 높이기 위해 사용된다.

// 구조
// Promise class를 이용하여 인스턴스 만들기

// const o = new Promise((res,rej)=>{
//     // res:resolve(fullfilled)
//     // 비동기 작업의 성공
//     // res("foo")

//     // rej: rejected
//     // 비동기 작업의 실패
//     rej("bar")
// })

// console.log(o)
// // promise {<pending>} : 보류중
// // res("foo") -> console.log(o) 상태 : fullfilled, 결과값 : "foo" // Promise{'foo'}
// // rej("bar") -> console.log(o) 상태 : rejected, 결과값 : "bar" // Promise{<rejected> 'bar'}

// -----------------
// async function을 사용해서 인스턴스 만들기 (주로 사용)
// async function f(){
//     // resolve(fullfilled)
//     // 비동기 작업의 성공
//     // return "foo"            

//     // rejected
//     // 비동기 작업의 실패
//     throw "bar"
// }

// console.log(f())
// // return "foo" -> console.log(f()) 상태 : fullfilled, 결과값 : "foo" // Promise{'foo'}
// // throw "bar" -> console.log(f()) 상태 : rejected, 결과값 : "bar" // Promise{<rejected> 'bar'}

// ------------------------
// 실제 사용 예시
// async function fetchData(){
//     const o = {foo : "bar"};
//     return o;
// }

// // 서버에 데이터를 요청한다
// fetchData()                 //Promise 객체는 비동기적으로 작동한다. > 가장 마지막에 실행
// .then(data=>{               //then 메서드 안에서 데이터를 처리
//     console.log(data)
// })

// console.log("다음 작업")

// ---------------------------
// Promise 객체에서 에러 처리
// async function fetchData(id){
//     if(!id){
//         const err=new Error("id is required");
//         throw err;
//     }

//     const o={foo:"bar"}
//     return o;
// }

// 에러처리 : Promise를 사용한 방법
// fetchData(null)
// .then(data=>{                   // 데이터 처리
//     console.log("data",data)
// })
// .catch(err=>{                   //에러 처리
//     console.error(err);
// })

// -------------------------------
// Promise의 async/await 문법
// 비동기 작업을 동기 작업처럼 할 수 있게 만든다.
// 가독성면에서 가장 좋다.

// async function fetchData(id){
//     if (!id){
//         const err = new Error("id is required");
//         throw err;
//     }

//     const o={foo:"bar"}
//     return o;
// }

// f()
// async function f(){
//     try {
//         // await : 비동기 작업이 끝날때까지 기다린다.
//         // await은 async 함수 내부에서만 사용할 수 있다. 
//         const data = await fetchData("a1");
//         console.log(data);

//         console.log("다음작업")
//     } catch (error){
//         console.error(error)
//     }
// }

// =============================================
// # JSON
// JavaScript Object Notation (JavaScript 객체 표기법)
// JavaScript 객체를 저장하거나 전송하기 위한 텍스트 포맷

// const o={foo:"bar"}
// const json ='{"foo":"bar"}'

// console.log(o)      //Object > (사용할 때)
// console.log(json)   //json포맷(텍스트) > (전송할 때)     // 구조 : '{"  ":    }' _ key값이 따옴표로 감싸진다.

// console.log(typeof json) // string

// const o = {foo:"bar"}
// // JSON.stringfy 메서드 : object를 json 포맷으로 변환한다.
// const r = JSON.stringify(o)

// console.log(r)

// const json='{"foo":"bar"}'
// // JSON.parse(json) : json포맷을 Object로 변환한다.
// const r=JSON.parse(json);

// console.log(r)
// console.log(typeof r)   //object

// const arr = '[{"prop1":"foo","prop2":"bar"}]'   //arr 안에 object
// const r=JSON.parse(arr);
// console.log(r)

// const arr1 = '["1","2","a"]'   //arr안에 value
// const r1=JSON.parse(arr1)
// console.log(r1)







