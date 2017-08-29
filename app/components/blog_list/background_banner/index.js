import React, { Component } from "react"
import style from "./style.css"

export class BackgroundBanner extends Component {
  componentDidMount() {
    const random_bg = Math.floor(Math.random() * 6 + 1)
    const bg = `url(http://blog.styxzp.com/wp-content/themes/Kratos/images/bg-${random_bg}.jpg)`
    document.getElementById("kratos-topimg").style.background = bg
  }

  render() {
    return (
      <div className={style["kratos-start"]}>
        <div className={style["kratos-overlay"]} />
        <div
          className={`kratos-topimg text-center ${style["kratos-cover"]}`}
          id="kratos-topimg"
          style={{ backgroundImage: "url(http://blog.styxzp.com/wp-content/themes/Kratos/images/bg-5.jpg)" }}>
          <div className={`animate-box fadeInUp animated ${style["desc-content"]}`}>
            <h2>赋予代码灵魂 , 追求极致性能</h2>
            <span>Hey guys, Here is Jiang Zone !</span>
          </div>
        </div>
      </div>
    )
  }
}

export default BackgroundBanner
