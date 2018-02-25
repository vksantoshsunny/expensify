import { createStore } from 'redux';

const incrementCount = (incrementBy) => ({
  type: 'INCREMENT',
  incrementBy: typeof incrementBy === 'number' ? incrementBy : 1,
})

const decrementCount = (decrementBy) => ({
  type: 'DECREMENT',
  decrementBy: typeof decrementBy === 'number' ? decrementBy : 1,
})

const resetCount = () => ({
  type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
    {
      return {
        count: state.count + action.incrementBy
      }
    }
    case 'DECREMENT':
    {
      
      return {
        count: state.count - action.decrementBy
      }
    }
    case 'RESET':
    {
      return {
        count: 0
      }
    }
    default :{
        return state
    }
    
  }
});


store.subscribe( () => {
  console.log(store.getState());
})




store.dispatch(incrementCount());

store.dispatch(incrementCount(5))


store.dispatch(incrementCount(2))

store.dispatch(decrementCount(2))

store.dispatch(decrementCount())

store.dispatch(resetCount())


