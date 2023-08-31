import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

import axios from "axios";
const GetUser = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((res) => {
        setUserList(res);
      });
  }, []);

  return (
    <>
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th >First Name</th>
          <th>Last Name</th>
          
        </tr>
      </thead>
      <tbody>
       {userList.map((k,i)=>(
        <tr>
            <td>{k.userId}</td>
            <td>{k.title}</td>
            <td>{k.body}</td>
        </tr>
       ))}
        
      </tbody>
    </Table>
    
    </>
  );
};

export default GetUser;
