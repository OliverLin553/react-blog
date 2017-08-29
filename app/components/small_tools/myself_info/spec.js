/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { MyselfInfo } from "./"

describe("<MyselfInfo />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <MyselfInfo />
    )
  })

  describe("rende r", () => {
    it("a <img /> src", () => {
      container = wrapper.find(".photo-wrapper img")

      expect(container.props().src).to.equal("http://blog.styxzp.com/wp-content/uploads/2016/08/photo.jpg")
    })

    it("a <h4 /> text", () => {
      container = wrapper.find("h4")

      expect(container.text()).to.equal("关于")
    })

    it("a <p /> text", () => {
      container = wrapper.find("p")

      expect(container.at(0).text()).to.equal("林江煌")
      expect(container.at(1).text()).to.equal("Web Front End Enginee")
      expect(container.at(2).text()).to.equal("Web前端开发工程师(HTML/CSS/JS)")
    })
  })
})
