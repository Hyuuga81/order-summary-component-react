import React, {Component} from "react";
import icon from "./images/icon-music.svg";
import "./App.css";

class App extends Component {
    render() {
      return (
        <main>
            <section className="top">
                <p className="hide">.</p>
            </section>
            <section className="bottom">
                <div className="container">
                    <h1>Order Summary</h1>
                    <p className="catch-copy">You can now listen to millions of songs, audiobooks, and podcasts on  any device anywhere you like!</p>
                    <div className="case">
                        <img src={icon} alt="icon" />   
                        <div className="plan">       
                            <h2>Annual Plan</h2>
                            <p>$59.99/year</p>
                        </div>
                        <a href="#test">Change</a>
                    </div>

                    <button>Proceed to Payment</button>
                    <h3>Cancel Order</h3>
                </div>
                
            </section>
        </main>
      );
    }
  }

  export default App;
