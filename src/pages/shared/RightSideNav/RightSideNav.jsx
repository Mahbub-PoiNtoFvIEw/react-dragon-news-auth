import React from "react";
// import {  } from "react-icons/fa";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa6";
import swimming from '../../../assets/swimming.png';
import classImg from '../../../assets/class.png';
import playground from '../../../assets/playground.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-4">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
        <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
        <FaGithub />
          Login With GitHub
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="text-2xl mb-6 font-bold">Find Us On</h2>
        <a className="p-4 flex items-center gap-3 text-lg border rounded-t-lg" href="">
            <FaFacebook></FaFacebook>
            Facebook
        </a>
        <a className="p-4 flex items-center gap-2 text-lg border-x" href="">
            <FaTwitter></FaTwitter>
            Twitter
        </a>
        <a className="p-4 flex items-center gap-2 text-lg border rounded-b-lg" href="">
            <FaInstagram></FaInstagram>
            Instagram
        </a>
      </div>
      <div className="p-4 space-y-3 mb-4">
        <h2 className="text-3xl font-bold">Q Zone</h2>
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
