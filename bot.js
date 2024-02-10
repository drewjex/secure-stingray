// 👋 Hello there! This file contains ready-to-edit bot code.
// 🟢 Open "README.md" for instructions on how to get started!
// TL;DR Run ./connect (or .\connect.cmd on Windows) to begin.

class Bot {
  constructor(config) {
    this.config = config;
    console.log("Hello world!", this.config);
  }

  move(board) {
    console.log(board); // 3x3 array with values "x" or "o" or "empty"

    // Return the spot you'd like to move here.
    // x should be an integer between 0 and 2
    // y should be an integer between 0 and 2
    return { x: 0, y: 0 };
  }

  end(board) {
    console.log("Good game!");
  }
}

module.exports.Bot = Bot;
