import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial">
          <img src="client1.jpg" alt="Client 1" />
          <p>"Great experience with this real estate company!"</p>
          <h3>Client 1</h3>
        </div>
        <div className="testimonial">
          <img src="client2.jpg" alt="Client 2" />
          <p>"Professional and knowledgeable staff."</p>
          <h3>Client 2</h3>
        </div>
        <div className="testimonial">
          <img src="client3.jpg" alt="Client 3" />
          <p>"Found my dream home with their help."</p>
          <h3>Client 3</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;