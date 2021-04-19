import React from 'react';

function Cat (props) {

    return (
        <div>
            <h2>Cats: {props.state.cat}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Cat</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Cat</button>
            </div>
    )
}

export default Cat;