import bghero_desktop from "../images/bg-hero-desktop.svg";
import bghero_mobile from "../images/bg-hero-mobile.svg";
import mockups from "../images/illustration-mockups.svg";
import logo from "../images/logo.svg";


const HeaderComponent = () => {
  return (
    <header className=" relative">
        <img src={bghero_desktop} alt="bghero_desktop" className="hidden w-full lg:block"/>
        <img src={bghero_mobile} alt="bghero_mobile" className=" w-full lg:hidden"/>
        <div    className=" absolute top-0 left-0 w-full h-full 
                            lg:px-[5rem] lg:py-[3rem]">
            <section className="flex justify-between">
                <a href="#"><img src={logo} alt="logo" /></a>
                <button className="btn-try">Try It Free</button>
            </section>
            <section className="flex
                                lg:flex-row lg:justify-between lg:mt-[3rem]">
                <section className=" w-[34%]">
                    <h1 className="">Build The Community Your Fans Will Love</h1>
                    <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                        Create connections with your users as you engage in genuine discussion. 
                    </p>
                    <button>Get Started For Free</button>
                </section>
                <section className=" w-[60%]">
                    <img src={mockups} alt="mockups" />
                </section>
            </section>
        </div>
    </header>
  )
}

export default HeaderComponent
