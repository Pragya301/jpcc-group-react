import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Home.css"
import Footer from './Footer';
import YoutubeEmbed from './YoutubeEmbed';


const Home = () => {
  const carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1461175827210-5ceac3e39dd2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1015/1360/500',
      
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1018/1360/500',
      
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1019/1360/500',
      
    }
  ];

  const videoIds = ['iaMxLU-b07w', 'GbIg1sTthls', '3WtigpIYu90'];

  return (
    <>
    
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="carousel"
            src={item.image}
            alt={item.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    <section className='about'>
        <div className="row">
            <div className="col-md-6">
                <h1 className='display-3 text-center'>ABOUT JPCC GROUP</h1>
                <p className='para'>JPCC Group, a top and best real estate firm in Noida that has many properties for sale including plots/land and farm houses in Noida and its adjoining areas. Keeping in view increasing demand of properties in Noida and adjoining areas, JPCC Group has focus on best planning, attention toward architectural comfort with the latest technology, aims to renovate the real estate system; JPCC Group is known for providing efficient housing solutions in best budget including, residential plots/land near Delhi, Noida, Greater Noida, Gurugram, Yamuna Expressway and its adjoining areas.</p>
            </div>
            <div className="col-md-6">
                <img src="../90.png" alt="" className="img-fluid"/>
            </div>
        </div>
        </section>
    <div className="card-container">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image 1" className="card-image"/>
      <div className="card-content">
        <h2 className="card-title">VISION</h2>
        <p className="card-description">To be the leading real estate company, delivering superior service, and returns to our clients, providing valuable affordable housing with highest rates of customer satisfaction.

</p>
      </div>
    </div>
    <div className="card">
      <img src="https://images.unsplash.com/photo-1629721671030-a83edbb11211?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image 2" className="card-image"/>
      <div className="card-content">
        <h2 className="card-title">GOAL</h2>
        <p className="card-description">Our goal is to represent and serve clients with excellence, professionalism, honesty, and an advanced atmosphere of well-being with the clients’ best interests first and to achieve the highest standards of integrity, ethics and customer care.</p>
      </div>
    </div>
  </div>
  <section className='dadri'>
    <div className="dadri-card">
    <h2 className="dadri-card-heading">Dadri New Project</h2>
    
    <h3 className="dadri-card-description">Affordable Luxury in a Prime Location – Schedule a Tour Today!</h3>
    <p className='dadari-p'>Fully Furnished <hr/> Independent developed house</p>


    <div class="list-container">
    <ul class="styled-list">
   <li class="list-item">Loan Available</li>
      <li class="list-item">Immedeate Registry</li>
      <li class="list-item">High Rental Income</li>
      <li class="list-item">Lease Guarantee</li>
    </ul>
  </div>
    <button className="dadri-card-button">View More</button>
  </div> 
  </section> 
  <h1 className='ytvd'>Video Gallery</h1>
      <YoutubeEmbed embedIds={videoIds} />
 <Footer /> 
    </>
  )
}

export default Home
