import { useState } from 'react';

const GuestList: React.FC = function () {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  function handleClick() {
    setName('');
    setGuests([...guests, name]);
  }

  return (
    <div>
      <h3>Guest List</h3>

      <ul>
        {guests.map((guest) => {
          return (
            <li key={guest}>
              <p>{guest}</p>
            </li>
          );
        })}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
