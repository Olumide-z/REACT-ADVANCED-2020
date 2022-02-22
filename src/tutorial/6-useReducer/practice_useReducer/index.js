import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import {data} from '../../../data'

//reducer function
import { reducer } from './reducer';

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}

const Index = () => {
    const [name, setName] = useState('');
    //first set the reducer
    const [state, dispatch] = useReducer(reducer, defaultState); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name){
            const newItem = {id: new Date().getTime().toString(), name}
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setName('')
        }else{
            dispatch({ type: 'NO_VALUE'})
        }
    };

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL'})
    }
  return (
      <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
        <form className='form' onSubmit={handleSubmit}>
            <input 
                name='name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>Add</button>
        </form>
        {
            state.people.map((person) => {
                const {id, name} = person;
                return(
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id})}>
                            remove
                        </button>
                    </div>
                )
            })
        }
      </>
  );
};

export default Index;
