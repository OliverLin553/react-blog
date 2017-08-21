import React, { Component } from "react"
import style from "./style.css"

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={style["footer-content"]}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                <p className={style["kratos-social-icons"]}>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/linjianghuang">
                    <i className="fa fa-github" />
                  </a>
                </p>
                <p className={style["footer-text"]}>
                  Copyright&nbsp;2016&nbsp;
                  <a href="http://blog.styxzp.com" rel="noopener noreferrer">林江煌个人博客</a>
                  . All Rights Reserved.<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
