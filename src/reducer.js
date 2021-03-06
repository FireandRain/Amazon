// Reducer allows the data to be dispatched ot the data layer ( StateProvider )

export const initialState = {
    basket : [], 
    total: 0,
}; 

//selector 

export const totalPrice = (basket) => 
    basket?.reduce((prev,curr) => {
        return prev + curr.price;
}, 0);


const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state, 
                basket: [...state.basket, action.item],
            }
            default: 
                return state;
        }   
};

export default reducer; 
