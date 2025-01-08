import React from "react";
import Footer from "./Footer.js";
import { FaKey, FaEnvelope, FaInfoCircle } from "react-icons/fa";

function LuxuryBuilding() {
    const listings = [
        {
            title: "9631 North Bridle East Bridgewater, MA 02333",
            price: "$1400",
            image:
                "https://cdnassets.hw.net/39/5c/4c96d61249259acbc7a3c2a59ce9/civita-exterior-at-dusk.jpg",
        },
        {
            title: "2800 Leverton Cove Road, Palmer, MA 01069",
            price: "$1300",
            image:
              "https://www.adelto.co.uk/wp-content/uploads/2014/09/luxury-homes-berkshire-england-adelto-00.jpg",
        },
        {
            title: "4895 North Drive East Bridgewater, MA 05897",
            price: "$1250",
            image:
                "https://techlobsters.com/wp-content/uploads/2021/06/Luxury-Apartment-Building.jpg",
        },
        {
            title: "3634 East Bridle Drive Bridgewater, MA 01557",
            price: "$1550",
            image:
                "https://media-cdn.tripadvisor.com/media/photo-s/0e/30/9b/d0/thea-thalatta.jpg",
        },
        {
            title: "8055 Leverton Cove Road, Palmer, MA 01337",
            price: "$1200",
            image:
                "https://th.bing.com/th/id/OIP.J4W2M14cO6XmK3yslHfxWgHaEF?rs=1&pid=ImgDetMain",
        },
        {
            title: "4309 Bridle Drive East Bridgewater, MA 01679",
            price: "$1600",
            image:
                "https://i.pinimg.com/originals/fc/7c/a0/fc7ca01c6a74352265781832b7c3711e.jpg",
        },
        {
            title: "2800 Leverton Cove Road, Palmer, MA 01069",
            price: "$5,200,000",
            image:
                "https://th.bing.com/th/id/OIP.ceMmxzpLd1OWdRH4r_1xVAHaEx?rs=1&pid=ImgDetMain",
        },
        {
            title: "9631 North Bridle East Bridgewater, MA 02333",
            price: "$3,850,000",
            image:
                "https://th.bing.com/th/id/R.16b5cb31155a3e355ea9ac605160461d?rik=nlQKC98TUa0ylA&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2020%2f04%2fLuxury-house-exterior.jpg&ehk=9vifs12mShsODPqnjY5o8LFjIzFPKo60T%2bMl2vveWQo%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            title: "3634 East Bridle Drive Bridgewater, MA 01557",
            price: "$7,000,000",
            image:
                "https://i.pinimg.com/originals/b8/b5/16/b8b5168d8b4321a6bd4833e15707b46a.jpg",
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
                "url('https://www.viahouse.com/wp-content/uploads/2010/11/Luxurious-Family-Residence-in-Nicosia-Pool-588x392.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: '0.8',
            color: "#fff",
        },

        title: {
            fontSize: "7rem",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "20px",
            padding: "50px 30px",
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
                    <h1 style={styles.title}>Luxury Building</h1>
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


export default LuxuryBuilding;
