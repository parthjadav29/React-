import { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const CreateUser = async () => {
    console.log(name, age, email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        Age: age,
        email: email,
      }),
    });
    response = await response.json();
    console.log(response);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add User</h1>
      <input
        type="text "
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text "
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text "
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button onClick={CreateUser}>Add User</button>
    </div>
  );
}
