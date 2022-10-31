import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate} from 
"react-router-dom"
import './App.css';

// function App(){
//   return <h1>Hello React</h1>
// }

export default App;

// # JSX
// JavaScript의 확장문법
// 선언형 문법
// Babel이 JSX를 JavaScript Object로 변환한다
// Babel : JavaScript 컴파일러

// function App(){
//   return <h1>Hello React</h1>
// }

// JSX 없이 Virtual DOM 만들기
// function App(){
//   const h1=React.createElement('h1','null','Hello React');

//   return h1;
// }

// # JSX 문법

// function App(){
//   return (
//     <div>           
//    // div로  감싸져있다.
//       <h2>elements는 하나의 element로 감싸져야 한다</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>
//   )
// }

// function App(){
//   return (
//     <div>
//       <h2>elements를 하나의 element로 감싸지 않은 경우 에러 발생</h2>
//       {/* // Adjacent JSX elements must be wrapped in an enclosing tag. */}
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>
//   )
// }

// React.Fragment

// function App(){
//   return(
//     // DOM에 element를 추가하지 않고 자식을 그룹화 할 수 있다. (하나의 element로 감싸는 대신 사용. 개발자도구 elements에서도 표시되지 않는다.)
//     <React.Fragment>
//       <h2>React.Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </React.Fragment>
//   )
// }

// ==##1014

// function App(){
//   return (
//     // <React.Fragmenmt> 대신 <> 빈 태그를 이용한다.
//     <>                            
//     <h2>React.Fragement</h2>
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//     </>
//   )
// }

// JSX attribute

// function App(){
//   return (
//     <>
//     <h2>JSX attribute</h2>
//     <ul>
//       <li><a href="#" target="_blank">Foo</a></li>
//       <li><img src=""alt="Bar" /></li>
//       <li><input type="text" placeholder="Baz" autoComplete="off"/></li>
//     </ul>
//     </>
//   )
// }

// JSX inline style attribute

// function App(){
//   return (
//     <>
//     <h2>JSX inline style</h2>
//     {/* style attribute에 object를 인자로 전달한다 */}
//     <ul style={{border:"1px solid"}}>
//       <li style={{textDecoration:"underline"}}>Foo</li>
//       <li>Bark</li>
//       <li>Baz</li>
//     </ul>
//     </>
//   )
// }

// JSX 내에서 JS 코드 작성하기
// function App(){
//   const foo="Foo";

//   return(
//     <>
//     <h2>JSX 내에서 코드 작성하기</h2>
//     <div>{foo}</div>
//     <div>{'Ba'+"r"}</div>
//     <div>{"Baz".valueOf()}</div>
//     </>
//   )
// }

// ==## Q. Complete DOM with JS Object
// JavaScript 변수와 inline style을 사용하여 virtualDOM을 완성시켜보세요
// function App(){
//   const dutchBeer="Heineken"
//   const irishBeer="Guinness"
//   const japeneseBeer="Asahi"

//   const soldOut={
//     textDecoration:"line-through",
//     color:"#ddd"
//   }

//   return(
//     <>
//     <h2>Beers</h2>
//     <ul>
//       <li>{dutchBeer}</li>
//       <li style={soldOut}>{irishBeer}</li>
//       <li>{japeneseBeer}</li>
//       <li>{japeneseBeer + irishBeer}</li>
//       <li>{japeneseBeer + 2}</li>
//       <li>{japeneseBeer + "abcdfreds"}</li>
//     </ul>
//     </>
//   )
// }

// JSX 내에서 조건문 사용하기
// 논리연산자, 삼항연산자
// &&(AND) : expr1 && expr2
// ||(OR) : expr1 || expr2
// ! (NOT) : !expr 
// 삼항연산자(Ternary) : 조건 ? expr if true : expr if false
// '조건' ? '참인 경우 출력 값' : '거짓인 경우 출력 값'
// var r= 1 > 5 ? "foo" : "bar"
// function App(){

//   // &&
//   console.log(true && 1)  //1
//   console.log(1&&0) //0
//   console.log(0&&1) //0
//   console.log(0&&false) //0

//   // ||
//   console.log(1||true)  //1
//   console.log(1||0) //1
//   console.log(0||1) //1
//   console.log(false||0) //0    //앞이 false니까 || 뒤 조건이 출력된다.      
//   console.log(false||2312412) //2312412   //앞이 false니까 || 뒤 조건이 출력된다.       

//   return (
//     <>
//     <h2>JSX 내에서 조건문 사용하기</h2>
//     <div>{true&&"Foo"} </div>
//     <div>{false||"Bar"}</div>         
//     <div>{!true ? "":"Baz"}</div>
//     </>
//   )
// }

// JSX 내에서 반복문 사용하기

// function App() {
//   // 선언은 return 이전에 한다.
//   const arr = ["Foo", "Bar", "Baz"];

//   return (
//     <>
//       <h2>JSX에서 반복문</h2>
//       <ul>
//         {/* 반복문으로는 주로 .map이  사용된다. (.for X )
//         callback 에 배열의 value, index, array를 인자로 전달한다.
//         Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다.
//         새로운 Array를 return한다. */}
//          문법
//         {/* arr.map(function(value,index,array) */}

//         {/* arr.map((value,indes,array)=>())    // 이 때 사용하는 괄호는 JSX를 도와주는 괄호이다. */}
//         {arr.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}

//         {/* 화살표 함수 아닌 function 함수는 괄호가 아닌 중괄호로 사용하며, 적용이 되지 않는다. */}
//         {/* {arr.map(function(value,index){
//           <li key={index}>{value}</li>
//         })} */}       
//       </ul>
//     </>
//   )
// }

// function App(){

//   const arr=["Foo","Bar","Baz"]

//   // 리스트를 먼저 만들고 return 한다.
//   const list=arr.map((item,index)=>(
//     <li key={index}>{item}</li>
//   ))

//   return (
//     <>
//     <h2>JSX 반복문</h2>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// ==##Q.반복문을 사용해서 맥주 리스트를 출력해보세요
// function App(){

//   const beers=[
//     {name:"Heineken", origin:"Netherlands"},
//     {name:"Guinness", origin:"Ireland"},
//     {name:"Asahi", origin:"Japan"},
//   ]

//   // 변수 값은 상황에 맞게 바꿀 수 있다. item->beer
//   const list = beers.map((beer,index)=>(
//   //   // object를 출력할 때에는 한꺼번에 출력하지 못하고, key 이름을 , 로 연결하여 출력한다.
//     <li key={index}>{beer.name},{beer.origin}</li>
//   ))

//   // () 괄호로 묶어도 되고, 안묶어도 된다. 하나만 있어도 된다. 중요한 것은 return 되는 값이다.
//   // const list = beers.map((beer,index)=>
//   //   <li key={index}>{beer.name},{beer.origin}</li>
//   //   )


//   // const list=beers.map((beer,index)=>{
//   //   // li에 key={index}를 정의하지 않으면 콘솔에 Warining 메세지가 뜬다.
//   //   return <li key={index}>{beer.name},{beer.name}</li>
//   //   // return (<li key={index}>{beer.name},{beer.name}</li>)      //() 괄호로 묶어도 되고, 안묶어도 된다. 보통 한줄이면 안묶는다.
//   // })

//   return(
//     <>
//     <h2>Beers</h2>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// // 화살표함수에서 {} (중괄호)가 없으면 화살표 뒤의 값을 return한다
// // const f=()=>"foo"
// // =
// // const f=()=>{
// //   return "foo"
// // }

// # COMPONENTS (컴포넌트)
// 정의 : 복잡한 UI를 빌드하기 위한 재사용이 가능하고 독립적인 부품

// 컴포넌트 기본
// 함수 컴포넌트와 클래스 컴포넌트(잘 쓰지 않는다. 배우지X)가 있다.

// App 컴포넌트
// 함수 컴포넌트는 기본적으로 함수이다.
// function App(){

//   // 코드작성
//   console.log("App Loaded!")

//   // VirtualDOM을 return한다
//   return <h1>App</h1>
// }

// 컴포넌트 합성(Composition)
// 코드를 재사용한다

// 컴포넌트의 첫글자는 대문자여야 한다.
// function Foo(){
//   return <li>Foo</li>
// }
// function Bar(){
//   return <li>Bar</li>
// }
// function Baz(){
//   return <li>Baz</li>
// }

// function App(){
//   return (
//     <>
//     <ul>
//       {/* 컴포넌트 합성 : 미리 만들어진 함수 컴포넌트를 합성한다. 모양 중요 : <Name /> 닫힌태그! */}
//         <Foo />
//         <Bar />
//         <Baz />
//     </ul>
//     </>
//   )
// }

// ==## Q.

// function DutchBeer() {
//   return (
//     <>
//       <td>Heineken</td>
//       <td>Netherland</td>
//       <td>Yes</td>
//     </>
//   )
// }
// function IrishBeer() {
//   return 
//   // ,로 연결하는 것이 아니라 React.Fragment를 사용한다.
//   <>
//   <td>{"Guinness"}</td>
//   <td>{"Ireland"}</td>
//   <td>{"No"}</td>
//   </>
//   }
// function JapaneseBeer() {
//   return <>
//   <td>{"Asahi"}</td>
//   <td>{"Japan"}</td>
//   <td>{"Yes"}</td>
//   </>
//   }

// function App() {
//   return (
//     <>
//       <h2>Beers</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Brand</th>
//             <th>{"Origin"}</th>
//             <th>{"Available"}</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//           <DutchBeer />
//           </tr>
//           <tr>
//           <IrishBeer />
//           </tr>
//           <tr>
//           <JapaneseBeer />
//           </tr>
//         </tbody>
//       </table>
//     </>

//   )
// }

// ==##1017

// #props
// 컴포넌트에 전달되는 인자(parameter)

// function C(props){
//   console.log(props)
//   const prop1=props.prop1;

//   return <li>{prop1}</li>
// }

// function App(){
//   return (
//     <>
//     <h1>App</h1>
//     <ul>
//       {/* C 컴포넌트를 재사용했다. */}
//       <C prop1="Foo"/>
//       <C prop1="Bar"/>
//       <C prop1="Baz"/>
//     </ul>
//     </>
//   )
// }

// ==##Q.

// function Beer(props){
//   console.log(props)
//   const name=props.name;
//   const origin=props.origin;
//   return <li>{name},{origin}</li> //,를 여기서 적을 수 있다.

// }

// function App(){
//   return(
//     <>
//     <h1>Beers</h1>
//     <ul>
//       <Beer name="Heineken" origin="Netherlands"/>
//       <Beer name="Guinness" origin="Ireland"/>
//       <Beer name="Asahi" origin="Japan"/> 
//     </ul>
//     </>

//   )
// }

// Object props

// function C(props){
//   console.log(props)

//   return(
//     <ul>
//       <li>prop1:{o.prop1}</li>
//       <li>prop2:{o.prop2}</li>
//       <li>prop3:{o.prop3}</li>
//     </ul>
//   )
// }

// const o={prop1:"Foo",prop2:"Bar",prop3:"Baz"}

// function App(){
//   return (
//     <>
//     <h1>o</h1>
//     <C o={o}/>
//     </>
//   )
// }

// ==## Q

// function Beer(props){
//   // 강사님 답안
//   // beer 선언하여 irishBeer를 beer로 바꾼다.
//   // const beer=props.beer

//   // 선언하지 않고 irishBeer Object를 그냥 사용할 수 있다.
// return(
//   <ul>
//     <li>Name : {irishBeer.name}</li>
//     <li>Origin : {irishBeer.origin}</li>
//     {/* 삼항연산자(Ternary) : 조건 ? expr if true : expr if false */}
//     {/* '조건' ? '참인 경우 출력 값' : '거짓인 경우 출력 값' */}
//     <li>Available : {irishBeer.available ? "Yes":"No"}</li>
//   </ul>
// )
// }

// const irishBeer={name:"Guinness",origin:"Ireland",available:false}


// function App(){
//   return(
//     <>
//     <h1>Beer</h1>
//     {/* beer =>선언 필요.  */}
//     <Beer irishBeer={irishBeer}/>    
//     </>
//   )
// }

// ==##Q.컴포넌트 반복적으로 출력하기
// map() 사용

// const beers=[
//   {name:"Heineken",origin:"Netherlands"},
//   {name:"Guinness",origin:"Ireland"},
//   {name:"Asahi",origin:"Japan"}

// ]

// function Beer(props){
//   const beer=props.beer;

// return <li>{beer.name}, {beer.origin}</li>
// }

// function App(){
//   // map 메서드 함수 사용할 때 중괄호 대신 소괄호
//   const list=beers.map((beer,index)=>(
//     <Beer key={index} beer={beer}/>
//   ))

//   return(
//     <>
//     <h1>Beer</h1>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )

// }

// children props;

// function C(props){
//   console.log(props)
//   // children은 속성 키가 children이다.
//   const children=props.children;

//   return (
//     <fieldset>
//       {/* legend : fieldset의 제목 */}
//       <legend>C</legend>
//       {/* {children} 있어야 <Foo/> 컴포넌트가 출력된다. */}
//       {children}      
//     </fieldset>
//   )
// }

// function Foo(){
//   return <div>Foo</div>
// }

// function App(){
//   return(
//     <>
//     <h1>App</h1>
//     <C>
//       {/* Foo 컴포넌트는 C 컴포넌트의 children이다 */}
//       <Foo/>
//     </C>
//     </>
//   )
// } 


// ==## Q. children props를 이용해서 맥주 리스트를 만들어보세요

// function Beer(props){
// const children=props.children

// return(
//   // style 속성 적용 할 때 :{중괄호 안에 {중괄호(style 명칭은 카멜케이스로)}}
//   <div style={{borderTop:"1px solid"}}>
//     {children}
//   </div>
// )
// }

// function DutchBeer(){
// return (
//   <>
//   <h3>Heineken</h3>
//   <p>DutchBeer</p>
//   </>
// )
// }

// function IrishBeer(){
//   return (
//     <>
//     <h3>Guinness</h3>
//     <p>IrishBeer</p>
//     </>
//   )

// }

// function App(){


//   return(
//     <>
//     <h1>Beers</h1>
//     <Beer>
//       <DutchBeer/>
//     </Beer>
//     <Beer>
//       <IrishBeer/>
//     </Beer>


//     </>
//   )
// }

// Component tree

// function Foo(props){
//   const children=props.children

//   return (
//     <fieldset>
//       <legend>Foo</legend>
//       {children}
//     </fieldset>
//   )
// }
// function Bar(props){
//   const children=props.children

//   return (
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Baz(){
//   return <div>Baz</div>
// }

// function App()
// {
//   return (
//     <Foo>
//       <Bar>
//         <Baz/>
//       </Bar>
//     </Foo>
//   )
// }

// ==##Q.

// function Beers(props){
//   const children=props.children
// return (
//   <fieldset>
//     <legend>Beers</legend>
//       {children}
//   </fieldset>
// )
// }

// function European(props){
//   const children=props.children
//   return (
//     <fieldset>
//     <legend>European beers</legend>
//     {children}
//   </fieldset>
//   )

// }

// function Beer1(){
//   return(
//     <ul>
//       <li>Heineken</li>
//       <li>Guinness</li>
//     </ul>

// )
// }
// function Beer2(){
//   return(
//     <ul>
//       <li>Asahi</li>
//       <li>Kloud</li>
//     </ul>
// )
// }

// function Asian(props){
//   const children=props.children
//   return (
//   <fieldset>
//     <legend>Asian beers</legend>
//     {children}
//   </fieldset>
//   )

// }

// function App(){
//   return(
//     <>
//   <Beers>
//     <European>
//       <Beer1 />
//     </European>
//     <Asian>
//       <Beer2/>
//     </Asian>

//   </Beers>
//     </>
//   )

// }

// 강사님 답안
// 부모태그에 ul까지 설정 > li에 {children}
// beer의 명칭으로 하나씩 li 설정 
// <></> 대신 <Beers></Beers> 사용

// function App(){
//   return(
//     <Beers>
//       <EuropeanBeers>
//         <DutchBeer/>
//         <IrishBeer/>
//       </EuropeanBeers>
//       <AsianBeers>
//         <JapaneseBeer/>
//         <KoreanBeer/>
//       </AsianBeers>

//     </Beers>
//   )
// }

// // {children}을 매개변수로 하면, children을 선언하지 않아도 된다.
// function Beers({children}){
//   return(
//     <fieldset>
//       <legend>Beers</legend>
//       {children}
//     </fieldset>
//   )
// }

// function EuropeanBeers(props){
//   const children=props.children;
//   return(
//     <fieldset>
//       <legend>European beers</legend>
//       <ul>
//         {children}
//       </ul>
//     </fieldset>
//   )
// }

// function AsianBeers(props){
//   const children=props.children;
//   return (
//     <fieldset>
//       <legend>Asian beers</legend>
//       <ul>
//         {children}
//       </ul>
//     </fieldset>
//   )
// }

// function DutchBeer(){
//   return (
//     <li>Heineken</li>
//   )
// }

// function IrishBeer(){
//   return (
//     <li>Guinness</li>
//   )
// }

// function JapaneseBeer(){
//   return(
//     <li>Asahi</li>
//   )
// }

// function KoreanBeer(){
//   return(
//     <li>Kloud</li>
//   )
// }

// ==## 1019
// children에 props 전달하기 (import 수정 import React -> import React, {createContext, useContext})

// const FooContext=createContext();

// function Foo(props){
//   const children=props.children

//   // 함수범위(지역범위)
//   // Foo 컴포넌트 내에서만 접근할 수 있다.
//   const c="FOO"

//   return(
//     <fieldset>
//       <legend>Foo</legend>
//       <FooContext.Provider value={c}>
//         {children}
//       </FooContext.Provider>
//     </fieldset>
//   )
// }

// function Bar(props){
//   const children=props.children;

//   const x=useContext(FooContext)
//   console.log(x)

//   return(
//     <fieldset>
//       <legend>Bar</legend>
//       {children}

//       {x}   
//     </fieldset>
//   )
// }

// function Baz(props){
//   const foo=useContext(FooContext);

//   // 변수 값은 상관 없다. useContext(createContext이름)만 적용하면 된다.
//   return <div>{foo}</div> //위에 선언한 값으로 {}중괄호 안에 담아 적용한다.
// }

// function App(){
//   return (
//     <Foo>
//       <Bar>
//         <Baz/>
//       </Bar>
//     </Foo>
//   )
// }

// ==## Q.

// const BeersContext = createContext();

// function Beers({ children }) {

//   // 재고관리
//   const availability = {
//     guinness: false,
//     asahi: true,
//     kloud: true
//   }

//   return(
//     <>
//     <h2>Beers &#127866;</h2>
//     <BeersContext.Provider value={availability}>
//     {children}
//     </BeersContext.Provider>
//     </>
//   )
// }

// function EuropeanBeers({ children }) {

//   return(
//     <>
//     <h2>European beers</h2>
//     {children}
//     </>
//   )

// }

// function IrishBeer() {
//   const availability=useContext(BeersContext)
//   return(
//     <>
//     <h3>GUINNESS</h3>
//     {/* true/false => 조건문 사용 */}
//     <p>Available: {availability.guinness ? "Yes":"No"}</p>    
//     </>
//   )

// }

// function AsianBeers({ children }) {
//   return(
//     <>
//     <h2>Asian beers</h2>
//     {children}
//     </>
//   )

// }

// function JapaneseBeer() {
//   const availability=useContext(BeersContext)
//   // const availability 해도 된다. 같은 함수 내에서만 같은 값으로 선언하면 안되는 것.
//   return(
//     <>
//     <h3>ASAHI</h3>
//     <p>Available: {availability.asahi ? "Yes":"No"}</p>
//     </>
//   )
  
// }

// function KoreanBeer() {
//   const availability=useContext(BeersContext)
  
//   return(
//     <>
//     <h3>KLOUD</h3>
//     <p>Available: {availability.kloud ? "Yes":"No"}</p>    
//     </>
//   )
// }

// function App() {

//   return (
//     <Beers>
//       <EuropeanBeers>
//         <IrishBeer />
//       </EuropeanBeers>
//       <AsianBeers>
//         <JapaneseBeer />
//         <KoreanBeer />
//       </AsianBeers>
//     </Beers>

//   )

// }

// # Event

// function App(){
//   function handleClick(e){
//     console.log(e)
//     console.log(e.target)
//   }

//   // attribute: onEventName={callback}
//   // addEventListener("click",callbak)    //Javascript

//   return(
//     <>
//     <h1>click event</h1>
//     <button onClick={handleClick}>Button</button>
//     </>
//   )
// }

// (1) callback에 인자를 전달하지 않을 때
// document.body.addEventListener("click",f);
// function f(e){
//   console.log(e)
// }

// (2) 위와 동일  (익명함수 사용)
// document.body.addEventListener("click",(e)=>{
//   console.log(e)
// })

// (3) callback에 인자가 있을 때
// document.body.addEventListener("click",()=>{
//   console.log(e.target)      //(e)=> 가능하다
//   f("Foo")
// })

// function f(foo){
//   console.log(foo)
// }

// function App(){}

// function App(){
//   function handleClick(foo){
//     console.log(foo)
//   }

//   return (
//     <>
//     <h1>click event</h1>
//     {/* callback > 익명함수 ("Foo"라는 텍스트(인자)를 전달하고 싶을 때 사용.) */}
//     <button onClick={()=>handleClick("Foo")}>Button</button>
//     </>
//   )
// }

// function App(){
//   function handleClick(x){
//     console.log(x)
//   }

//   // 이벤트에서 다른 element가 같은 callback을 사용할 때
  
//   return(
//     <>
//     <h1>Accordion</h1>
//     <button onClick={()=>handleClick("Foo")}>Foo</button>
//     <button onClick={()=>handleClick("Bar")}>Bar</button>
//     <button onClick={()=>handleClick("Baz")}>Baz</button>
//     </>
//   )
// }

// change 이벤트

// function App(){
//   function handleChange(e){
//     console.log(e.target.value)
//   }

//   // keyup과 비슷하다.

//   return (
//     <>
//     <h1>change</h1>
//     <input type="text" onChange={handleChange} />
//     </>
//   )
// }

// ==## Q. Login
// function App(){

  // function handleChange(e){
  //   // console.log(e.target.type)
  //   if(e.target.type=== "text"){
  //     console.log("username:",e.target.value)
  //   } else if (e.target.type==="password"){
  //     console.log("password:",e.target.value)
  //   }
  // }

  // 강사님 답변
  // target 정의 변수에 담아 출력

  // function handleChange(e){
  //   const name=e.target.name;
  //   const value=e.target.value;

  //   console.log(name, value)
  // }

//   return(
//     <>
//     <h1>Login</h1>
//     <div>
//     <label htmlFor="username"> Username</label>
//       <input 
//       type="text" 
//       id="username"
//       name="username"
//       autoComplete="off"
//       onChange={handleChange}
//       />
//     </div>
//     <div>
//     <label htmlFor="password"> Password </label>
//       <input 
//       type="password" 
//       id="password"
//       name="password"
//       autoComplete="off"
//       onChange={handleChange}
//       />
//     </div>
//     </>
//   )

// }

// submit event
// function App(){
//   function handleSubmit(e){
//     // form이 제출되지 않음
//     e.preventDefault();
//     console.log(".")
//     console.log(e.target)
//   }

//   return(
//     // e.target > form
//     <form onSubmit={handleSubmit}>    
//       <h1>Form</h1>
//       <p>...</p>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// ##1024
// # DOM 업데이트
// function App(){
//   // count [state,setState]=useState(initialValue);
//   // state:변수
//   // setState:state를 업데이트하는 메서드
//   // initialValue: state의

//   const [count, setCount]=useState(0);
  
//   return(
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//     <button onClick={()=>setCount(count+1)}>Add</button>
//     </>
//   )
// }

// state Hook 없이 DOM 업데이트 하기
// function App(){
//   let count=0;

//   // DOM을 업데이트하기 위해서는 virtualDOM을 다시 return 해야한다.
//   // virtualDOM을 다시 return하기 위해서는 컴포넌트를 다시 실행해야 한다.
//   // setState는 컴포넌트를 다시 실행한다.
//   // DOM이 없데이트 된다.
//
//   function handleClick(e){
//     count++;
//     console.log(count)        //count는 증가하지만 업데이트는 되지 않는다.
//   }

//   return (
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//      //handleClick 사용하려면 함수를 선언을 해야한다.
//     <button onClick={handleClick}>Add</button>
//     </>
//   )
// }

// 시계
// function App(){
//   console.log("App Loaded!")
//   const initialTime=new Date().toLocaleTimeString();
//   const [time, setTime]=useState(initialTime)

//   // 시계를 작동 > 업데이트해야한다.
//   setTimeout(()=>{
//     const updateTime=new Date().toLocaleTimeString();
//     // 1000ms 마다 setTime이 업데이트 된다.
//     setTime(updateTime)
//   },1000)

//   return(
//     <>
//     <h1>시계</h1>
//     <p>{time}</p>   
//     </>
//   )
// }

// ==##Q.1
// function App(){
//   const [count, setCount]=useState(0);

//   return(
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>

//     <button onClick={()=>setCount(count-1)}>-</button>
//     <button onClick={()=>setCount(count+1)}>+</button>
//     </>
//   )
// }

// ==## Q.2 Subscribe

// function App(){
//   const [subscribe, setSubscribe]=useState(false);

//   // function handleClick(e){   //함수 선언 -> onClick={handleClick}으로 변경.
//   //   console.log(subscribe)    //false 출력.   // subscribe의 설정된 초기값이 계속 출력되는 것. (업데이트를 하지 않았기 때문)
//   //   console.log(!subscribe)   //true
//   // }

//   // function handleClick(e){  //함수 선언 -> onClick={handleClick}으로 변경.
//   //   if(subscribe){
//   //     setSubscribe(false)
//   //   }else{
//   //     setSubscribe(true)
//   //   }
//   // }

//   return(
//     <>
//     <h1>구독하기</h1>

//     {/* 함수를 선언하지 않고 적용 */}
//     <button onClick={()=>setCount(!count)}>
//     {/* 출력하는 공간에 조건문 적용 */}
//     {!count ? "구독하기":"구독중"}</button>
   
//     </>
//   )
// }

// ==## Q.3

// function App(){
//   const [subscribe, setSubscribe]=useState(false);
//   const [subscriber,setSubscribers]=useState(0);

//   // 함수에 조건이 붙을 때에는 따로 선언하여 적용한다.
//   function handleClick(){
//    if (subscribe){
//     setSubscribe(false);
//     setSubscribers(subscriber -1) 
//    }else{
//     setSubscribe(true);
//     setSubscribers(subscriber +1)
//    }
//   }

//   return(
//     <>
//     <h1>Subscribe</h1>
//     <p>구독자 수 : {subscriber}</p>
//     <button onClick={handleClick}>{!subscribe?"구독하기":"구독중"}</button>
//     </>
//   )
// }

// #Form 다루기

// function App(){
//   const [username, setUsername]=useState("")

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log("username:",username)
//     setUsername("") //설정하면 로그인 submit click 이후 input의 value가 빈 문자열로 된다.
//   }

//   function handleChange(e){
//     const value=e.target.value;
//     const username=value.trim();

//     setUsername(username) //현재 함수 내에서 선언한 username

//     // console.log(username)
//     // console.log(value)

//     // console.log(!"") //true (빈 문자열에 not이 붙으면 true)
//     // console.log(!"foo")  //false (문자열에 not이 붙으면 false)
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//       <h1>로그인</h1>
//       <input 
//       type="text"
//       placeholder="Username"
//       // onClick 아니고 onChange
//       onChange={handleChange}
//       value={username}    //setState의 이름과 같게 설정한다.
//       />
//       <button
//       type="submit"
//       disabled={!username}   //버튼을 누를 수 없는 상태 = username이 빈문자열
//       // 또는
//       // disabled={username===""}
//       >
//         로그인
//       </button>
//     </form>
//   )
// }

// ==##Q.Password toggle

// function App(){
//   // 변하는 것을 선언한다.
//   const [type, setType]=useState("password")
  
//   function handleSubmit(e){
//     e.preventDefault();
//   }

//   function handleClick(){
//     if(type==="password"){
//       setType("text")
//     }else{
//       setType("password")
//     }

//   }

  

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Login</h1>
//       <input
//       type={type}
//       placeholder="Password"
//       >
//       </input>
//       <button
//       type="button" 
//       onClick={handleClick}
//       >{type==="password"? "Show":"Hide"}</button>
//     </form>
//   )
// }

// ==##1026

// function App(){
//   const [beers,setBeers]=useState([])

//   // 검색하는 부분
//   function handleChange(e){
//     const name=e.target.value
//     // console.log(name)

//     if(!name){
//       setBeers([]);
//       return;       //return 아래로 실행되지 않음.
//     }

//     const DATA=[
//       {id:"b1",name:"Heineken"},
//       {id:"b2",name:"Guinness"},
//       {id:"b3",name:"Kloud"},
//       {id:"b4",name:"KGB"},
//       {id:"b5",name:"Asahi"},
//     ]

//     // arr.filter(f(arr){
//     //   return Array;
//     // })
//     // 화살표 함수 > arr.filter(arr=>{
//     //   return Array;
//     // })

//     const updateBeers=DATA.filter(beer=>{
//       // String.startsWith(p) : String이 p로 시작하면 true, 아니면 false를 return한다.
//       if(beer.name.startsWith(name)){
//         return beer;
//       }
//     })

//     console.log(updateBeers)

//     setBeers(updateBeers)
//   }

//   const beerList=beers.map((beer,index)=>(
//     <li key={index}>{beer.name}</li>
//   ))

//   return(
//     <>
//     <h1>Live Search</h1>
//     <input 
//     type="text"
//     onChange={handleChange}
//     placeholder="Search"
//     />

   
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }

// Beer form : create

// const initialBeers=[
//   {id:"b1",name:"Heineken"},
// ]

// function App(){
//   const [beers, setBeers]=useState(initialBeers)
//   const [name, setName]=useState("");


//   function handleSubmit(e){
//     e.preventDefault();
  
//     console.log("name:",name);

//     // 형식을 일치시켜주어야 한다. (key와 value가 같으면 하나로 생략이 된다.)
//     //name > useState의 name과 일치
//     const newBeer={id:Math.random(),name:name};
//     console.log(newBeer)

//     console.log(beers)
//     // beers에 newBeer를 추가한다.
//     const updateBeers=[...beers,newBeer]
//     console.log(updateBeers)

//     // beers state를 업데이트 한다.
//     setBeers(updateBeers)

//     // form 제출(submit)하고 마지막에 input을 빈문자열로 비운다.(초기화)
//     setName("")
//   }

//   function handleChange(e){
//     const name=e.target.value
//     setName(name)
    
//     // console.log(name)
//   }

//   const beerList=beers.map(beer=>(
//     <li key={beer.id}>
//       {beer.name}
//       </li>
//   ))

//   return(
//     <>
//     <h1>Beers</h1>
//     <form onSubmit={handleSubmit}>
//     <input
//     type="text"
//     placeholder="Guinness"
//     onChange={handleChange}
//     value={name}
//     />
//     <button
//     type="submit"
//     disabled={!name}
//     >
//       Add
//     </button>
//     </form>

//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )

// }

// #Delete

// const initialBeers=[
//   {id:"b1",name:"Heineken"},
//   {id:"b2",name:"Guinness"},
//   {id:"b3",name:"Kloud"}
// ]

// function App(){
//   // const[array이름, 최종array이름]=useStatae(초기array이름)
//   const [beers, setBeers]=useState(initialBeers);
  
//   function deleteBeer(beerId){

//     console.log(beerId)
//     const updatedBeers=beers.filter(beer=>{
//       if(beer.id !==beerId){
//         return beer   //id가 다른 array들만 출력 (click한 id만 빼고 나머지 array가 출력됨 > delete 효과)
//       }
//     })
//     setBeers(updatedBeers)    //최종 array
//   }
  
//   const beerList=beers.map(beer=>(
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={()=>deleteBeer(beer.id)}>Delete</button>
//     </li>
//   ))

//   return(
//     <>
//     <h1>Beers</h1>
//     <form>
//       <input
//       type="text"
//       placeholder="Guinness"
//       disabled={true} 
//       />
//       <button
//       type="submit"
//       disabled={true}>
//         Add
//       </button>
//     </form>
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }

// #update

// const initialBeers=[
//   {id:"b1",name:"Heineken",available:true},
//   {id:"b2",name:"Guinness",available:false},
//   {id:"b3",name:"Kloud",available:true}
// ]

// function App(){
//   const [beers,setBeers]=useState(initialBeers)

//   function editBeer(beerId){
//     const editedBeers=beers.map(beer=>{
//       if(beer.id===beerId){
//         // list update : {나머지 list + 변경할 key값:변경할 value값}
//           return {...beer, available:!beer.available}
//       }
//       return beer
//     })
//     console.log(editedBeers)
//     setBeers(editedBeers)
//   }
  
//   const beerList=beers.map(beer=>(
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={()=>editBeer(beer.id)}>
//         {beer.available ? "판매중":"품절"}
//       </button>
//     </li>
//   ))
//   return(
//     <>
//     <h1>Beers</h1>
//     <form>
//       <input
//       type="text"
//       placeholder="Guinness"
//       disabled={true}
//       />
//       <button
//       type="submit"
//       disabled={true}
//       >
//         Add
//       </button>
//     </form>
//     <ul>
//       {beerList}
//     </ul>
//     </>
//   )
// }

// #1028
//  합쳐보기

// const initialBeers=[
//   {id:"b1",name:"Heineken",available:true},
//   {id:"b2",name:"Guinness",available:false},
//   {id:"b3",name:"Kloud",available:true},
// ]

// function App(){

// //create
// const [beers, setBeers]=useState(initialBeers);

// const [name, setName]=useState("")

// function handleChange(e){
//   const name=e.target.value;
//   setName(name)
// }

// function handleSubmit(e){
//   e.preventDefault();

//   console.log("name:",name)
//   const newBeer={id:Math.random(),name:name, available:true}
//   const updateBeers=[...beers, newBeer]
//   setBeers(updateBeers)
//   setName("")
// }

// // delete
// function deleteBeer(beerId){
//   const deleteBeer=beers.filter(beer=>{
//     if (beer.id!==beerId){
//       return beer
//     }
//   })
//   setBeers(deleteBeer)
// }

// // update
// function editBeers(beerId){
//   const editedBeer=beers.map(beer=>{
//     if(beer.id===beerId){
//       return {...beer, available:!beer.available}
//     }
//     return beer
//     // console.log("available:",beer.available)
//   })
//   console.log(editedBeer)
//   setBeers(editedBeer)
// }

// const beerList=beers.map(beer=>(
//   <li key={beer.id}>
//     {beer.name} {" "}
//     <button
//     onClick={()=>deleteBeer(beer.id)}
//     >Delete</button>
//     <button
//     onClick={()=>editBeers(beer.id)}
//     >{beer.available?"판매중":"품절"}</button>
//   </li>
// ))

// return(
//   <>
//   <h1>Beers</h1>
//   <form onSubmit={handleSubmit}>
//     <input
//     type="text"
//     placeholder="Guinness"
//     onChange={handleChange}
//     value={name}
//     />
//     <button
//     type="submit"
//     disabled={!name}
//     >
//       Add
//     </button>
//   </form>
//   <ul>
//     {beerList}
//   </ul>
//   </>
// )
// }

// App과 Form 분리

// const initialBeers=[
//     {id:"b1",name:"Heineken",available:true},
//     {id:"b2",name:"Guinness",available:false},
//     {id:"b3",name:"Kloud",available:true},
//   ]

// function App(){

//   const [beers, setBeers]=useState(initialBeers)

//   //beers (state) 업데이트 : 추가
//   function addBeer(name){
//     const newBeer={id:Math.random(),name:name, available:true}

//     const updateBeers=[...beers, newBeer]
 
//     setBeers(updateBeers)
//   }
  

//   //beers (state) 업데이트 : 삭제
//   function deleteBeer(beerId){
//     const deleteBeer=beers.filter(beer=>{
//       if(beer.id!==beerId){
//         return beer;
//       }
//     })
//     setBeers(deleteBeer)
//   }

//   //beers (state) 업데이트 : 편집
//   function editBeer(beerId){
//     const editBeers = beers.map(beer=>{
//       if(beer.id===beerId){
//         return {...beer,available:!beer.available}
//       }
//       return beer
//     })
//     setBeers(editBeers)
//   }

//   const beerList=beers.map(beer=>(
//     <Beer 
//     key={beer.id} 
//     beer={beer}
//     editBeer={editBeer}
//     deleteBeer={deleteBeer}
//     />
//   ))

//   return(
//     <>
//     <h1>Beers</h1>
//     <Form addBeer={addBeer}/>
//     {beerList}
//     </>
//   )
// }

// // 전달인자를 중괄호(object의 key값)로 묶어야한다.
// // function Form (props)
// function Form({addBeer}){
//   //name(state)

//   // Form(addBeer)로 할 경우
//   // const addBeer=props.addBeer
//   const [name, setName]=useState("")
  
//   function handleSubmit(e){
//     e.preventDefault();
//     console.log(addBeer);
//     // addBeer함수 호출
//     addBeer(name);
//     setName("");
//     //setBeer(); 사용 불가
    
//     // console.log("name:", name)
//   }

//   function handleChange(e){
//     // console.log(e.target.value)
//     const name=e.target.value
//     setName(name)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//       type="text"
//       placeholder="Guinness"
//       onChange={handleChange}
//       value={name}
//       />
//       <button type="submit" disabled={!name}>Add</button>
//     </form>
//   )
// }

// function Beer({beer, deleteBeer,editBeer}){
//   return( 
//   <li>
//     {beer.name}
//     <div>
//       <button onClick={()=>deleteBeer(beer.id)}>
//         Delete
//       </button>
//       <button onClick={()=>editBeer(beer.id)}>
//         {beer.available?"판매중":"품절"}
//       </button>
//     </div>
//   </li>
//   )
// }

// ==## 1031

// function App(){
//   const [active, setActive]=useState(false);

//   const style={
//     position:"fixed",
//     bottom:"0",
//     left:"0",
//     width:"100%",
//     // dynamic style
//     maxHeight:active?"100px":"0",
//     backgroundColor:"#eee",
//     transition:"0.2s",
//   }

//   const drawer=(
//     <div style={style} onClick={()=>setActive(false)}>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </div>
//   )

//     return(
//       <>
//       <h1>Drawer</h1>
//       <button
//       onClick={()=>setActive(true)}
//       >
//         Button
//       </button>
//       {drawer}
//       </>
//     )
// }

// ==##Q. Side bar
// function App(){
//   const [active, setActive]=useState(false)

//   // style 하나에서 클래스를 통해 여러개를 만들 수 있다. (따로 선언X)
//   const style={

//     sideBar:{
//       position:"fixed",
//       backgroundColor:"#fff",
//       top:"0",
//       // dynamic
//       left:active?"0":"-200px",
//       zIndex:"1",
//       width:"200px",
//       height:"100%",
//       transition:"0.2s"
//     },
//     overlay:{
//       position:"fixed",
//       top:"0",
//       left:"0",
//       width:"100%",
//       height:"100%",
//       backgroundColor:"rgba(0 0 0 /0.2)",
//       //dynamic
//       display:active?"block":"none"      
//     }
//   }

//   return(
//     <>
//     <h1>Navigation</h1>

//     {/* Button */}
//     <button
//     onClick={()=>setActive(true)}>
//       Button
//     </button>
    
//     {/* Navigation */}
//       <nav style={style.sideBar}>
//         <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//         </ul>
//       </nav>

//       {/* Overlay */}
//       <div 
//       style={style.overlay} 
//       onClick={()=>setActive(false)}>
//       </div>
//     </>
//   )
// }

// function App(){
//   const [index,setIndex]=useState(0);

//   console.log(index)
//   const images=["foo.jpg","bar.jpg","baz.jpg"];

//   const container={
//     width:"100px",
//     height:"100px",
//     backgroundColor:"#ddd",
//     display:"inline-flex",
//     // dynamic
//     transform:`translateX(-${index*100}px)`,
//     transtion:"0.2s"
//   }

//   const item={
//     width:"100%",
//     height:"100%",
//     border:"1px dashed",
//     flexShrink:"0",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center"
//   }

//   const list = images.map(image=>(
//  // key값은 image > value
//     <div key={image}  style={item}>
//       {image}
//     </div>
//   ))

//   return(
//     <>
//     <h1>Carousel</h1>

//     {/* Image */}
//     <div className="">
//       <h3>Images</h3>
//       <div className="container" style={container}>
//         {list}
//       </div>
//     </div>

//     {/* Naviagtion */}
//     <div>
//     <h3>Navigation</h3>
//     <button
//     onClick={()=>setIndex(index-1)}
//     style={{visibility:index===0 &&"hidden"}}
//     >
//       Prev
//     </button>
//     <button
//     onClick={()=>setIndex(index+1)}
//     style={{visibility:index===2 &&"hidden"}}
//     >
//       Next
//     </button>
//     </div>

//     {/* Indicator */}
//     <div>
//       <h3>Indicator</h3>
//       <div>
//         {images.map((image,dot)=>(
//           <span
//           key={dot}
//           style={{color:dot===index&&"red"}}
//           >
//             *
//           </span>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// #Router

// App에서 사용할 함수를 미리 만들어 둔다.

function Home(){
  return <h1>Home</h1>
}

function Posts(){
  return(
    <>
    <h1>Posts</h1>
    <ul>
      <li>
        {/* to : a태그와 유사하다 */}
      <Link to="/post/p1">Post 1</Link>
      </li>
      <li>
      <Link to="/post/p2">Post 2</Link>
      </li>
    </ul>
    </>
  )
}

function Post(){
  // useParams():url로 전달된 parameter를 가지고 있는 객체를 return한다.
  const params=useParams();
  const postId=params.postId;
  
  return(
    <>
    <h1>Post</h1>
    <p>{postId}</p>
    </>
  )
}

function Contact(){
  return <h1>Contact</h1>
}

function NotFound(){
  return <h1>404 NotFound</h1>
}

function App(){
  return (
    // Router로 모두 감싼다 
    // Navigation과 Routes로 크게 나뉜다.
    <Router>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      {/* children으로 Route만 사용할 수 있다. */}
      <Routes>
        {/* path:요청받은 url (경로) / element : 요청 url에 해당하는 컴포넌트 */}
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        {/* /: (콜론) : 파라미터로 간주 */}
        <Route path="/post/:postId" element={<Post/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* NotFound:가장 마지막에 있어야한다. */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
