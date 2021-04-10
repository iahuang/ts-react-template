import { App } from "./App";

declare const requirejs: any;

requirejs(["react", "react-dom"], function (React: any, ReactDOM: any) {
    ReactDOM.render(App(), document.getElementById("root"));
});
