import bghero_desktop from "../images/bg-hero-desktop.svg";
import bghero_mobile from "../images/bg-hero-mobile.svg";
import mockups from "../images/illustration-mockups.svg";
import logo from "../images/logo.svg";


const HeaderComponent = () => {
  return (
    <header className=" relative bg-[#ebfbff] ">
        <img src={bghero_desktop} alt="bghero_desktop" className="hidden w-full xl:block"/>
        <img src={bghero_mobile} alt="bghero_mobile" className=" w-full xl:hidden"/>
        <div    className=" absolute top-0 left-0 w-full h-full px-[1rem] pt-[2rem] 
                            lg:px-[4rem] xl:px-[5rem] xl:py-[3rem]">
            <section className="flex justify-between items-center">
                <a href="#" className=" w-[100px] h-auto xl:w-auto"><img src={logo} alt="logo" /></a>
                <button className="btn-try">Try It Free</button>
            </section>
            <section className="flex flex-col mt-[4rem] 
                                xl:flex-row xl:justify-between xl:items-center xl:mt-[3rem]">
                <section className="w-[100%] flex flex-col items-center 
                                    xl:w-[40%] xl:items-start">
                    <h1 className=" h1-header">Build The Community Your Fans Will Love</h1>
                    <p className="p-header"> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                        Create connections with your users as you engage in genuine discussion. 
                    </p>
                    <button className="btn-getstart">Get Started For Free</button>
                </section>
                <section className=" w-[100%] xl:w-[55%]">
                    <img src={mockups} alt="mockups" />
                </section>
            </section>
        </div>
    </header>
  )
}

export default HeaderComponent
