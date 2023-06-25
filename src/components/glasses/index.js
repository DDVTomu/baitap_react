import React, { Component } from "react";
import data from "./dataGlasses.json";
export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: "",
    };
  }
  handlChangeUrlImg = (urlImg) => {
    this.setState({
      urlImg,
    });
  };

  renderGlasses = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <h1>You look fabulous darling!</h1>
        <section className="my-5">
          <div className="row">
            <div className="col-md-6 model-view">
              <img
                className="img-fluid main-model"
                src="./images/glassesImage/model.jpg"
                alt=""
              />
              <img
                className="img-fluid glasses"
                src={this.state.urlImg}
                alt=""
              />
            </div>
            <div className="col-md-6">
              {data.map((glasses, key) => (
                <button
                  key={`${key}`}
                  className="btn col-6"
                  onClick={() => this.handlChangeUrlImg(`${glasses.url}`)}
                >
                  <img
                    className="img-fluid glasses-img"
                    src={glasses.url}
                    alt=""
                  />
                  <br />
                  {glasses.name}
                </button>
              ))}

              <button
                className="btn col-6"
                onClick={() => this.handlChangeUrlImg(``)}
              >
                <img className="img-fluid" src="" alt="" />
                Empty
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
