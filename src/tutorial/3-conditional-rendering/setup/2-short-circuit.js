import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'hello world';
  // // || if the first value is false, it returns the second. but if it is true, it returns the first
  // const secondValue = text && 'hello world';
  // // && if the first value is false, it returns the first, if it is true, it returns the second
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value : {secondValue}</h1> */}
      <h1>{text || 'John Doe'}</h1>
      <button 
       className='btn'
       onClick={() => setIsError(!isError)}>
         toggle error
      </button>
      {/* { text && <h1>Hello world</h1>}
      {!text && <h1>Hello world</h1>} */}
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error...</p> : (
        <div>
          <h2>There is no Error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
