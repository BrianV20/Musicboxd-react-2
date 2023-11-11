import React from "react";
import "../../public/css/navbar.css";
import { Link } from "wouter";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" className="hover:opacity-70 nav-link">
          <h2 id="title">Musicboxd</h2>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse links" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/releases" className="hover:opacity-70 nav-link">
                Releases
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/artists" className="hover:opacity-70 nav-link">
                Artists
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/login" className="hover:opacity-70 nav-link">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:opacity-70 nav-link">
                register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav>
    //   <div className='logoDiv'>
    //     <h1>Musicboxd</h1>
    //   </div>
    //   <div className='linksDiv'>
    //     <ul>
    //       <li><a href="#">Releases</a></li>
    //       <li><a href="#">Artists</a></li>
    //     </ul>
    //   </div>
    //   <div className='searchDiv'>
    //     <form>
    //       <input type="text" placeholder="Search..."/>
    //       <button type="submit">Search</button>
    //     </form>
    //   </div>
    //   <div className='signDiv'>
    //     <a href="#">Sign In</a>
    //   </div>
    // </nav>
  );
};
