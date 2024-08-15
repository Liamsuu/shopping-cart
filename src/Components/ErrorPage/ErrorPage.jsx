import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <p>
        This path does not exist, here are some useful pages: <br />
        <Link to="/">Homepage</Link>
        <br />
        <Link to="cart">Cart</Link>
      </p>
    </div>
  );
}
