import React from 'react';
import useRecords from './useRecord';

const UserList = () => {
  const users = useRecords('users');

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
