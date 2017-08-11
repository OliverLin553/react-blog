import React, { Component } from "react"
import style from "./style.css"

export class ArticleTitle extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={`col-md-8 col-md-offset-2 text-center animate-box fadeInUp animated ${style["heading-section"]}`}>
            <h3>精品文章</h3>
            <p>我很喜欢创作，记录生活中点点滴滴的回忆，记录工作中前进路途的挫折，还会记录那些来自于世间万物的灵感</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleTitle