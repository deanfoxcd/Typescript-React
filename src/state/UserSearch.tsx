import { useState } from 'react';
import EventComponent from '../events/EventComponent';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Dean', age: 21 },
  { name: 'Belle', age: 22 },
];

const UserSearch: React.FC = function () {
  const [name, setName] = useState<string>('');
  const [foundUser, setFoundUser] = useState<
    { name: string; age: number } | undefined
  >();

  function handleSearch() {
    const found = users.find((user) => user.name === name);
    setFoundUser(found);
    setName('');
  }

  return (
    <div>
      User Search
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <EventComponent />
      <button onClick={handleSearch}>Search</button>
      <p>{foundUser && foundUser.name}</p>
      <span>
        <p>{foundUser && foundUser.age}</p>
      </span>
    </div>
  );
};

export default UserSearch;
