import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputList, setInputList] = useState("");
  const itemEvent = (event) => {
    setInputList(event.target.value)//setInputList is a function to set the value of inputList variable.
  };

  const [items, setItems] = useState([]);
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];//Take previousItems as well as newly added item in this array
    })
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems( (oldItems) => {
      return oldItems.filter( (arrayElement, index) => {
        return index !== id
      })
    })
  }

return <>
  <div className='main_div'>
    <div className='center_div'>
      <br/>
      <h1> ToDo List</h1>
      <br/>
      <input type='text' placeholder='Add Todo Item' onChange={itemEvent} value={inputList} />
      <button onClick={listOfItems}> + </button>
      <ol>
        {/* <li> {inputList} </li> */}
        {
          items.map((itemval, index) => {
            return <ToDoLists 
            key={index} 
            id={index} 
            text={itemval} 
            onSelect={deleteItems}
            />;
          })
        }
      </ol>
    </div>
  </div>
</>
}

export default App;