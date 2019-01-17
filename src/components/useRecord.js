import { useState, useEffect } from 'react';
import axios from 'axios';

const RecordsList = record => {
  const [records, setRecords] = useState([]);

  const fetchResources = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${record}`
    );
    setRecords(res.data);
  };

  useEffect(
    () => {
      fetchResources(record);
    },
    [record]
  );

  //2nd approach - different Syntax
  /* useEffect(
    () => {
      (async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/${record}`
        );
        setRecords(res.data);
      })(record);
    },
    [record]
  ); */

  return records;
};

export default RecordsList;
