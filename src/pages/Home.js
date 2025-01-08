import React from "react";
import Footer from './Footer.js';

const Home = () => {
  const featuredProperties = [
    {
      title: "Luxury Villa in Beverly Hills",
      description: "A stunning 6-bedroom villa with a pool and city views.",
      image: "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/8a/5f/97.jpg",
      price: "$3,500,000",
      location: "Beverly Hills, CA",
    },
    {
      title: "Modern Apartment in New York",
      description: "A chic 2-bedroom apartment in the heart of Manhattan.",
      image: "https://images1.apartments.com/i2/fh5iuB3LrM5tYgTuIG3oDY34E-yJZVgoghxTaxSLIQc/111/the-eugene-new-york-ny-primary-photo.jpg",
      price: "$1,200,000",
      location: "New York, NY",
    },
    {
      title: "Beachfront Condo in Miami",
      description: "A beautiful 3-bedroom condo with direct beach access.",
      image: "https://th.bing.com/th/id/R.b7b5bebd20cc9bde1ec9da380b54e2f8?rik=3ZO1i15gYFVoLQ&riu=http%3a%2f%2fmiami57ocean.com%2fwp-content%2fuploads%2f2018%2f12%2f57-Ocean-Living-Room-2-1170x738.jpg&ehk=EbFL2LTQXTzMbAFr%2fPlSVLWGELs4w2Upjq165a9DAX0%3d&risl=&pid=ImgRaw&r=0",
      price: "$2,800,000",
      location: "Miami, FL",
    },
    {
      title: "Luxury Villa in Beverly Hills",
      description: "9631 Bridle Drive East Bridgewater, MA 02333",
      image: "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-06-free-img.jpg",
      price: "$1400",
      location: "Beverly Hills, CA",
    },
    {
      title: "Modern Apartment in New York",
      description: "2800 Leverton Cove Road, Palmer, MA 01069",
      image: "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-01-free-img.jpg",
      price: "$1,200,000",
      location: "New York, NY",
    },
    {
      title: "Beachfront Condo in Miami",
      description: "A beautiful 3-bedroom condo with direct beach access.",
      image: "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-02-free-img.jpg",
      price: "$2,800,000",
      location: "Miami, FL",
    },
    {
      title: "Modern Apartment in New York",
      description: "A chic 2-bedroom apartment in the heart of Manhattan.",
      image: "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-04-free-img.jpg",
      price: "$1,200,000",
      location: "New York, NY",
    },
    {
      title: "Beachfront Condo in Miami",
      description: "A beautiful 3-bedroom condo with direct beach access.",
      image: "https://websitedemos.net/real-estate-agency-04/wp-content/uploads/sites/867/2021/05/featured-03-free-img.jpg",
      price: "$2,800,000",
      location: "Miami, FL",
    },
  ];

  const styles = {
    body: {
      fontFamily: 'Times New Roman, Times, serif',
    },
    hero: {
      height: "80vh",
      backgroundImage: "url('https://wallpapercave.com/wp/wp4110671.jpg')", // Replace with your hero image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: 'fixed',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      padding: "0 20px",
    },
    heroTitle: {
      fontSize: "5rem",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    heroText: {
      fontSize: "1.5rem",
      marginBottom: "30px",
      color: 'rgba(255,255,255,0.8)',
    },
    heroButton: {
      padding: "10px 20px",
      fontSize: "1.5rem",
      fontWeight: "300",
      backgroundColor: 'white',
      color: 'black',
      border: "none",
      borderRadius: '5px',
      cursor: "pointer",
      textDecoration: "none",
    },

    about: {
      display: 'flex',
      justifyContent: 'center',
      height: '900px',
      width: '100%',
    },
    para: {
      width: '40%',
      padding: '40px 50px',
      alignItems: 'center',

    },

    section: {
      padding: " 20px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      paddingBottom: '100px',
    },
    sectionTitle: {
      fontSize: "6rem",
      fontWeight: "500",
      marginBottom: "80px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      paddingTop: "20px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    image: {
      height: "200px",
      width: "100%",
      objectFit: "cover",
    },
    cardBody: {
      padding: "20px",
      textAlign: "left",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333",
    },
    description: {
      fontSize: "1rem",
      color: "#666",
      margin: "10px 0",
    },
    price: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#27ae60",
      margin: "10px 0",
    },
    location: {
      fontSize: "1rem",
      color: "#666",
    },
  };

  return (
    <>
      <div style={styles.body}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Find Your Dream Home</h1>
            <p style={styles.heroText}>
              Explore our exclusive listings and find the perfect place to call home.
            </p>
            <a href="/available-properties/exclusive-listing" style={styles.heroButton}>
              Browse Listings
            </a>
          </div>
        </section>

        {/* About us  */}
        <section >
          <div style={styles.about}>
            <div style={styles.para}>
              <h1 style={{ fontSize: '80px', fontWeight: '700' }}>About Us</h1>
              <h5 style={{ fontSize: '30px', fontWeight: '600', marginBottom: '10px' }}>Welcome to Our Community!!</h5>
              <p style={{ lineHeight: '1.5', fontSize: '18px', color: 'rgba(0,0,0,0.7)', marginBottom: '30px' }}>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              <a href="/about" style={{ textDecoration: 'none', color: 'green', fontSize: '18px', }}>Read More</a>
            </div>
            <div style={{
              backgroundImage: "url('https://res.cloudinary.com/traveltripperweb/image/upload/c_limit,f_auto,h_2500,q_auto,w_2500/v1594237300/n84n3surdhphvfrni7j9.jpg')",
              backgroundSize: 'cover',
              bottom: "-50px",
              right: "-50px",
              marginTop: "-100px",
              width: '60%',
            }}>

            </div>
          </div>
        </section>

        {/* Our Services  */}
        <section style={{
          height: '85vh',
          display: 'flex',
          fontFamily: 'Times New Roman, Times, serif',
          paddingTop: '50px'

        }}>
          <div style={{ width: '30%', fontSize: '80px', padding: '30px ' }}>Our Services</div>
          <div style={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ paddingRight: '50px', width: '50%' }}>
                <h2>Management & Leasing</h2>
                <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.7)' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div style={{ paddingRight: '50px', width: '50%' }}>
                <h2>Sales & Rentals</h2>
                <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.7)' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div style={{ display: 'flex', padding: '30px' }}>
              <div style={{ paddingRight: '50px', width: '50%' }}>
                <h2>Investment Sales</h2>
                <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.7)' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div style={{ paddingRight: '50px', width: '50%' }}>
                <h2>New Development</h2>
                <p style={{ fontSize: '20px', color: 'rgba(0,0,0,0.7)' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>

          </div>
        </section>


        {/* Featured Properties Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Featured Properties</h2>
          <div style={styles.grid}>
            {featuredProperties.map((property, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.cardHover.transform;
                  e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img src={property.image} alt={property.title} style={styles.image} />
                <div style={styles.cardBody}>
                  <h3 style={styles.title}>{property.title}</h3>
                  <p style={styles.description}>{property.description}</p>
                  <p style={styles.price}>{property.price}</p>
                  <p style={styles.location}>{property.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intrested in our services  */}
        <section style={{
          height: '85vh',
          backgroundImage: "url('https://i.ytimg.com/vi/sxizcVYTVsc/maxresdefault.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: 'fixed',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '40px',
        }}>
          <h1>Intrested in Our Services</h1>
          <a href="/contact" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', backgroundColor: 'black', padding: ' 10px 20px ', borderRadius: '5px' }}>Contact Us</a>
        </section>

        {/* what our coustomer says  */}
        <section style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '1200px'
        }}>
          <div style={{ height: '15%', fontSize: '40px', textAlign: 'center', padding: '40px' }}>
            <h1>What Our Costumer Says?</h1>
          </div>
          <div style={{ height: '90%', display: 'flex', padding: '10px 20px', flexDirection:'column' }}>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
              <div style={{ width: '30%', border: '1px solid rgba(0,0,0,0.5)', height: '400px', }}>
                <h1 style={{padding:'50px 20px 10px 20px', fontSize:'30px', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                <p style={{textAlign:'center',color:'rgba(0,0,0,0.7)', fontSize:'20px'}}>Della Case</p>
              </div>
              <div style={{ width: '30%',  height: '400px', backgroundImage:'url(https://www.barclays.co.uk/content/dam/lifestyle-images/personal/make-money-work-for-you/Things_not_to_say_about_money_article_16_9.xsmall.medium_quality.jpg)', backgroundSize:'cover', backgroundPosition:'center' }}>
              </div>
              <div style={{ width: '30%', border: '1px solid rgba(0,0,0,0.5)', height: '400px' }}>
              <h1 style={{padding:'50px 20px 10px 20px', fontSize:'30px', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
              <p style={{textAlign:'center',color:'rgba(0,0,0,0.7)' , fontSize:'20px'}}>Sarah Miller</p>
              </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'30px'}}>
              <div style={{ width: '30%', height: '400px', backgroundImage:'url(https://content.api.news/v3/images/bin/f268aad3797f115d883a85039dc7b8a0)', backgroundSize:'cover' }}></div>
              <div style={{ width: '30%', border: '1px solid rgba(0,0,0,0.5)', height: '400px' }}>
              <h1 style={{padding:'50px 20px 10px 20px', fontSize:'30px', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
              <p style={{textAlign:'center',color:'rgba(0,0,0,0.7)' , fontSize:'20px'}}>Jane Oliver</p>
              </div>
              <div style={{ width: '30%', height: '400px', backgroundImage:'url(https://thumbs.dreamstime.com/b/seventy-year-old-couple-smiling-home-4776182.jpg)', backgroundSize:'cover', backgroundPosition:'center' }}></div>
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
