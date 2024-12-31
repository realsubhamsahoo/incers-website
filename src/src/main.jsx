import { StrictMode, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Gallery from './components/App';
import Events from './components/Events';
import Landingbe from './components/Landingbe';
// import Footer from './components/Footer';
import Frontpage from './components2/frontpage';
import Marquee from './components2/marquee';
import PictureSection from './components2/pictureSection';
import Sponsor from './components2/sponsor';

function Main() {
  const scrollRef = useRef(null); // Reference for the scroll container

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current, // Attach to the scroll container
      smooth: true,
      lerp: 0.1, // Adjust scrolling behavior
    });

    return () => {
      locomotiveScroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Gallery />
      <Events />
      <Landingbe />
      {/* <Footer /> */}
      <Frontpage />
      <Marquee />
      <PictureSection />
      <Sponsor />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
