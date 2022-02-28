import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import photo from '../../img/792-7923153_font-awesome-user-icon-gloucester-road-tube-station.png';


const Navigation = () => {
    const {logOut,admin,user} = useAuth();
    return (
        <div className='container'>
            <Navbar collapseOnSelect className='fixed-top' expand="lg" bg="light" variant="dark">
               <Container>
               <Navbar.Brand  className='fw-bold text-dark fst-italic'><span className='btnColortext fw-bold fst-italic mt-5'>R</span>ainbow<span className='btnColortext fw-bold'>Bank</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="me-auto">
                   {admin &&
                <Nav.Link as={Link}  to="/MakeAdmin" className='text-dark fw-bold fst-italic'>Make Admin</Nav.Link>
                }
                   {admin &&
                <Nav.Link as={Link}  to="/ClientApproved" className='text-dark fw-bold fst-italic'>Client Approved</Nav.Link>
                }
                 </Nav>
                 <Nav className="me-4">
                   {
                     user?.email? 
                     <Button variant="light" className='text-dark fw-bold fst-italic' onClick={logOut}>LogOut</Button>
                     :
                     <Nav.Link  as={Link} to="/login" bg="light" className='text-dark fw-bold fst-italic'>Login</Nav.Link>
                   }
                   <div className='d-flex photo'>
            {user?.displayName?
      <img src={user.photoURL} className='photo ms-3 rounded-circle'/>:
                <img src={photo} alt=""/>
            }
            <p className='text-dark fw-bold fst-italic'>{user.displayName}</p>
            </div>
                 </Nav>
               </Navbar.Collapse>
               </Container>
           </Navbar>
        </div>
    );
};

export default Navigation;