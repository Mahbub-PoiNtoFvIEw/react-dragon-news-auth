import React, { useContext, useState } from "react";
import NavBar from "../shared/NavBar/NavBar";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {createUser} = useContext(AuthContext);
    
    const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    
    createUser(email, password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error=>{
        console.error(error);
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
          <h1 className="text-4xl font-bold">Please Register!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
              <div
                className="absolute right-1 top-12 text-2xl text-slate-500"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
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
              <button className="btn btn-primary text-white">Register</button>
            </div>
          </form>
          <div className="mb-4 text-center">
            <Link to={`/login`}>
              already have an account? please
              <button className="btn btn-active btn-link">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
