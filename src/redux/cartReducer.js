const reducer = (state={} , action)=> {
    if(action.type === 'Add'){
        console.log(action,"action")
        return state;
    }
    else{
        return state;
    }
}

export default reducer;