const { moveKeys, msgs } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key)
  });

  return stdin;
};

const handleUserInput = function (key) {

// To exit the game
 if (key === '\u0003') {
  process.exit(); 
 }

//  to move around - WASD
 if (moveKeys[key]) {
  connection.write (moveKeys[key])
};

// to make comments
if(msgs[key]){
  connection.write(msgs[key])
}


};

module.exports = {
  setupInput,
}