import React from "react";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
import bgGame from "./assets/bgGame.png";
import "./style.css";
export default function Ex_TaiXiu() {
  return (
    <div className="game_container" style={{ background: `url(${bgGame})` }}>
      <XucXac />
      <KetQua />
    </div>
  );
}

// 4 => 10 xỉu
