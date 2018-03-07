import React from 'react';
import { Jumbotron,Col, Row } from 'reactstrap';
import './styles/landing.css';

const Landing = () => (



        <Jumbotron fluid>
          <div className="landing">
            <h1 className="display-3">Turn the music up! </h1>
            <Row className="selling-point">
              <Col className="col-md-4" >
                <span className="home-icon ion-music-note"></span>
                <h2 className="point-title">Choose your music</h2>
                <p className="point-description">The world is full of music; why should you have to listen to muisc that someone else chose?</p>
              </Col>

              <Col className="col-md-4" >
                <span className="home-icon ion-radio-waves"></span>
                <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                <p className="point-description">No arbitrary limits. No distractions.</p>
              </Col>

              <Col className="col-md-4" >
                <h2 className="point-title">Mobile enabled</h2>
                <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
              </Col>
              </Row>
            </div>
        </Jumbotron>



);

export default Landing;
