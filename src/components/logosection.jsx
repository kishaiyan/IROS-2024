import logo from "../assets/logo.png"
import agri from "../assets/agritech.jpg"

export default function LogoSection(){
  return(
    <>
      <div className="text-center">
        <h1 className="text-base md:text-xl lg:text-3xl font-serif">Workshop on AI and Robotics For Future Farming - IROS 2024</h1>
        <h1 className="text-blue-600">October 2024</h1>
      </div>
      <div className="flex w-full">
         <img className="object-fill" src={logo} alt="Logo of IROS 2024" style={{width:"50%",}}/>
         <img className="object-fill" src={agri} alt="Picture of a drone flying over a Agricultural field" style={{width:"50%",}}/>
                
      </div>
      </>
  
  )
}