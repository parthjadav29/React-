import { useParams ,Link} from "react-router";

export default function UserDetails() {
  const paramsData = useParams();
  console.log(paramsData.id);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User Details Page</h1>
      <h2>User Id: {paramsData.id}</h2>
      <h3><Link to="/users">Go Back</Link></h3>
    </div>
  );
}
