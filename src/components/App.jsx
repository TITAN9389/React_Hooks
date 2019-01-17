import React, { useState } from 'react';

import RecordsList from './RecordsList';
import UserList from './UserList';

const App = () => {
  const [record, setRecord] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setRecord('posts')}>Posts</button>
        <button onClick={() => setRecord('todos')}>Todos</button>
      </div>
      <RecordsList record={record} />
    </div>
  );
};

export default App;
