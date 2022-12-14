import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Provider from "./../node_modules/react-redux/es/components/Provider";
import store from "./Redux/store";
import "./services/i18n";
import * as serviceWorker from "./services/serviceWorker";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

    {/* <React.StrictMode> */}
    <BrowserRouter>
      <React.Suspense fallback="Loading...">
        <App />
      </React.Suspense>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
