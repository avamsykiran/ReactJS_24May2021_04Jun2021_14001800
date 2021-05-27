import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "My New React Application",
      visitCount: 1
    };
  }

 // incCount = e =>  this.setState({visitCount:this.state.visitCount+1})
 // decCount = e => this.setState({visitCount:this.state.visitCount-1})

  render() {
    return (
      <div>
        <header>
          <h2>{this.state.title}</h2>
        </header>
        <main>
          <p><strong>This is your visit number {this.state.visitCount}</strong></p>
          <button onClick={ e =>  this.setState({visitCount:this.state.visitCount+1}) }>Increase Visit Count</button>
          <button onClick={ e => this.setState({visitCount:this.state.visitCount-1}) }>Decrease Visit Count</button>
        </main>
      </div>
    )
  }

}

export default App;