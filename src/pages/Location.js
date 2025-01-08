import React from "react";
import Footer from './Footer.js';
import location1Image from "../assets/images/location1.jpg";
import location2Image from "../assets/images/location2.jpg";
import location3Image from "../assets/images/location3.jpg";
import location4Image from "../assets/images/location4.jpg";
import location5Image from "../assets/images/location5.webp";
import location6Image from "../assets/images/location6.jpg";
import location7Image from "../assets/images/location7.jpg";
import location8Image from "../assets/images/location8.jpg";
import location9Image from "../assets/images/location9.jpg";



const Location = () => {
  const locations = [
    {
      title: "Dorchester",
      image: location1Image,
    },
    {
      title: "Allston",
      image: location2Image,
    },
    {
      title: "Roxbury",
      image: location3Image,
    },
    {
      title: "Jamaica Plain",
      image: location4Image,
    },
    {
      title: "Back Bay",
      image: location5Image,
    },
    {
      title: "North End",
      image: location6Image,
    },
    {
      title: "East Cambridge",
      image: location7Image,
    },
    {
      title: "Charlestown",
      image: location8Image,
    },
    {
      title: "Beacon Hill",
      image: location9Image,
    },
  ];

  const styles = {
    container: {
      fontFamily: 'Times New Roman, Times, serif',
      textAlign: "center",
    },
    header: {
      marginBottom: "40px",
      backgroundImage: 'url(https://th.bing.com/th/id/R.1583ac898aa5344684300eaa53e822bf?rik=nOpuD1pwgKrD7Q&riu=http%3a%2f%2fwww.megri.com%2fwp-content%2fuploads%2flocation.jpg&ehk=m68mFp%2fqXgojTp0Y5aRgoaUNnU3xR9hUdN%2fp8M0Pg6U%3d&risl=&pid=ImgRaw&r=0)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      opacity: '0.9',
      padding: '100px 20px',
      color: '#fff',
      alignItems: 'center',
      height: '45vh',
      width: '100%',
    },
    headerTitle: {
      fontSize: "6rem",
      color: "#fff",
      textAlign: 'center',
      marginBottom: '5px',
    },
    headerText: {
      fontSize: "1.2rem",
      color: "#fff",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "20px",
      padding: '40px',
    },
    card: {
      position: "relative",
      height: "250px",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    image: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.3s ease",
    },
    imageHover: {
      transform: "scale(1.1)",
    },
    overlay: {
      position:'absolute',
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      display:'flex',
      justifyContent: "center",
      alignItems: "center",
      color:'#fff',
    },
    infoTitle: {
      fontSize: "2.5rem",
    },
    
  };

  return (
    <>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Explore Our Neighborhoods</h1>
          <p style={styles.headerText}>
            Discover the perfect community to call home. From urban energy to
            tranquil retreats, there's something for everyone.
          </p>
        </div>

        {/* Neighborhood Cards */}
        <div style={styles.grid}>
          {locations.map((location, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                e.currentTarget.querySelector(".bgImage").style.transform =
                  styles.imageHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                e.currentTarget.querySelector(".bgImage").style.transform =
                  "none";
              }}
            >
              {/* Background Image */}
              <div
                className="bgImage"
                style={{
                  ...styles.image,
                  backgroundImage: `url(${location.image})`,
                }}
              ></div>

              {/* Overlay Content */}
              <div style={styles.overlay}>
                <h3 style={styles.infoTitle}>{location.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
