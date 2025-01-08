import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const Footer = () => {
  return (

    <div
      style={{
        backgroundImage:'url(https://cdn.wallpapersafari.com/3/30/RC4ebg.jpg)', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:'fixed',
        opacity:'0.9',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Contact Information */}
      <div>
        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>929-242-6868</h1>
        <p style={{ fontSize: '1.5rem', margin: '10px 0' }}>info@contact.com</p>
        <p style={{ fontSize: '1.25rem', margin: '10px 0' }}>
          2800 Leverton Cove Road, Palmer, MA 01069
        </p>
      </div>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', fontSize: '2rem', margin: '0 10px' }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', fontSize: '2rem', margin: '0 10px' }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', fontSize: '2rem', margin: '0 10px' }}
        >
          <FaInstagram />
        </a>
      </div>
      <hr style={{width:"100%", margin:'50px auto ', border:'0.5px solid white'}} />

      <footer style={{ textAlign: 'center', color: 'white', fontSize: '0.9rem',marginTop:'20px' }}>
      <p>
        Copyright © 2024 Real Estate Agency | Powered by Real Estate Agency
      </p>
     </footer>
    </div>
  );
};

export default Footer;
