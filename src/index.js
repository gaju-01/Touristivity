import App from "./App";
import ReactDOM from "react-dom";
import store from "../src/components/store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
