import { useState } from "react";



function FnCounter() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count > 0 ? count - 1 : count);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center py-5">
              <h2 className="card-title mb-4">Functional Counter</h2>
              <h1 className="display-2 text-primary mb-4">{count}</h1>
              <div className="btn-group mb-3" role="group" aria-label="Counter buttons">
                <button className="btn btn-success btn-lg px-4" onClick={inc}>+</button>
                <button className="btn btn-danger btn-lg px-4" onClick={dec} disabled={count === 0}>-</button>
              </div>
              <div>
                <button className="btn btn-outline-secondary btn-sm mt-2 px-4" onClick={reset} disabled={count === 0}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FnCounter;