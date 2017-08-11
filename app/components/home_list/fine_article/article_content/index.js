import React, { Component } from "react"
import style from "./style.css"

export class ArticleContent extends Component {
  render() {
    const { bucket } = this.props
    return (
      <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 animate-box fadeInUp animated">
        <div className={style["kratos-post"]}>
          <div className={style["kratos-post-image"]}>
            <img src={bucket.src}
                 className={style["img-responsive"]}/>
          </div>
          <div className={style["kratos-post-text"]}>
            <a href="#">
              <h3>{bucket.title}</h3>
            </a>
            <p>cnpm — 淘宝镜像NPM express – http framework koa R…</p>
          </div>
          <div className={`text-center ${style["kratos-post-meta"]}`}>
            <a href="#">{bucket.date}</a>
            <a href="#">{bucket.comment}Comment</a>
            <a href="#">{bucket.views}Views</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleContent