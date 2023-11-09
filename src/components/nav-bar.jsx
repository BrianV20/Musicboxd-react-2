import React from 'react';
import '../../public/css/navbar.css';

export const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <h1>Musicboxd</h1>
      </div>
      <div className="center">
        <ul>
          <li><a href="#">Releases</a></li>
          <li><a href="#">Artists</a></li>
        </ul>
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Search..."/>
          <button type="submit">Search</button>
        </form>
        <a href="#">Sign In</a>
      </div>
    </nav>
  );
};