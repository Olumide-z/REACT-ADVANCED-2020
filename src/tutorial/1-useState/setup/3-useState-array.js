import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  // React.useState is just using useState without importing
  const removeItem = (id) => {
    //this means return an array of person.id, that those not matches the id we are passing in.
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
      <>
        {
          people.map((person) => {
            const {id, name} = person;
            return (
              <div key={id} className='item'>
                <h4>{name}</h4>
                <button
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            )
          })
        }
        <button 
          className='btn'
          onClick={() => setPeople([])} 
        >
            Clear items
        </button>
      </>
  );
};

export default UseStateArray;
