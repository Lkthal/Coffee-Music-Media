import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
        <div className="Container">
          <ul className = "nav nav-tabs">
            <li class="active"><a href="/">Landing</a></li>
            <li class="active"><a href="/Library">Library</a></li>
            <li class="active"><a href="/Album">Album</a></li>
          </ul>
          </div>
          <h1 className="lg">Bloc Jams</h1>
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
