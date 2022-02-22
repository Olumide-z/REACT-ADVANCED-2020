import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer}/>
          <button type='submit'>submit</button>
        </div>
      </form>
      <h1 ref={divContainer}>Hello WORLD</h1>
    </>
  );
};

export default UseRefBasics;