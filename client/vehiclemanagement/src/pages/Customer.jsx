import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import AddCustomer from './AddCustomer';
import { useEffect,useState } from 'react';
import { getCustomers } from '../Api/allApi';


function Customer() {

  const [allCustomers,setAllCustomers]=useState([])

  useEffect(()=>{
    getAllCustomers()
  },[])

  const getAllCustomers=()=>{
    getCustomers().then(res=>{
      console.log(res.data);
      setAllCustomers(res.data)

    })
  }


  return (
    <div>
    <Header/>
        <div className='container'>
          <Row>
              <Col sm={12} md={4}>
                  <AddCustomer/>
              </Col>
              <Col sm={12} md={8}>
                  <div className='m-4 row '>
                  {
                    allCustomers.length > 0 ?
                      allCustomers.map(item=>(
                        <Card style={{ width: '18rem' }} className='mx-2 my-2'>
                            <Card.Img variant="top" src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" />
                            <Card.Body>
                                <Card.Title>{item.vehicle_no}</Card.Title>
                                <Card.Text>
                                  <h6>{item.customer_name}</h6>
                                  <h6>{item.phone}</h6>
                                </Card.Text>
                                <Link className='btn btn-info' to={'/service'}>Services</Link>
                            </Card.Body>
                        </Card>
                      ))
                    
                  :<h4> No Customers </h4>

                  }
                  </div>
              </Col>
          </Row>
        </div>
    <Footer/>
    </div>
  )
}

export default Customer