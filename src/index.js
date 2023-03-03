import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureAppStore from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureAppStore();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
