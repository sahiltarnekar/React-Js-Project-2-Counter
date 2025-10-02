import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count > 0 ? prevState.count - 1 : 0 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="bg-light min-vh-100 d-flex flex-column">
        <main className="flex-fill">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-lg border-0 rounded-4">
                  <div className="card-body text-center py-5">
                    <h2 className="card-title mb-4">Class Counter</h2>
                    <h1 className="display-2 text-primary mb-4">{this.state.count}</h1>
                    <div className="btn-group mb-3" role="group" aria-label="Counter buttons">
                      <button className="btn btn-success btn-lg px-4" onClick={this.increment}>+</button>
                      <button className="btn btn-danger btn-lg px-4" onClick={this.decrement} disabled={this.state.count === 0}>-</button>
                    </div>
                    <div>
                      <button className="btn btn-outline-secondary btn-sm mt-2 px-4" onClick={this.reset} disabled={this.state.count === 0}>Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ClassCounter;
