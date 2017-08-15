import React, { Component } from "react"
import style from "./style.css"

export class IntroductionTitle extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={`col-md-8 col-md-offset-2 text-center animate-box fadeInUp animated ${style["heading-section"]}`}>
            <h3>设计创造</h3>
            <p>我很喜欢把创造性发挥到极限，更享受从无到有、渐渐完美的制作过程，我爱设计也爱编程，更相信它们会让生活更美好</p>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroductionTitle
