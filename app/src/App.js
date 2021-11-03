import './App.css';
// import React from 'react';
import Animal from './components/animal';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      <div className='App-container'>
        <div className='App-left-container'>
          <h1>Animal Grabber (App.Js)</h1>
        </div>
        <div className='App-right-container'>
          <Animal/>
        </div>

      </div>
    </div>
  );
}

export default App;
