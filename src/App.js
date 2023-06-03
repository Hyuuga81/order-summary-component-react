import React, {Component} from "react";

class App extends Component {
    render() {
      return (
        <main>
            <section>
                <p>.</p>
            </section>
            <section>
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on  any device anywhere you like!</p>
                <div>
                    <div>
                        <h2>Annual Plan</h2>
                        <p>$59.99/year</p>
                    </div>
                    <a href="#">Change</a>
                </div>

                <button>Proceed to Payment</button>
                <h3>Cancel Order</h3>
            </section>
        </main>
      );
    }
  }

  export default App;
