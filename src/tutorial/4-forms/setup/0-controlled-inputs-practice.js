import React, { useState } from 'react';

const Setup = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const person = {id: new Date().getTime().toString(), firstName, email}
        if(firstName && email){
            setPeople((people) => {
                return [...people, person]
            });
            setFirstName('');
            setEmail('');
        }else{
            console.log('empty')
        }
    }
  return (
      <>
        <article>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='firstname'>Name : </label>
                    <input 
                        id='firstname'
                        type='text'
                        name='firstname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email : </label>
                    <input 
                        id='email'
                        type='text'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type='submit'>add person</button>
            </form>
            {
                people.map((person) => {
                    const {id, firstName, email} = person;
                    return(
                        <div key={id} className='item'>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    )
                })
            }
        </article>
      </>
  );
};

export default Setup;
