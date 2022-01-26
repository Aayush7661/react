import React, { useEffect, useState } from "react";

function Show() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee").then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Salary</td>
          <td>Role</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.user_id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.salary}</td>
            <td>{item.role}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Show;
