/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { Footer } from "./"

describe("<Footer />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <Footer />
    )
  })

  describe("render", () => {
    it("a <a /> href", () => {
      container = wrapper.find(".kratos-social-icons a")

      expect(container.props().href).to.equal("https://github.com/linjianghuang")
    })

    it("footer text", () => {
      container = wrapper.find(".footer-text")

      expect(container.text()).to.equal("Copyright 2016 林江煌个人博客. All Rights Reserved.")
    })
  })
})
