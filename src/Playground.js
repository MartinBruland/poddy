import React, {useState} from 'react';


function Playground() {

  return (
    <App1 username="Martin" />
  )
}




// ES6 ARROW FUNCTION - SIMPLE COMPONENT
const WelcomeMessage = (props) => {
  return <h1>Hello {props.username ?? "Default User"}</h1>
}






// JS FUNCTION - SIMPLE COMPONENT
function App1(props) {

  const [counter, updateCounter] = useState(0);

  const increaseMethod = () => {
    updateCounter(counter + 1);
  }

  const decreaseMethod = () => {
    updateCounter(counter - 1);
  }


  return (
    <div>
    
      <WelcomeMessage username={props.username} />

      <p>Counter: {counter}</p>
      <button onClick={increaseMethod}>Increase</button>
      <button onClick={decreaseMethod}>Decrease</button>
    </div>
  )
}



// JS CLASS COMPONENT
class App2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseMethod = this.increaseMethod.bind(this);
    this.decreaseMethod = this.decreaseMethod.bind(this);
  };

  increaseMethod() {
    this.setState({counter: this.state.counter + 1});
  }

  decreaseMethod() {
    this.setState({counter: this.state.counter - 1});
  }

  render() { 
    return (
      <div>
        <WelcomeMessage username={this.props.username} />

        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseMethod}>Increase</button>
        <button onClick={this.decreaseMethod}>Decrease</button>
      </div>
    )
    
  }
}


export default Playground;