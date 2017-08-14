import React, { Component } from "react"
import { default as Swiper } from "./swiper"
import { default as FineArticle } from "./fine_article"

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
