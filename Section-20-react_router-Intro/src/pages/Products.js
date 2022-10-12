import { Link } from "react-router-dom";
export const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Chair</Link>
        </li>
        <li>
          <Link to="/products/p3">A Table</Link>
        </li>
        <li>
          <Link to="/products/p4">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p5">A Teapot</Link>
        </li>
      </ul>
    </section>
  );
};
