import React, {useReducer} from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Cat from './components/Cat';
import Dog from './components/Dog'

function App() {

const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Cat state={currentState} dispatch={dispatch}/>
        <Dog state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;