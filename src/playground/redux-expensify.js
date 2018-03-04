import {createStore, combineReducers} from 'redux'



const addExpense = ({
    description = '' , 
    note = ''
    }={}) => ({
    type: 'ADD_EXPENSE',
    expense : {
        id : 0,
        description,
        note
    }
})

const expenseReducerDefaults = {
    expenses: []
}

const expenseReducer = (state = expenseReducerDefaults, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        return [ ...state,
        action.expense]
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

store.dispatch(addExpense({description:"test", note: "test note"}))
store.dispatch(addExpense({description:"test2", note: "test note2"}))

console.log(store.getState())