import React, { useState } from "react";
import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)'
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)'
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)'
  }
]

const App = () => {
  let [nextBackground, selectNextBackground] = useState({ background: "" });

  return (
    <div id="master">
      <h5 className="heading">Test</h5>

      <div className="row" style={{ display: "flex", justifyContent: "center" }}>
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      <div className='row' style={{ display: "flex", gap: "20px", justifyContent: "center" }} id="children-wrapper">
        {["selection1", "selection2", "selection3"].map((key) => (
          <Selection
            key={key}
            nextBackground={nextBackground}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
