/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { IntroductionTitle } from './';

describe("<IntroductionTitle />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <IntroductionTitle />
    )
  })

  describe("should render", () => {
    it("a h3 text", () => {
      container = wrapper.find("h3")

      expect(container.text()).to.equal("设计创造")
    })

    it("a p text", () => {
      container = wrapper.find("p")

      expect(container.text()).to.equal("我很喜欢把创造性发挥到极限，更享受从无到有、渐渐完美的制作过程，我爱设计也爱编程，更相信它们会让生活更美好")
    })
  })
})