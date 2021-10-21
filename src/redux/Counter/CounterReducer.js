import { DECREMENT } from "./CounterType";
const initialState={
    count : 10
}
 const decrementreducer =(state=initialState,action)=>{
    switch (action.type) {
        case DECREMENT:
            return{
                ...state,
                count : state.count -1
            }
     
    
        default: return state
    }
}
export default decrementreducer;