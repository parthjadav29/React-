import { useEffect, useState } from "react";

export default function ApiLoader() {
  
  const [userData,setUserData]=useState([]);
  const [loading,setLoading]=useState(false);
  
    useEffect(() => {
        setLoading(true)
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response)
    setLoading(false)
  };

  return (
    <div>
      <h1>Intergrate JSON Server API and Loader</h1>
      {
        !loading?
        userData.map((user)=>(
            <ul key={user.id}>
                <li>{user.name}</li>
                <li>{user.Age}</li>
                <li>{user.email}</li>
            </ul>
        ))
        :<h1>Data Loading...</h1>
      }
    </div>
  );
}
