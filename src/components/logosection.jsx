
import agri from "../assets/agritech.jpg"

export default function LogoSection(){
  return(
    <>
   
      <div>
      <h1 className="text-3xl text-blue-800">Workshop on AI and Robotics For Future Farming - IROS 2024</h1>

        <img className="object-fill" src={agri} alt="Picture of a drone flying over a Agricultural field" style={{width:"100%",}}/>
      </div>
   
    </>
  )
}