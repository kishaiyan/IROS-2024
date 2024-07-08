import image1 from "../assets/speakers/speak1.jpeg"
import image2 from "../assets/speakers/speak2.jpg"
import image3 from "../assets/speakers/speak3.jpeg"
import image4 from "../assets/speakers/speak4.jpeg"
import image5 from "../assets/speakers/speak5.jpeg"
import image6 from "../assets/speakers/speak6.jpg"
import image7 from "../assets/speakers/speak7.jpeg"
import image8 from "../assets/speakers/speak8.jpeg"
import image9 from "../assets/speakers/speak9.png"

export default function Speakers(){
  return(
    <>
    <h1 className="text-3xl">Speakers</h1>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image1} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
          <p className="text-base text-wrap font-extrabold">Sensing, and Robotics for High-Throughput Phenotyping</p>
          <h6 className="font-base">Chanying (Charlie) Li</h6>
          <p className="italic font-thin text-sm">University of Florida</p>
          <a href="https://abe.ufl.edu/people/faculty/li-changying/" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image2} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">Development of agriculture robots using AI for smart agriculture in Japan</p>
          <h4 className="font-base">Liangliang Yang</h4>
          <p className="italic font-thin text-sm">Kitami Institute of Technology</p>
          <a href="https://hanadasearch.office.kitami-it.ac.jp/searchen/show/id/1304" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image3} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">On-the-Fly Crop Phenotyping Through Close-Proximity Drone Sensing</p>
          <h4 className="font-base">Dr. João Valente</h4>
          <p className="italic font-thin text-sm">Spanish National Research Council(CSIC)</p>
          <p className="italic font-thin text-sm">Centre for Automation and Robotics(CAR)</p>
          <a href="https://www.joao-valente.com/" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image4} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">Enhancing Precision Livestock Management with Advanced Machine Vision and Deep Learning Techniques</p>
          <h4 className="font-base">Meili Wang</h4>
          <p className="italic font-thin text-sm">NorthWest A&F University</p>
          <a href="https://cie.nwsuaf.edu.cn/szdw/js/2012110003/index.htm" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image5} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">Robotic systems to support the development of resilient and sustainable speciality crops</p>
          <h4 className="font-base">Yu Jiang</h4>
          <p className="italic font-thin text-sm">Cornell University</p>
          <a href="https://cals.cornell.edu/yu-jiang" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image6} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">AI application for weeds,disease detection and management</p>
          <h4 className="font-base">Muhammad Naveed Tahir</h4>
          <p className="italic font-thin text-sm">PMAS-Arid Agriculture University Rawalpindi</p>
          <a href="https://www.uaar.edu.pk/fcfs/faculty_details.php?dept_id=1&fac_id=93" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image7} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">TBD</p>
          <h4 className="font-base">Henry Gordon-Smith</h4>
          <p className="italic font-thin text-sm">CEO,Agritecture</p>
          <a href="https://henrygordonsmith.com/" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image8} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
          <p className="text-base text-wrap font-extrabold">The Future of biofarm(TBD)</p>
          <h4 className="font-base">Yazen Al Kodmani</h4>
          <p className="italic font-thin text-sm">Emirates Bio Farm</p>
          <a href="https://uaepavilionexpo.com/film/yazen-al-kodmani-organic-farmer/" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image9} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
          <p className="text-base text-wrap font-extrabold">Field Robotics(TBD)</p>
          <h4 className="font-base">Guoyu Lu</h4>
          <p className="italic font-thin text-sm">University of Georgia</p>
          <a href="https://engineering.uga.edu/team_member/guoyu-lu/" className="text-blue-800 text-xs hover:underline">Personal Website</a>
        </div>
      </div>   
      <br></br>   
    </>
  )
}
