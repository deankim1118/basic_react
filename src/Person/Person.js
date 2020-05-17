import React from 'react';

function Person(props) {
  return (
    <div>
      <p>
        I am {props.name} and I am {props.age} years old.
      </p>
      <p>{props.childen}</p>
    </div>
  );
}

export default Person;
