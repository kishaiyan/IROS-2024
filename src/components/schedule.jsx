import Submission from "./Submission.jsx";

export default function Schedule(){
  return(
    <>
    <p className="text-3xl">Important Dates:</p>
    <ul className="list-disc pl-5">
  <li>Paper Submission deadline: April 03, 2024, 11:59 p.m. (Anywhere on Earth)</li>
  <li>Notification of acceptance: April 15, 2024</li>
  <li>Camera-ready submission: May 1, 2024, 11:59 p.m. (Anywhere on Earth)</li>
  <li>Workshop date: May 13, 2024</li>
</ul>
<br></br>
<h1 className="text-3xl">Schedule</h1>
<br></br>
<table className="items-center justify-center">
  <thead>
    <tr>
      <th className="border-b-2 border-gray-400"><strong>Time</strong>*</th>
      <th className="border-b-2 border-gray-400"><strong>Speaker</strong></th>
      <th className="border-b-2 border-gray-400"><strong>Topic/title</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>14:00 - 14:05...</strong></td>
      <td className="border-b-2 border-gray-300">All Organizers</td>
      <td className="border-b-2 border-gray-300">Welcome and Introduction</td>
    </tr>
    <tr>
      <td className="bg-gray-300 border-b-2 border-gray-300 text-center" colSpan="3">
        <strong>Session 1:Autonomous Systems for Agricultural Operations: novel methods, dedicated robotic concepts, prototypes and applications.<br></br>
        Co-Chairs: Qiao, Karkee</strong>
      </td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>14:05 - 14:20</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Chanying (Charlie) Li</strong> <br></br>(University of Florida)</td>
      <td className="border-b-2 border-gray-300">Invited talk #1 - <strong>Sensing and Robotics for High-throughput Phenotyping</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>14:20 - 14:35</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Liangliang Yang</strong> <br></br>(Kitami Institute of Technology)</td>
      <td className="border-b-2 border-gray-300">Invited talk #2 - <strong>Development of agriculture robots using AI for smart agriculture in Japan</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>14:35 - 14:50</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Dr. João Valente</strong> <br></br> (Spanish National Research Council)</td>
      <td className="border-b-2 border-gray-300">Invited talk #3 - <strong>On-the-Fly Crop Phenotyping Through Close-Proximity Drone Sensing</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>14:50 - 15:05</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Meili Wang</strong> <br></br>(Northwest A&F University)</td>
      <td className="border-b-2 border-gray-300">Invited talk #4 - <strong>Enhancing Precision Livestock Management with Advanced Machine Vision and Deep Learning Techniques</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>15:05 - 15:20</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Guoqiang Ren</strong> <br></br>(Zhejiang University)</td>
      <td className="border-b-2 border-gray-300">Invited talk #5 - <strong>Mobile robotic platform for specialty crop cultivation</strong></td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border-b-2 border-gray-300"><strong>15:20 - 15:35</strong></td>
      <td className="border-b-2 border-gray-300 text-center" colSpan="2">3-min Paper/Poster Presentations (breaks included)</td>
    </tr>
    <tr className="bg-green-200">
      <td className="border-b-2 border-gray-300"><strong>15:35 - 15:55</strong></td>
      <td className="border-b-2 border-gray-300 text-center" colSpan="2"><strong>Session 1: Panel Discussion (Moderator: Qiao and Karkee; Panellists: Invited Speakers of Session 1)</strong></td>
    </tr>
    <tr>
      <td className="bg-gray-300 border-b-2 border-gray-300 text-center" colSpan="3">
        <strong>Session 2:AI and Robotics-driven Solutions for Farm Management: current status, needs and demands for sustainable food production
        <br></br>Co-Chairs: Allen, Wessam</strong>
      </td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>15:55 - 16:10</strong></td>
      <td className="border-b-2 border-gray-300"><strong> Maren Bennewitz</strong> <br></br>(University of Bonn) </td>
      <td className="border-b-2 border-gray-300">Invited talk #6 - <strong>Active Perception for Fruit mapping and Autonomous Harvesting</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>16:10 - 16:25</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Sven Behnke</strong> <br></br>(University of Bonn)</td>
      <td className="border-b-2 border-gray-300">Invited talk #7 - <strong>In-field High-resolution 3-D Plant Phenotyping</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>16:25 - 16:40</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Yu Jiang</strong> <br></br>(Cornell University)</td>
      <td className="border-b-2 border-gray-300">Invited talk #5- <strong>Robotic systems to support the development of resilient and sustainable speciality crops</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>16:40 - 16:55</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Muhammad Naveed Tahir</strong><br></br>(PMAS-Arid Agriculture University)</td>
      <td className="border-b-2 border-gray-300">Invited talks #6 <strong>AI application for weeds, disease detection and management</strong></td>
    </tr>
   
    <tr>
      <td className="border-b-2 border-gray-300"><strong>16:55 - 17:10</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Henry Gordon Smith</strong> <br></br>(CEO of Agritecture)</td>
      <td className="border-b-2 border-gray-300">Invited talk #7 - <strong>TBD</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>17:10 - 17:25</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Yazen Al Kodmani</strong> <br></br>(GM of Emirates Bio Farm)</td>
      <td className="border-b-2 border-gray-300">Invited talk #8 - <strong>The future of biofarm(TBD)</strong></td>
    </tr>
    <tr>
      <td className="border-b-2 border-gray-300"><strong>17:25 - 17:40</strong></td>
      <td className="border-b-2 border-gray-300"><strong>Guoyu Lu</strong> <br></br>(University of Georgia)</td>
      <td className="border-b-2 border-gray-300">Invited talk #9 - <strong>Field Robotics(tentative)</strong></td>
    </tr>
    <tr className="bg-green-300">
      <td className="border-b-2 border-gray-300"><strong>17:40 - 17:55</strong></td>
      <td className="border-b-2 border-gray-300 text-center" colSpan="2">
        <strong>Session 2: Panel Discussion (Moderator: Allen, Wessam : Invited Speakers of Session 2)</strong>
      </td>
    </tr>
    <tr className="bg-orange-300">
      <td className="border-b-2 border-gray-300"><strong>17:55 - 18:00</strong></td>
      <td className="border-b-2 border-gray-300 text-center" colSpan="2">
        Final remarks and close out
      </td>
    </tr>
    <tr className="bg-orange-300">
      <td className="border-b-2 border-gray-300"><strong>18:00 - 19:00</strong></td>
      <td className="border-b-2 border-gray-300 text-center" colSpan="2">
        Networking and Lunch
      </td>
    </tr>
  </tbody>
</table>
   
 <Submission />
    <br></br>
    </>
  );
}

