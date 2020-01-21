import React, { useRef } from 'react'
import { isEmpty } from 'ramda'


const AddTodo = ({ onAddClick }) => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    const text = inputEl.current.value.trim();
    if(!isEmpty(text)){
      onAddClick(text);
    }
    inputEl.current.value = '';
  };

  return (
     <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Add Todo</button>
    </div>
  );
}



export default AddTodo