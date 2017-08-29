import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import cssModules from "react-css-modules"

import Actions from "../../../actions"
import style from "./style.css"

export class SearchBar extends Component {
  handleInputChange(event) {
    const keyword = event.target.value
    this.props.actions.search.set(keyword)
  }

  render() {
    return (
      <div className={`animate-box fadeInUp animated ${style["widget-recent-entries"]}`}>
        <input placeholder="Search..." className="form-control" onChange={(event) => { this.handleInputChange(event) }} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(Actions.search, dispatch)
  }
})

const mapStateToProps = state => ({
  searchKeyword: state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(SearchBar, style))
