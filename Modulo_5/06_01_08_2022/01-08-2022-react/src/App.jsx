import { useState, useReducer } from "react";
import "./App.css";

function App() {
  const adviceList = [
    { id: 0, text: "Lorem" },
    { id: 1, text: "ipsum" },
    { id: 2, text: "dolor" },
    { id: 3, text: "sit" },
    { id: 4, text: "amet" },
  ];
  const [counter, setCounter] = useState(0);

  const initialArg = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialArg);
  function reducer(state, action) {
    switch (action.type) {
      case "previous":
        return { count: state.count - 1 };
      case "next":
        return { count: state.count + 1 };
      default:
        throw new Error();
    }
  }

  return (
    <div className="App">
      <div className="App__use-state-main">
        <h3 className="App__title-use-state">useState</h3>
        <p className="App__id-use-state">{adviceList[counter].id}</p>
        <p className="App__advice-use-state">{adviceList[counter].text}</p>
        <button
          className="App__btn-use-state-prev"
          disabled={counter === 0}
          onClick={() => setCounter(counter - 1)}
        >
          Previous
        </button>
        <button
          className="App__btn-use-state-next"
          disabled={counter === 4}
          onClick={() => setCounter(counter + 1)}
        >
          Next
        </button>
      </div>

      <div className="App__use-reducer-main">
        <h3 className="App__title-use-reducer">useReducer</h3>
        <p className="App_id-use-reducer">{adviceList[state.count].id}</p>
        <p className="App__advice-use-reducer">
          {adviceList[state.count].text}
        </p>
        <button
          className="App__btn-use-reducer-prev"
          disabled={state.count === 0}
          onClick={() => dispatch({ type: "previous" })}
        >
          Previous
        </button>
        <button
          className="App__btn-use-reducer-next"
          disabled={state.count === 4}
          onClick={() => dispatch({ type: "next" })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
