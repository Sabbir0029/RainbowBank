
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Shared/Style/Style.css';
import img from '../../img/istockphoto-1289183522-612x612.jpg';

const Home = () => {
    return (
        <div className=''>
            <Container>
            <Row>
              <Col sm={12} md={6}>
                  <h4 className='text1 text-dark fw-bold fst-italic mt-5'> <span className='btnColortext fw-bold fst-italic mt-5'>R</span>ainbow<span className='btnColortext fw-bold fst-italic mt-5'>Bank</span></h4>
                <img className=' mb-5' src={img} alt=""/>
              </Col>
              {/*  */}
              <Col sm={12} md={6}>
              <h1 className='text-dark fw-bold fst-italic mx-5 mt-5'>Hello ! Welcome to the Rainbow Bank Platform </h1>
              <Link to='/login'><Button className='btnColor border-light m-3  fw-bold fst-italic'>Login</Button></Link>
                <Link to='/register'><Button className='btnColor border-light fw-bold fst-italic'>Register</Button></Link>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Home;

