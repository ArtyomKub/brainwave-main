import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {BackgroundModel} from "./components/3dModel/BackgroundModel/BackgroundModel.jsx";
import './18n.js'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Suspense>
                <BackgroundModel/>
                <App/>
            </Suspense>
        </Router>
    </React.StrictMode>
);
