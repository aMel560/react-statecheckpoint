import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      person: {
        fullName: "Marcus Aurelius",
        bio: "Marcus Aurelius was born in 26 April 121 – 17 March 180) , He was Roman emperor from 161 to 180 and a Stoic philosopher. He was a member of the Nerva–Antonine dynasty, the last of the rulers later known as the Five Good Emperors and the last emperor of the Pax Romana, an age of relative peace, calm, and stability for the Roman Empire lasting from 27 BC to 180 AD. He served as Roman consul in 140, 145, and 161",
        imgSrc:
          "https://th.bing.com/th/id/OIP.33wWcH1RZGaOJ37VCsEpPgHaJk?w=202&h=262&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        profession: "Philosopher and roman emperor",
      },
      lastMounted: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ lastMounted: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleShowClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show, person, lastMounted } = this.state;
    return (
      <div className="app">
        <h1>Profile</h1>
        <button onClick={this.handleShowClick}>
          {show ? "Hide Person" : "Show Person"}
        </button>
        {show && (
          <div className="person">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Last mounted: {new Date(lastMounted).toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
