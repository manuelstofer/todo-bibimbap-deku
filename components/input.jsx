import {element} from 'deku'

export default {
  render({ props: { type, name, cursor, placeholder } }) {

    return <input
        class="ui-input"
        type={ type }
        placeholder={ placeholder }
        value={ cursor.get(name) }
        onInput={ onInput } />


    function onInput(ev) {
      var value = ev.srcElement.value;
      return cursor.transaction()
        .set(name, value)
        .set('did-change', true)
        .commit();
    }
  }
}
