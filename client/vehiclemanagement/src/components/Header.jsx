import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} style={{'textDecoration':'none'}}>
          <i className="fa-solid fa-car" />
            {' '}
            <span>Garage App</span>
            </Link>
          </Navbar.Brand>
          <Link to={'/customer'} className='btn btn-info' variant="primary">Customers</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header