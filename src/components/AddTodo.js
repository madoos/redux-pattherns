import React from 'react'
import { isEmpty } from 'ramda'

class AddTodo extends React.Component {
    render() {
      return (
        <div>
          <input type="text" ref="input" />
          <button onClick={e => this.handleClick(e)}>Add</button>
        </div>
      );
    }
  
    handleClick() {
      const node = this.refs.input;
      const text = node.value.trim();
      if(!isEmpty(text)){
        this.props.onAddClick(text);
      }
      node.value = '';
    }
  }

export default AddTodo