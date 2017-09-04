import React, { Component } from "react"

import { default as BackgroundBanner } from "../blog_list/background_banner"
import { default as ContactListInfo } from "./contact_list_info"
import { default as RecentArticles } from "../small_tools/recent_articles"
import { default as MyselfInfo } from "../small_tools/myself_info"
import { default as Footer } from "../footer"
import style from "./style.css"

export class ContactList extends Component {
  render() {
    return (
      <div>
        <BackgroundBanner />
        <div className={style["contact-list-info"]}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ContactListInfo />
              </div>
              <div className="col-md-4 hidden-xs hidden-sm">
                <MyselfInfo />
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

export default ContactList
