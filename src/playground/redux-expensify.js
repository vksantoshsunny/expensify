import {createStore, combineReducers} from 'redux'


const expenseReducerDefaults = {
    expenses: []
}

const expenseReducer = (state = expenseReducerDefaults, action) => {
    switch(action.type){
        default:
        return state;
    }
 
}


const filtersReducerDefaults = {
    id:"0",
    date:"",
    description: "some description"
}
const filtersReducer = (state = filtersReducerDefaults, action) => {
    switch(action.type){
        default:
        return state;
    }
 
}



const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
}));


console.log(store.getState())