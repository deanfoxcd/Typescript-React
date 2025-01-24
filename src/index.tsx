import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';
import { StrictMode } from 'react';
import UserSearch from './state/UserSearch';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
