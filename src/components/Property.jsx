
        import React, { useState, useEffect } from 'react';
        import ImageCardComponent from './Card';
        import "./property.css";
        const ImageCardGallery = () => {
          const [currentIndex, setCurrentIndex] = useState(0);
          const [data, setData] = useState([
           
       
            { image: 'https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D', text: 'MUMBAI-9CR' },
            { image: 'https://media.istockphoto.com/id/971919418/photo/growing-cities-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=jz2GyUvwIr7gtt9P57vaP19ozJvEme6XD4tGgYwOGnI=', text: 'DELHI-5CR' },
            { image: 'https://media.istockphoto.com/id/179490416/photo/construction-site-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=MOiLNNC3cfSm1eGXL4l-S20BE2J5lbKhF5UEDgRcksM=', text: 'NOIDA-4CR' },
            {image:'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww',text: 'DELHI-6.4CR'},
      {image:'https://images.unsplash.com/photo-1524292691042-82ed9c62673b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',text:'BOMBAY-2CR'},
            {image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb3BlcnR5fGVufDB8fDB8fHww',text:'GURGAON-3CR'} , 
          ]);
        
          useEffect(() => {
            const intervalId = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 2000); // Change every 2 seconds
        
            return () => clearInterval(intervalId);
          }, [data]);
        
          return (
            <div className="gallery-container">
              {data.map((item, index) => (
                <ImageCardComponent key={index} data={item} />
              ))}
            </div>
          );
        };
        
        export default ImageCardGallery;