import React from "react";
import Featured from "../featured/featured.component";
import MatchesHome from "../matches/matches-home.component";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchesHome />
    </div>
  );
};

export default Home;
