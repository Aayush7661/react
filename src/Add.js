import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState();
  const [role, setRole] = useState("");
  // const history = useHistory();

  function submit() {
    console.log({ name, email });
    let data = { name, email, salary, role };
    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="form-control"
      />
      <button onClick={submit} className="btn btn-primary">
        Submit{" "}
      </button>{" "}
    </div>
  );
};

export default Add;

// console.log({ name, email, mobile });
// let item = {
//   name,
//   email,
//   salary,
//   role,
// };
// let result = await fetch("http://localhost:8000/employee", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(item),
// });
//  result = await result.json();
//  console.warn("result", result);
//  localStorage.setItem("user-Info", JSON.stringify(result));
//  history.push("/Show");
