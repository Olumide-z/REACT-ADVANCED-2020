import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  
  const handleClick = () => {

  }
  return (
    <>
      <h2>{title}</h2>
      <button 
        type='button' 
        className='btn'
        onClick={handleClick}>
          Change Title
        </button>
    </>
  );
};

export default ErrorExample;
