import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><h4 className="homes">Home</h4></Link>
          </li>
          <li>
            <Link to="/blogs"><h4 className="homes">Blogs</h4></Link>
          </li>
          <li>
            <Link to="/contact"><h4 className="homes">Contact</h4></Link>
          </li>
          <li>
            <Link to="/NoPage"><h4 className="homes">NoPage</h4></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;