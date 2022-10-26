import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default (
  el: ReactDOM.Container | null,
  props: JSX.IntrinsicAttributes | null
) => {
  ReactDOM.render(<App {...props} />, el);
};