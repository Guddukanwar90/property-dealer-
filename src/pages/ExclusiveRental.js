import React from "react";
import Footer from "./Footer.js";
import { FaKey, FaEnvelope, FaInfoCircle } from "react-icons/fa";


function ExclusiveRental() {
    const listings = [
        {
            title: "9631 North Bridle East Bridgewater, MA 02333",
            price: "$1400",
            image:
                "https://www.liveenhanced.com/wp-content/uploads/2019/06/Facts-on-Interior-Design-and-Decoration-800x445.jpeg",
        },
        {
            title: "2800 Leverton Cove Road, Palmer, MA 01069",
            price: "$1300",
            image:
                "https://www.ufl.co.nz/wp-content/uploads/siesta-outdoor-sofa-05.jpg",
        },
        {
            title: "4895 North Drive East Bridgewater, MA 05897",
            price: "$1250",
            image:
                "https://www.mdopeiddehotel.co.tz/img/gallery/g6.png",
        },
        {
            title: "3634 East Bridle Drive Bridgewater, MA 01557",
            price: "$1550",
            image:
                "https://th.bing.com/th/id/R.911193cfd9883d52373341dc065b99c2?rik=PoUqdn5Be7ulnQ&riu=http%3a%2f%2fwww.places.co.za%2fcrs%2fphotolarge%2f39743.jpg&ehk=LjC9DkzjdQARqjVFh5qh90X%2fMW93KolcgrCn%2fv%2bhF2E%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            title: "8055 Leverton Cove Road, Palmer, MA 01337",
            price: "$1200",
            image:
                "https://th.bing.com/th/id/OIP.m8wxyXpZYOBK0zr2Ph1rRAAAAA?w=474&h=316&rs=1&pid=ImgDetMain",
        },
        {
            title: "4309 Bridle Drive East Bridgewater, MA 01679",
            price: "$1600",
            image:
                "https://th.bing.com/th/id/OIP.Tf138NQ_kHXFeLGcpJGNPAHaE8?w=1000&h=667&rs=1&pid=ImgDetMain",
        },
        {
            title: "2800 Leverton Cove Road, Palmer, MA 01069",
            price: "$5,200,000",
            image:
                "https://th.bing.com/th/id/OIP.yMo2J9HuVGJ_wqLs3W4eWQHaE3?w=1920&h=1261&rs=1&pid=ImgDetMain",
        },
        {
            title: "9631 North Bridle East Bridgewater, MA 02333",
            price: "$3,850,000",
            image:
                "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8ac5a290753747.5e1f708f78b53.jpg",
        },
        {
            title: "3634 East Bridle Drive Bridgewater, MA 01557",
            price: "$7,000,000",
            image:
                "https://images.trvl-media.com/lodging/34000000/33500000/33499500/33499416/61b37b30.jpg?impolicy=fcrop&w=303&h=170&p=0.5",
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
                "url('https://magnolialaneproperties.com/wp-content/uploads/2021/04/cropped-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: '0.9',
            color: "#fff",
        },

        title: {
            fontSize: "6.50rem",
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
                    <h1 style={styles.title}>Exclusive Rental</h1>
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



export default ExclusiveRental;
