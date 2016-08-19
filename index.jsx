let {element, createApp} = require('deku');
let Bibimbab = require('bibimbap');

console.log('bla')

let state = new Bibimbab({ items: ['some', 'items'] });
state.on('commit', rerender)

let render = createApp(document.body, function () {})
rerender();

function rerender() {
  let Todo = require('./components/todo.jsx').default;
  render(<Todo cursor={ state.cursor() }/>)
}

if (module.hot) {
  module.hot.accept('./components/todo.jsx', rerender);
}
