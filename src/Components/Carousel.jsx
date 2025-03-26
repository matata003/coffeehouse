const Carousel = () => {
    return ( 
    <section className="row">
        <div className="col-12">
            <div className="carousel carousel-fade" id="myCarousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src="images/slide4 - Copy.jpg" className="d-block w-100 "  alt="" height="450px"/>
                        <div className="carousel-caption">
                            <h4>We sell everything coffee</h4>
                        </div>
                    </div>
                    <div className="carousel-item  slide">
                        <img src="images/carousel2.jpg" className="d-block w-100" alt="" height="450px"/>
                        <div className="carousel-caption">
                            <h4>Every sip is a blend of delight</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/carousel4.jpg" className="d-block w-100" alt="" height="450px"/>
                        <div className="carousel-caption">
                            <h4>Savor the blend of coffee flavours</h4>
                        </div>
                    </div>
                 <div className="carousel-item">
                    <img src="images/carousel5.jpg" className="d-block w-100" alt="" height="450px"/>
                    <div className="carousel-caption">
                            <h4>We sell everything coffee</h4>
                        </div>
                    
                 </div>
                
              </div>
              
              {/* <!-- caroesel control --> */}
  
               <a className="carousel-control-prev" data-bs-slide="prev" href="#myCarousel"> 
               <span className="carousel-control-prev-icon"></span>
               </a>
  
               <a className="carousel-control-next" data-bs-slide="next" href="#myCarousel">
                 <span className="carousel-control-next-icon"></span>
                 </a>
  
                 {/* <!-- control indicators --> */}
  
                  <ol className="carousel-indicators" >
  
                   <li className="active" data-bs-target="myCarousel" data-bs-slide-to="0"></li> 
                   <li data-bs-target="myCarousel" data-bs-slide-to="1"></li> 
                   <li data-bs-target="myCarousel" data-bs-slide-to="2"></li> 
                   <li data-bs-target="myCarousel" data-bs-slide-to="3"></li> 
                   <li data-bs-target="myCarousel" data-bs-slide-to="4"></li> 
  
  
                  </ol>
  

           </div> 
           <marquee className="bg-dark text-white p-2">Delivery happens monday to sunday   Same day delivery for oders placed before 2PM</marquee>

        </div>
    </section>
    
     );
}
 
export default Carousel;