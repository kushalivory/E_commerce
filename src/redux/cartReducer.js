const reducer = (state=0 , action)=> {
    if(action.type === 'Add'){
        return state + action.payload
    }
    else if(action.type === 'Withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }
}

export default reducer;