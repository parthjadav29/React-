import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ApiLoader from "./ApiLoader";
import Userlist from "./Userlist";
import { Routes, Route, NavLink } from "react-router";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";

function App() {
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // async function getUserData() {
  //   const url = "https://dummyjson.com/users";
  //   let response = await fetch(url);
  //   response = await response.json();

  //   setUserData(response.users);
  // }

  // console.log(userData);
  return (
    <>
      <div>
        {/* <h1>Fetch Data FRom API</h1>
        <ul className="user-li user-header">
          <li>First Name</li>
          <li>Last Name</li>
          <li>Age</li>
        </ul>
        {userData.map((user) => {
          return (
            <div key={user.id}>
              <ul className="user-li">
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.age}</li>
              </ul>
            </div>
          );
        })} */}
        {/* <ApiLoader /> */}

        <ul className="nav-list">
          <li>
            <NavLink to="/">User List</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add User</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/add" element={<UserAdd />} />
          <Route path="/edit/:id" element={<UserEdit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
