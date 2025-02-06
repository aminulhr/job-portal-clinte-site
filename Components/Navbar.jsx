import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/Authconstext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handlelogout = () => {
    logoutUser()
      .then(() => console.log("log out success"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-white dark:bg-gray-900 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <span className="font-bold">Job Portal</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            <li>
              <div>Home</div>
            </li>
          </Link>
          {!user ? (
            <>
              <Link to="/login">
                <li>
                  <div>Login</div>
                </li>
              </Link>
              <Link to="/register">
                <li>
                  <div>Register</div>
                </li>
              </Link>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full" title="">
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src=""
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <div className="justify-between">Add Job</div>
                  </li>
                  <li>
                    <div>My Posted Jobs</div>
                  </li>
                  <li>
                    <div>My Bids</div>
                  </li>
                  <li>
                    <div>Bid Requests</div>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={handlelogout}
                      className="bg-blue-900 block text-center"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
