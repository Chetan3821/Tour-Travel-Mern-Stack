import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'


const servicesData = [
   {
      title: ` 1000+ Destinations`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
   }
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList