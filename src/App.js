import "./App.css";

function App() {
  let count = 0;

  let renderBoxes = () => {
    return (
      <>
        <section className="section">
          <div onClick={(box) => console.log(box)} className="rows 1" id="box1">
            {count}
          </div>
          <div className="rows 2">{count}</div>
          <div className="rows 3">{count}</div>
        </section>
        <section className="section">
          <div className="rows 1">{count}</div>
          <div className="rows 2">{count}</div>
          <div className="rows 3">{count}</div>
        </section>
        <section className="section">
          <div className="rows 1">{count}</div>
          <div className="rows 2">{count}</div>
          <div className="rows 3">{count}</div>
        </section>
      </>
    );
  };
  return (
    <div className="App">
      <header className="App-header">{renderBoxes()}</header>
    </div>
  );
}

export default App;
