import { React } from "react";
import { useFetch } from "../useFetch";
// import { Button, Card } from "@tremor/react";

export const Index = () => {
  const { data: users, loading } = useFetch(
    "https://localhost:7196/api/User/GetUsers"
  );

  const { data: releases, loading: loadingReleases } = useFetch(
    "https://localhost:7196/api/Releases/GetRelease"
  );

  const { data: artists, loading: loadingArtists } = useFetch(
    "https://localhost:7196/api/Artist/GetArtists"
  );



  return (
    <>
      <div>
        <h2>Users</h2>
        <div className="card">
          <ul>
            {loading && <li>loading...</li>}
            {users?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Releases</h2>
        <div className="card">
          <ul>
            {loadingReleases && <li>loading...</li>}
            {releases?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Artists</h2>
        <div className="card">
          <ul>
            {loadingArtists && <li>loading...</li>}
            {artists?.map((item) => (
              <li key={item.id}>{item.fullName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
