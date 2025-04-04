import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <div>
        <Link to="/">Go To Home Page</Link>
      </div>
      <img
        style={{ width: "60%" }}
        src="https://s3-wp-product.s3.amazonaws.com/wp-content/uploads/2018/03/21182625/MaxPixel.freegreatpicture.com-File-Not-Found-Not-Found-404-Error-2384304.jpg"
        alt=""
      />
    </div>
  );
}
