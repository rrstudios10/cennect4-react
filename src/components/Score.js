import React, { Component } from "react";
import { SettingsModal } from "./Modals";

const Score = (props) => {
  return (
    <div className="score">
      <h1>CONNECT 4</h1>
      <div className="p1-p2-grid">
        <i
          className="bi bi-circle-fill"
          style={{ color: props.currentGame.colors[0] }}
        ></i>
        <div className="grid-area-b">Player 1</div>
        <div id="score-p1" className="grid-area-c">
          0
        </div>
        <i
          className="bi bi-circle-fill"
          style={{ color: props.currentGame.colors[1] }}
        ></i>
        <div className="grid-area-e">Player 2</div>
        <div id="score-p2" className="grid-area-f">
          0
        </div>
      </div>
      <div className="controls">
        <button
          type="button"
          className="circular-button"
          data-bs-toggle="modal"
          data-bs-target="#settings-modal"
        >
          <i className="bi bi-gear-fill"></i>
        </button>
        <button
          className="circular-button"
          // data-bs-toggle="modal"
          // data-bs-target="#info-modal"
        >
          <i className="bi bi-info-lg"></i>
        </button>

        {/* Modals */}
        <SettingsModal />
      </div>
    </div>
  );
};

export default Score;
