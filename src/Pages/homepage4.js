import React, { Component } from "react";

class Homepage4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => res.json())

      .then((res) =>
        res.map((data) => ({
          id: `${data.id}`,
          title: `${data.title}`,
          image: `${data.image}`,
        }))
      )
      .then((items) =>
        this.setState({
          items,
          // isLoaded: false
        })
      )
      .catch((error) => console.log("ini apa", error));
  }

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="cardleft">
        {items.length > 0
          ? items.map((item) => {
              const { id, title, image } = item;
              return (
                <div key={id} className="card-img">
                  <img src={image} className="gambar-card1" alt="" />
                  <p>
                    {title}
                    <i className="fas fa-arrow-circle-right fa-2x"></i>
                  </p>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Homepage4;
