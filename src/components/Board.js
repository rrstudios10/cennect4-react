import React, { Component, useState } from "react";

const Board = (props) => {
  const board = [];
  // console.log(props.currentGame.winGame);
  for (let i = 0; i < 7; i++) {
    board.push(
      <div
        className="arrow"
        key={`arrow${i}`}
        onClick={() => {
          props.handleClick(i);
          // console.log(`Arrow ${i} clicked`);
          // console.log(props.currentGame);
        }}
      >
        <i
          className="bi bi-arrow-down-short"
          style={{
            fontSize: "4rem",
            color: props.currentGame.colors[props.currentGame.player],
            transition: "ease 0.3s",
          }}
        ></i>
      </div>
    );
  }

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      // if (
      //   props.currentGame.lastCell[0] === i &&
      //   props.currentGame.lastCell[1] === j
      // ) {
      //   console.log("last cell ", [i, j]);
      // }
      // console.log(document.querySelector(`#tile${i}${j}`));
      board.push(
        <div id={`tile${i}${j}`} className="tile" key={`tile${i}${j}`}>
          {props.currentGame.board[i][j] === -1 ? (
            <div id={`icon${i}${j}`}></div>
          ) : (
            <i
              id={`icon${i}${j}`}
              className="bi bi-circle-fill pop-up"
              style={{
                fontSize: "2.5rem",
                color: `${
                  props.currentGame.colors[props.currentGame.board[i][j]]
                }`,
              }}
            ></i>
          )}
        </div>
      );
    }
  }

  if (props.currentGame.winGame.winner !== -1) {
    for (let x of props.currentGame.winGame.winIdx) {
      document.querySelector(`#tile${x[0]}${x[1]}`).classList.add("win-tile");
    }
  }

  return <div className="board">{board}</div>;
};

export default Board;
