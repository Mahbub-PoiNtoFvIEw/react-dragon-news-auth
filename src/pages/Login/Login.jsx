import React, { useContext, useState } from "react";
import NavBar from "../shared/NavBar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('see location form login page',location)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        loginUser(email, password)
          .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
          })
          .catch(error =>{
            console.error(error.message);
          })
    };

    const handleShowPassword = () =>{
        setShowPassword(!showPassword);
    }
  
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Please Login!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <div className="absolute right-1 top-12 text-2xl text-slate-500" onClick={handleShowPassword}>
                {
                    showPassword?
                    <FaEyeSlash></FaEyeSlash>
                    :
                    <FaEye></FaEye>
                }
              </div>
            </div>
            <div>
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Login</button>
            </div>
          </form>
          <div className="mb-4 text-center">
            <Link to={`/register`}>
              Do not have an account? please
              <button className="btn btn-active btn-link">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
