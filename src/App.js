import "./App.css";
import Board from "./components/Board.js";
import "./components/Board.css";

import { useState } from "react";

import Score from "./components/Score";
import "./components/Score.css";

function App() {
  const [state, setState] = useState({
    numPlayers: 2,
    playerColors: ["#4D455D", "#E96479"],
    currentGameMoves: [],
    currentBoard: makeBoard(6, 7),
    currentPlayer: 0,
    winGame: {
      winner: -1,
      winIdx: [],
    },
    lastCell: [],
    history: [],
  });

  function makeBoard(m, n) {
    const ret = new Array(m);
    for (let i = 0; i < m; i++) {
      ret[i] = [];
      for (let j = 0; j < n; j++) {
        ret[i].push(-1);
      }
    }
    return ret;
  }

  function checkWinner(board, m, n) {
    var currState = structuredClone(state);
    const vis = new Array(m);
    for (let i = 0; i < m; i++) {
      vis[i] = [];
      for (let j = 0; j < n; j++) {
        vis[i].push(0);
      }
    }

    const dx = [1, -1, 0, 0, 1, 1, -1, -1];
    const dy = [0, 0, 1, -1, 1, -1, 1, -1];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (vis[i][j] === 0 && board[i][j] !== -1) {
          var q = [[i, j, 1, -1, [[i, j]]]];
          vis[i][j] = 1;
          while (q.length > 0) {
            var k = q.shift();
            if (k[2] === 4) {
              console.log(`${board[k[0]][k[1]]} won`);
              console.log("4 cells: ", k[4]);
              return [board[k[0]][k[1]], k[4]];
            }
            for (let d = 0; d < 8; d++) {
              var i1 = k[0] + dx[d];
              var j1 = k[1] + dy[d];
              if (
                i1 >= 0 &&
                i1 < 6 &&
                j1 >= 0 &&
                j1 < 7 &&
                vis[i1][j1] === 0 &&
                board[i1][j1] === board[k[0]][k[1]] &&
                (k[3] === -1 || k[3] === d)
              ) {
                q.push([i1, j1, k[2] + 1, d, [...k[4], [i1, j1]]]);
                vis[i1][j1] = 1;
              }
            }
          }
        }
      }
    }
    return -1;
  }

  const handleArrowClick = (j) => {
    var currState = structuredClone(state);
    // console.log(currState);
    for (let i = 5; i >= 0; i--) {
      if (currState.currentBoard[i][j] === -1) {
        currState.currentBoard[i][j] = currState.currentPlayer;
        currState.lastCell = [i, j];
        break;
      }
    }
    const tempState = checkWinner(currState.currentBoard, 6, 7);
    if (tempState !== -1) {
      currState.winGame.winner = tempState[0];
      currState.winGame.winIdx = tempState[1];
    }
    currState.currentPlayer =
      (currState.currentPlayer + 1) % currState.numPlayers;
    // console.log("Turn of: ", currState.currentPlayer);
    setState(currState);
  };

  return (
    <div className="main-ui">
      <Score
        currentGame={{
          currentPlayer: state.currentPlayer,
          colors: state.playerColors,
          winGame: state.winGame,
        }}
      />
      {/* TODO: Divider */}
      <Board
        handleClick={handleArrowClick}
        currentGame={{
          board: state.currentBoard,
          colors: state.playerColors,
          player: state.currentPlayer,
          lastCell: state.lastCell,
          winGame: state.winGame,
        }}
      />
    </div>
  );
}

export default App;
