import React from "react";
import {render} from "react-dom";
import App from "./App";
import storeFactory from "./storeFactory";
import {Provider} from 'react-redux'

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("react-container")
);
