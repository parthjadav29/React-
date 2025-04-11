import { useEffect, useState} from "react";
import { redirect, useParams,useNavigate } from "react-router";


export default function UserEdit() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = `http://localhost:3000/users/${id}`;
  const navigate = useNavigate();


  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);

    setName(response.name);
    setAge(response.Age);
    setEmail(response.email);
  };

  const UpdateUser = async () => {
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        Age: age,
        email: email,
      }),
    });
    response = await response.json();
    console.log(response);

    if (response) {
      alert("User Updated Successfully");
      navigate("/");
      
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Edit User Page</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <input type="text" placeholder="Age"  value={age} onChange={(e) => setAge(e.target.value)}/>
      <br />
      <br />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <button onClick={UpdateUser}>Update User</button>
    </div>
  );
}
