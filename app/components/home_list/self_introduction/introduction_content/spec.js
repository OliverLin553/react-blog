/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { IntroductionContent } from './';

describe("<IntroductionContent />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <IntroductionContent />
    )
  })

  describe("should render", () => {
    it("an img src", () => {
      container = wrapper.find(".kratos-feature-image img")

      expect(container.props().src).to.equal("http://blog.styxzp.com/wp-content/themes/Kratos/images/macbook.png")
    })

    it("a title text", () => {
      container = wrapper.find(".kratos-lead")

      expect(container.text()).to.equal("Minimalist Theme")
    })

    it("a introduction name", () => {
      container = wrapper.find(".kratos-text h3")

      expect(container.text()).to.equal("Jiang")
    })

    it("a introduction features", () => {
      container = wrapper.find(".kratos-text p")

      expect(container.text()).to.equal("前端工程师")
    })

    it("a <a /> info", () => {
      container = wrapper.find(".kratos-btn-action a")

      expect(container.props().href).to.equal("http://blog.styxzp.com/jiang/")
      expect(container.text()).to.equal("更多项目")
    })
  })
})