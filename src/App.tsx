import React from 'react';
import UserList from './components/UserList'
import NameForm from './components/NameForm'

import { User } from './types';

const App = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  return (
      <div>
          <h3>Add new user</h3>
          <NameForm onSubmit={values => setUsers([...users, {...values, id:Date.now()}])} />
          <UserList
              users={users}
              removeUser={id => {
                  setUsers(users.filter(user => user.id !== id))
              }}
          />
      </div>
  );
}

export default App;
