import logo from "../assets/logo.png";

export default function LogoSection(){
  return(
    <>
    <div>
      <h1 className="text-3xl text-blue-800">Workshop on AI and Robotics For Future Farming - IROS 2024</h1>
      <br></br>
      <img src={logo} alt="IROS-2024-logo" />
    </div>
    </>
  )
}