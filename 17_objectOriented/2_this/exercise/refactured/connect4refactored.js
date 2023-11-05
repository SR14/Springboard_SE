/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
    constructor(p1, p2, height = 6, width = 7) {
      this.players = [p1, p2];
      this.height = height;
      this.width = width;
      this.currPlayer = p1;
      this.makeBoard();
      this.makeHtmlBoard();
      this.gameOver = false;
    }
  
    /** makeBoard: create in-JS board structure:
     *   board = create array of arrays (board[y][x])
     */
    makeBoard() {
      this.board = [];
      for (let y = 0; y < this.height; y++) {
        // use push to add new row to end of array
        this.board.push(Array.from({ length: this.width }));
      }
    }
  
    /** makeHtmlBoard: make HTML table and row of column tops.  */
  
    makeHtmlBoard() {
      const board = document.getElementById('board');
      board.innerHTML = '';
  
      // make column tops (clickable area for adding a piece to that column)
      const top = document.createElement('tr');
      top.setAttribute('id', 'column-top');
  
      // store a reference to the handleClick bound function 
      // so that we can remove the event listener correctly later
      // NEED CLARIFICATION //
      this.handleGameClick = this.handleClick.bind(this);
      
      top.addEventListener("click", this.handleGameClick);
  
      // create clickable parts of the table
      for (let x = 0; x < this.width; x++) {
        const headCell = document.createElement('td');
        headCell.setAttribute('id', x);
        top.append(headCell);
      }
  
      board.append(top);
  
      // make main part of board
      for (let y = 0; y < this.height; y++) {
        // create each row of table
        const row = document.createElement('tr');
      
        for (let x = 0; x < this.width; x++) {
          // create table columns for each row
          const cell = document.createElement('td');
          // name based on row-column
          cell.setAttribute('id', `${y}-${x}`);
          // add column to row 
          row.append(cell);
        }
        // add row to table
        board.append(row);
      }
    }
  
    /** findSpotForCol: given column x, return top empty y (null if filled) */
  
    findSpotForCol(x) {
        // start at the last (top) rowand work your way down on column clicked
      for (let y = this.height - 1; y >= 0; y--) {
        // y = row, x = column clicked
        if (!this.board[y][x]) {
          return y;
        }
      }
      // if all rows in given column are full, return null (no action)
      return null;
    }
  
    /** placeInTable: update DOM to place piece into HTML board */
  
    placeInTable(y, x) {
        // create piece
      const piece = document.createElement('div');
      // define class of piece as 'piece'
      piece.classList.add('piece');
      // style in JS the color of piece based on currPlayer class color
      piece.style.backgroundColor = this.currPlayer.color;
      // position piece based on column location
      // NEED CLARIFICATION
      piece.style.top = -50 * (y + 2);
  
      // get HTML row-column location
      const spot = document.getElementById(`${y}-${x}`);
      // append piece to HTML at correct HTML table location
      spot.append(piece);
    }
  
    /** endGame: announce game end */
  
    endGame(msg) {
      alert(msg);
      // select top clickable row 
      const top = document.querySelector("#column-top");
      // remove event listener (handle game click bound function)
      top.removeEventListener("click", this.handleGameClick);
    }
  
    /** handleClick: handle click of column top to play piece */
  
    handleClick(evt) {
      // get x (coloumn) from ID of clicked cell
      const x = +evt.target.id;
  
      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
      if (y === null) {
        return;
      }
  
      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);
  
      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return this.endGame('Tie!');
      }
  
      // check for win
      if (this.checkForWin()) {
        this.gameOver = true;
        return this.endGame(`The ${this.currPlayer.color} player won!`);
      }
  
      // switch players
      this.currPlayer =
        this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
    }
  
    /** checkForWin: check board cell-by-cell for "does a win start here?" */
  
    checkForWin() {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer
      const _win = cells =>
        cells.every(
          ([y, x]) =>
            //  legal cordinates
            y >= 0 &&
            y < this.height &&
            x >= 0 &&
            x < this.width &&
            // checks if they are the current player's 
            this.board[y][x] === this.currPlayer
        );
  
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          // get "check list" of 4 cells (starting here) for each of the different
          // ways to win
          const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
          const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
          const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
          const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
          // find winner (only checking each win-possibility as needed)
          if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
            return true;
          }
        }
      }
    }
  }
  // create player class, even if same color players, still differentiates
  class Player {
    constructor(color) {
      this.color = color;
    }
  }
  
  // create event listener on start game button
  document.getElementById('start-game').addEventListener('click', () => {
    // create two player classes
    let p1 = new Player(document.getElementById('p1-color').value);
    let p2 = new Player(document.getElementById('p2-color').value);
    // create game class and pass player classes as variables
    new Game(p1, p2);
  });