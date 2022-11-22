import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import Helmet from '../Helmet/Helmet'
import image from "./hero_image.jpg"
import "./Home.css"
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import image1 from './since1636843357.jpeg'
import image3 from './lastpic.jpg'
import product1 from './product1.jpg'
import product2 from './product2.jpg'
import product3 from './product3.jpeg'
import product4 from './product4.jpg'
import product5 from './product5.jpg'
import product6 from './product6.jpg'
import product7 from './pic3.jpg'
import product8 from './pic4.jpg'

const Home = (props) => {
  const sweets=[{
    
    imgUrl: product1,
    name:"KAJU KATLI",
  },
  {
    
    imgUrl: product2,
    name:"ROSE DRYFRUIT LADDU",
  },

  {
    
    imgUrl: product3,
    name:"ANJEER DRY FRUIT ROLL",
  },

  {
   
    imgUrl: product4,
    name:"JAMOON",
  },
  {
   
    imgUrl: product5,
    name:"RAS MALAI",
  }, {
   
    imgUrl: product6,
    name:"LADDU",
  },
  {
   
    imgUrl: product7,
    name:"DRY JAMOON",
  },
  {
   
    imgUrl: product8,
    name:"SANDESH",
  },
];
return <Helmet title="Home">
 
  <section>
    <Container>
    <h2 className='heading'>LOVE IS SWEET</h2>
      <Row>
        <Col lg='7' md='7'>
          <div className='hero_img'>
            <img src={image} className="w-90"/>


          </div>
        </Col>
        <Col lg='5' md='5'>
          <div className='hero_content'>
            <br></br>
              <h5 className='mb-3'>Easy to make an order...</h5>
                <h1 className='mb-6 hero_title' ><span>HAPPY? Share your  happiness with Sweets...</span></h1>
                  <p className='para'>The earliest sweet which people have eaten since prehistoric times was honey. The origins of confectionery can be traced back to about 2000BC to the ancient Egyptians who made sweets by combining fruits and nuts with honey. The Romans, Greeks and Chinese made sweets with sesame seeds. The Aztecs in Mexico used the cocoa bean to make a bitter drink over 3000 years ago. This drink was sweetened with sugar after 1500 years.

                  </p>


          </div>
        </Col>
                    
      </Row>
            
       
      <br></br>
      <div>
        <br></br>
        <section className="pt-0">
        <Category />
        </section>
        
        <div>
        <Row>
        <Col lg='5' md='5'>
            <div className='hero_content'>
              <h5 className='popular'><b>About Us:</b></h5>
              <br></br>
              <p className='para'>
              <b>Sweet Mania</b> made a humble beginning in 2015 as <u>sweet stall</u> at Kempegowda circle, Bangalore which was a small 6ft X 6ft counter that still stands at that spot.
                The USP of Kanti Sweets lies in its reasonable pricing with honest service, standard quality and maintaining authentic taste. The ingredients are sourced with great care to maintain consistent quality of raw materials which plays significant role in taste of the offerings.
                Sweet Mania is one of the few stores in the city where speciality sweets, specific to popular festivals and their celebrations like Sankranti, Holi, Raksha Bandhan, Dusshera and Diwali are available, which makes it a popular mithai-destination despite of no loud branding or glitzy packaging.
                Sweet Mania is one of the few sweet makers to have an ISO 9001-2015 and ISO 22000: 2018 certifications.
              </p>


            </div>
        </Col>
        <Col lg='7' md='7'>
            <div className='hero_img'>
                <img src={image1} className="w-70"/>


            </div>
        </Col>
        </Row>
        <br></br>
        <Row>
            <img src={image3} className="w-80"/>
        </Row>
        <div>
            <Row>
            <Col lg='7' md='7'>
                        <div className='hero_content'>
                            <h5 className='popular'><b>Our Popular Products:</b></h5>


                        </div>
                    </Col>

            </Row>
            <br></br>
            <div>
            
            <Row>
        {sweets.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="category_item" />
              </div>
              
              
            </div>
            <h6 className='nameone'>{item.name}</h6>
            
          </Col>
        ))}
      </Row>
        </div>
      </div>
      </div>
      </div>
      </Container>
      </section>
      <br></br>
    
     
      <Footer/>
    </Helmet>
}

export default Home
