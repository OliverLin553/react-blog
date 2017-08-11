import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import cssModules from "react-css-modules"
import { default as LeftMenu } from "../left_menu"
import { default as HomeList } from "../home_list"
import { default as BlogList } from "../blog_list"
import { default as ContactList } from "../contact_list"
import Actions from "../../actions"
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
  componentDidMount() {
    const { actions } = this.props
    actions.articleContent.fetch()
  }

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
  filterName: state.filter,
  articleContent: state.articleContent
})

const mapDispatchToProps = dispatch => ({
  actions: {
    articleContent: bindActionCreators(Actions.articleContent, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(App, style))