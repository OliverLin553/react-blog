import React, { Component } from "react"

import { default as ContactListInfo } from "./contact_list_info"
import { default as Footer } from "../footer"
import style from "./style.css"

export class ContactList extends Component {
  render() {
    return (
      <div>
        <div className={style["contact-list-info"]}>
          <div className="container">
            <div className="row">
              <ContactListInfo />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactList
