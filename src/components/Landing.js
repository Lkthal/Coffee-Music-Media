import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './styles/landing.css';

let test = {
  backgroundColor: "white",
  backgroundImage:  'url(./images/blur_bg_3.jpg)'
};
const Landing = () => (

      <div>
      <div style={test}>

      <Jumbotron fluid>
        <Container fluid>
          <section className="library">
            <h1 className="display-3">Turn the music up! </h1>
            <section className="selling-point">
              <div className="point">
                <h2 className="point-title">Choose your music</h2>
                <p className="point-description">The world is full of music; why should you have to listen to muisc that someone else chose?</p>
              </div>
              <div className="point">
                <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                <p className="point-description">No arbitrary limits. No distractions.</p>
              </div>
              <div className="point">
                <h2 className="point-title">Mobile enabled</h2>
                <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
              </div>
              </section>
            </section>
        </Container>
      </Jumbotron>
    </div>
    </div>

);

export default Landing;
