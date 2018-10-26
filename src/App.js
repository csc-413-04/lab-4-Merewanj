import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      color: 'RED',
      banner: 'Login',
      banner2: 'Password',
      isOpen: false,

    };
    this.buttonHandler = this.buttonHandler.bind(this);

    this.textHandler = this.textHandler.bind(this);
  }

  textHandler(e){
    this.setState({
      banner: e.target.value,
    });
  }

  buttonHandler(){
    //console.log('my botton is working')
    this.setState({
      isOpen: !this.state.isOpen,
    });

  }
  render() {
    let myVariable = <h2>Merewan</h2>;
    let myBanner;
    if(this.state.isOpen){
      myBanner = <Header banner={this.state.banner}/>;

    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          {
            <Header banner={this.state.banner}/>
          }
          <input value={this.state.banner} onChange={this.textHandler}></input>
          <input value={this.state.banner2} onChange={this.textHandler}></input>
          
          <button onClick={this.buttonHnadler}>Login</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
