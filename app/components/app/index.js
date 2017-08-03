import React, { Component } from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"
import { default as LeftMenu } from "../left_menu"
import { default as HomeList } from "../home_list"
import { default as BlogList } from "../blog_list"
import { default as ContactList } from "../contact_list"
import style from "./style.css"

export const switchSubComponent = (filterName) => {
  switch (filterName) {
    case "home":
      return <HomeList />
    case "blog":
      return <BlogList />
    case "contact":
      return <ContactList />
    default:
      return <HomeList />
  }
}

export class App extends Component {
  render() {
    const { filterName} = this.props
    const mainContent = switchSubComponent(filterName)

    return (
      <div className={style["container"]}>
        <LeftMenu />
        {mainContent}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filterName: state.filter
})

export default connect(mapStateToProps)(cssModules(App, style))