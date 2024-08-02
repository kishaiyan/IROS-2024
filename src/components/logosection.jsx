import logo from "../assets/logo.png"
import agri from "../assets/Futuristic Farming Scene.webp"

export default function LogoSection(){
  return(
    <>
      <div className="text-center">
        <h1 className="text-base md:text-xl lg:text-3xl font-serif font-bold">IROS 2024 Workshop on AI and Robotics For Future Farming</h1>
       <h1 className="text-blue-600 font-bold">October 14, 2024, 2:00pm (Room No:7)</h1>
      </div>
      <div className="flex w-full">
         <img className="p-8 md:p-12 object-fill" src={logo} alt="Logo of IROS 2024" style={{width:"50%",}}/>
         <img className="p-8 md:p-12 object-fill" src={agri} alt="Picture of a drone flying over a Agricultural field" style={{width:"50%",}}/>
                
      </div>
      </>
  
  )
}