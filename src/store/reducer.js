const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        case 'ADD_TO':
            return {
                counter: state.counter + action.val
            }
        case 'REMOVE_FROM':
            return {
                counter: state.counter - action.val
            }
    }
    return state;
}

export default reducer;