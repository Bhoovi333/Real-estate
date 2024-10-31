import React from 'react';

function About() {
  return (
    <section className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        <div className="property">
          <img src="property1.jpg" alt="Property 1" />
          <h3>Property 1</h3>
          <p>$500,000</p>
        </div>
        <div className="property">
          <img src="property2.jpg" alt="Property 2" />
          <h3>Property 2</h3>
          <p>$750,000</p>
        </div>
        <div className="property">
          <img src="property3.jpg" alt="Property 3" />
          <h3>Property 3</h3>
          <p>$300,000</p>
        </div>
      </div>
    </section>
  );
}

export default About;