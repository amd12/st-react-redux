
const defaultState = {
  customer: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'

const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_CUSTOMER:
            console.log('update customer')
            return {...state,customer: [...state.customer, action.payload]}
        case ADD_CUSTOMER:
            return {...state,customer: [...state.customer, action.payload] };
        case DELETE_CUSTOMER:
            return {...state, customer: [...state.customer.filter(customer => customer.id !== action.payload)]};
        default:
            return state;
    }
}
export default customerReducer;

export const updateCustomerAction = (payload) => ({type: UPDATE_CUSTOMER, payload});
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const deleteCustomerAction = (payload) => ({type: DELETE_CUSTOMER, payload});
