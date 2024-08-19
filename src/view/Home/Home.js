import React from 'react';
import config from "./../../assect/config.json";

const Home = () => {
  const { shopInfo, sweets, theme, cardDesign, footer } = config;

  return (
    <div style={{ backgroundColor: theme.backgroundColor, fontFamily: theme.fontFamily }}>
 
      <nav style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor, padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{shopInfo.name}</div>
        <div>
          <a href="#home" style={{ color: theme.secondaryColor, margin: '0 15px', textDecoration: 'none' }}>Home</a>
          <a href="#sweets" style={{ color: theme.secondaryColor, margin: '0 15px', textDecoration: 'none' }}>Sweets</a>
          <a href="#contact" style={{ color: theme.secondaryColor, margin: '0 15px', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

   
    

      {/* Sweets Section */}
      <section id="sweets" style={{ padding: '20px' }}>
        <h2>Our Sweets</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {sweets.map((sweet, index) => (
            <div
              key={index}
              style={{
                border: `1px solid ${theme.primaryColor}`,
                borderRadius: cardDesign.borderRadius,
                boxShadow: cardDesign.boxShadow,
                padding: cardDesign.padding,
                textAlign: cardDesign.textAlign
              }}
            >
              <img src={sweet.imageUrl} alt={sweet.name} style={{ width: '100%', borderRadius: cardDesign.borderRadius }} />
              <h3>{sweet.name}</h3>
              <p>{sweet.description}</p>
              <p style={{ fontWeight: 'bold' }}>{sweet.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" style={{ backgroundColor: footer.backgroundColor, color: footer.textColor, padding: '20px', textAlign: 'center' }}>
        <p>{footer.footerText}</p>
        <p>Contact us at: {shopInfo.contact.phone} | {shopInfo.contact.email}</p>
        <p>Visit us: {shopInfo.contact.address}</p>
        <p>Hours: Weekdays - {shopInfo.hours.weekday}, Weekends - {shopInfo.hours.weekend}</p>
        <div>
          <a href={footer.socialLinks.facebook} style={{ color: footer.textColor, margin: '0 10px' }}>Facebook</a>
          <a href={footer.socialLinks.instagram} style={{ color: footer.textColor, margin: '0 10px' }}>Instagram</a>
          <a href={footer.socialLinks.twitter} style={{ color: footer.textColor, margin: '0 10px' }}>Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
