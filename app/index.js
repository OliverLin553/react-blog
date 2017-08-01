import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { default as App } from "./components/app"

ReactDOM.render(
  <App />,
  document.getElementById("root")
)