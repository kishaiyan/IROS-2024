import React from "react"
import image1 from "../assets/organizers/image1.jpeg";
import image2 from "../assets/organizers/2.jpeg";
import image3 from "../assets/organizers/3.jpeg";
import image4 from "../assets/organizers/4.jpeg";



export default function Organizers(){
  
  return(
    <>
    <h1 className="text-3xl">Organizers</h1>
        <div className="grid grid-cols-12 gap-3 m-4">
      <div className="col-span-2 flex items-center justify-center">
        <img src={image1} className="w-20 h-20 object-cover" style={{ width: '80px', height: '80px' }} alt="Image" />
      </div>
      <div className="col-span-10 flex flex-col justify-center">
        <h4 className="font-bold">Dr.Yongliang Qiao</h4>
        <p className="italic font-thin text-sm">The University of Adelaide</p>
        <a href="https://www.facebook.com" className="text-blue-800 text-xs hover:underline">Personal Website</a>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3 m-4">
  <div className="col-span-2 flex items-center justify-center">
    <img src={image2} className="w-20 h-20 object-cover" style={{ width: '80px', height: '80px' }} alt="Image" />
  </div>
  <div className="col-span-10 flex flex-col justify-center">
    <h4 className="font-bold">Manoj Karkee</h4>
    <p className="italic font-thin text-sm">Washington State University</p>
    <a href="https://www.facebook.com" className="text-blue-800 text-xs hover:underline">Personal Website</a>
  </div>
</div>
<div className="grid grid-cols-12 gap-3 m-4">
  <div className="col-span-2 flex items-center justify-center">
    <img src={image3} className="w-20 h-20 object-cover" style={{ width: '80px', height: '80px' }} alt="Image" />
  </div>
  <div className="col-span-10 flex flex-col justify-center">
    <h4 className="font-bold">Wessam Essam Elssawy</h4>
    <p className="italic font-thin text-sm">Agricultural Engineering Research Institute,Egypt</p>
    <a href="https://www.facebook.com" className="text-blue-800 text-xs hover:underline">Personal Website</a>
  </div>
</div>
<div className="grid grid-cols-12 gap-3 m-4">
  <div className="col-span-2 flex items-center justify-center">
    <img src={image4} className="w-20 h-20 object-cover" style={{ width: '80px', height: '80px' }} alt="Image" />
  </div>
  <div className="col-span-10 flex flex-col justify-center">
    <h4 className="font-bold">Alen Alempijevic</h4>
    <p className="italic font-thin text-sm">University of Technology Sydney</p>
    <a href="https://www.facebook.com" className="text-blue-800 text-xs hover:underline">Personal Website</a>
  </div>
</div>
<br></br>
    </>
  )
}