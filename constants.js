const IP = '165.227.47.243';
const PORT = 50541;

const name = 'Mot';

const moveKeys = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right'
};

const msgs = {
  'h': 'Say: Hey Peeps!',
  'g': 'Say: game on!',
  't': 'Say: gotcha!',
  'l': 'Say: let\'s do this',
  'b': 'Say: i\'m outta here!' 
}

module.exports = {
  IP,
  PORT,
  name,
  moveKeys,
  msgs
};
