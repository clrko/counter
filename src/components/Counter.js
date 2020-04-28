import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const updateField = (event) => {
    setCount(event.target.value);
  }

  return (
    <div>
        <label htmlFor="count">Count initial value :</label>
        <input
          id="count"
          type="text"
          onChange={updateField}
        />
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;