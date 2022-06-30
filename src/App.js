import "./App.css";
import Data from "./questions.json";

function App() {
  return (
    <div className="App">
      <h1 className="title">Nutanix NSCE-Core Dump Questions</h1>
      {Data.map((question, i) => (
        <div key={i}>
          <div className="question">
            <h3 style={{marginRight: "15px"}}>{i + 1}. </h3>
            <h3>{question.text}</h3>
          </div>
          {question.options.map((option, i) => (
            <div className="option" key={i}>
              <p>{option}</p>
            </div>
          ))}
          <h5 className="answer">{question.answers}</h5>
        </div>
      ))}
    </div>
  );
}

export default App;
