import { Link } from "react-router";

export default function UserList() {
  const userData = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Vijay" },
    { id: 4, name: "Rajesh" },
    { id: 5, name: "Mohan" },
    { id: 6, name: "Tony" },
  ];

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User List Page</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </h4>
        </div>
      ))}

      <h1>User List Page with Name in URL</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={"/users/" + item.id + "/" + item.name}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
