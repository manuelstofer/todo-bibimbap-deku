const Bibimbab             = require('bibimbap');
const {element, createApp} = require('deku');

// global state
const state = new Bibimbab({
  items: ['some', 'items']
});

// rerender the ui when the state changes
state.on('commit', rerender);

const app = createApp(document.body, function() {});
rerender();

/**
 * Render the Todo component
 */
function rerender() {
  const Todo = require('./components/todo.jsx').default;
  app(<Todo cursor={ state.cursor() } />);
}

// Add support for hot code reloading
if (module.hot) {
  module.hot.accept('./components/todo.jsx', rerender);
}
