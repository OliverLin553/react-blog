import React, { Component } from "react"

import { default as IntroductionTitle } from "./introduction_title"
import { default as IntroductionContent } from "./introduction_content"
import style from "./style.css"

export class SelfIntroduction extends Component {
  render() {
    return (
      <div className={style["self-introduction-info"]}>
        <IntroductionTitle />
        <IntroductionContent />
      </div>
    )
  }
}

export default SelfIntroduction
