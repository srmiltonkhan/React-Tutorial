import React from "react";

import ReactDOM from "react-dom";

const Increment = () => {
  const [counter, setCoun] = React.useState(0);

  return (
    <>
      <h3>{counter}</h3>
      <div>
        <button onClick={() => setCoun(counter + 1)}>Incrment + </button>
      </div>
    </>
  );
};

ReactDOM.render(
<div>
<Increment /> 
<Increment /> 
<Increment />
</div>,document.getElementById("root"));
