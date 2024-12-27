import React from 'react';

const Landingbe = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">THEME OF THE CONFERENCE</h1>
        <ul className="list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li>Current status and Future Trends in the Manufacturing of Refractories.</li>
          <li>Diversified application of Refractories in Ferrous and Non-Ferrous Industries.</li>
          <li>Advancements in Glass Science and Technology.</li>
          <li>Sensors and Actuators.</li>
          <li>Ceramic Membranes and Porous Materials for desalination, water treatment & purification for industrial waste disposal.</li>
          <li>BioCeramics.</li>
          <li>Ceramics for energy applications (Batteries, Supercapacitors, SOFC, Thermoelectric, Electrocatalyst, Photocatalysts, solar cell).</li>
          <li>Industry 4.0 & Lean Manufacturing concept in Ceramic Industry.</li>
          <li>Reduction of Carbon Footprint and emergence of green manufacturing.</li>
          <li>Recent Advancements in whiteware Industries.</li>
          <li>Magnetics and Dielectric Ceramics.</li>
          <li>Ceramics for building materials.</li>
          <li>Additive Manufacturing in Ceramics.</li>
        </ul>

        <h2 className="text-2xl font-bold text-center text-gray-900 mt-12 mb-6">TECHNICAL SESSION</h2>
        <div className="bg-blue-100 py-8 px-6 rounded-lg">
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Plenary Lectures/Invited Lectures</h3>
              <p>Industry delegates/Academic Experts are invited for the same to share their words of wisdom on the current affairs related to their ongoing work/Research: with a base solely contemplating on the ceramic industry within a window of around half an hour. Lectures proposed for the aforementioned issue are based on accountable registrations.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Contributory Lectures</h3>
              <p>Industry delegates/Academic Experts who wish to present their ongoing work /Research paper are also welcome to contribute to the conference with a base solely contemplating on the ceramic industry within a window of around half an hour. Lectures proposed for the aforementioned issue are based on accountable registrations.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Panel discussions</h3>
              <p>Industry delegates/Academic Experts are also cordially welcomed to be a part of the panel within a two-hour window per discussion in a conference of tentatively 10 panellists (liable to changes depending on registrations). The agenda might include topics from both basic (refractory, glass etc.) and advanced ceramics (nanoceramics etc.) that inculcate ongoing agenda the firm might be working on.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Poster Presentations (open to all categories)</h3>
              <p>Industry Delegates/Academic Experts/Research Scholars/Students can present their research/project work in the form of a poster. The presenter can explain to the audience their topic and based on the satisfaction level of the audience, cash prizes/goodies will be provided.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mt-12 mb-6">FUN EVENTS</h2>
        <div className="space-y-6">
          <div className="bg-blue-100 py-8 px-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">PowerPoint Karaoke</h3>
            <p>A fun PowerPoint Karaoke event to challenge both the author of the slide and the presenter to improve their communication skills. Submit or Present a Slide (or Both!)</p><br/>
            <p>Create a PowerPoint slide with a contribution to your research or a materials science-related topic. Do not be too serious! Popular science topics are not the point; we are looking for the funniest story or best design! Topics can range from your actual research to something silly, such as the use of rubber ducks. Be sure to keep it simple so that anyone can present, and keep it clean—inappropriate content will not be accepted.</p><br/>
            <p>During the event, presenters will be assigned a random slide out of the pool of the submitted slides by the authors. Presenters will have five minutes to prepare a two-minute (maximum) presentation. Winners will be selected by anonymous audience voting. Goodies will be awarded to the best three authors and presenters.</p>
            <button className="mt-4 bg-transparent text-blue-500 px-4 py-2 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border hover:border-blue-500">Register Here</button>
          </div>
          <div className="bg-blue-100 py-8 px-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">QUIZ (Mega Hunt Game)</h3>
            <p>The quiz will involve some sort of gameplay where there will be different levels and each level will first begin with a storyline which will be conveyed to the participants through an audio-visual clip prepared by us followed by a series of situational-based questions. The decision whether you proceed to the next level will be determined by your performance in the former level. So basically, every story will have a situation of let us say a combat or a clash where winning or losing will ultimately depend upon their exposure to external factors like extreme temperature, acidic/basic environment, radiation etc. The winners will be judged on how accurately they chose, which will decide finally whether they survived all the levels or were eliminated in any particular level.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingbe;
