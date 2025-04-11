import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Userlist() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  const DeleteUser = async (id) => {
    let response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("User Deleted Successfully");
      getUserData();
    }
  };

  const EditUser = async (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h1>Make Routes and page For Add User and user list ui</h1>
      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>

      {!loading ? (
        userData.map((user) => (
          <ul key={user.id} className="user-list">
            <li>{user.name}</li>
            <li>{user.Age}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={() => DeleteUser(user.id)}>Delete</button>
              <button onClick={() => EditUser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data Loading...</h1>
      )}
    </div>
  );
}
