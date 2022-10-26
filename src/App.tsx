import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";


const App = () => (
  <div>
    <button>ali</button>
  </div>
);


const AppMounter = () => <App />

ReactDOM.render(<AppMounter />, document.getElementById("app"));

export default App