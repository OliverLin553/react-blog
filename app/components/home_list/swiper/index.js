import React, { Component } from "react"
import style from "./style.css"

export class Swiper extends Component {
  render() {
    return (
        <div id="myCarousel" className={`carousel slide ${style["carousel"]}`}>
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active" />
            <li data-target="#myCarousel" data-slide-to="1" className="" />
          </ol>
          <div className="carousel-inner">
            <div className={`item active ${style["item"]}`}>
              <img src="http://getbootstrap.com/2.3.2/assets/img/examples/slide-03.jpg" alt="" />
                <div className={`container ${style["container"]}`}>
                  <div className={`carousel-caption ${style["carousel-caption"]}`}>
                    <h1>Example headline.</h1>
                    <p className={`lead ${style["lead"]}`}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <a className={`btn btn-large btn-primary ${style["btn"]}`} href="#">Sign up today</a>
                  </div>
                </div>
            </div>
            <div className={`item ${style["item"]}`}>
              <img src="http://getbootstrap.com/2.3.2/assets/img/examples/slide-02.jpg" alt="" />
                <div className={`container ${style["container"]}`}>
                  <div className={`carousel-caption ${style["carousel-caption"]}`}>
                    <h1>Another example headline.</h1>
                    <p className={`lead ${style["lead"]}`}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <a className={`btn btn-large btn-primary ${style["btn"]}`} href="#">Learn more</a>
                  </div>
                </div>
            </div>
          </div>
          <a className={`left carousel-control ${style["carousel-control"]}`} href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          </a>
          <a className={`right carousel-control ${style["carousel-control"]}`} href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          </a>
        </div>
    )
  }
}

export default Swiper