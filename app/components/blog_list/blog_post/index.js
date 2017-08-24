import React, { Component } from "react"

import style from "./style.css"

export class BlogPost extends Component {
  render() {
    const { bucket } = this.props

    return (
      <article className={`clearfix animate-box fadeInUp animated ${style["kratos-hentry"]}`}>
        <div className={style["kratos-post-inner"]}>
          <header className={`clearfix ${style["kratos-entry-header"]}`}>
            <h1 className={style["kratos-entry-title"]}>
              <a href="http://blog.styxzp.com/2017/08/21/%e9%85%8d%e7%bd%ae%e8%a7%84%e8%8c%83-eslintrc-js/">
                {bucket.title}
              </a>
            </h1>
            <div className={style["kratos-post-meta"]}>
              <span className="pull-left">
                <a role="button">
                  <i className="fa fa-calendar" />
                  &nbsp;{bucket.date}
                </a>
              </span>
              <span className="visible-lg visible-md visible-sm pull-left">
                <a href="http://blog.styxzp.com/category/react/">
                  <i className="fa fa-folder-open-o" />
                  &nbsp;{bucket.classification}
                </a>
                <a href="http://blog.styxzp.com/2017/08/21/%e9%85%8d%e7%bd%ae%e8%a7%84%e8%8c%83-eslintrc-js/#respond">
                  <i className="fa fa-commenting-o" />
                  &nbsp;{bucket.comment} Comment
                </a>
              </span>
              <span className="pull-left">
                <a href="http://blog.styxzp.com/2017/08/21/%e9%85%8d%e7%bd%ae%e8%a7%84%e8%8c%83-eslintrc-js/">
                  <i className="fa fa-eye" />
                  &nbsp;{bucket.views} Views
                </a>
              </span>
            </div>
          </header>
          <div className="kratos-entry-content clearfix">
            <p>
              {bucket.content}
            </p>
          </div>
        </div>
      </article>
    )
  }
}

export default BlogPost
