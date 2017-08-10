/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { LeftMenu, getFilterListItemClass } from './';

describe("<LeftMenu />", () => {
  let wrapper, container, props

  beforeEach(() => {
    props = {
      filterName: "home"
    }

    wrapper = shallow(
      <LeftMenu {...props} />
    )
  })

  describe("should render", () => {
    it("a li list", () => {
      container = wrapper.find("li")

      expect(container.length).to.equal(3)
      expect(container.at(0).text()).to.equal("Home")
      expect(container.at(1).text()).to.equal("Blog")
      expect(container.at(2).text()).to.equal("Contact")
    })
  })

  describe("functions", () => {
    describe("#getFilterListItemClass", () => {
      it("return class name", () => {
        let result

        result = getFilterListItemClass("home", "home")
        expect(result).to.eq("filter-list-item active")

        result = getFilterListItemClass("home", "blog")
        expect(result).to.eq("filter-list-item ")
      })
    })
  })
})