import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/">todo</Link>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar fixed opacity-50 z-30 text-white bg-black">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <Link to="/" className="font-semibold text-xl">
            Global Language Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="avatar online mr-4">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-accent">Login</button>
            </Link>
          )}
          {user && (
            <button onClick={handleLogOut} className="btn btn-accent">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
