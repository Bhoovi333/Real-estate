
    import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css';
import imgg from './images/brochure.jpg'
import { FaSearch } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 left-text">
          <h2 style={{fontSize:"40px"}}>Welcome to Our Website</h2>
          <input style={{textAlign:'center',marginLeft:"30px",fontSize:"20px",borderRadius:"12px"}} type="text"
          placeholder="Search here "></input>
          <FaSearch style={{marginBottom:"-3px",marginLeft:"3px"}}></FaSearch><br></br><br></br>
          <h4 style={{textAlign:'center',marginLeft:"-50px",fontFamily:"cursive"}}>Home is Where the Heart Is, and We Help You Find It !<br></br>Your Home, Our Expertise...<br></br>Take the first step</h4>
          <br></br> <a href={imgg} download="brochure.jpg" 
              class="download-btn">Download Brochure</a><br></br><br></br><br></br><br></br><br></br>
              <h4 style={{textAlign:'center',marginLeft:"-50px",fontFamily:"sans-serif",fontSize:"35px"}}>You are not buying a house, <br></br>You are buying a lifestyle.</h4>
      </div>
        <div className="col-md-6 right-carousel">
        <Carousel
  autoPlay
  infiniteLoop
  interval={3000} // Change slide every 3 seconds
>
            <div>
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D" />
              <div className="carousel-caption">
              <h3>VILLA</h3>
              <p>7 Main Room</p>
              </div>
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1470227729/photo/painted-ladies-in-san-francisco-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9a-WSLiGTogqApdvGSiVJ6LKluL5q2S4W09WgE9gDA=" />
              <div className="carousel-caption">
              <h3>APARTMENT</h3>
              <p>5 Main Room</p>
              </div>
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1540164261/photo/luxury-house-with-swimming-pool-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=lklzxDKeVqfOOrJdDA8iXU9GiiqLxbQSP0g3LDjC6JI=" />
              <div className="carousel-caption">
              <h3>VILLA</h3>
              <p>12 Main Room</p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D" />
              <div className="carousel-caption">
              <h3>VILLA</h3>
              <p>7 Main Room</p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" />
              <div className="carousel-caption">
                <h3>VILLA</h3>
                <p>7 Main Room</p>
              </div>
            </div>
          </Carousel>
         
        </div> 
        <div className="box">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D" alt="Box Image" />
        <div className="text-overlay">
          <h2>Dream Into Realty</h2>
          <p>
Buying a home is one of the most crucial decisions and the most significant financial outlay in anybody's life. The REQUIZA Realty makes your home journey simple by providing relevant information that helps you make an informed decision. From real estate news to the legalities of home buying to taxation and tips on home designing and improvement, this is your go-to source for everything real estate.

</p>
        </div>
      </div>
    </div>
   
      </div>
    </div>
  

  );
}

export default HeroSection;