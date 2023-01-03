export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
})

export const addReduxMoney = (storeAmount) => {
    // console.log(storeAmount)
    return {
        type: 'Add',
        payload: storeAmount
    }
            
}

export const withdrawReduxMoney = (storeAmount) => {
    return {
            type: 'Withdraw',
            payload: storeAmount
    }
}

