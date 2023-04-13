const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.on("data", (data) => {
    console.log("Note from Server: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Mot");
    // conn.write("Move: up");
    // conn.write("Move: left");
    // conn.write("Move: down");
    // conn.write("Move: right");  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect








    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500)

    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 600)

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500)

    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 500)