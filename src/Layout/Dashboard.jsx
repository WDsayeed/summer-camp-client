import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useTitle from "../hooks/useTitle";

const Dashboard = () => {
  useTitle('Dashboard')
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            <Link to="/">Home</Link>
          </li>

          {isAdmin ? (
            <>
              <li>
                <Link to='/dashboard/manageclasses'>Manage Classes</Link>
              </li>
              <li>
                <Link to='/dashboard/manageusers'>Manage Users</Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to='/dashboard/addclass'>Add a Class</Link>
              </li>
              <li>
                <Link to='/dashboard/myclass'>My Classes</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/dashboard/myselectedclass'>My Selected Classes</Link>
              </li>
              <li>
                <Link to='/dashboard/myenrolledclass'>My Enrolled Classes</Link>
              </li>
              <li>
                <Link to='/dashboard/paymentHistory'>Payment History</Link>
              </li>
            </>
          )}
        </ul>
        {/* <ul>
<li>Home</li>
{isAdmin ? (
<li>Show this</li>
) : (
isInstructor ? (
<li>Show this</li>
) : (
<li>Show this</li>
)
)}
<li>About</li>
<li>Contact</li>
</ul> */}
      </div>
    </div>
  );
};

export default Dashboard;
