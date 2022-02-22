import React, { useState } from 'react';

const UseStateBasics = () => {
  //console.log(useState())
  //UseState gives an array of one value and one function
  //the function controlls the value
  //text below is value, setText is function
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if(text === 'random title'){
      setText('Hello World')
    }else{
      setText('random title')
    }
    
  }
  return (
    <>
      <h1>{text}</h1>
      <button
        className='btn'
        type='button'
        onClick={handleClick}
      >
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
