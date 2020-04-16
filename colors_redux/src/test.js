import store from "./store";
import {addColor} from "./actions";

store.dispatch(addColor("Daniel Pink", "#F142FF"));

console.log(
    store.getState()
);