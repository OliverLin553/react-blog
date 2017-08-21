import React, { Component } from "react"
import { default as IntroductionTitle } from "./introduction_title"
import { default as IntroductionContent } from "./introduction_content"

export class SelfIntroduction extends Component {
  render() {
    return (
      <div>
        <IntroductionTitle />
        <IntroductionContent />
      </div>
    )
  }
}

export default SelfIntroduction
