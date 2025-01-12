// src/component/IncersChapter/Mritika2025.js

import React, { useEffect } from 'react';
import Brochure from '../../images/brochure2019.pdf';
import Navbar from '../../Navbar';
import Footer from '../Footer/Footer';
import './Mrittika2025.css';
import { Prof, ExecuitveMember, TitleS, GoldSilverS, Gallary23 } from './Mrittika2023Data';
import WOW from 'wowjs';
import QRCode from '../../images/logo1.jpg'; // Ensure you have a QR code image in the specified path
const Mritika2025 = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mritika-container">
        {/* Banner Section */}
        <div className="hero-banner">
          <img
            className="hero-img"
            src="/images/MRITTIKA2.0-banner.png"
            alt="Mrittika 2.0 Banner"
          />
        </div>

        {/* Introduction Section */}
        <section className="section-intro">
          <h1 className="text-center mb-4">MRITTIKA 2.0</h1>
          <p className="text-justify">
            The 2nd annual session (MRITTIKA 3.0) of the Indian Ceramic Society, the student
            chapter of NIT Rourkela, aims to bring together leading professionals from academia and
            industries, research scholars, students, and exhibitors to share knowledge and exchange
            ideas on various aspects of ceramic science & technology. This national-level conference
            aims to cover recent advances in the field of structural and engineering ceramics,
            covering a wide range of industrial applications. The 3-day national conference will
            provide the right platform for delegates to address a larger audience on multiple
            thematic areas and ignite young minds. Eminent faculties & industry experts will share
            their knowledge on the current trend and future aspects of ceramics. Early career
            professionals are also encouraged to share their work during the conference, along with
            fun sessions like entrepreneurship talks, PowerPoint karaoke, and quiz competitions.
          </p>
        </section>

        {/* Objective Section */}
        <section className="section-objective container text-center">
          <h2 className="mb-5 wow fadeInUp">OBJECTIVES</h2>
          <p className="wow fadeInUp" data-wow-delay="0.2s">
            The primary objectives of MRITTIKA 2.0 are to foster collaboration among students,
            researchers, and industry professionals, promote innovative research in ceramic science
            and technology, and provide a platform for showcasing advancements and emerging trends
            in the field. By organizing workshops, lectures, and interactive sessions, the conference
            aims to inspire the next generation of ceramic engineers and scientists.
          </p>
        </section>

        {/* Theme Section */}
        <section className="section-theme container mb-5">
          <h2 className="mb-4 text-center wow fadeInUp">CONFERENCE THEME</h2>
          <div className="theme-box wow fadeInUp" data-wow-delay="0.2s">
            <div className="theme-left">
              <h3 className="mb-3">Advancing Ceramic Technology for Sustainable Future</h3>
              <p>
                This theme focuses on the latest advancements in ceramic materials and their applications
                towards creating sustainable and environmentally friendly solutions. Emphasis is placed on
                innovative research, industry collaborations, and the development of eco-friendly ceramic
                products that contribute to a greener future.
              </p>
            </div>
            <div className="theme-right">
              <div className="qr-code-box">
                <img src={QRCode} alt="QR Code" className="qr-code-img" />
                <p>Scan to Learn More</p>
              </div>
            </div>
          </div>
        </section>

        {/* Convenors Section */}
        <section className="section-people container text-center">
          <h2 className="mb-5 wow fadeInUp">CONVENOR</h2>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4 wow fadeInUp">
              <div className="profile-card">
                <img
                  className="profile-img"
                  src="/images/Ritwik.jpg"
                  alt="Prof. Ritwik Sarkar"
                />
                <div className="profile-info">
                  <h6>Prof. Ritwik Sarkar</h6>
                  <h6 className="text-green">
                    <strong>Convenor</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4 wow fadeInUp">
              <div className="profile-card">
                <img
                  className="profile-img"
                  src="/images/Pratihar.jpg"
                  alt="Prof. Swadesh Kumar Pratihar"
                />
                <div className="profile-info">
                  <h6>Prof. Swadesh Kumar Pratihar</h6>
                  <h6 className="text-green">
                    <strong>Convenor</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Professors Section */}
          <h2 className="mb-5 wow fadeInUp">OUR PROFESSORS</h2>
          <div className="row justify-content-center">
            {Prof.map((data, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4 wow fadeInUp">
                <div className="profile-card">
                  <img className="profile-img" src={data.img} alt={data.name} />
                  <div className="profile-info">
                    <h6>{data.name}</h6>
                    <h6 className="text-green">
                      <strong>{data.des}</strong>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Members Section */}
        <section className="section-people container text-center">
          <h2 className="mb-5 wow fadeInUp">EXECUTIVE MEMBERS</h2>
          <div className="row justify-content-center">
            {ExecuitveMember.map((data, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4 wow fadeInUp">
                <div className="profile-card">
                  <img className="profile-img" src={data.img} alt={data.name} />
                  <div className="profile-info">
                    <h6>{data.name}</h6>
                    <h6 className="text-green">
                      <strong>{data.des}</strong>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Members Button */}
        <div className="text-center mb-5">
          <a
            href="https://docs.google.com/spreadsheets/d/1sgN1HQ8HXODLbOcXS6YR5HDRbOcIELPi/edit?usp=share_link&ouid=114663105164561446283&rtpof=true&sd=true"
            title="Go to Our Student Members List"
          >
            <button type="button" className="btn btn-primary btn-large">
              Our Student Members
            </button>
          </a>
        </div>

        {/* Sponsors Section */}
        <section className="section-sponsors container mb-5">
          <h3 className="text-center font-weight-bold wow fadeInUp">
            MRITTIKA SPONSORS 2025
          </h3>
          <p className="text-center">
            "To become a better you, remember to be grateful to people who have contributed to
            making you who you are today."
          </p>

          <h4 className="mt-5 mb-3 font-weight-bold">TITLE SPONSORS</h4>
          <div className="row">
            {TitleS.map((data, index) => (
              <div
                key={index}
                className="col-sm-6 col-md-4 col-lg-3 mb-4 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="sponsor-card">
                  <img className="sponsor-img" src={data.img} alt="Sponsor" />
                  <div className="card-footer text-right pr-2">
                    <a href={data.link}>More Info</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mt-5 mb-3 font-weight-bold">GOLD / SILVER SPONSORS</h4>
          <div className="row">
            {GoldSilverS.map((data, index) => (
              <div
                key={index}
                className="col-sm-6 col-md-4 col-lg-3 mb-4 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="sponsor-card">
                  <img className="sponsor-img" src={data.img} alt="Sponsor" />
                  <div className="card-footer text-right pr-2">
                    <a href={data.link}>More Info</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-gallery mybg-music p-5 text-center">
          <div className="container">
            <h3 className="font-weight-bold mb-4 text-white">GALLERY 2025</h3>
            <div className="row">
              {Gallary23.map((data, index) => (
                <div
                  key={index}
                  className="col-sm-6 col-md-4 col-lg-3 mb-4 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="gallery-box">
                    <img className="img-fluid" src={data.img} alt="Gallery" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Mrittika Events */}
        <section className="container py-4">
          <h3 className="text-center font-weight-bold mb-4">PRE-MRITTIKA EVENTS</h3>

          {/* Box Cricket Event */}
          <div className="card border-primary flex-md-row mb-4 shadow-sm card-highlight">
            <div className="card-body d-flex flex-column align-items-start">
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BOX CRICKET
                </a>
              </h4>
              <strong className="d-inline-block mb-2 text-primary">
                "Jo khel dil ko itna bhaye usko dekhe bina kese raha jaye"
              </strong>
              <p className="text-justify">
                MRITTIKA 2.0 brings you an exciting Box Cricket tournament: short-pitch cricket with
                7 players each in a combined team of boys and girls. Come prepared for a fantastic
                evening of sports, fun, and sportsmanship. Awards and goodies worth ₹1k for the
                winning team, plus a felicitation ceremony for the players.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                role="button"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfYmbdtr1Qc-r7Yv6ghAdQ8NBQkSIBuBDbW57rh8o6SLS3wg/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
              >
                Register Here
              </a>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block p-2 event-img"
              alt="Box Cricket"
              src="/images/BC.png"
            />
          </div>

          {/* Badminton Event */}
          <div className="card border-primary flex-md-row mb-4 shadow-sm card-highlight">
            <div className="card-body d-flex flex-column align-items-start">
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BADMINTON
                </a>
              </h4>
              <strong className="d-inline-block mb-2 text-primary">
                "Challenge yourself and others in the ultimate badminton battle!"
              </strong>
              <p className="text-justify">
                Come and join us for a day of fun as Mrittika 2.0 brings you a badminton singles
                competition. The matches will progress through elimination rounds toward the finals.
                Winners will be awarded rewards and goodies worth ₹1k. Don’t miss out on the
                electric atmosphere!
              </p>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block p-2 event-img"
              alt="Badminton"
              src="/images/BC1.png"
            />
          </div>
        </section>

        {/* Theme Section */}
        <section className="container mb-4 p-4 theme-section">
          <h3 className="text-center font-weight-bold mb-3">THEME OF THE CONFERENCE</h3>
          <ol>
            <li>Current status and Future Trends in the Manufacturing of Refractories.</li>
            <li>Diversified application of Refractories in Ferrous and Non-Ferrous Industries.</li>
            <li>Advancements in Glass Science and Technology.</li>
            <li>Sensors and Actuators.</li>
            <li>
              Ceramic Membranes and Porous Materials for desalination, water treatment & purification
              for industrial waste disposal.
            </li>
            <li>BioCeramics.</li>
            <li>
              Ceramics for energy applications (Batteries, Supercapacitors, SOFC, Thermoelectric,
              Electrocatalyst, Photocatalysts, solar cell).
            </li>
            <li>Industry 4.0 & Lean Manufacturing concept in Ceramic Industry.</li>
            <li>Reduction of Carbon Footprint and emergence of green manufacturing.</li>
            <li>Recent Advancements in whiteware Industries.</li>
            <li>Magnetics and Dielectric Ceramics.</li>
            <li>Ceramics for building materials.</li>
            <li>Additive Manufacturing in Ceramics.</li>
          </ol>
        </section>

        {/* Technical Session Section */}
        <section className="container mb-4 p-4">
          <h3 className="text-center font-weight-bold mb-4">TECHNICAL SESSION</h3>
          <div className="card shadow-sm card-highlight mb-4">
            <div className="card-body p-4 text-justify">
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Plenary Lectures / Invited Lectures
                </a>
              </h4>
              <p>
                Industry delegates and Academic Experts are invited to share their words of wisdom
                on current industry/research topics (with a window of around half an hour). Focus is
                on the ceramic industry. Lectures are subject to registrations.
              </p>
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contributory Lectures
                </a>
              </h4>
              <p>
                Industry delegates/Academic Experts wishing to present their ongoing work or
                research papers are welcome to contribute. Each talk will be around half an hour
                with a focus on ceramics.
              </p>
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Panel Discussions
                </a>
              </h4>
              <p>
                Industry delegates and Academic Experts can join a panel for a two-hour discussion.
                Topics might range from refractories to advanced ceramics (nanoceramics, etc.),
                incorporating ongoing industry agendas.
              </p>
              <h4 className="mb-0">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Poster Presentations (Open to All)
                </a>
              </h4>
              <p>
                Industry Delegates, Academic Experts, Research Scholars, and Students can present
                their work in a poster form. Audience interaction will determine winners with
                goodies or cash prizes.
              </p>
            </div>
          </div>
        </section>

        {/* Fun Events Section */}
        <section className="container mb-5">
          <h3 className="text-center font-weight-bold mb-4">FUN EVENTS</h3>

          {/* PowerPoint Karaoke */}
          <div className="card shadow-sm card-highlight mb-4">
            <div className="card-body">
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PowerPoint Karaoke
                </a>
              </h4>
              <p>
                A fun event that challenges authors and presenters alike to improve communication
                skills. Presenters receive random slides to present on the spot. Submit a funny or
                lighthearted slide or present one—perhaps both! Winners get goodies.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                role="button"
                href="https://forms.gle/CF8nhscUMEvhgQx69"
                target="_blank"
                rel="noreferrer"
              >
                Register Here
              </a>
            </div>
          </div>

          {/* Quiz (Mega Hunt Game) */}
          <div className="card shadow-sm card-highlight">
            <div className="card-body">
              <h4 className="mb-3">
                <a
                  className="text-dark"
                  href="https://www.instagram.com/nitr_incers/"
                  target="_blank"
                  rel="noreferrer"
                >
                  QUIZ (Mega Hunt Game)
                </a>
              </h4>
              <p>
                A multi-level quiz game with situational-based questions. Each level's audio-visual
                story reveals the next challenge. Survive all levels for a chance to win. Accuracy
                determines whether you proceed or get eliminated.
              </p>
            </div>
          </div>
        </section>

        {/* Brochure and Past Event Buttons */}
        <div className="text-center mb-3">
          <a href={Brochure} download>
            <button type="button" className="btn btn-primary mr-3">
              Brochure 2019
            </button>
          </a>
          <a href="/mritika1">
            <button className="btn btn-primary">Visit Mrittika 2019</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mritika2025;
