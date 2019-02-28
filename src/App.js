import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Autocomp from "./components/Autocomp";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Cogoport frontend task</h3>
        <Autocomp
          suggestions={[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
          ]}
        />
      </div>
    );
  }
}

export default App;
