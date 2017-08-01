import React, { Component } from "react"
import { default as Text } from "../text"
import style from "./style.css"

export class App extends Component {
  render() {
    return (
      <div className={style["container"]}>
        <Text />
      </div>
    )
  }
}

export default App