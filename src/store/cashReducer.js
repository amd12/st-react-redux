
const defaultState = {
    cash: 0,
};

const ADD_CASH = 'ADD_CASH';
const DELETE_CASH = 'DELETE_CASH';

const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload};
        case DELETE_CASH:
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}
export default cashReducer;

export const addCashAction = (cash) => ({type: 'ADD_CASH', payload:cash});
export const deleteCashAction = (cash) => ({type: 'DELETE_CASH', payload:cash});