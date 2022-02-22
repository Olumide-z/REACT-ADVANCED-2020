import React, { useState, useEffect } from 'react';
// by default useEffect runs after every re-render
// cleanup function
// second parameter - array of dependency
// adding second parameter allows the use effect runs on the initial render
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect');
    if(value >= 1){
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  //in the above case, the useEffect will run on initial render
  //and it will also run each time the value is updated
  useEffect(() => {
    console.log('Hello World')
  }, [])
  console.log('render component');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
