class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try {
      const storedCountsString = localStorage.getItem('count');
      const counts = parseInt(storedCountsString, 10);
      if (!Number.isNaN(counts)) {
        this.setState(() => ({ count: counts }));
      }
    } catch (err) {
      // Do Nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  
  handleAddOne() {
    this.setState({count: this.state.count + 1});
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState({count: 0});
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const setup = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className="button">
//         +1
//       </button>
//       <button onClick={minusOne} className="button">
//         -1
//       </button>
//       <button onClick={setup} className="button">
//         Reset
//       </button>
//     </div>
//   );

//   ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();
