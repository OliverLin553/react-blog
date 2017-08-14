import React, { Component } from "react"
import style from "./style.css"

export class ArticleContent extends Component {
  render() {
    const { bucket } = this.props
    return (
      <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 animate-box fadeInUp animated">
        <div className={style["kratos-post"]}>
          <div className={style["kratos-post-image"]}>
            <img
              role="presentation"
              src={bucket.src}
              className={style["img-responsive"]} />
          </div>
          <div className={style["kratos-post-text"]}>
            <a role="button">
              <h3>{bucket.title}</h3>
            </a>
            <p>{bucket.content}</p>
          </div>
          <div className={`text-center ${style["kratos-post-meta"]}`}>
            <a role="button">
              <i className="fa fa-calendar" />
              {bucket.date}
            </a>
            <a role="button">
              <i className="fa fa-commenting-o" />
              {bucket.comment} Comment
            </a>
            <a role="button">
              <i className="fa fa-eye" />
              {bucket.views} Views
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleContent
