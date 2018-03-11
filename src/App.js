import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import blocjamslogo from './images/blocjamslogo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
        <div className="Container">
          <ul className = "nav nav-tabs">
            <li className="active"><a href="/">Landing</a></li>
            <li className="active"><a href="/Library">Library</a></li>
            <li className="active"><a href="/Album">Album</a></li>
          </ul>
          </div>
          <img src={blocjamslogo} className="logo" alt="logo" />
        </header>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
