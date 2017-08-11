import React, { Component } from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"
import ArticleTitle from "./article_title"
import ArticleContent from "./article_content"
import style from "./style.css"

export class FineArticle extends Component {
  render() {
    const { articleContent } = this.props
    const lists = articleContent.map(bucket => (
      <ArticleContent bucket={bucket} key={`bucket_todo_${bucket.id}`} />
    ))

    return (
      <div className={style["fine-articele"]}>
        <ArticleTitle />
        <div className="container">
          <div className="row">
            {lists}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articleContent: state.articleContent,
})

export default connect(mapStateToProps, null)(cssModules(FineArticle, style))