import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const [personState, setPersonState] = useState({
    person: [
      { name: 'Dean', age: '34' },
      { name: 'Kook', age: '40' },
    ],
  });

  const switchNameHandler = () => {
    console.log('Button is clicked');
    setPersonState({
      person: [
        { name: 'Dean Kim', age: '34' },
        { name: 'Kook Hee Park', age: '40' },
      ],
    });
  };

  return (
    <div className='App'>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age} />
    </div>
  );
}

export default App;
