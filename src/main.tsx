import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Dashboard from './components/Dashboard.component';
import store from './store';

ReactDOM.render(
    <Provider store={store} >
        <Dashboard />
    </Provider>,
    document.getElementById("main")
);