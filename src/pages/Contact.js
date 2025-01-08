import React, { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './Footer.js'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div
        style={{
          backgroundImage: "url(https://s3-ap-southeast-1.amazonaws.com/assets-powerstores-com/data/org/26174/theme/43629/img/Contact%20Banner.jpg)",
          backgroundSize:'cover',
          backgroundPosition: 'center',
          backgroundAttachment:'fixed', 
          opacity:'0.9',
          height: "75vh",
          alignItems: 'flex-start',
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <h2 style={{ fontSize: "100px", color: "rgba(255,255,255,0.7)",paddingLeft:'60px' }}>Contact Us</h2>
        
      </div>

      <div className="contact-info">

        <div className='details' style={{ padding: '20px', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '60px', fontWeight: '500' }}>Address</h1>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
          </p>

          <div style={{ marginTop: '20px' }}>
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <FaPhoneAlt style={{ fontSize: '2.5rem', color: '#007BFF', marginRight: '30px' }} />
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>Phone</h2>
                <p style={{ fontSize: '1rem', color: '#333', margin: 0 }}>929-242-6868</p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <FaEnvelope style={{ fontSize: '2.5rem', color: '#007BFF', marginRight: '30px' }} />
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>Email</h2>
                <p style={{ fontSize: '1rem', color: '#333', margin: 0 }}>contact@info.com</p>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaMapMarkerAlt style={{ fontSize: '2.5rem', color: '#007BFF', marginRight: '30px' }} />
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>Address</h2>
                <p style={{ fontSize: '1rem', color: '#333', margin: 0 }}>
                  2800 Leverton Cove Road, Palmer, MA 01069
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us A Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-map">

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.03426812454!2d72.7411015!3d19.0825223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2e8bb52967%3A0x7c6c840edb7bc8d3!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1733282580004!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0", width: "100%", height: "500px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Footer />
        </div>
        
      </div>
      
    </div>






  );
}
