import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
      super()
      this.state = {
        title: "redux"
      }
  }
  render() {
      console.log(this.props);
      const store = this.props.store
      const num = store.getState()
      const addChicken = this.props.add
      const subChicken = this.props.sub
      const addDelay = this.props.delay
      return (
      <div className="App">
          {this.state.title}
          {`现在有${num}个鸡腿`}
          <br/><br/><br/>
          <input
              type="button"
              defaultValue="加鸡腿"
              onClick={() => {
                return store.dispatch(addChicken())
              }}
          />
          <input
              type="button"
              defaultValue="减鸡腿"
              onClick={() => {
                  return store.dispatch(subChicken())
              }}
          />
          <input
              type="button"
              defaultValue="异步加鸡腿"
              onClick={() => {
                  return store.dispatch(addDelay())
              }}
          />
      </div>
    );
  }
}

export default App;
