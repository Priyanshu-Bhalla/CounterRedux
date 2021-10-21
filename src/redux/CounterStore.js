import { createStore } from "redux";
import decrementreducer from "./Counter/CounterReducer";

const store = createStore(decrementreducer);
export default store;
