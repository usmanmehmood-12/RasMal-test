import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const [listValue, setListValue] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('value: ', value)
    setListValue([...listValue, {
      id: listValue.length,
      value: value
    }])
    console.log('listValue: ', listValue)
  }
  const deleteItem = (index) => () =>
    setListValue((listValues) => listValues.filter((_, i) => i !== index));
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <input placeholder="Add text here" type="text" onChange={(e) => setValue(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <ul>
          {listValue.map((listValue) =>
            <li key={listValue.id} onClick={deleteItem(listValue.id)}>{listValue.value} </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
