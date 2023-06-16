import logo from "../images/logo.svg";
import ilocation from "../images/icon-location.svg";
import iphone from "../images/icon-phone.svg";
import iemail from "../images/icon-email.svg";


import {FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <footer className=" w-full bg-[#00252e] text-white pt-[10rem] pb-[4rem] px-[1rem]
                        xl:pl-[6rem] xl:pr-[4rem]">
      <a href="#"><img src={logo} alt="logo" className=" brightness-[100]"/></a>
      <div className="flex flex-col mt-[3rem]
                      xl:flex-row xl:justify-between">
          <section className="allsec-footer">
            <div className="sec1-footer">
              <img src={ilocation} alt="ilocation" className=" w-[18px] h-[24px]" />
              <div className="div-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div className="sec1-footer">
              <img src={iphone} alt="iphone" />
              <div className="div-footer">+1-543-123-4567</div>
            </div>
            <div className="sec1-footer">
              <img src={iemail} alt="iemail" />
              <div className="div-footer">example@huddle.com</div>
            </div>
          </section>
          <section className="allsec-footer">
            <a href="#" className="sec2-3-footer"><span className="sec2-3nav-footer">About Us</span></a>
            <a href="#" className="sec2-3-footer"><span className="sec2-3nav-footer">What We Do</span></a>
            <a href="#" className="sec2-3-footer"><span className="sec2-3nav-footer">FAQ</span></a>
          </section>
          <section className="allsec-footer">
            <a href="#" className="sec2-3-footer"><span className="sec2-3nav-footer">Career</span></a>
            <a href="#" className="sec2-3-footer"><span className="sec2-3nav-footer">Blog</span></a>
            <a href="#" className="sec2-3-footer"><span className="sec2-3nav-footer">Contact Us</span></a>
          </section>
          <section className="flex flex-col  justify-center items-center
                              xl:justify-between">            
            <section>
                <a href="#" className="i-footer"><FaFacebookF/></a>
                <a href="#" className="i-footer"><FaTwitter/></a>
                <a href="#" className="i-footer"><FaInstagram/></a>
            </section>
            <section>
                &copy; Copyright 2018 Huddle. All rights reserved.
            </section>
          </section>
      </div>
    </footer>
  )
}

export default FooterComponent
