import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../socialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
    <h1 className="text-4xl text-center">Please Login</h1>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
      
        <div className="card   shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className="text-center">
              New here? <Link to="/register">create an account</Link>{" "}
            </p>
            <div className="text-center"></div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
