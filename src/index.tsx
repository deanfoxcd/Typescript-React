import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';
import { StrictMode } from 'react';
// import UserSearch from './state/UserSearch';
// import UserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Dean', age: 21 },
  { name: 'Belle', age: 22 },
];

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch />
      {/* <UserSearch users={users} /> */}
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
