import { element } from 'deku';
import Input from './input.jsx';
import './todo.css';

/**
 * Todo Component
 */
export default {
  render({props: {cursor}}) {

    // generates the list of items
    const items = cursor.select('items')
      .map(cursor => {
        return <li>
                 { cursor.get() } <span onClick={ cursor.remover }>✖</span>
               </li>;
      });

    return <div class="todo">
             <form onSubmit={ addItem }>
               <ul>
                 { items }
               </ul>
               <Input cursor={ cursor } name="new-item" type="text" />
               <button type="submit" disabled={ !cursor.get('new-item') }>
                 Add
               </button>
             </form>
           </div>;

    /**
     * Action to add a item to the list
     */
    function addItem(ev) {
      ev.preventDefault();
      cursor
        .push('items', cursor.get('new-item'))
        .set('new-item', '');
    }
  }
}
