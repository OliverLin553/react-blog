import React, { Component } from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"

import style from "./style.css"

export class RecentArticles extends Component {
  renderArticleTitle() {
    const { articleContent } = this.props

    const starComponents = articleContent.slice(0, 6).map((item) => {
      return (
        <li key={`article_${item.id}`}>
          <i className="fa fa-pencil" aria-hidden="true" />
          <a href={item.href}>
            {item.title}
          </a>
        </li>
      )
    })


    return (
      <div>
        {starComponents}
      </div>
    )
  }

  render() {
    return (
      <aside className={`widget clearfix animate-box fadeInUp animated ${style["widget-recent-entries"]}`}>
        <h4 className="widget-title">
          近期文章
        </h4>
        <ul>
          {this.renderArticleTitle()}
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = state => ({
  articleContent: state.articleContent
})

export default connect(mapStateToProps, null)(cssModules(RecentArticles, style))
