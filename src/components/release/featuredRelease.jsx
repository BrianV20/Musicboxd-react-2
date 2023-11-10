import React from "react";
import '../../../public/css/featuredRelease.css'

export const FeaturedRelease = () => {
  return (
    <main>
        <div className="albumCover col-5">
            <img src="https://e.snmc.io/i/fullres/w/ac876ae65497a63aa65347fa1ebf1cd1/7027387" alt="album cover"/>
            <h5>Genre: Alternative Rock</h5>
            <h5>4.04 / 5.0 with 30.071 ratings</h5>
        </div>
        <div className="albumInfo col-7">
            <h2>Grace</h2><h5>(1994)</h5>
            <h4>Jeff Buckley</h4>
        </div>
    </main>
  );
};
