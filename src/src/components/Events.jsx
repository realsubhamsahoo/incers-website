import BC from '../images/BC.png';
import BC1 from '../images/BC1.png';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        PRE-MRITTIKA EVENTS
      </h1>

      {/* Event 1 */}
      <div className="flex flex-col md:flex-row bg-blue-100 border border-blue-300 rounded-lg p-4 shadow-lg space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold text-blue-900">BOX CRICKET</h2>
          <p className="text-blue-600 italic">
            Jo khel dil ko itna bhaye usko dekhe bina kese raha jaye
          </p>
          <p className="mt-2 text-gray-700">
          {/* MRITTIKA 2.0 brings you one of those exciting game which is loved by everyone and played by anyone, Cricket in the small pitch played by less players but watched by much people Box cricket.<br>

Gear up everyone to see the short format of cricket with boys and girls in a combined team of 7 players each, a huge crowd of NITR to watch out you so make your preparation at a fantastic level so that you can win awards and goodies worth 1k and felicitation ceremony for the players also so that you can have a memorable evening to have fun and test of your sportsmanship too.</br> */}
             MRITTIKA 2.0 brings you one of those exciting game which is loved by everyone and played by anyone, Cricket in the small pitch played by less players but watched by much people Box cricket.
             <br/>
             <br/>
             Gear up everyone to see the short format of cricket with boys and girls in a combined team of 7 players each, a huge crowd of NITR to watch out you so make your preparation at a fantastic level so that you can win awards and goodies worth 1k and felicitation ceremony for the players also so that you can have a memorable evening to have fun and test of your sportsmanship too.
          </p>
          {/* <p className="mt-4 text-gray-600">
            Event Date: 5th April 2023 | Location: Basketball Court
          </p> */}
          <a
            href="#"
            className="mt-2 bg-transparent text-blue-500 px-3 py-2 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border hover:border-blue-500 w-32"
          >
            Register Here
          </a>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="bg-blue-100 h-48 md:h-64 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={BC}
              alt="Box Cricket"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Event 2 */}
      <div className="flex flex-col md:flex-row bg-blue-100 border border-blue-300 rounded-lg p-4 shadow-lg space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold text-blue-900">BADMINTON</h2>
          <p className="text-blue-600 italic">
            Challenge yourself and others in the ultimate badminton battle!
          </p>
          <p className="mt-2 text-gray-700">
          Come and join us for a day of fun as MRITTIKA 2024 brings you the sport of badminton where you will be competing in singles. The competition will start with elimination rounds where only the best players will advance to the finals. At the end of the event, winners will be awarded with rewards and goodies worth ₹1k.<br/><br/>

So, do not miss out on the electric atmosphere as players battle it out for victory.
          </p>
          {/* <p className="mt-4 text-gray-600">
            Event Date: 6th April 2023 | Location: Indoor Stadium
          </p> */}
          <a
            href="#"
            className="mt-4 bg-transparent text-blue-500 px-3 py-2 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border hover:border-blue-500 w-32"
          >
              Register Here
          </a>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="bg-blue-100 h-48 md:h-64 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={BC1}
              alt="Badminton"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
