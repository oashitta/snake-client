const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.on("data", (data) => {
    console.log("Note from Server: ", data);
  });

  conn.on("connect", (client) => {
    console.log("Successfully connected to game server");
    conn.write("Mot");
  });

  // interpret incominglishe data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect