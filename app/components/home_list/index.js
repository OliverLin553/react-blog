import React, { Component } from "react"
import { default as Swiper } from "./swiper"
import { default as FineArticle } from "./fine_article"
import { default as SelfIntroduction } from "./self_introduction"
import { default as Footer } from "../footer"
import style from "./style.css"

export class HomeList extends Component {
  render() {
    return (
      <div>
        <Swiper />
        <div className={style["home-list-info"]}>
          <FineArticle />
          <SelfIntroduction />
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomeList
