import React, { Component } from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"
import { default as ArticleTitle } from "./article_title"
import { default as ArticleContent } from "./article_content"
import style from "./style.css"

export class FineArticle extends Component {
  render() {
    const { articleContent } = this.props
    const lists = articleContent.slice(0, 6).map(bucket => (
      <ArticleContent bucket={bucket} key={`bucket_todo_${bucket.id}`} />
    ))

    return (
      <div className={style["fine-articele"]}>
        <ArticleTitle />
        <div className="container">
          <div className="row">
            {lists}
          </div>
          <div className="row">
            <div className={`col-md-4 col-md-offset-4 text-center animate-box fadeInUp animated ${style["article-btn"]}`}>
              <a href="http://blog.styxzp.com/blog/" className="btn btn-primary">查看更多</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articleContent: state.articleContent
})

export default connect(mapStateToProps, null)(cssModules(FineArticle, style))
