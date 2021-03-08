import React, { Component } from "react";

class Homepage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => res.json())
      .then((res) =>
        res.map((data) => ({
          id: `${data.id}`,
          testimony: `${data.testimony}`,
          by: `${data.by}`,
        }))
      )
      .then((items) =>
        this.setState({
          items,
        })
      )
      .catch((error) => console.log("failed", error));
  }

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="cardparent">
        {items.length > 0
          ? items.map((item) => {
              const { id, testimony, by } = item;
              return (
                <div key={id} className="testimonial-card">
                  <div className="blukicks-card">
                    <h3>{by}</h3>
                    <p>{testimony}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Homepage3;
