import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  handleSearch = () => {
    const found = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: found });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleSearch}>Search</button>
        <p>{user && user.name}</p>
        <span>
          <p>{user && user.age}</p>
        </span>
      </div>
    );
  }
}

export default UserSearch;
