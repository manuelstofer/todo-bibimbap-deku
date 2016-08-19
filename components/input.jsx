import { element } from 'deku';

/**
 * Input component that demonstrates how 'two way binding'
 * can be implemented
 */

export default {
  render({props: {type, name, cursor, placeholder}}) {

    return <input class="ui-input"
                  type={ type }
                  placeholder={ placeholder }
                  value={ cursor.get(name) }
                  onInput={ onInput } />;

    function onInput(ev) {
      const value = ev.srcElement.value;
      return cursor.set(name, value)
    }
  }
}
