import { Outlet, Link } from "npm:react-router/dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../character">Charakter-Sheet</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;