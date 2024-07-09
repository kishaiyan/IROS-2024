
import agri from "../assets/agritech.jpg"

export default function LogoSection(){
  return(
    
   
      <div className="relative w-full">
        <img className="object-fill" src={agri} alt="Picture of a drone flying over a Agricultural field" style={{width:"100%",}}/>
        <div class="absolute inset-0 flex items-left justify-center">
            <h1 class="text-base md:text-xl lg:text-3xl text-black font-serif">Workshop on AI and Robotics For Future Farming - IROS 2024</h1>
        </div>

        
      </div>
   
  
  )
}