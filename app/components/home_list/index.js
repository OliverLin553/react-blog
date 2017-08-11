import React, { Component } from "react"
import Swiper from "./swiper"
import FineArticle from "./fine_article"

export class HomeList extends Component {
  render() {
    return (
      <div>
        <Swiper />
        <FineArticle />
      </div>
    )
  }
}

export default HomeList