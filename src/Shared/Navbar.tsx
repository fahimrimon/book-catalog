import { Link } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { signOut } from "firebase/auth";
const Navbar = () => {
  // const [user] = useAuthState(auth);

  // const handleSignOut = () => {
  //   signOut(auth);
  //   localStorage.removeItem('accessToken');
  // };

  const menuItems = (
    <>
      <li>
        <Link className="hover:text-orange-400 text-black" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:text-orange-400 text-black" to="/AllBooks">AllBooks</Link>
      </li>
      <li>
          <Link className="hover:text-orange-400 text-black" to="/signup">Sign Up</Link>
      </li>
      <li>
          <Link className="hover:text-orange-400 text-black" to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-light border-bottom border">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-light lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 z-[1] shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="ml-6 text-black normal-case text-3xl">Book<span className="text-orange-400">Bazar</span></Link>
      </div>
      <div className="navbar-end mr-16 hidden lg:flex">
        <ul className="text-white text-xl space-x-6 menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
