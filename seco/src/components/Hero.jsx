import React from "react";
import secoyebo from "../assets/secoyebo.gif";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-5 pt-3">
        <img
          src={secoyebo}
          alt="sumz_logo"
          className="w-96 mx-auto"
        />
      </nav>

      <h1 className="head_text textt">
        <br className="max-md:hidden" />
        <span className="purple_text">
          Welcome to SECO! We've been Expecting you
        </span>
      </h1>
      <h2 className="desc">
        SECO helps you sell your goods and services faster by giving your brand visibilty to 
        thousands of customers waiting to buy from you!
      </h2>
      <h4 className="text-yellow-500">
        We're in a beta testing phase & we need your help{" "}
        <span
          className="purple_text cursor-pointer"
          onClick={() =>
            window.open("https://webdevill.netlify.app", "_blank")
          }
        >
          <a>Kindly proceed to help us make your buisness better by answering these quick easy questions</a>
        </span>
      </h4>
    </header>
  );
};

export default Hero;
