import React from 'react';

function Dog (props) {

    return (
        <div>
            <h2>Dogs: {props.state.dog}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Dog</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Dog</button>
            </div>
    )
}

export default Dog;