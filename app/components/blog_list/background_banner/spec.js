/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { BackgroundBanner } from "./"

describe("<BackgroundBanner />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <BackgroundBanner />
    )
  })

  describe("render", () => {
    it("a img style", () => {
      container = wrapper.find(".kratos-cover")

      expect(container.props().style.backgroundImage).to.equal("url(http://blog.styxzp.com/wp-content/themes/Kratos/images/bg-5.jpg)")
    })

    it("a <h2 /> text", () => {
      container = wrapper.find("h2")

      expect(container.text()).to.equal("赋予代码灵魂 , 追求极致性能")
    })

    it("a <span /> text", () => {
      container = wrapper.find("span")

      expect(container.text()).to.equal("Hey guys, Here is Jiang Zone !")
    })
  })
})
