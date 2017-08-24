/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { HomeList } from "./"

describe("<HomeList />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <HomeList />
    )
  })

  describe("should render", () => {
    it("a <Swiper /> component", () => {
      container = wrapper.find("Swiper")

      expect(container.length).to.equal(1)
    })

    it("a <FineArticle /> component", () => {
      container = wrapper.find("Connect(FineArticle)")

      expect(container.length).to.equal(1)
    })

    it("a <SelfIntroduction /> component", () => {
      container = wrapper.find("SelfIntroduction")

      expect(container.length).to.equal(1)
    })

    it("a <Footer /> component", () => {
      container = wrapper.find("Footer")

      expect(container.length).to.equal(1)
    })
  })
})
