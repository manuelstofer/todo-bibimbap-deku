const Bibimbab             = require('bibimbap');
const {element, createApp} = require('deku');


const state = new Bibimbab({
  items: ['some', 'items']
});
state.on('commit', rerender);

const app = createApp(document.body, function() {});
rerender();

function rerender() {
  const Todo = require('./components/todo.jsx').default;
  app(<Todo cursor={ state.cursor() } />);
}

if (module.hot) {
  module.hot.accept('./components/todo.jsx', rerender);
}
