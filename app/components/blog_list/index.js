import React, { Component } from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"

import { default as BackgroundBanner } from "./background_banner"
import { default as BlogPost } from "./blog_post"
import { default as RecentArticles } from "../small_tools/recent_articles"
import { default as SearchBar } from "../small_tools/search_bar"
import { default as MyselfInfo } from "../small_tools/myself_info"
import { default as Footer } from "../footer"
import * as articleHelper from "../../helpers/article_content"
import style from "./style.css"

export class BlogList extends Component {
  static showArticle(results) {
    return results.map((bucket) => {
      return <BlogPost key={bucket.id} bucket={bucket} />
    })
  }

  static showSectionResults(list) {
    const generateArticle = BlogList.showArticle(list)

    return (
      <div>
        {generateArticle}
      </div>
    )
  }

  refineResults() {
    const { searchKeyword, articleContent } = this.props

    const results = articleHelper.refineSearchResults(articleContent, searchKeyword)

    if (results.onList.length === 0) {
      return this.renderNoResultsMsg()
    }

    return (
      <div>
        {BlogList.showSectionResults(results.onList)}
      </div>
    )
  }

  renderNoResultsMsg() {
    const msg = `We didn’t find any article that match your search for "${this.props.searchKeyword}".`

    return (
      <div className={`animate-box fadeInUp animated ${style["search-msg-no-results"]} ${style["widget-recent-entries"]}`}>
        <div className={style["uh-oh"]}>We’re sorry,</div>
        <div className={style["no-results-msg"]}>{msg}</div>
        <div>{"Try searching again with a related term—we might have just what you’re looking for."}</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <BackgroundBanner />
        <div className={style["blog-list-info"]}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                {this.refineResults()}
              </div>
              <div className="col-md-4 hidden-xs hidden-sm">
                <MyselfInfo />
                <SearchBar />
                <RecentArticles />
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
  articleContent: state.articleContent,
  searchKeyword: state.search
})

export default connect(mapStateToProps, null)(cssModules(BlogList, style))
