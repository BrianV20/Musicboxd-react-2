import React from 'react';
import '../../public/css/navbar.css';

export const NavBar = () => {
  return (
    <nav>
      <div className='logoDiv'>
        <h1>Musicboxd</h1>
      </div>
      <div className='linksDiv'>
        <ul>
          <li><a href="#">Releases</a></li>
          <li><a href="#">Artists</a></li>
        </ul>
      </div>
      <div className='searchDiv'>
        <form>
          <input type="text" placeholder="Search..."/>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className='signDiv'>
        <a href="#">Sign In</a>
      </div>
    </nav>
  );
};