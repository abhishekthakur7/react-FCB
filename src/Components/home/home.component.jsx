import React from "react";
import Featured from "../featured/featured.component";
import MatchesHome from "../matches/matches-home.component";
import MeetPlayers from "../meet-players/meet-players.component";
import Promotion from "../promotion/promotion.component";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchesHome />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
