export const InitialState = {
  count: 0,
}


export const Reducer = (state, action) =>{
  switch(action.type){
    case "increment":
      return{
        ...state,
        count: state.count + 1,
      }
    case "decrement":
      if(state.count == 0){
        return state;
      }
      else{
        return{
          ...state,
          count: state.count - 1,
        }
      }
    default:
      return state;
  }
}