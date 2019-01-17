import React from 'react';
import useRecords from './useRecord';

const ResourceList = ({ record }) => {
  const records = useRecords(record);

  return (
    <ul>
      {records.map(i => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
