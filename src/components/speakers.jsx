import image1 from "../assets/speakers/speak1.jpeg"
import image2 from "../assets/speakers/speak2.jpg"
import image3 from "../assets/speakers/speak3.jpg"
import image4 from "../assets/speakers/speak4.jpeg"
import image5 from "../assets/speakers/speak5.jpeg"
import image6 from "../assets/speakers/speak6.jpg"
import image7 from "../assets/speakers/speak7.jpeg"
import image9 from "../assets/speakers/speak9.png"
import image10 from "../assets/speakers/speak10.jpeg"
import image11 from "../assets/speakers/speak11.jpg"
import image12 from "../assets/speakers/speak12.jpeg"

import { Speaker } from "../sub-components/speaker-card"


export default function Speakers(){
  return(
    <>
    <h1 className="text-3xl mb-10">Speakers</h1>
    <div className="grid md:grid-cols-2">
      <Speaker image={image1} title="Modular agricultural robotic systems (MARS) for real-time in-field phenotyping" name='Changying "Charlie" Li ' post="University of Florida" href="https://abe.ufl.edu/people/faculty/li-changying/"/>

     <Speaker image={image4} title="Enhancing Precision Livestock Management with Advanced Machine Vision and Deep Learning Techniques" name="Meili Wang" post="NorthWest A&F University" href="https://cie.nwsuaf.edu.cn/szdw/js/2012110003/index.htm"/>
     
     <Speaker image={image2} title="Development of agriculture robots using AI for smart agriculture in Japan" name="Liangliang Yang" post="Kitami Institute of Technology" href="https://hanadasearch.office.kitami-it.ac.jp/searchen/show/id/1304"/>

     <Speaker image={image5} title="Robotic systems to support the development of resilient and sustainable speciality crops" name="Yu Jiang" post="Cornell University" href="https://cals.cornell.edu/yu-jiang"/>

     <Speaker image={image6} title="AI application for weeds,disease detection and management" name="Muhammad Naveed Tahir" post="PMAS-Arid Agriculture University Rawalpindi" href="https://www.uaar.edu.pk/fcfs/faculty_details.php?dept_id=1&fac_id=93"/>


     <Speaker image={image9} title="AI Based 3D Modeling and Assessment for Sustainable Agriculture and Environment" name="Guoyu Lu" post="University of Georgia" href="https://engineering.uga.edu/team_member/guoyu-lu/"/>

     <Speaker image={image3} title="Challenges for future autonomous greenhouse farming" name="Lakmal Seneviratne" post="Center for Autonomous Robotic Systems" href="https://www.ku.ac.ae/college-people/lakmal-seneviratne"/>

     <Speaker image={image10} title="Active Perception for Fruit mapping and Autonomous Harvesting" name="Maren Bennewitz" post="University of Bonn" href="https://www.hrl.uni-bonn.de/Members/maren"/>

     <Speaker image={image12} title="Mobile robotic platform for specialty crop cultivation" name="Guoqiang Ren" post="Zhejiang University" href="https://scholar.google.com/citations?user=_nvSuNUAAAAJ&hl=en"/>

     <Speaker image={image11} title="In-field High-resolution 3D Plant Phenotyping" name="Sven Behnke" post="University of Bonn" href="https://www.ais.uni-bonn.de/behnke/"/>

     
      </div>
      <br></br>   
    </>
  )
}
