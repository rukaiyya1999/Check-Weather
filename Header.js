import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
class Header extends Component {
  render() {
    return (
      <div>
      <>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
    Weather App
    </Navbar.Brand>
  </Container>
</Navbar>
</>
      </div>
    )
  }
}

export default Header
