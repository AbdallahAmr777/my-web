import "./Hero.css";
import Lottie from "lottie-react";
import DevAnimation from "./../../Animation/Dev.json"
const Hero = () => {
  return (
    <section className="hero flex ">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" />
          <div className="icon-verified_user"></div>
        </div>
        <h1 className="title">
          Software engineer, web developer, and designer.
        </h1>
        <p className="subTitle">
         I’m Abdullah, a software engineer and web developer,I build websites well as landing pages useing modern methods.
        </p>
        <div className="all-icons flex">
          <a className="icon icon-twitter"></a>
          <a className="icon icon-instagram"></a>
          <a className="icon icon-github" href="https://github.com/AbdallahAmr777/" target="__blank"></a>
          <a className="icon icon-linkedin-square"  href="https://www.linkedin.com/in/abdullah-amr-7a7ab9268/" target="__blank"></a>
        </div>
      </div>
      <div className="right-section animation ">
      <Lottie className="email-animation"
      
          animationData={DevAnimation} /> 
          </div>
    </section>
  );
};

export default Hero;
