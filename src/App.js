import { useState } from 'react';
import './App.css';

function App() {

	const [color, setColor]=useState('#d9d9d9')


  return (
    <div className="App">
			<div className='screen' style={{backgroundColor:color}}></div>
			<input onChange={(el)=>{setColor(el.target.value)}} className='input' type="text" value={color} />
			<button className='saveButton button'>SAVE</button>

    </div>
  );
}

export default App;
