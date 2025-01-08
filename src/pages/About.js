import React, { useEffect, useState } from 'react';
import himanshi from '../assets/images/himanshi.jpeg';
import tamanna from '../assets/images/tamanna.jpeg';
import rahul from '../assets/images/rahul.jpeg';
import harshit from '../assets/images/harshit.jpeg';
import Footer from './Footer.js';




export default function About() {
  // Counter state
  const [counter, setCounter] = useState({
    ApartmentsSold: 0,
    SatisfiedClients: 0,
    HousesRented: 0,
    ListedProperties:0,
  }); 

  // Counter animation logic
  useEffect(() => {
    const maxCounts = { ApartmentsSold: 1300, SatisfiedClients: 5500,HousesRented: 3000, ListedProperties: 10500 };
    const interval = setInterval(() => {
      setCounter((prev) => {
        let updated = { ...prev };
        let done = true;
        Object.keys(updated).forEach((key) => {
          if (updated[key] < maxCounts[key]) {
            updated[key] = Math.min(updated[key] + Math.ceil(maxCounts[key] / 100), maxCounts[key]);
            done = false;
          }
        });
        if (done) clearInterval(interval);
        return updated;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('https://wallup.net/wp-content/uploads/2019/10/538735-architecture-cities-france-light-towers-monuments-night-panorama-panoramic-paris-urban-temples.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: '0.7',
          padding: '100px 20px',
          color: '#fff',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '40vh',
          fontFamily: 'Times New Roman, Times, serif',
        }}
      >
        <h1 style={{ fontSize: '90px', fontWeight: '700' }}>About Us</h1>

      </section>
      {/* who we are */}
      <section
        style={{
          fontFamily: 'Times New Roman, Times, serif',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ fontSize: '70px', }}>Who We Are</h1>
        <div
          style={{
            
            height: '600px', 
            width: '100%', 
            color: 'white',
            display:'flex',
          }}
        > 
          <div style={{width:'40%', padding:'30px 50px', color:'black'}}>
            <h1 style={{fontSize:'40px', fontWeight:'500', lineHeight:'1'}}>Unparalleled Level of Services</h1>
            <p style={{fontSize:'20px', }}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </p>
            <p style={{fontSize:'15px',paddingTop:'15px', color:'rgba(0,0,0,0.7)'}}>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          </div>
          <div style={{color:'black', padding:'30px 50px',width:'60%'}}>
          <h1 style={{fontSize:'40px', fontWeight:'500', lineHeight:'1'}}>We are the #1 Broker in Boston</h1>
          <p style={{fontSize:'18px',paddingTop:'20px', color:'rgba(0,0,0,0.7)'}}> Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
          <p style={{fontSize:'18px',paddingTop:'30px', color:'rgba(0,0,0,0.7)'}}>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
          <p style={{fontSize:'18px',paddingTop:'50px', color:'rgba(0,0,0,0.7)'}}>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.</p>
          </div>
        </div>
      </section>

      {/* group images */}
      <section
        style={{
          backgroundImage: "url('https://translationalsciencebenefits.wustl.edu/wp-content/uploads/2023/03/tsbm-benefits-header-policy-committee-participation-1100x400-c-default.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height:'100vh',
        }}
      >
     </section>

     {/* what we do  */}
     <section style={{
      height:'85vh',
      display:'flex',
      fontFamily: 'Times New Roman, Times, serif',
      paddingTop:'50px'

     }}>
      <div style={{width:'30%', fontSize:'80px', padding:'30px '}}>What We Do</div>
      <div style={{width:'70%', display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', padding:'30px'}}>
          <div style={{paddingRight:'50px', width:'50%'}}>
            <h2>New Development</h2>
            <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div style={{paddingRight:'50px', width:'50%'}}>
            <h2>Sales & Rentals</h2>
            <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
        <div style={{display:'flex', padding:'30px'}}>
          <div style={{paddingRight:'50px', width:'50%'}}>
            <h2>Investment Sales</h2>
            <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div style={{paddingRight:'50px', width:'50%'}}>
            <h2>Management & Leasing</h2>
            <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
        
      </div>
     </section>

      {/* Counter Section */}
      <section
        style={{
          padding: '50px 20px',
          backgroundImage: 'url(https://wallpaperaccess.com/full/1137443.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment:'fixed',
          opacity:'0.9',
          textAlign: 'center',
          fontFamily: 'Times New Roman, Times, serif',
          color:'white'
        }}
      >
        <h2 style={{color:'white', fontSize:'50px', fontWeight:'700'}}>Our Achievements</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
          {/* Counter 1 */}
          <div>
            <h3 style={{ fontSize: '2.5rem',margin: '0' }}>{counter.ApartmentsSold}+</h3>
            <p style={{fontSize:'1.8rem',margin: '0'}}>Apartments Sold</p>
          </div>
          {/* Counter 2 */}
          <div>
            <h3 style={{  fontSize: '2.5rem',margin: '0' }}>{counter.SatisfiedClients}+</h3>
            <p style={{fontSize:'1.8rem',margin: '0'}}>Satisfied Clients</p>
          </div>
          {/* Counter 3 */}
          <div>
            <h3 style={{  fontSize: '2.5rem', margin: '0'}}>{counter.HousesRented}+</h3>
            <p style={{fontSize:'1.8rem',margin: '0'}}>Houses Rented</p>
          </div>
          {/* Conter 4 */}
          <div>
            <h3 style={{  fontSize: '2.5rem', margin: '0' }}>{counter.ListedProperties}+</h3>
            <p style={{fontSize:'1.8rem',margin: '0'}}>Listed Properties</p>
          </div>
        </div>
      </section>

  

      {/* Image with Text Section */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '50px 20px',
        }}
      >
        <div style={{ flex: '1', padding: '20px' }}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Our Vision"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div style={{ flex: '1', padding: '20px' }}>
          <h2>Why Choose Us?</h2>
          <p>
            With extensive experience in the real estate market, we offer
            trustworthy and comprehensive solutions for buying, selling, and
            renting properties.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: '50px 20px',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <h2>Meet Our Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>
          {/* Team Member 1 */}
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img
              src={himanshi}
              alt="Team Member 1"
              style={{ width: '120px', borderRadius: '50%' }}
            />
            <h3>Himanshi Bhardwaj</h3>
            <p>CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div style={{ margin: '20px', textAlign: 'center' }}>
            <img
              src={rahul}
              alt="Team Member 2"
              style={{ width: '145px', borderRadius: '50%' }}
            />
            <h3>Rahul Nitharwal</h3>
            <p>CFO & Financial Head</p>
          </div>
          {/* Team Member 3 */}
          <div style={{  margin: '20px', textAlign: 'center' }}>
            <img
              src={tamanna}
              alt="Team Member 3"
              style={{ width: '120px', borderRadius: '50%' }}
            />
            <h3>Tamanna Saini</h3>
            <p>Marketing Manager</p>
          </div>
          {/* Team Member 4 */}
          <div style={{  margin: '20px', textAlign: 'center' }}>
            <img
              src={harshit}
              alt="Team Member 4"
              style={{ width: '120px', borderRadius: '50%' }}
            />
            <h3>Harshit Bhariya</h3>
            <p>Lead Agent</p>
          </div>
        </div>
      </section>

      
      <Footer/>
    </div>
  );
}
