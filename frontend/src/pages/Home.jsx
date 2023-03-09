import React from 'react'
import '../styles/home.css'
import { Container, Row, Col, Button } from 'reactstrap'
import heroImg from '../assets/images/hero.jpg'
import Subtitle from './../shared/subtitle'
import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'

const Home = () => {
   return <>
      {/* ========== HERO SECTION ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                     </div>
                     <h1><span className='hightlight'> Discover</span> <br/> New Destinations</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                        Molestiae tempora dignissimos, animi praesentium molestias perferendis
                        porro expedita delectus. Soluta natus porro.
                     </p>
                     <Button className='btn primary__btn'>Join Now</Button>
                  </div>
               </Col>

               <Col lg='6'>
                  <div className="hero">
                     <img src={heroImg} alt="" height={500}/>
                  </div>
               </Col>
           

               <SearchBar />
            </Row>
         </Container>
      </section>
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  {/* <h5 className="services__subtitle">What we serve</h5> */}
                  <h1 className="services__title">Popular Destinations <br /> by <span>cloudTravel</span></h1>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>

      {/* ========== GALLERY SECTION START ============== */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Travelers Love'} />
                  <h2 className="testimonial__title">What our Travelers say about us</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
   </>
}

export default Home