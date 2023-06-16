import grow from "../images/illustration-grow-together.svg";
import flowing from "../images/illustration-flowing-conversation.svg";
import user from "../images/illustration-your-users.svg";


const MainComponent = () => {
  const data=[
  {
    title:'Grow Together',
    paragraph:'Generate meaningful discussions with your audience and build a strong, loyal community.     Think of the insightful conversations you miss out on with a feedback form.',
    imgfrist:false,
    img:grow
  },
  {
    title:'Flowing Conversations',
    paragraph:"You wouldn't paginate a conversation in real life, so why do it online? Our threads     have just-in-time loading for a more natural flow.",
    imgfrist:true,
    img:flowing  
  },
  {
    title:'Your Users',
    paragraph:"It takes no time at all to integrate Huddle with your app's authentication solution.    This means, once signed in to your app, your users can start chatting immediately.",
    imgfrist:false,
    img:user
  }
]


  return (
    <main className="  py-[9rem] pb-[13rem] relative
                      xl:px-[6rem] ">
      <div className="flex flex-col items-center ">
          {data.map((e,i)=>{
            return <section key={i} className={e.imgfrist ?"flex flex-col-reverse xl:flex-row-reverse  card-main "
                                                          :"flex flex-col-reverse xl:flex-row  card-main"}> 
                  <section  className="padding-main">
                      <h1 className="h1-main">{e.title}</h1>
                      <p className="p-main">{e.paragraph}</p>
                  </section>  
                  <section className="padding-main">
                      <img src={e.img} alt={e.img} />
                  </section>  
            </section>
          })}
      </div>
      <div className=" absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2 bg-white border rounded-lg py-[3rem] w-[95%] flex flex-col justify-center items-center shadow-lg 
                        xl:px-[4rem] xl:w-[50%]">
          <h1 className=" font-fontPoppins font-bold text-[1.2rem] mb-[2rem]
                          xl:text-[1.8rem]">Ready To Build Your Community?</h1>
          <button className="btn-getstart">Get Started For Free</button>
      </div>
    </main>
  )
}

export default MainComponent
