const net = require("net");
const { IP, PORT, name } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log("Note from Server: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: " + name);

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;








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