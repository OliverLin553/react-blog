import React, { Component } from "react"
import style from "./style.css"

export class MyselfInfo extends Component {
  render() {
    return (
      <aside className={`clearfix animate-box fadeInUp animated ${style["widget-recent-entries"]}`}>
        <div className={style["photo-wrapper"]}>
          <img className="about-photo" src="http://blog.styxzp.com/wp-content/uploads/2016/08/photo.jpg" role="presentation" />
        </div>
        <h4 className={style["widget-title"]}>关于</h4>
        <div>
          <p>
            林江煌
          </p>
          <p>
            Web Front End Enginee
          </p>
          <p>
            Web前端开发工程师(HTML/CSS/JS)
          </p>
        </div>
      </aside>
    )
  }
}

export default MyselfInfo
