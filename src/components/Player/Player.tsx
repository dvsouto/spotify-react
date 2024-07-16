import React from "react";
import "./Player.css";

const Player = () => {
  return (
    <div className="player">
      <div className="music">Left</div>
      <div className="player-controller">Center</div>
      <div className="buttons">Right</div>
    </div>
    ); 
};

export {
  Player
};