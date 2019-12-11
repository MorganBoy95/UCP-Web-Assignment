import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover{
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Virtual Open Day</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="F:\UCP Website\Pages\index.html">Computing</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="www.google.co.uk">Previous Students</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="../Pages/galeeries.html">Gallery</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)