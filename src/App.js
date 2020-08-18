import React, { Component } from "react";
import birthdayMessages from "./data/birthdayMessages";
import MessageContainer from "./components/MessageContainer";
import confetti from "canvas-confetti";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      name: "",
      email: "",
      messageCount: []
    };

    this.getNextMessage = this.getNextMessage.bind(this);
  }

  componentDidMount() {
    this.setState({
      message: birthdayMessages[0].message,
      name: birthdayMessages[0].name,
      email: birthdayMessages[0].email,
      messageCount: 0
    });
  }

  getNextMessage = () => {
    this.showNextMessage();
    confetti();
  };

  showNextMessage() {
    const counter = this.state.messageCount + 1;

    this.setState({
      messageCount: counter,
      message: birthdayMessages[counter].message,
      name: birthdayMessages[counter].name,
      email: birthdayMessages[counter].email
    });
  }

  render() {
    return (
      <div className="App">
        <div as="header">
          <h1>Happy 90th Birthday!</h1>
        </div>
        <MessageContainer
          messageCount={this.state.messageCount}
          message={this.state.message}
          name={this.state.name}
          email={this.state.email}
          messageTotal={birthdayMessages.length}
          lastMessage={
            this.state.messageCount + 1 === birthdayMessages.length
              ? true
              : false
          }
          onNextClick={this.getNextMessage}
        />
      </div>
    );
  }
}

export default App;
