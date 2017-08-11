import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import cssModules from "react-css-modules"
import style from "./style.css"
import Actions from "../../actions"

export const getFilterListItemClass = (filterName, selectName) => {
  const stateClass = filterName === selectName ? style.active : ""

  return (`${style["filter-list-item"]} ${stateClass}`)
}

export class LeftMenu extends Component {
  handleFilterClick(filterName) {
    const { filter } = this.props.actions
    filter.set(filterName)
  }

  render() {
    const { filterName } = this.props
    return (
      <div className={style["filter-menu"]}>
        <div className="container">
          <ul>
            <li className={getFilterListItemClass(filterName, "home")}
                onClick={() => this.handleFilterClick("home")}>
              <span>Home</span>
            </li>
            <li className={getFilterListItemClass(filterName, "blog")}
                onClick={() => this.handleFilterClick("blog")}>
              <span>Blog</span>
            </li>
            <li className={getFilterListItemClass(filterName, "contact")}
                onClick={() => this.handleFilterClick("contact")}>
              <span>Contact</span>
            </li>
            <div className={style["filter-marker"]} />
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filterName: state.filter
})

const mapDispatchToProps = dispatch => ({
  actions: {
    filter: bindActionCreators(Actions.filter, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(LeftMenu, style))