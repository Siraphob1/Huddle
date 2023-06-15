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
    <main className=" 
                      xl:px-[6rem] xl:py-[3rem]">
      <div className="flex flex-col ">
          {data.map((e,i)=>{
            return <section key={i} className={e.imgfrist ?"flex flex-row-reverse  card-main"
                                                          :"flex flex-row  card-main"}> 
                  <section  className="pl-main">
                      <h1 className="h1-main">{e.title}</h1>
                      <p className="p-main">{e.paragraph}</p>
                  </section>  
                  <section className="pl-main">
                      <img src={e.img} alt={e.img} />
                  </section>  
            </section>
          })}
      </div>
    </main>
  )
}

export default MainComponent
