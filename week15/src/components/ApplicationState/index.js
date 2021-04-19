let state = {
    Dog: 0,
    Cat: 0
};

function reducer(state, action) {

    switch (action.type) {
        case 'increment1':
            return {
                Dog: state.dog + 1, cat: state.cat};
        case 'increment2':
            return {
                dog: state.dog, cat: state.cat + 1};
        case 'decrement1':
            return {
                dog: state.dog - 1, cat: state.cat};
        case 'decrement2':
            return {
                dog: state.dog, cat: state.cat - 1};
        default:
            throw new Error();
    }

}

export {state, reducer};