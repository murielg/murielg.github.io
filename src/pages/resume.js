import React from "react"
import Layout from '../components/layout';
import data from "../../content/data.json";

const ResumePage = () => (
  <Layout>
    <div className='resume container-fluid'>
      <div className="row">
        <div className="col-12">
          <h2>{data.title}</h2>
          <ul>
            {data.skills.map((data, index) => {
              return <li key={`content_skill_${index}`}>{data}</li>
            })}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>WORK EXPERIENCE</h2>
          <h3>Mobile Applications Developer, Click Here Labs  - Aug/2017  - Present - Dallas, TX</h3>
          <ul>
            <li>Development and maintenance of Android applications.</li>
            <li>Emerging tech research and prototyping of voice apps, Google Assistant and Alexa, Messenger and Bot Framework chatbots, and machine learning.</li>
            <li>Technologies: Android, Java, Kotlin, React, Flutter, AWS, Python, ML, Docker</li>
          </ul>

          <h3>Front end Developer, Click Here Labs - Aug/2014 - July/2017 - Dallas, TX</h3>
          <ul>
            <li>Built responsive, cross-browser websites and web apps for a large number of clients including Dr Pepper, Motts, Snapple, Clamato and The Salvation Army.</li>
            <li>Technologies: Javascript, React, PHP, Laravel, Wordpress</li>
          </ul>

          <h3>UI Development Engineer, Click Here Labs - Jun/2012 - July/2014 - Dallas, TX</h3>
          <ul>
            <li>Developed a proprietary enterprise web application for an electrical engineering startup.</li>
            <li>Technologies: Javascript, Java, GWT, PHP</li>
          </ul>

        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Projects</h2>
          <ul>
            <li>Joel Osteen Ministries – Android app for Joel Osteen Ministries</li>
            <li>RideSky – Android app with Strava, Mapbox and DarkSky integrations (Personal)</li>
            <li>YAWP – Android app with DarkSky API (Personal)</li>
            <li>Popular Movies – Android app with TheMovieDb API integration</li>
          </ul>
        </div>
      </div>


      <div className="row">
        <div className="col-12">
          <h2>Education</h2>
          <ul>
            <li>
              2012 B.Sc. in Electrical Engineering, University of Texas at Dallas
              Developed and implemented the real-time vision system for UTD’s Autonomous Underwater Vehicle. Won 3rd place in Senior Design Day.

            </li>
          </ul>
          <h2>Certifications</h2>
          <h3>Kotlin Training for Android Developers - Nov/2019</h3>
          <p>Credential ID: 293-157-419-6429</p>
        </div>
      </div>


    </div>
  </Layout>
);

export default ResumePage
