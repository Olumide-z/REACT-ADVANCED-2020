import React, { useState } from 'react';
import Modal from './Modal';

const Index = () => {
    const [name, setName] = useState('');
    const [people, setPeople] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name){
            const person = {id: new Date().getTime().toString() , name}
            setPeople((people) => {
                return(
                    [...people, person]
                )
            });
            setName('');
            setIsModalOpen('item added')
        }else{
            setIsModalOpen('please type in an item')
        }
       
        
    }

    const handleDelete = (id) => {
       let newUser = people.filter((person) => person.id !== id)
        setPeople(newUser)
    }

    const closeModal = () => {
        setIsModalOpen('');
    }
  return (
      <>
        {isModalOpen && <Modal modalContent={isModalOpen} closeModal={closeModal}/>}
            <form className='form' onSubmit={handleSubmit}>
                <div>
                <input 
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add</button>
                </div>
            </form>
            {
                people.map((person) => {
                    const { id, name } = person;
                    return(
                        <div key={id} className='item'>
                            <h4>{name}</h4>
                            <button onClick={() => handleDelete(id)}>remove</button>
                        </div>
                    )
                })
            }
      </>
  );
};

export default Index;
