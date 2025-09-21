import logo from './22gameslogored.svg';
import './App.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container, Header, Content, Footer, Grid, Col, Navbar, Nav, Card } from "rsuite";


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <Container className="App-container">
      <Header className='App-header'>
        <img className="App-logo" src={logo} alt="22Games"/>
        <Navbar className='App-nav-bar' appearance='subtle'>
          <Nav>
            <Nav.Item as="button" onClick={() => scrollToSection("Games")}>Games</Nav.Item>
            <Nav.Item as="button" onClick={() => scrollToSection("AboutUs")}>About Us</Nav.Item>
            <Nav.Item as="button" onClick={() => scrollToSection("Contact")}>Contact</Nav.Item>
          </Nav>
        </Navbar>
      </Header>
      
      <Content className="App-content">
        <div id="Games" className='App-games-section'>
          <h2>Game coming soon</h2>
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://youtu.be/K6N4hK8RfsM?si=7hsjM5idYx4Hd3v3"
            title="Game Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div id="AboutUs" className='App-about-us-section'>
          <Card className='custom-card' size="lg" shaded>
            <Card.Header as="h2">About Us</Card.Header>
            <Card.Body>We are a developer group of three.</Card.Body>
          </Card>
        </div>
      </Content>
      
      <Footer>
        <div className='App-footer'>
          <Grid fluid >
            <Col className="footer-item">
              <div className='footer-group'>
                <Mail/>
                <p id="Contact">contact@22games.dk</p>
              </div>
              <div className='footer-group'>
                <Phone/>
                <p>+45 22258003</p>
              </div>
              <div className='footer-group'>
                <MapPin/>
                <p> Aarhus, Denmark</p>
              </div>
            </Col>
          </Grid>
        </div>
      </Footer>
    </Container>
  );
}

export default App;
