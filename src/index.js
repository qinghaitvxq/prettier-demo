import React, { Component } from 'react';
// console.log('hello'+
//   'world'+
//     +
// "test" +
//     "world"
// );

// function foo() { console.log('weird code ...')}

// foo(

// )

// const myClick=()=>{console.log('hello world')}

// class App extends Component{
//     render(){
//         return(
//             <div><a href="test.com" target="_black" ref="test">hello</a></div>
//         )
//     }

// }

console.log('hello' + 'world' + +'test' + 'world');

function foo() {
  console.log('weird code ...');
}

foo();

const myClick = () => {
  console.log('hello world');
};

class App extends Component {
  render() {
    return (
      <div>
        <a href="test.com" target="_black" ref="test">
          hello world
        </a>
      </div>
    );
  }
}
