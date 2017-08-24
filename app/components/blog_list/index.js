import React, { Component } from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"

import { default as BlogPost } from "./blog_post"
import { default as Footer } from "../footer"
import style from "./style.css"

export class BlogList extends Component {
  render() {
    const { articleContent } = this.props
    const lists = articleContent.map(bucket => (
      <BlogPost bucket={bucket} key={`bucket_todo_${bucket.id}`} />
    ))

    return (
      <div>
        <div className={style["blog-list-info"]}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                {lists}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articleContent: state.articleContent
})

export default connect(mapStateToProps, null)(cssModules(BlogList, style))
