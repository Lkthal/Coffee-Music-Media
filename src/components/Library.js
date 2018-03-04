import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';


class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
      {
        this.state.albums.map( (album, index) =>
          <Link to={`/album/${album.slug}`} key={index}>
            <img className="img-circle" src={album.albumCover} alt={album.title} />
            <div><h2 className="md">{album.title}</h2></div>
            <div><h4 className="sm">{album.artist}</h4></div>
            <div><h4 className="sm">{album.songs.length} songs</h4></div>
          </Link>
        )
      }
      </section>
    );
  }
}

export default Library;
