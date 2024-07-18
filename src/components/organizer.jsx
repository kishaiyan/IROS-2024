import React from "react"
import image1 from "../assets/organizers/image1.jpeg";
import image2 from "../assets/organizers/2.jpeg";
import image3 from "../assets/organizers/3.jpeg";
import image4 from "../assets/organizers/4.jpeg";



export default function Organizers(){
  
  return(
    <>
    <h1 className="text-3xl">Organizers</h1>
    <div className="grid md:grid-cols-2">
    <div className="grid grid-cols-12 gap-3 m-4">
      <div className="col-span-4 flex items-center justify-center">
        <img src={image1} className="w-15 h-15 object-cover " style={{ width: '150px', height: '150px' }} alt="Image" />
      </div>
      <div className="col-span-8 flex flex-col justify-center">
        <h4 className="font-bold">Dr.Yongliang Qiao</h4>
        <p className="italic font-thin text-sm mt-1">The University of Adelaide</p>
        <a href="https://researchers.adelaide.edu.au/profile/yongliang.qiao" className="text-blue-400 text-xs hover:text-blue-800 mt-1">Personal Website</a>
        <p className="text-sm text-gray-500 mt-1">Email: <a href="mailto:yongliang.qiao@adelaide.edu.au" className="text-gray-500 hover:text-gray-800 text-sm">yongliang.qiao@adelaide.edu.au</a></p>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3 m-4">
  <div className="col-span-4 flex items-center justify-center">
    <img src={image2} className="w-20 h-20 object-cover" style={{ width: '160px', height: '160px' }} alt="Image" />
  </div>
  <div className="col-span-8 flex flex-col justify-center">
    <h4 className="font-bold">Manoj Karkee</h4>
    <p className="italic font-thin text-sm mt-1">Washington State University</p>
    <a href="https://bsyse.wsu.edu/people/faculty/karkee/" className="text-blue-400 text-xs hover:text-blue-800 mt-1">Personal Website</a>
    <p className="text-sm text-gray-500 mt-1">Email: <a href="mailto:%20manoj.karkee@wsu.edu" className="text-gray-500 hover:text-gray-800 text-sm">manoj.karkee@wsu.edu</a></p>
    </div>
</div>
<div className="grid grid-cols-12 gap-3 m-4">
  <div className="col-span-4 flex items-center justify-center">
    <img src={image3} className="w-20 h-20 object-cover" style={{ width: '160px', height: '160px' }} alt="Image" />
  </div>
  <div className="col-span-8 flex flex-col justify-center">
    <h4 className="font-bold">Wessam Essam Elssawy</h4>
    <p className="italic font-thin text-sm mt-1">Agricultural Engineering Research Institute,Egypt</p>
    <a href="https://portal.arid.my/ar-LY/ApplicationUsers/GetProfile/0006-6094" className="text-blue-400 text-xs hover:text-blue-800 mt-1">Personal Website</a>
    </div>
</div>
<div className="grid grid-cols-12 gap-3 m-4">
  <div className="col-span-4 flex items-center justify-center">
    <img src={image4} className="w-20 h-20 object-cover" style={{ width: '160px', height: '160px' }} alt="Image" />
  </div>
  <div className="col-span-8 flex flex-col justify-center">
    <h4 className="font-bold">Alen Alempijevic</h4>
    <p className="italic font-thin text-sm mt-1">University of Technology Sydney</p>
    <a href="https://profiles.uts.edu.au/Alen.Alempijevic" className="text-blue-500 text-xs hover:text-blue-800 mt-1">Personal Website</a>
    <p className="text-sm text-gray-500 mt-1">Email: <a href="mailto:Alen.Alempijevic@uts.edu.au" className="text-gray-500 hover:text-gray-800 text-sm">Alen.Alempijevic@uts.edu.au</a></p></div>
</div>
      </div>
    
<br></br>
</>
  )
}