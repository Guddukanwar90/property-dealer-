import React from "react";
import Footer from "./Footer.js";
import { FaKey, FaEnvelope, FaInfoCircle } from "react-icons/fa";


const ExclusiveListing = () => {
  const listings = [
    {
      title: "9631 North Bridle East Bridgewater, MA 02333",
      price: "$1400",
      image:
        "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-06-free-img.jpg",
    },
    {
      title: "2800 Leverton Cove Road, Palmer, MA 01069",
      price: "$1300",
      image:
        "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-01-free-img.jpg",
    },
    {
      title: "4895 North Drive East Bridgewater, MA 05897",
      price: "$1250",
      image:
        "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-02-free-img.jpg",
    },
    {
      title: "3634 East Bridle Drive Bridgewater, MA 01557",
      price: "$1550",
      image:
        "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-03-free-img.jpg",
    },
    {
      title: "8055 Leverton Cove Road, Palmer, MA 01337",
      price: "$1200",
      image:
        "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-04-free-img.jpg",
    },
    {
      title: "4309 Bridle Drive East Bridgewater, MA 01679",
      price: "$1600",
      image:
        "https://th.bing.com/th/id/OIP.p4PJOk8n7TuXPwT2Ty1jSAHaD4?w=1144&h=600&rs=1&pid=ImgDetMain",
    },
    {
      title: "2800 Leverton Cove Road, Palmer, MA 01069",
      price: "$5,200,000",
      image:
        "https://th.bing.com/th/id/OIP.X6WKzXNNnFAS6ZmB-PH3bgHaE7?w=800&h=533&rs=1&pid=ImgDetMain",
    },
    {
      title: "9631 North Bridle East Bridgewater, MA 02333",
      price: "$3,850,000",
      image:
        "https://th.bing.com/th/id/OIP.ybvmRgnchuECj6QR1vpepAHaEH?w=800&h=445&rs=1&pid=ImgDetMain",
    },
    {
      title: "3634 East Bridle Drive Bridgewater, MA 01557",
      price: "$7,000,000",
      image:
        "https://th.bing.com/th/id/OIP.a2HeAzHfAMan-0c6ohCOYwAAAA?rs=1&pid=ImgDetMain",
    },

  ];

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    header: {
      marginBottom: "40px",
      height: "75vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundImage:
        "url('https://i.pinimg.com/736x/53/0f/76/530f76f407ae564475de189148cfe33e.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      color: "#fff",
    },
    title: {
      fontSize: "6rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "20px",
      padding: "50px 20px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardHover: {
      transform: "scale(1.03)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    info: {
      padding: "20px",
      textAlign: "left",
    },
    propertyTitle: {
      fontSize: "1.50rem",
      color: "#333",
      marginBottom: "10px",
    },
    price: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#555",
      marginBottom: "10px",
    },
    description: {
      fontSize: "0.9rem",
      color: "#666",
      lineHeight: "1.5",
    },
    buttonContainer: {
      display: 'flex',
      padding: "10px 0",
    },
    iconButton: {
      fontSize: "1.5rem",
      color: '#54cbdc',
      cursor: "pointer",
      transition: "color 0.3s ease",
      padding: '0px 10px',
      borderRight: '1px solid rgba(0,0,0,0.3)',
    },
    iconButtonHover: {
      color: "black",
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Exclusive Listings</h1>
        </div>

        <div style={styles.grid}>
          {listings.map((listing, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={listing.image}
                alt={listing.title}
                style={styles.image}
              />
              <div style={styles.info}>
                <h3 style={styles.propertyTitle}>{listing.title}</h3>
                <p style={styles.price}>{listing.price}</p>
                <p style={styles.description}>{listing.description}</p>
              </div>
              <div style={styles.buttonContainer}>
                <FaKey
                  style={styles.iconButton}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    styles.iconButtonHover.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = styles.iconButton.color)
                  }
                />
                <FaEnvelope
                  style={styles.iconButton}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    styles.iconButtonHover.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = styles.iconButton.color)
                  }
                />
                <FaInfoCircle
                  style={styles.iconButton}
                  onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    styles.iconButtonHover.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = styles.iconButton.color)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExclusiveListing;
